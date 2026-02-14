import React, { useState } from 'react';
import { StepProps } from '../types';
import { Check } from 'lucide-react';

const CONCERN_OPTIONS = [
  "今の給与に不満がある",
  "人間関係の良い職場で働きたい",
  "残業を減らしてプライベートを充実させたい",
  "休みがしっかり取れる会社がいい",
  "安定した正社員になりたい",
  "今の職場をすぐにでも辞めたい",
  "自分に向いている仕事がわからない",
  "未経験から新しいことに挑戦したい",
];

export const StepConcerns: React.FC<StepProps> = ({ data, updateData, onNext, onBack }) => {
  const [selected, setSelected] = useState<string[]>(data.concerns);

  const toggleConcern = (concern: string) => {
    if (selected.includes(concern)) {
      setSelected(selected.filter(c => c !== concern));
    } else {
      setSelected([...selected, concern]);
    }
  };

  const handleNext = () => {
    updateData({ concerns: selected });
    onNext();
  };

  return (
    <div className="animate-in fade-in slide-in-from-right-8 duration-500">
      <div className="text-center mb-8">
        <h2 className="text-xl md:text-2xl font-bold text-slate-800 mb-2">
          現在、どのようなお悩みがありますか？
        </h2>
        <p className="text-sm text-slate-500">
            当てはまるものをお選びください（複数選択可）。<br/>
            そのお悩み、私たちが解決のお手伝いをします。
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10 max-w-xl mx-auto">
        {CONCERN_OPTIONS.map((concern) => {
          const isSelected = selected.includes(concern);
          return (
            <button
              key={concern}
              onClick={() => toggleConcern(concern)}
              className={`
                relative flex items-center justify-between px-6 py-4 rounded-xl border-2 transition-all duration-200 text-left font-bold group
                ${isSelected 
                  ? 'border-[#000080] bg-blue-50 text-[#000080] shadow-sm transform scale-[1.01]' 
                  : 'border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:bg-slate-50'
                }
              `}
            >
              <span className="group-hover:text-slate-900 transition-colors">{concern}</span>
              {isSelected ? (
                <div className="flex items-center justify-center w-6 h-6 bg-[#000080] rounded-full shrink-0">
                    <Check className="w-4 h-4 text-white" />
                </div>
              ) : (
                <div className="w-6 h-6 rounded-full border-2 border-slate-200 group-hover:border-slate-300 shrink-0" />
              )}
            </button>
          );
        })}
      </div>

      <div className="flex flex-col gap-3 max-w-sm mx-auto">
        <button
          onClick={handleNext}
          disabled={selected.length === 0}
          className={`
            w-full py-4 rounded-lg font-bold text-lg shadow-lg transition-all duration-300 transform
            ${selected.length === 0 
              ? 'bg-slate-200 text-slate-400 cursor-not-allowed' 
              : 'bg-[#000080] text-white hover:bg-[#1e3a8a] hover:scale-[1.02]'
            }
          `}
        >
          {selected.length === 0 ? 'お悩みを選択してください' : '次へ進む'}
        </button>
        <button onClick={onBack} className="text-slate-400 text-sm underline mt-2 hover:text-slate-600">前に戻る</button>
      </div>
    </div>
  );
};