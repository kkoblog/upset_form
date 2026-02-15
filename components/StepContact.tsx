import React, { useState } from 'react';
import { StepProps } from '../types';
import { Lock, Gift, CheckCircle, Zap } from 'lucide-react';

export const StepContact: React.FC<StepProps> = ({ data, updateData, onNext, onBack }) => {
  const [localName, setLocalName] = useState(data.name);
  const [localEmail, setLocalEmail] = useState(data.email);
  const [localPhone, setLocalPhone] = useState(data.phone);
  const [error, setError] = useState('');

  // Generate a random number between 5 and 19 for the job count
  // Using useState with a function guarantees it's calculated only once per component mount
  const [matchCount] = useState(() => Math.floor(Math.random() * (19 - 5 + 1)) + 5);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!localName.trim() || !localEmail.trim() || !localPhone.trim()) {
      setError('すべての項目を入力してください。');
      return;
    }
    updateData({ name: localName, email: localEmail, phone: localPhone });
    onNext();
  };

  return (
    <div className="animate-in fade-in slide-in-from-right-8 duration-500">
      <div className="text-center mb-6">
        <h2 className="text-xl md:text-2xl font-bold text-slate-800 mb-2">
          診断結果をお送りします
        </h2>
        <p className="text-sm text-slate-500">
            あなたにマッチした非公開求人が<span className="font-bold text-yellow-600">{matchCount}件</span>見つかりました。<br/>
            優先案内のため、ご連絡先を教えていただけますか？
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5 max-w-lg mx-auto bg-white p-2 rounded-xl">
        <div>
          <label className="block text-sm font-bold text-slate-700 mb-2">お名前</label>
          <input
            type="text"
            value={localName}
            onChange={(e) => setLocalName(e.target.value)}
            placeholder="例：山田 太郎"
            className="w-full px-5 py-4 bg-slate-50 border border-slate-300 rounded-lg focus:border-[#000080] focus:ring-1 focus:ring-[#000080] outline-none transition-all text-lg placeholder:text-slate-400"
          />
        </div>

        <div>
          <label className="block text-sm font-bold text-slate-700 mb-2">連絡のつきやすい電話番号</label>
          <input
            type="tel"
            value={localPhone}
            onChange={(e) => setLocalPhone(e.target.value)}
            placeholder="例：09012345678"
            className="w-full px-5 py-4 bg-slate-50 border border-slate-300 rounded-lg focus:border-[#000080] focus:ring-1 focus:ring-[#000080] outline-none transition-all text-lg placeholder:text-slate-400"
          />
        </div>

        <div>
          <label className="block text-sm font-bold text-slate-700 mb-2">求人リストの送付先（メールアドレス）</label>
          <input
            type="email"
            value={localEmail}
            onChange={(e) => setLocalEmail(e.target.value)}
            placeholder="例：taro@example.com"
            className="w-full px-5 py-4 bg-slate-50 border border-slate-300 rounded-lg focus:border-[#000080] focus:ring-1 focus:ring-[#000080] outline-none transition-all text-lg placeholder:text-slate-400"
          />
        </div>

        {error && <p className="text-red-500 text-sm font-bold bg-red-50 p-2 rounded text-center animate-pulse">{error}</p>}

        <div className="pt-4">
            <button
            type="submit"
            className="group relative w-full bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-300 hover:to-yellow-400 text-slate-900 font-black text-xl py-5 rounded-lg shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"
            >
              <div className="relative z-10 flex items-center justify-center gap-2">
                  <span>無料で非公開求人を受け取る</span>
                  <Gift className="w-6 h-6 animate-bounce" />
              </div>
              <div className="absolute top-0 -inset-full h-full w-1/2 z-0 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 group-hover:animate-shine" />
            </button>
            
            <div className="flex items-center justify-center gap-2 mt-3 text-slate-500 text-xs font-bold">
               <Zap className="w-4 h-4 text-yellow-500 fill-yellow-500" />
               <p>平均2分で自動返信メールが届きます</p>
            </div>
            
            <p className="text-center text-[10px] text-slate-400 mt-2">
                <Lock className="inline w-3 h-3 mr-1" />SSL暗号化通信により、個人情報は厳重に保護されます
            </p>
        </div>
        
        <button
          type="button"
          onClick={onBack}
          className="w-full text-slate-400 text-sm mt-4 underline decoration-slate-300 underline-offset-4 text-center hover:text-slate-600"
        >
          入力内容を修正する
        </button>
      </form>
    </div>
  );
};