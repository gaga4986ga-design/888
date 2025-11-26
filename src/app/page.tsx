"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const YinYangSpinner = ({ className = "" }: { className?: string }) => (
  <div className={`relative w-48 h-48 mx-auto ${className}`}>
    <div className="absolute inset-0 blur-[120px] bg-amber-500/25" />
    <div className="relative w-full h-full animate-[spin_12s_linear_infinite] drop-shadow-[0_0_45px_rgba(251,191,36,0.35)]">
      <svg viewBox="0 0 100 100" className="w-full h-full" fill="none">
        <defs>
          <linearGradient id="yinGold" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#FFD36B" />
            <stop offset="100%" stopColor="#D97706" />
          </linearGradient>
          <linearGradient id="yangShadow" x1="1" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1A0B00" />
            <stop offset="100%" stopColor="#3B0F03" />
          </linearGradient>
        </defs>
        <circle cx="50" cy="50" r="48" stroke="#FBBF24" strokeWidth="1.5" fill="#080302" />
        <path
          d="M50 2A48 48 0 0 0 2 50a48 48 0 0 0 48 48c-13.2 0-24-10.8-24-24S36.8 50 50 50s24-10.8 24-24S63.2 2 50 2Z"
          fill="url(#yinGold)"
        />
        <path
          d="M50 2c13.2 0 24 10.8 24 24S63.2 50 50 50 26 60.8 26 74s10.8 24 24 24a48 48 0 0 0 0-96Z"
          fill="url(#yangShadow)"
        />
        <circle cx="50" cy="26" r="6.5" fill="#0B0500" stroke="#FBBF24" strokeWidth="1.5" />
        <circle cx="50" cy="74" r="6.5" fill="#F6E2B4" stroke="#2F0A00" strokeWidth="1.5" />
        <circle cx="50" cy="26" r="2.2" fill="#F8EFD0" />
        <circle cx="50" cy="74" r="2.2" fill="#1A0700" />
      </svg>
    </div>
  </div>
);

const MysticBackground = ({ variant = "report" }: { variant?: "report" | "home" }) => {
  const isHome = variant === "home";
  const glowOpacity = isHome ? "opacity-20" : "opacity-10";
  const outerSize = isHome ? "w-[540px] h-[540px]" : "w-[440px] h-[440px]";
  const innerSize = isHome ? "w-[460px] h-[460px]" : "w-[360px] h-[360px]";
  const imageTone = isHome
    ? "opacity-100 brightness-[1.2] contrast-[1.4] saturate-[1.9]"
    : "opacity-70 brightness-[0.85] contrast-[1.2]";
  const overlayShade = isHome ? "opacity-40" : "opacity-80";

  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className={`absolute inset-0 ${glowOpacity}`}>
        <div className="absolute top-10 left-10 w-64 h-64 bg-amber-600 rounded-full blur-[120px]" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-red-800 rounded-full blur-[150px]" />
      </div>

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="relative">
          <div className={`absolute inset-[-60px] rounded-full border border-amber-200/25 blur-xl ${isHome ? "opacity-40" : "opacity-20"} animate-pulse`} />
          <div className={`${outerSize} rounded-full border border-amber-500/70 shadow-[0_0_160px_rgba(217,119,6,0.65)] bg-gradient-to-br from-[#1b0c00] via-[#080402] to-[#2f0800] flex items-center justify-center`}>
            <div className="absolute inset-10 rounded-full bg-gradient-to-b from-amber-400/30 to-transparent blur-2xl" />
            <div className="absolute inset-12 rounded-full border border-amber-200/35 opacity-50" />
            <div
              className={`relative ${innerSize} rounded-full border border-amber-200/80 bg-[url('/images/good-luck.jpg')] bg-contain bg-center bg-no-repeat drop-shadow-[0_0_75px_rgba(255,215,128,0.75)] ${imageTone}`}
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-b from-transparent via-black/8 to-black/30" />
              <div className="absolute inset-0 rounded-full mix-blend-screen bg-[radial-gradient(circle,_rgba(255,234,170,0.55)_0%,_rgba(0,0,0,0)_70%)]" />
            </div>
          </div>
          <div className="absolute inset-[-12px] rounded-full border border-amber-300/40 opacity-40" />
        </div>
      </div>

      <div className="absolute top-20 right-20 w-32 h-32 opacity-20 animate-spin" style={{ animationDuration: "60s" }}>
        <svg viewBox="0 0 100 100" className="w-full h-full text-amber-500">
          <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="2" />
          <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" strokeWidth="1" />
          <circle cx="50" cy="50" r="25" fill="none" stroke="currentColor" strokeWidth="1" />
        </svg>
      </div>

      <div className="absolute bottom-20 left-20 w-32 h-32 opacity-20 animate-spin" style={{ animationDuration: "45s", animationDirection: "reverse" }}>
        <svg viewBox="0 0 100 100" className="w-full h-full text-red-800">
          <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="2" />
          <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" strokeWidth="1" />
          <circle cx="50" cy="50" r="25" fill="none" stroke="currentColor" strokeWidth="1" />
        </svg>
      </div>

      <div className={`absolute inset-0 bg-gradient-to-b from-black via-transparent to-black ${overlayShade} pointer-events-none`} />
    </div>
  );
};

