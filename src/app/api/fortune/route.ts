import { OpenRouter } from "@openrouter/sdk";
import { NextRequest } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const openrouter = new OpenRouter({
  apiKey: process.env.OPENROUTER_API_KEY || "",
});

// 检查 API Key 是否配置
if (!process.env.OPENROUTER_API_KEY) {
  console.error("OPENROUTER_API_KEY 环境变量未设置");
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

    if (!process.env.OPENROUTER_API_KEY) {
      throw new Error("OPENROUTER_API_KEY 环境变量未设置，请在 Vercel 项目设置中添加环境变量");
    }

    const apiKey = process.env.OPENROUTER_API_KEY;
    console.log("API Key 前10个字符:", apiKey.substring(0, 10));
    console.log("开始调用 OpenRouter API...");
    console.log("模型: deepseek/deepseek-chat-v3-0324:free");
    
    // 重新初始化 OpenRouter 确保使用最新的 API Key
    const openrouterClient = new OpenRouter({
      apiKey: apiKey,
    });
    
    let stream;
    try {
      stream = await openrouterClient.chat.send({
        model: "deepseek/deepseek-chat-v3-0324:free",
        messages: [
          {
            role: "user",
            content: prompt,
          },
        ],
        stream: true,
      });
      console.log("OpenRouter API 调用成功，获得流对象");
    } catch (apiError: unknown) {
      const apiErrorMessage = apiError instanceof Error ? apiError.message : String(apiError);
      console.error("OpenRouter API 调用失败:", apiErrorMessage);
      console.error("完整错误:", apiError);
      throw new Error(`OpenRouter API 调用失败: ${apiErrorMessage}`);
    }

    // 创建可读流
    const encoder = new TextEncoder();
    const readable = new ReadableStream({
      async start(controller) {
        try {
          console.log("开始读取流数据...");
          let chunkCount = 0;
          for await (const chunk of stream) {
            chunkCount++;
            if (chunkCount === 1) {
              console.log("收到第一个 chunk:", JSON.stringify(chunk).substring(0, 200));
            }
            
            // chunk 是 ChatStreamingResponseChunkData 类型
            const content = chunk?.choices?.[0]?.delta?.content;
            
            if (content) {
              controller.enqueue(encoder.encode(`data: ${JSON.stringify({ content })}\n\n`));
            }
            
            // 检查是否有错误
            if (chunk?.error) {
              console.error("Stream chunk error:", chunk.error);
              throw new Error(chunk.error.message || "流式响应中出现错误");
            }
          }
          console.log(`流读取完成，共处理 ${chunkCount} 个 chunks`);
          controller.enqueue(encoder.encode(`data: [DONE]\n\n`));
          controller.close();
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

