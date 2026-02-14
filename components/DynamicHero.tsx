import React, { useEffect, useState } from 'react';
import { ChevronDown, Zap, UserCheck, Clock } from 'lucide-react';

export const DynamicHero: React.FC = () => {
  const [headline, setHeadline] = useState({
    prefix: '転職エージェントのアップセット',
    main: '総合No.1',
    sub: 'UPSET'
  });

  useEffect(() => {
    // DTR: Dynamic Text Replacement logic
    // If a user comes from a search like "Engineer Job Change", we reflect that immediately.
    const params = new URLSearchParams(window.location.search);
    const keyword = params.get('q') || params.get('utm_term') || params.get('keyword');
    
    if (keyword) {
      setHeadline({
        prefix: `${keyword}でお困りのあなたへ`,
        main: 'その悩み、解決します',
        sub: 'UPSET'
      });
    }
  }, []);

  return (
    <div className="bg-[#0f172a] text-white pt-28 pb-16 px-4 relative overflow-hidden">
      {/* Background decoration matching corporate feel */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[#1e293b] skew-x-12 opacity-50 transform translate-x-20"></div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-8">
          <h2 className="text-yellow-400 font-bold text-lg md:text-xl mb-4 tracking-wider animate-in fade-in slide-in-from-bottom-2 duration-700">
            {headline.prefix}
          </h2>
          <div className="relative inline-block">
            <h1 className="text-5xl md:text-7xl font-black tracking-tight text-white mb-2 drop-shadow-xl animate-in zoom-in duration-700">
              {headline.main === '総合No.1' ? headline.sub : headline.main}
            </h1>
            {headline.main === '総合No.1' && (
              <div className="absolute -top-6 -right-12 md:-right-20 bg-yellow-400 text-slate-900 font-black rounded-full w-20 h-20 md:w-24 md:h-24 flex flex-col items-center justify-center transform rotate-12 shadow-lg border-4 border-white">
                <span className="text-xs">総合</span>
                <span className="text-2xl md:text-3xl leading-none">No.1</span>
                <span className="text-[10px] transform scale-75">RANKING</span>
              </div>
            )}
          </div>
          {headline.main !== '総合No.1' && (
             <p className="text-xl text-slate-300 mt-4 font-bold">UPSETなら、理想の職場が見つかります。</p>
          )}
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 mt-12">
           <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 bg-gradient-to-b from-slate-600 to-slate-800 rounded-full overflow-hidden border-4 border-slate-500 shadow-2xl relative">
                  <img 
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Agent" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 w-full bg-slate-900/80 text-center py-2 text-xs text-white backdrop-blur-sm">
                      キャリアコンシェルジュ
                  </div>
              </div>
           </div>

           <div className="max-w-lg text-center md:text-left">
              <h3 className="text-2xl md:text-4xl font-bold mb-6 leading-relaxed">
                  <span className="text-yellow-400">20代・30代</span>に選ばれている<br/>
                  UPSETの理由
              </h3>
              
              <div className="space-y-4">
                  {/* Feature 1 */}
                  <div className="flex items-center gap-4 bg-white/10 p-4 rounded-lg backdrop-blur-sm border border-white/10 transition-transform hover:scale-105">
                      <Zap className="w-10 h-10 text-yellow-400 shrink-0" />
                      <div className="text-left">
                          <p className="text-sm text-yellow-400 font-bold mb-0.5">内定獲得率が驚異の4倍</p>
                          <p className="font-bold text-lg md:text-xl">だから、憧れの第一志望から「内定通知」が確実に届く。</p>
                      </div>
                  </div>
                  {/* Feature 2 */}
                  <div className="flex items-center gap-4 bg-white/10 p-4 rounded-lg backdrop-blur-sm border border-white/10 transition-transform hover:scale-105">
                      <UserCheck className="w-10 h-10 text-yellow-400 shrink-0" />
                      <div className="text-left">
                          <p className="text-sm text-yellow-400 font-bold mb-0.5">入社後定着率 93.4%</p>
                          <p className="font-bold text-lg md:text-xl">だから、3年後も「転職してよかった」と心から思える。</p>
                      </div>
                  </div>
                  {/* Feature 3 */}
                  <div className="flex items-center gap-4 bg-white/10 p-4 rounded-lg backdrop-blur-sm border border-white/10 transition-transform hover:scale-105">
                      <Clock className="w-10 h-10 text-yellow-400 shrink-0" />
                      <div className="text-left">
                          <p className="text-sm text-yellow-400 font-bold mb-0.5">平均10時間以上のサポート</p>
                          <p className="font-bold text-lg md:text-xl">だから、あなたの経歴が「企業が欲しがる強み」に変わる。</p>
                      </div>
                  </div>
              </div>
           </div>
        </div>
      </div>
      
      <div className="absolute bottom-4 left-0 right-0 text-center animate-bounce">
        <ChevronDown className="w-8 h-8 text-white/50 mx-auto" />
      </div>
    </div>
  );
};