const formatReportContent = (content: string) => {
  if (!content) return "";
  
  let formatted = content
    .replace(/^#+\s+(.+)$/gm, (match, title) => {
      const level = match.match(/^#+/)?.[0].length || 1;
      if (level === 1) {
        return `<h1 class="text-3xl font-bold text-amber-300 mb-6 mt-8 first:mt-0">${title}</h1><div class="w-full h-px bg-gradient-to-r from-transparent via-amber-600/50 to-transparent mb-6"></div>`;
      } else if (level === 2) {
        return `<h2 class="text-2xl font-semibold text-amber-300 mb-4 mt-6">${title}</h2>`;
      } else if (level === 3) {
        return `<h3 class="text-xl font-semibold text-amber-300 mb-3 mt-4">${title}</h3>`;
      }
      return match;
    })
    .replace(/^---$/gm, '<div class="w-full h-px bg-gradient-to-r from-transparent via-amber-600/30 to-transparent my-6"></div>')
    .replace(/^\*\s+(.+)$/gm, '<li class="ml-4 mb-2">$1</li>')
    .replace(/^-\s+(.+)$/gm, '<li class="ml-4 mb-2">$1</li>')
    .replace(/\n\n/g, '</p><p class="mb-4 text-amber-100/80 leading-relaxed">')
    .replace(/\n/g, '<br/>');

  formatted = `<p class="mb-4 text-amber-100/80 leading-relaxed">${formatted}</p>`;
  
  return formatted
    .replace(/\*\*(.+?)\*\*/g, '<strong class="text-amber-300 font-semibold">$1</strong>')
    .replace(/\*(.+?)\*/g, '<em class="text-amber-200">$1</em>');
};

