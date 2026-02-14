import React from 'react';
import { StepProps, EducationLevel } from '../types';
import { User, GraduationCap } from 'lucide-react';

export const StepQualify1: React.FC<StepProps> = ({ data, updateData, onNext, onBack }) => {
  const isComplete = data.age && data.education;

  return (
    <div className="animate-in fade-in slide-in-from-right-8 duration-500">
      <div className="text-center mb-8">
        <h2 className="text-xl md:text-2xl font-bold text-slate-800 mb-2">
          あなたに合った求人を絞り込みます
        </h2>
        <p className="text-sm text-slate-500">
            あと少しで完了です。<br/>
            より正確なマッチングのために教えてください。
        </p>
      </div>

      <div className="space-y-8 max-w-xl mx-auto">
        {/* Age Section */}
        <div>
          <label className="flex items-center gap-2 text-sm font-bold text-slate-700 mb-3 justify-center md:justify-start">
            <User className="w-4 h-4 text-[#000080]" /> 現在のご年齢
          </label>
          <div className="grid grid-cols-4 gap-2">
            {[18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35].map((age) => {
               const display = age === 35 ? '35+' : age;
               return (
                <button
                  key={age}
                  onClick={() => updateData({ age: age })}
                  className={`py-3 rounded-lg border font-bold transition-all ${data.age === age ? 'border-[#000080] bg-[#000080] text-white shadow-md' : 'border-slate-200 bg-white hover:border-slate-400 text-slate-700'}`}
                >
                  {display}
                </button>
              );
            })}
          </div>
        </div>

        {/* Education Section */}
        <div>
          <label className="flex items-center gap-2 text-sm font-bold text-slate-700 mb-3 justify-center md:justify-start">
            <GraduationCap className="w-4 h-4 text-[#000080]" /> 最終学歴
          </label>
          <div className="grid grid-cols-1 gap-3">
            {[
              { label: '大学・大学院 卒', value: EducationLevel.University },
              { label: '短期大学・専門学校 卒', value: EducationLevel.Vocational },
              { label: '高校 卒', value: EducationLevel.HighSchool },
              { label: 'その他', value: EducationLevel.Other },
            ].map((edu) => (
              <button
                key={edu.value}
                onClick={() => updateData({ education: edu.value })}
                className={`px-4 py-3 rounded-lg border text-left font-bold transition-all ${data.education === edu.value ? 'border-[#000080] bg-blue-50 text-[#000080] shadow-sm' : 'border-slate-200 bg-white hover:border-slate-400 text-slate-700'}`}
              >
                {edu.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-3 max-w-sm mx-auto mt-10">
        <button
          onClick={onNext}
          disabled={!isComplete}
          className={`w-full py-4 rounded-lg font-bold text-lg shadow-lg transition-all ${isComplete ? 'bg-[#000080] text-white hover:bg-[#1e3a8a]' : 'bg-slate-200 text-slate-400 cursor-not-allowed'}`}
        >
          次へ進む
        </button>
        <button onClick={onBack} className="text-slate-400 text-sm underline mt-2 text-center hover:text-slate-600">前に戻る</button>
      </div>
    </div>
  );
};