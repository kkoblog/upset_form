import React from 'react';
import { StepProps } from '../types';
import { Activity, ShieldCheck } from 'lucide-react';

export const StepQualify3: React.FC<StepProps> = ({ data, updateData, onNext, onBack }) => {
  const handleSelect = (val: boolean) => {
    updateData({ hasHealthIssue: val });
    onNext();
  };

  return (
    <div className="animate-in fade-in slide-in-from-right-8 duration-500">
      <h2 className="text-2xl font-bold text-slate-800 mb-2">健康状態の確認</h2>
      <p className="text-slate-500 mb-8">スムーズな就業開始に向けた確認です（機密事項として厳守します）。</p>

      <div className="bg-slate-50 p-6 rounded-2xl mb-8 border border-slate-100">
        <p className="text-slate-700 leading-relaxed mb-4 font-medium flex gap-2">
            <ShieldCheck className="w-5 h-5 text-teal-600 shrink-0" />
            現在、お仕事に従事するにあたって、持病や障害など配慮が必要な事項はありますか？
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <button
          onClick={() => handleSelect(false)}
          className="group p-8 bg-white border-2 border-slate-100 rounded-2xl hover:border-blue-500 hover:shadow-xl transition-all text-center"
        >
          <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-100">
            <Activity className="w-6 h-6 text-blue-600" />
          </div>
          <h3 className="text-lg font-bold text-slate-700">特にありません</h3>
          <p className="text-xs text-slate-400 mt-2">（現在・過去ともに良好）</p>
        </button>

        <button
          onClick={() => handleSelect(true)}
          className="p-8 bg-white border-2 border-slate-100 rounded-2xl hover:border-slate-300 hover:bg-slate-50 transition-all text-center"
        >
          <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-lg font-bold text-slate-400">?</span>
          </div>
          <h3 className="text-lg font-bold text-slate-700">相談・配慮が必要</h3>
          <p className="text-xs text-slate-400 mt-2">（持病・障害あり）</p>
        </button>
      </div>

      <button onClick={onBack} className="w-full py-4 text-slate-400 font-medium mt-8 underline underline-offset-4">戻る</button>
    </div>
  );
};