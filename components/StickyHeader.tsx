import React from 'react';
import { ArrowRightCircle, Clock } from 'lucide-react';

export const StickyHeader: React.FC = () => {
  const scrollToForm = () => {
    const form = document.getElementById('contact-form');
    if (form) {
      form.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50 h-20 flex items-center">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          {/* UPSET Logo Representation */}
          <div className="flex items-center gap-1">
            <div className="w-8 h-8 md:w-10 md:h-10 bg-[#000080] text-yellow-400 rounded-lg flex items-center justify-center font-black text-xl md:text-2xl italic border-b-4 border-yellow-400">
              U
            </div>
            <div className="flex flex-col">
              <span className="font-black text-xl md:text-2xl text-slate-900 tracking-tighter leading-none">UPSET</span>
              <span className="text-[10px] md:text-xs text-slate-500 font-bold tracking-widest leading-none">株式会社アップセット</span>
            </div>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="hidden lg:flex flex-col items-end">
             <div className="flex items-center gap-1 text-green-600 bg-green-50 px-2 py-0.5 rounded-full border border-green-100">
                <Clock className="w-3 h-3" />
                <span className="text-[10px] font-bold">平均返信時間: 2分</span>
             </div>
             <p className="text-[10px] text-slate-400 mt-0.5">※お待たせしません</p>
          </div>

          <button 
            onClick={scrollToForm}
            className="bg-yellow-400 hover:bg-yellow-500 text-slate-900 font-bold py-3 px-4 md:px-8 rounded-full shadow-md transition-all transform hover:scale-105 flex items-center gap-2 text-sm md:text-base border-b-4 border-yellow-500 active:border-b-0 active:translate-y-1"
          >
            <span>無料</span>
            <span className="hidden md:inline">転職支援サービスに申し込む</span>
            <span className="md:hidden">相談する</span>
            <ArrowRightCircle className="w-5 h-5" />
          </button>
        </div>
      </div>
    </header>
  );
};