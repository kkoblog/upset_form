import React from 'react';
import { StepProps, Timing } from '../types';
import { ChevronRight } from 'lucide-react';

export const StepTiming: React.FC<StepProps> = ({ data, updateData, onNext }) => {
  const handleSelect = (val: Timing) => {
    updateData({ timing: val });
    onNext();
  };

  return (
    <div className="animate-in fade-in slide-in-from-right-8 duration-500">
      <div className="text-center mb-8">
        <h2 className="text-xl md:text-2xl font-bold text-slate-800 mb-2">
          まずは、ご希望の転職時期をお教えください
        </h2>
        <p className="text-sm text-slate-500">
            ※まだ決まっていなくても大丈夫です。<br/>
            あなたに合わせたペースでご案内します。
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 max-w-md mx-auto">
        {[
          { label: 'すぐにでも動きたい（1ヶ月以内）', value: Timing.Within1Month },
          { label: '3ヶ月以内', value: Timing.Within3Months },
          { label: '良い案件があれば（6ヶ月以内）', value: Timing.Sometime },
          { label: 'まずは情報収集から（未定）', value: 'undecided' as any },
        ].map((item) => (
          <button
            key={item.label}
            onClick={() => handleSelect(item.value)}
            className={`
              group relative w-full text-left px-6 py-5 bg-white border-2 rounded-xl transition-all duration-200
              ${data.timing === item.value 
                ? 'border-[#000080] bg-blue-50 shadow-md transform scale-[1.01]' 
                : 'border-slate-200 hover:border-[#000080] hover:shadow-sm'
              }
            `}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                 <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${data.timing === item.value ? 'border-[#000080]' : 'border-slate-300'}`}>
                    {data.timing === item.value && <div className="w-2.5 h-2.5 bg-[#000080] rounded-full" />}
                 </div>
                 <span className={`font-bold text-lg ${data.timing === item.value ? 'text-[#000080]' : 'text-slate-600'}`}>
                    {item.label}
                 </span>
              </div>
              <ChevronRight className={`w-5 h-5 text-slate-300 group-hover:text-[#000080] transition-colors`} />
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};