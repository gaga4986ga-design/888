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

export default function Home() {
  const [formData, setFormData] = useState({
    gender: "",
    birthDate: "",
    birthTime: "",
    birthPlace: "",
  });
  const [isCalculating, setIsCalculating] = useState(false);
  const [showReport, setShowReport] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsCalculating(true);

    // 模拟算命计算过程
    setTimeout(() => {
      setIsCalculating(false);
      setShowReport(true);
    }, 3000);
  };

  if (showReport) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4 relative overflow-hidden">
        {/* 背景装饰 */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 bg-amber-600 rounded-full blur-[120px]" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-red-800 rounded-full blur-[150px]" />
        </div>

        {/* 八卦装饰 */}
        <div className="absolute top-20 right-20 w-32 h-32 opacity-20 animate-spin" style={{ animationDuration: "60s" }}>
          <svg viewBox="0 0 100 100" className="w-full h-full text-amber-500">
            <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="2" />
            <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" strokeWidth="1" />
            <circle cx="50" cy="50" r="25" fill="none" stroke="currentColor" strokeWidth="1" />
          </svg>
        </div>

        <Card className="max-w-4xl w-full mystic-glow">
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

            {/* 五行分析 */}
            <div className="border-2 border-amber-600/30 rounded-lg p-6 bg-black/20">
              <h3 className="text-amber-400 text-xl mb-4 flex items-center gap-2">
                <span className="text-2xl">☯️</span>
                五行分析
              </h3>
              <p className="text-amber-100/80 leading-relaxed">
                根据您的生辰八字，五行属性平衡，金木水火土各有所属。命格中木旺，利于事业发展；水相辅，智慧通达。建议在日常生活中注重五行调和，方能顺遂如意。
              </p>
              <div className="mt-4 grid grid-cols-5 gap-2">
                {["金", "木", "水", "火", "土"].map((element) => (
                  <div key={element} className="text-center p-3 border border-amber-600/40 rounded bg-amber-900/20">
                    <div className="text-amber-300 font-semibold">{element}</div>
                    <div className="text-xs text-amber-100/60 mt-1">{"★".repeat(Math.floor(Math.random() * 3) + 2)}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* 运势预测 */}
            <div className="border-2 border-amber-600/30 rounded-lg p-6 bg-black/20">
              <h3 className="text-amber-400 text-xl mb-4 flex items-center gap-2">
                <span className="text-2xl">🔮</span>
                运势预测
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-amber-300 font-semibold mb-2">事业运：</h4>
                  <p className="text-amber-100/80">贵人相助，事业蒸蒸日上。适合在本年度开拓新项目，把握时机，定能有所成就。</p>
                </div>
                <div>
                  <h4 className="text-amber-300 font-semibold mb-2">财运：</h4>
                  <p className="text-amber-100/80">正财稳定，偏财有惊喜。建议稳健投资，切勿贪心，细水长流方为上策。</p>
                </div>
                <div>
                  <h4 className="text-amber-300 font-semibold mb-2">感情运：</h4>
                  <p className="text-amber-100/80">桃花运旺，单身者今年有望觅得良缘。已婚者需注意沟通，和睦相处为上。</p>
                </div>
                <div>
                  <h4 className="text-amber-300 font-semibold mb-2">健康运：</h4>
                  <p className="text-amber-100/80">整体健康状况良好，但需注意劳逸结合，适当锻炼，保持身心愉悦。</p>
                </div>
              </div>
            </div>

            {/* 吉祥建议 */}
            <div className="border-2 border-amber-600/30 rounded-lg p-6 bg-black/20">
              <h3 className="text-amber-400 text-xl mb-4 flex items-center gap-2">
                <span className="text-2xl">✨</span>
                吉祥建议
              </h3>
              <ul className="space-y-2 text-amber-100/80">
                <li>• 幸运颜色：金色、红色</li>
                <li>• 幸运数字：3、8</li>
                <li>• 幸运方位：东方、南方</li>
                <li>• 吉祥物：龙凤呈祥、金蟾</li>
                <li>• 建议佩戴：玉石、黄金饰品</li>
              </ul>
            </div>
          </CardContent>
          <CardFooter className="flex justify-center">
            <Button
              onClick={() => setShowReport(false)}
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
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <div className="text-center space-y-6">
          {/* 旋转的八卦图 */}
          <div className="relative w-48 h-48 mx-auto">
            <div className="absolute inset-0 animate-spin" style={{ animationDuration: "3s" }}>
              <svg viewBox="0 0 100 100" className="w-full h-full text-amber-500">
                <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="3" opacity="0.3" />
                <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.5" />
                <circle cx="50" cy="50" r="25" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.7" />
                <circle cx="50" cy="50" r="15" fill="currentColor" opacity="0.8" />
              </svg>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-24 h-24 bg-gradient-to-br from-amber-600 to-amber-400 rounded-full mystic-glow" />
            </div>
          </div>

          <div className="space-y-2">
            <h2 className="text-3xl font-bold text-amber-400 mystic-text-shadow">
              天机推演中...
            </h2>
            <p className="text-amber-200/70 text-lg">正在解析您的命理信息</p>
          </div>

          {/* 加载动画文字 */}
          <div className="space-y-2 text-amber-300/60">
            <p className="animate-pulse">正在排列八字...</p>
            <p className="animate-pulse" style={{ animationDelay: "0.5s" }}>分析五行...</p>
            <p className="animate-pulse" style={{ animationDelay: "1s" }}>推算运势...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-64 h-64 bg-amber-600 rounded-full blur-[120px]" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-red-800 rounded-full blur-[150px]" />
      </div>

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
