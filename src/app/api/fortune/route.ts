import { NextRequest } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// 检查 API Key 是否配置
if (!process.env.SILICONFLOW_API_KEY) {
  console.error("SILICONFLOW_API_KEY 环境变量未设置");
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { gender, birthDate, birthTime, birthPlace } = body;

    if (!gender || !birthDate || !birthTime || !birthPlace) {
      return new Response(
        JSON.stringify({ error: "缺少必要参数" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    // 构建命理分析的提示词
    const prompt = `你是一位资深的命理大师，精通八字、五行、紫微斗数等传统命理学说。请根据以下信息，为用户生成一份详细、专业的命理报告。

用户信息：
- 性别：${gender === "male" ? "男" : "女"}
- 出生日期：${birthDate}
- 出生时间：${birthTime}
- 出生地点：${birthPlace}

请生成一份完整的命理报告，包含以下内容（请用中文回答）：

1. **基本信息**：简要总结用户的生辰信息

2. **五行分析**：
   - 分析用户的五行属性（金、木、水、火、土）
   - 说明五行平衡情况
   - 给出五行调和建议

3. **运势预测**（分别分析以下四个方面）：
   - **事业运**：分析事业发展趋势、适合的行业方向、注意事项
   - **财运**：分析财运状况、投资建议、理财方向
   - **感情运**：分析感情状况、桃花运、感情建议
   - **健康运**：分析健康状况、需要注意的方面、养生建议

4. **吉祥建议**：
   - 幸运颜色
   - 幸运数字
   - 幸运方位
   - 吉祥物推荐
   - 建议佩戴的饰品

请用专业但易懂的语言，以温暖、积极的态度呈现报告。格式要清晰，使用适当的emoji装饰（🌟、☯️、🔮、✨等）。`;

    if (!process.env.SILICONFLOW_API_KEY) {
      throw new Error("SILICONFLOW_API_KEY 环境变量未设置，请在 Vercel 项目设置中添加环境变量");
    }

    const apiKey = process.env.SILICONFLOW_API_KEY;
    console.log("API Key 前10个字符:", apiKey.substring(0, 10));
    console.log("开始调用 SiliconFlow API...");
    console.log("模型: Qwen/QwQ-32B");
    
    // 调用 SiliconFlow API
    const apiResponse = await fetch("https://api.siliconflow.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "Qwen/QwQ-32B",
        messages: [
          {
            role: "user",
            content: prompt,
          },
        ],
        stream: true,
      }),
    });

    if (!apiResponse.ok) {
      const errorText = await apiResponse.text();
      console.error("SiliconFlow API 调用失败:", apiResponse.status, errorText);
      throw new Error(`SiliconFlow API 调用失败: ${apiResponse.status} ${apiResponse.statusText}`);
    }

    if (!apiResponse.body) {
      throw new Error("API 响应没有 body");
    }

    const stream = apiResponse.body;
    console.log("SiliconFlow API 调用成功，获得流对象");

    // 创建可读流，将 SiliconFlow 的流式响应转换为 SSE 格式
    const encoder = new TextEncoder();
    const decoder = new TextDecoder();
    const readable = new ReadableStream({
      async start(controller) {
        try {
          console.log("开始读取流数据...");
          const reader = stream.getReader();
          let chunkCount = 0;
          
          while (true) {
            const { done, value } = await reader.read();
            if (done) break;
            
            chunkCount++;
            const chunkText = decoder.decode(value, { stream: true });
            const lines = chunkText.split("\n");
            
            for (const line of lines) {
              if (line.startsWith("data: ")) {
                const data = line.slice(6).trim();
                if (data === "[DONE]") {
                  controller.enqueue(encoder.encode(`data: [DONE]\n\n`));
                  controller.close();
                  console.log(`流读取完成，共处理 ${chunkCount} 个 chunks`);
                  return;
                }
                
                try {
                  const parsed = JSON.parse(data);
                  const content = parsed?.choices?.[0]?.delta?.content;
                  
                  if (content) {
                    controller.enqueue(encoder.encode(`data: ${JSON.stringify({ content })}\n\n`));
                  }
                  
                  // 检查是否有错误
                  if (parsed?.error) {
                    console.error("Stream chunk error:", parsed.error);
                    throw new Error(parsed.error.message || "流式响应中出现错误");
                  }
                } catch (parseError) {
                  // 忽略解析错误，继续处理下一行
                  if (chunkCount === 1) {
                    console.log("第一个 chunk 内容:", data.substring(0, 200));
                  }
                }
              }
            }
          }
          
          controller.enqueue(encoder.encode(`data: [DONE]\n\n`));
          controller.close();
          console.log(`流读取完成，共处理 ${chunkCount} 个 chunks`);
        } catch (error: unknown) {
          console.error("Stream error:", error);
          const errorMsg = error instanceof Error ? error.message : String(error);
          controller.enqueue(encoder.encode(`data: ${JSON.stringify({ error: errorMsg })}\n\n`));
          controller.close();
        }
      },
    });

    return new Response(readable, {
      headers: {
        "Content-Type": "text/event-stream",
        "Cache-Control": "no-cache",
        Connection: "keep-alive",
      },
    });
  } catch (error: unknown) {
    console.error("API error:", error);
    const errorMessage = error instanceof Error ? error.message : (typeof error === "string" ? error : "未知错误");
    console.error("详细错误信息:", errorMessage);
    return new Response(
      JSON.stringify({ 
        error: "生成命理报告时出错，请稍后重试",
        details: process.env.NODE_ENV === "development" ? errorMessage : undefined
      }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}

