import React from 'react';
import { StepProps, UserIntent } from '../types';
import { Briefcase, TrendingUp, Users } from 'lucide-react';

export const StepIntent: React.FC<StepProps> = ({ updateData, onNext }) => {
  const handleSelect = (intent: UserIntent) => {
    updateData({ intent });
    onNext();
  };

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      <h2 className="text-2xl font-bold text-slate-800 mb-2">
        まずは、あなたのご状況をお聞かせください
      </h2>
      <p className="text-slate-500 mb-8">
        最適なご提案をするため、現在のお考えに最も近いものをお選びください。
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <button
          onClick={() => handleSelect(UserIntent.ChangeJobs)}
          className="group relative flex flex-col items-center justify-center p-8 bg-white border-2 border-slate-100 rounded-2xl hover:border-blue-500 hover:shadow-xl transition-all duration-300 text-center"
        >
          <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-100 transition-colors">
            <Briefcase className="w-8 h-8 text-blue-600" />
          </div>
          <h3 className="text-lg font-bold text-slate-700 group-hover:text-blue-700">転職を検討中</h3>
          <p className="text-sm text-slate-500 mt-2">より良い環境を探している</p>
        </button>

        <button
          onClick={() => handleSelect(UserIntent.CareerConsult)}
          className="group relative flex flex-col items-center justify-center p-8 bg-white border-2 border-slate-100 rounded-2xl hover:border-teal-500 hover:shadow-xl transition-all duration-300 text-center"
        >
          <div className="w-16 h-16 bg-teal-50 rounded-full flex items-center justify-center mb-4 group-hover:bg-teal-100 transition-colors">
            <TrendingUp className="w-8 h-8 text-teal-600" />
          </div>
          <h3 className="text-lg font-bold text-slate-700 group-hover:text-teal-700">キャリア相談</h3>
          <p className="text-sm text-slate-500 mt-2">自分の市場価値を知りたい</p>
        </button>

        <button
          onClick={() => handleSelect(UserIntent.Hiring)}
          className="group relative flex flex-col items-center justify-center p-8 bg-white border-2 border-slate-100 rounded-2xl hover:border-indigo-500 hover:shadow-xl transition-all duration-300 text-center"
        >
          <div className="w-16 h-16 bg-indigo-50 rounded-full flex items-center justify-center mb-4 group-hover:bg-indigo-100 transition-colors">
            <Users className="w-8 h-8 text-indigo-600" />
          </div>
          <h3 className="text-lg font-bold text-slate-700 group-hover:text-indigo-700">人材をお探し</h3>
          <p className="text-sm text-slate-500 mt-2">採用担当者様はこちら</p>
        </button>
      </div>
    </div>
  );
};