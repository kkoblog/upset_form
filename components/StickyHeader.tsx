import React, { useEffect, useState } from 'react';
import { ArrowRightCircle, Clock, Moon } from 'lucide-react';
import logoImage from '../assets/images/upset_logo.png';


export const StickyHeader: React.FC = () => {
  const [isBusinessHours, setIsBusinessHours] = useState(true);

  useEffect(() => {
    const checkBusinessHours = () => {
      const now = new Date();
      const hour = now.getHours();
      // 10:00 <= hour < 19:00 (午後7時まで)
      const isOpen = hour >= 10 && hour < 19;
      setIsBusinessHours(isOpen);
    };

    checkBusinessHours();
    // 1分ごとにチェック更新
    const timer = setInterval(checkBusinessHours, 60000);
    return () => clearInterval(timer);
  }, []);

  const scrollToForm = () => {
    const form = document.getElementById('contact-form');
    if (form) {
      form.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50 h-20 flex items-center">
      <div className="container mx-auto px-4 flex justify-between items-center">
  
        {/* ロゴ */}
        <div className="h-10 md:h-10">
          <img
            src={logoImage}
            alt="UPSETロゴ"
            className="h-full w-auto object-contain"
          />
        </div>
  
        {/* 右側グループ */}
        <div className="flex items-center gap-4">
  
          {/* バッジ */}
          <div className="flex flex-col md:flex-row items-center md:items-end gap-1 md:gap-3">

            <div
              className={`flex items-center gap-1 px-2 py-1 rounded-full border text-[8px] md:text-[10px] ${
                isBusinessHours
                  ? 'text-green-600 bg-green-50 border-green-100'
                  : 'text-slate-500 bg-slate-100 border-slate-200'
              }`}
            >
              {isBusinessHours ? (
                <Clock className="w-3 h-3 shrink-0" />
              ) : (
                <Moon className="w-3 h-3 shrink-0" />
              )}
              <span className="font-bold whitespace-nowrap">
                {isBusinessHours ? '平均返信3分' : '時間外: 翌10時より順次返信'}
              </span>
            </div>
  
            <p className="text-[8px] md:text-[10px] text-slate-400">
              {isBusinessHours
                ? '※お待たせしません'
                : '※Web受付は24時間対応'}
            </p>
          </div>
  
          {/* ボタン */}
          <button
  onClick={scrollToForm}
  className="
  bg-yellow-400 hover:bg-yellow-500
  text-slate-900 font-bold
  py-1.5 px-3 md:py-3 md:px-8
  rounded-full
  shadow-md
  flex items-center gap-1 md:gap-2
  text-xs md:text-base
  border-b-4 border-yellow-500
  active:border-b-0 active:translate-y-1
  transition-all
  "
>
  <span className="whitespace-nowrap">無料で相談してみる</span>
  <ArrowRightCircle className="w-4 h-4 md:w-5 md:h-5" />
</button>

  
        </div>
      </div>
      </header>
  );
};