export default function Home() {
  const [formData, setFormData] = useState({
    gender: "",
    birthDate: "",
    birthTime: "",
    birthPlace: "",
  });
  const [isCalculating, setIsCalculating] = useState(false);
  const [showReport, setShowReport] = useState(false);
  const [reportContent, setReportContent] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsCalculating(true);
    setShowReport(false);
    setReportContent("");

    try {
      const response = await fetch("/api/fortune", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({ error: "请求失败" }));
        throw new Error(errorData.error || `HTTP ${response.status}: ${response.statusText}`);
      }

      const reader = response.body?.getReader();
      const decoder = new TextDecoder();

      if (!reader) {
        throw new Error("无法读取响应流");
      }

      let fullContent = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        const chunk = decoder.decode(value);
        const lines = chunk.split("\n");

        for (const line of lines) {
          if (line.startsWith("data: ")) {
            const data = line.slice(6);
            if (data === "[DONE]") {
              setIsCalculating(false);
              setShowReport(true);
              return;
            }

            try {
              const parsed = JSON.parse(data);
              if (parsed.content) {
                fullContent += parsed.content;
                setReportContent(fullContent);
              } else if (parsed.error) {
                // 处理流式响应中的错误
                throw new Error(parsed.error);
              }
            } catch (e) {
              // 如果是错误消息则抛出，否则忽略解析错误
              if (e instanceof Error && e.message && e.message !== "Unexpected token") {
                throw e;
              }
            }
          }
        }
      }

      setIsCalculating(false);
      setShowReport(true);
    } catch (error) {
      console.error("Error:", error);
      const errorMessage = error instanceof Error ? error.message : "未知错误";
      alert(`生成命理报告时出错：${errorMessage}\n\n请检查：\n1. 网络连接是否正常\n2. API 配置是否正确\n3. 稍后重试`);
      setIsCalculating(false);
    }
  };

  if (showReport) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4 relative overflow-hidden">
        <MysticBackground variant="report" />

        <Card className="max-w-4xl w-full mystic-glow relative z-10">
          <CardHeader className="text-center">
            <CardTitle className="text-4xl mb-4">命理报告</CardTitle>
            <CardDescription className="text-lg">天机已测，命理呈现</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6 p-8">
            {/* 基本信息 */}
            <div className="border-2 border-amber-600/30 rounded-lg p-6 bg-black/20">
              <h3 className="text-amber-400 text-xl mb-4 flex items-center gap-2">
                <span className="text-2xl">🌟</span>
                基本信息
              </h3>
              <div className="grid grid-cols-2 gap-4 text-amber-100/80">
                <div>性别：{formData.gender === "male" ? "男" : "女"}</div>
                <div>出生日期：{formData.birthDate}</div>
                <div>出生时间：{formData.birthTime}</div>
                <div>出生地点：{formData.birthPlace}</div>
              </div>
            </div>

            {/* AI 生成的报告内容 */}
            <div className="border-2 border-amber-600/30 rounded-lg p-6 bg-black/20">
              <div 
                className="prose prose-invert max-w-none"
                dangerouslySetInnerHTML={{ __html: formatReportContent(reportContent) }}
              />
            </div>
          </CardContent>
          <CardFooter className="flex justify-center">
            <Button
              onClick={() => {
                setShowReport(false);
                setReportContent("");
              }}
              className="w-64"
            >
              重新测算
            </Button>
          </CardFooter>
        </Card>
      </div>
    );
  }

  if (isCalculating) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4 relative overflow-hidden">
        <MysticBackground variant="report" />
        <div className="text-center space-y-6 relative z-10">
          <YinYangSpinner className="-translate-y-20 scale-80" />
          
          <div className="space-y-2">
            <h2 className="text-3xl font-bold text-amber-400 mystic-text-shadow">
              天机推演中...
            </h2>
            <p className="text-amber-200/70 text-lg">正在解析您的命理信息</p>
          </div>

          {/* 显示实时生成的内容 */}
          {reportContent && (
            <div className="mt-8 max-w-2xl w-full">
              <Card className="bg-black/40 border-amber-600/30">
                <CardContent className="p-6">
                  <div className="text-amber-100/80 leading-relaxed whitespace-pre-wrap max-h-96 overflow-y-auto">
                    {reportContent}
                    {isCalculating && (
                      <span className="inline-block w-2 h-4 bg-amber-400 ml-1 animate-pulse">|</span>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* 加载动画文字 */}
          {!reportContent && (
            <div className="space-y-2 text-amber-300/60">
              <p className="animate-pulse">正在排列八字...</p>
              <p className="animate-pulse" style={{ animationDelay: "0.5s" }}>分析五行...</p>
              <p className="animate-pulse" style={{ animationDelay: "1s" }}>推算运势...</p>
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 relative overflow-hidden">
      <MysticBackground variant="home" />

      {/* 标题区域 */}
      <div className="text-center mb-8 relative z-10">
        <h1 className="text-5xl md:text-6xl font-bold text-amber-400 mb-4 mystic-text-shadow">
          天机阁
        </h1>
        <p className="text-amber-200/70 text-lg md:text-xl">
          洞察命理 · 把握天机 · 预见未来
        </p>
        <div className="mt-4 flex items-center justify-center gap-2 text-amber-300/50">
          <div className="w-16 h-px bg-gradient-to-r from-transparent to-amber-600" />
          <span className="text-sm">☯</span>
          <div className="w-16 h-px bg-gradient-to-l from-transparent to-amber-600" />
        </div>
      </div>

      {/* 八卦装饰 */}
      <div className="absolute top-20 right-20 w-32 h-32 opacity-20 animate-spin" style={{ animationDuration: "60s" }}>
        <svg viewBox="0 0 100 100" className="w-full h-full text-amber-500">
          <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="2" />
          <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" strokeWidth="1" />
          <circle cx="50" cy="50" r="25" fill="none" stroke="currentColor" strokeWidth="1" />
        </svg>
      </div>

      <div className="absolute bottom-20 left-20 w-32 h-32 opacity-20 animate-spin" style={{ animationDuration: "45s", animationDirection: "reverse" }}>
        <svg viewBox="0 0 100 100" className="w-full h-full text-red-800">
          <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="2" />
          <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" strokeWidth="1" />
          <circle cx="50" cy="50" r="25" fill="none" stroke="currentColor" strokeWidth="1" />
        </svg>
      </div>

      {/* 表单卡片 */}
      <Card className="max-w-2xl w-full mystic-glow relative z-10">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl">请输入您的生辰信息</CardTitle>
          <CardDescription>
            精准的生辰信息将帮助我们为您提供更准确的命理分析
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* 性别选择 */}
            <div className="space-y-2">
              <Label htmlFor="gender">性别</Label>
              <Select
                value={formData.gender}
                onValueChange={(value) =>
                  setFormData({ ...formData, gender: value })
                }
              >
                <SelectTrigger id="gender">
                  <SelectValue placeholder="请选择性别" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="male">男</SelectItem>
                  <SelectItem value="female">女</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* 出生日期 */}
            <div className="space-y-2">
              <Label htmlFor="birthDate">出生日期</Label>
              <Input
                id="birthDate"
                type="date"
                value={formData.birthDate}
                onChange={(e) =>
                  setFormData({ ...formData, birthDate: e.target.value })
                }
                required
              />
            </div>

            {/* 出生时间 */}
            <div className="space-y-2">
              <Label htmlFor="birthTime">出生时间</Label>
              <Input
                id="birthTime"
                type="time"
                value={formData.birthTime}
                onChange={(e) =>
                  setFormData({ ...formData, birthTime: e.target.value })
                }
                required
              />
            </div>

            {/* 出生地点 */}
            <div className="space-y-2">
              <Label htmlFor="birthPlace">出生地点</Label>
              <Input
                id="birthPlace"
                type="text"
                placeholder="请输入出生城市，如：北京"
                value={formData.birthPlace}
                onChange={(e) =>
                  setFormData({ ...formData, birthPlace: e.target.value })
                }
                required
              />
            </div>

            <Button type="submit" className="w-full text-lg h-14">
              开始测算命理
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col items-center text-center text-amber-200/50 text-sm">
          <p>您的隐私将被严格保护</p>
          <p className="mt-1">命理仅供参考，切勿过度迷信</p>
        </CardFooter>
      </Card>

      {/* 装饰性云纹 */}
      <div className="absolute bottom-0 left-0 right-0 h-32 opacity-20">
        <svg className="w-full h-full" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path
            d="M0,50 Q300,0 600,50 T1200,50 L1200,120 L0,120 Z"
            fill="url(#gradient)"
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.3" />
              <stop offset="50%" stopColor="#8B0000" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#D4AF37" stopOpacity="0.3" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}
