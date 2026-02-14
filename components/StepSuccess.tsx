import React from 'react';
import { CheckCircle, Clock } from 'lucide-react';

export const StepSuccess: React.FC = () => {
  return (
    <div className="text-center py-12 animate-in fade-in zoom-in duration-500">
      <div className="inline-flex items-center justify-center w-24 h-24 bg-green-100 rounded-full mb-8">
        <CheckCircle className="w-12 h-12 text-green-600" />
      </div>
      
      <h2 className="text-3xl font-black text-slate-800 mb-4">
        受け付けが完了しました
      </h2>
      
      <p className="text-lg text-slate-600 mb-8 max-w-md mx-auto">
        ご入力ありがとうございます。<br />
        あなたのキャリアプランに最適な情報を準備しております。
      </p>

      <div className="bg-blue-50 border border-blue-100 rounded-xl p-6 max-w-sm mx-auto">
        <div className="flex items-center justify-center gap-2 text-blue-800 font-bold mb-2">
            <Clock className="w-5 h-5" />
            <span>今後の流れ</span>
        </div>
        <p className="text-sm text-blue-700">
            ご登録いただいたメールアドレスへ<br />
            <span className="font-bold underline decoration-orange-400 decoration-2">10分以内</span>に担当者より詳細をお送りします。
        </p>
      </div>
    </div>
  );
};