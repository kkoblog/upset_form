import React, { useState, useEffect } from 'react';
import { StepProps, EducationLevel, Timing, SalaryExpectation, UserIntent } from '../types';
import { Lock, Gift, Zap, Loader2, AlertCircle, Moon } from 'lucide-react';

// ==========================================
// 【重要】送信先設定
// ==========================================
// 応募情報の届くメールアドレスをここに入力してください
// ※ FormSubmitを初めて利用する場合、このアドレスに「有効化確認メール」が届きますので、
//    必ずボタンを押して承認してください。承認されるまでメールは届きません。
const ADMIN_EMAIL = "upset.recruit@gmail.com"; 

export const StepContact: React.FC<StepProps> = ({ data, updateData, onNext, onBack }) => {
  const [localName, setLocalName] = useState(data.name);
  const [localEmail, setLocalEmail] = useState(data.email);
  const [localPhone, setLocalPhone] = useState(data.phone);
  const [error, setError] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [isBusinessHours, setIsBusinessHours] = useState(true);

  // 演出用: 求人マッチ数
  const [matchCount] = useState(() => Math.floor(Math.random() * (19 - 10 + 1)) + 5);
  useEffect(() => {
    const checkBusinessHours = () => {
      const now = new Date();
      const hour = now.getHours();
      // 10:00 <= hour < 19:00 (午後7時まで)
      setIsBusinessHours(hour >= 10 && hour < 19);
    };
    checkBusinessHours();
  }, []);

  // データを日本語表記に変換する関数
  const formatValue = (key: string, value: any): string => {
    if (value === undefined || value === null || value === '') return '未回答';
    
    switch(key) {
      case 'education':
        switch (value) {
          case EducationLevel.HighSchool: return '高校 卒';
          case EducationLevel.Vocational: return '短期大学・専門学校 卒';
          case EducationLevel.University: return '大学・大学院 卒';
          case EducationLevel.Other: return 'その他';
          default: return String(value);
        }
      case 'timing':
        if (value === 'undecided') return 'まずは情報収集から（未定）';
        switch (value) {
          case Timing.Within1Month: return 'すぐにでも（1ヶ月以内）';
          case Timing.Within3Months: return '3ヶ月以内';
          case Timing.Sometime: return '良いところがあれば（半年以降）';
          default: return String(value);
        }
      case 'salary':
        switch (value) {
          case SalaryExpectation.Under300: return '〜350万';
          case SalaryExpectation.Under450: return '〜450万';
          case SalaryExpectation.Over450: return '450万〜';
          default: return String(value);
        }
      case 'intent':
        switch (value) {
          case UserIntent.ChangeJobs: return '転職を検討中';
          case UserIntent.CareerConsult: return 'キャリア相談';
          case UserIntent.Hiring: return '人材をお探し';
          default: return String(value);
        }
      default:
        return String(value);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!localName.trim() || !localEmail.trim() || !localPhone.trim()) {
      setError('すべての項目を入力してください。');
      return;
    }

    // 以前のエラー原因となっていた安全チェックを削除しました

    setIsSending(true);

    // 送信データの構築（日本語キー＆日本語バリュー）
    const submitData = {
      _subject: `【UPSET】新規エントリー：${localName}様`, // 件名
      _template: "table", // 表形式で見やすく
      _captcha: "false", // キャプチャ無効化
      お名前: localName,
      メールアドレス: localEmail,
      電話番号: localPhone,
      年齢: data.age ? `${data.age}歳` : '未回答',
      最終学歴: formatValue('education', data.education),
      転職希望時期: formatValue('timing', data.timing),
      希望年収: formatValue('salary', data.salary),
      健康状態の懸念: data.hasHealthIssue ? 'あり' : 'なし',
      現在のお悩み: data.concerns.length > 0 ? data.concerns.join(', ') : '特になし',
      ご利用目的: formatValue('intent', data.intent),
    };

    try {
      // FormSubmitへのPOSTリクエスト
      const response = await fetch(`https://formsubmit.co/ajax/${ADMIN_EMAIL}`, {
        method: "POST",
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(submitData)
      });

      if (!response.ok) {
        throw new Error("Server responded with an error");
      }
      
      console.log('Form submitted successfully');
      // 成功時はデータ更新して次へ
      updateData({ name: localName, email: localEmail, phone: localPhone });
      onNext();

    } catch (err) {
      console.error('Submission Error:', err);
      // メーラーは起動せず、画面上にエラーを表示する
      setError('送信中にエラーが発生しました。通信環境をご確認の上、再度お試しいただくか、しばらく時間を置いてからお試しください。');
    } finally {
      setIsSending(false);
    }
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
            disabled={isSending}
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
            disabled={isSending}
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
            disabled={isSending}
          />
        </div>

        {/* エラーメッセージ表示エリア */}
        {error && (
          <div className="bg-red-50 text-red-600 p-4 rounded-lg text-sm flex items-start gap-2 animate-in slide-in-from-top-2">
            <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
            <div>
              <p className="font-bold mb-1">送信できませんでした</p>
              <p>{error}</p>
            </div>
          </div>
        )}

        <div className="pt-4">
            <button
            type="submit"
            disabled={isSending}
            className="group relative w-full bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-300 hover:to-yellow-400 text-slate-900 font-black text-xl py-5 rounded-lg shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden disabled:opacity-70 disabled:cursor-not-allowed"
            >
              <div className="relative z-10 flex items-center justify-center gap-2">
                  {isSending ? (
                    <>
                      <Loader2 className="w-6 h-6 animate-spin" />
                      <span>送信中...</span>
                    </>
                  ) : (
                    <>
                      <span>無料で非公開求人を受け取る</span>
                      <Gift className="w-6 h-6 animate-bounce" />
                    </>
                  )}
              </div>
              {!isSending && (
                <div className="absolute top-0 -inset-full h-full w-1/2 z-0 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 group-hover:animate-shine" />
              )}
            </button>
            
            <div className="flex items-center justify-center gap-2 mt-3 text-slate-500 text-xs font-bold">
            {isBusinessHours ? (
                 <>
               <Zap className="w-4 h-4 text-yellow-500 fill-yellow-500" />
               <p>平均3分で担当者より詳細メールが届きます</p>
               </>
               ) : (
                 <>
                   <Moon className="w-4 h-4 text-slate-400" />
                   <p>現在は営業時間外のため、翌10時より順次ご連絡します</p>
                 </>
               )}
            </div>
            
            <p className="text-center text-[10px] text-slate-400 mt-2">
                <Lock className="inline w-3 h-3 mr-1" />SSL暗号化通信により、個人情報は厳重に保護されます
            </p>
        </div>
        
        <button
          type="button"
          onClick={onBack}
          disabled={isSending}
          className="w-full text-slate-400 text-sm mt-4 underline decoration-slate-300 underline-offset-4 text-center hover:text-slate-600 disabled:opacity-50"
        >
          入力内容を修正する
        </button>
      </form>
    </div>
  );
};