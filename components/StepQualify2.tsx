import React from 'react';
import { StepProps, Timing, SalaryExpectation } from '../types';
import { Calendar, DollarSign } from 'lucide-react';

export const StepQualify2: React.FC<StepProps> = ({ data, updateData, onNext, onBack }) => {
  const isComplete = data.timing && data.salary;

  return (
    <div className="animate-in fade-in slide-in-from-right-8 duration-500">
      <h2 className="text-2xl font-bold text-slate-800 mb-2">希望条件の確認</h2>
      <p className="text-slate-500 mb-8">今のあなたにぴったりの「現実的な好条件」をご案内します。</p>

      <div className="space-y-8">
        <div>
          <label className="flex items-center gap-2 text-sm font-bold text-slate-700 mb-3">
            <Calendar className="w-4 h-4" /> 転職希望時期
          </label>
          <div className="grid grid-cols-1 gap-3">
            {[
              { label: 'すぐにでも（1ヶ月以内）', value: Timing.Within1Month },
              { label: '3ヶ月以内', value: Timing.Within3Months },
              { label: '良いところがあれば（半年以降）', value: Timing.Sometime },
            ].map((t) => (
              <button
                key={t.value}
                onClick={() => updateData({ timing: t.value })}
                className={`px-6 py-4 rounded-xl border-2 text-left font-medium transition-all ${data.timing === t.value ? 'border-blue-500 bg-blue-50 text-blue-700 shadow-sm' : 'border-slate-100 bg-white hover:border-slate-200 text-slate-600'}`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="flex items-center gap-2 text-sm font-bold text-slate-700 mb-3">
            <DollarSign className="w-4 h-4" /> 希望年収
          </label>
          <div className="grid grid-cols-3 gap-2">
            {[
              { label: '〜350万', value: SalaryExpectation.Under300 },
              { label: '〜450万', value: SalaryExpectation.Under450 },
              { label: '450万〜', value: SalaryExpectation.Over450 },
            ].map((s) => (
              <button
                key={s.value}
                onClick={() => updateData({ salary: s.value })}
                className={`py-3 rounded-xl border-2 text-center text-sm font-bold transition-all ${data.salary === s.value ? 'border-blue-500 bg-blue-50 text-blue-700 shadow-sm' : 'border-slate-100 bg-white hover:border-slate-200 text-slate-600'}`}
              >
                {s.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 mt-10">
        <button onClick={onBack} className="w-full py-4 text-slate-400 font-medium">戻る</button>
        <button
          onClick={onNext}
          disabled={!isComplete}
          className={`w-full py-4 rounded-full font-bold text-lg shadow-lg transition-all ${isComplete ? 'bg-blue-600 text-white hover:bg-blue-500' : 'bg-slate-200 text-slate-400 cursor-not-allowed'}`}
        >
          あと少しで完了
        </button>
      </div>
    </div>
  );
};