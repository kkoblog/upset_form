import React from 'react';
import { TrendingUp, Smile, CheckCircle, Clock, Users, XCircle, Check } from 'lucide-react';

export const LPSections: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Logos Section */}
      <div className="py-10 border-b border-slate-100 bg-slate-50/50">
        <div className="container mx-auto px-4 text-center">
          <p className="text-slate-400 text-xs font-bold tracking-widest mb-6 uppercase">Trusted by Leading Companies</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
             {/* Placeholder for company logos using text for now */}
             <span className="font-serif text-2xl font-bold text-slate-600">SONY</span>
             <span className="font-sans text-2xl font-bold text-slate-600">Panasonic</span>
             <span className="font-mono text-2xl font-bold text-slate-600">TOYOTA</span>
             <span className="font-serif text-2xl font-bold text-slate-600">Nintendo</span>
             <span className="font-sans text-2xl font-bold text-slate-600">Hitachi</span>
             <span className="font-mono text-2xl font-bold text-slate-600">SoftBank</span>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-20 bg-slate-50 border-t border-slate-100">
        <div className="container mx-auto px-4">
          <h3 className="text-center text-2xl md:text-4xl font-black text-slate-800 mb-16 leading-tight">
            アップセットを利用した多くの方が<br/>
            <span className="text-[#000080] relative inline-block">
                「相談してよかった！」
                 <span className="absolute bottom-1 left-0 w-full h-3 bg-yellow-200 -z-10 opacity-60 rounded-sm"></span>
            </span>
            と感じています。
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Stat Card 1 */}
            <div className="bg-white p-10 rounded-3xl shadow-lg border-b-8 border-yellow-400 text-center relative overflow-hidden group hover:shadow-xl transition-all">
                <div className="absolute -right-10 -top-10 w-40 h-40 bg-yellow-50 rounded-full opacity-50 group-hover:scale-110 transition-transform"></div>
                <TrendingUp className="w-16 h-16 text-[#000080] mx-auto mb-6" />
                <p className="text-slate-500 font-bold mb-2">2人に1人が</p>
                <p className="text-4xl md:text-5xl font-black text-[#000080] tracking-tight">
                    年収UP<span className="text-2xl font-bold text-slate-800 ml-2">に成功</span>
                </p>
            </div>

            {/* Stat Card 2 */}
            <div className="bg-white p-10 rounded-3xl shadow-lg border-b-8 border-yellow-400 text-center relative overflow-hidden group hover:shadow-xl transition-all">
                <div className="absolute -left-10 -top-10 w-40 h-40 bg-blue-50 rounded-full opacity-50 group-hover:scale-110 transition-transform"></div>
                <Smile className="w-16 h-16 text-[#000080] mx-auto mb-6" />
                <p className="text-slate-500 font-bold mb-2">92%の人が</p>
                <p className="text-4xl md:text-5xl font-black text-[#000080] tracking-tight">
                    紹介求人<span className="text-2xl font-bold text-slate-800 ml-2">に満足</span>
                </p>
            </div>
          </div>
        </div>
      </div>

      {/* Matching Quality Section (Replaced Ranking Section) */}
      <div className="py-24 bg-[#000080] text-white overflow-hidden relative">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-yellow-500 rounded-full mix-blend-screen filter blur-3xl opacity-10 translate-y-1/2 -translate-x-1/2"></div>

        <div className="container mx-auto px-4 text-center relative z-10">
           <div className="inline-block mb-12">
                <div className="flex items-center justify-center gap-2 text-yellow-400 font-bold tracking-widest text-sm mb-3">
                    <CheckCircle className="w-4 h-4" />
                    <span>WHY UPSET?</span>
                </div>
                <h3 className="text-2xl md:text-4xl font-bold leading-tight mb-6">
                    大手には真似できない。<br/>
                    驚異の「マッチング精度」の秘密
                </h3>
                <p className="text-blue-200 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
                    多くのエージェントは効率を重視し、機械的に求人を送ります。<br className="hidden md:inline"/>
                    しかし、私たちは「あなた」を知ることに、とことん時間をかけます。
                </p>
           </div>
           
           <div className="bg-white/5 backdrop-blur-sm rounded-[2.5rem] p-6 md:p-12 max-w-5xl mx-auto border border-white/10 shadow-2xl relative">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
                 
                 {/* Comparison Left: Others */}
                 <div className="bg-slate-900/40 rounded-3xl p-8 border border-slate-700/50 flex flex-col justify-center relative overflow-hidden grayscale opacity-70 hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute top-4 left-6 px-3 py-1 bg-slate-700 text-slate-300 text-xs font-bold rounded-full">一般的な他社</div>
                    <div className="mt-8 space-y-8">
                        <div className="flex flex-col items-center">
                            <Clock className="w-12 h-12 text-slate-500 mb-2" />
                            <p className="text-sm text-slate-400 mb-1">面談時間</p>
                            <p className="text-2xl font-bold text-slate-400">たったの<span className="text-3xl">30分</span></p>
                        </div>
                        <div className="w-full h-px bg-slate-700"></div>
                        <div className="flex flex-col items-center">
                            <XCircle className="w-12 h-12 text-slate-500 mb-2" />
                            <p className="text-sm text-slate-400 mb-1">求人紹介</p>
                            <p className="font-bold text-slate-400">大量に送るだけ</p>
                            <p className="text-xs text-slate-500 mt-2">（ミスマッチが起きやすい）</p>
                        </div>
                    </div>
                 </div>

                 {/* Comparison Right: UPSET (Prominent) */}
                 <div className="bg-white text-slate-900 rounded-3xl p-8 border-4 border-yellow-400 relative shadow-2xl transform md:scale-105 flex flex-col justify-center">
                    <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-[#000080] text-sm font-black px-6 py-2 rounded-full shadow-lg whitespace-nowrap">
                        圧倒的な違い
                    </div>
                    
                    <div className="mt-6 space-y-8">
                        <div className="flex flex-col items-center">
                            <div className="p-3 bg-yellow-100 rounded-full mb-3">
                                <Users className="w-10 h-10 text-[#000080]" />
                            </div>
                            <p className="text-sm text-slate-500 font-bold mb-1">サポート時間</p>
                            <p className="text-3xl font-black text-[#000080]">平均<span className="text-5xl text-yellow-500 mx-1 drop-shadow-sm">10</span>時間以上</p>
                        </div>
                        
                         <div className="bg-blue-50 p-5 rounded-2xl text-center border border-blue-100 relative">
                            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-[#000080] text-white text-[10px] font-bold px-2 py-0.5 rounded">
                                だから
                            </div>
                            <p className="font-bold text-[#000080] leading-relaxed text-lg">
                                あなたの強みを深く理解し<br/>
                                <span className="bg-yellow-200 px-1">本当に活躍できる企業</span><br/>
                                だけをご提案します
                            </p>
                         </div>
                    </div>
                 </div>

              </div>

              <div className="mt-12 text-center border-t border-white/10 pt-8">
                  <div className="inline-flex items-center gap-2 text-yellow-400 font-bold text-lg md:text-xl mb-2">
                     <Check className="w-6 h-6" />
                     <span>ミスマッチのない転職を約束します</span>
                  </div>
                  <p className="text-slate-300 text-sm md:text-base">
                      「こんなに深く話を聞いてくれたのは初めて」<br className="md:hidden"/>
                      そう言っていただけるのが、私たちの誇りです。
                  </p>
              </div>
           </div>
        </div>
      </div>

      {/* CTA Pre-Form Section */}
      <div className="bg-[#0f172a] py-16 text-center border-t border-slate-700 relative overflow-hidden">
         <div className="container mx-auto px-4 relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                転職支援サービスは <span className="text-slate-900 bg-yellow-400 px-3 py-1 rounded shadow-lg transform rotate-[-2deg] inline-block">完全無料</span> です
            </h3>
            <p className="text-slate-300 mb-10 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
                すぐに転職をお考えでなく、<br className="md:hidden"/>
                少し話を聞いてみたいというだけでも構いません。<br/>
                下記フォームよりお申し込みください。
            </p>
            
            <div className="inline-flex flex-col items-center">
                <div className="animate-bounce mb-2">
                    <CheckCircle className="w-8 h-8 text-yellow-400" />
                </div>
                <div className="h-12 w-[2px] bg-gradient-to-b from-yellow-400 to-transparent"></div>
            </div>
         </div>
      </div>
    </div>
  );
};