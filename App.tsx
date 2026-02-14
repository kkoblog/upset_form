import React from 'react';
import { StickyHeader } from './components/StickyHeader';
import { DynamicHero } from './components/DynamicHero';
import { LPSections } from './components/LPSections';
import { ConversationalForm } from './components/ConversationalForm';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans selection:bg-yellow-200 selection:text-slate-900">
      <StickyHeader />
      
      <main>
        <DynamicHero />
        <LPSections />
        <ConversationalForm />
      </main>
      
      <footer className="bg-[#0f172a] text-slate-400 py-12 text-center text-sm border-t border-slate-800">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-6">
               <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-[#000080] text-yellow-400 rounded-lg flex items-center justify-center font-black text-xl italic border-b-2 border-yellow-400">
                    U
                  </div>
                  <span className="text-xl font-bold text-white tracking-tighter">UPSET</span>
              </div>
          </div>
          <div className="flex justify-center gap-6 mb-8 text-xs font-medium">
            <a href="#" className="hover:text-white transition-colors">運営会社</a>
            <a href="#" className="hover:text-white transition-colors">プライバシーポリシー</a>
            <a href="#" className="hover:text-white transition-colors">利用規約</a>
            <a href="#" className="hover:text-white transition-colors">お問い合わせ</a>
          </div>
          <p className="opacity-50">&copy; {new Date().getFullYear()} UPSET Inc. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;