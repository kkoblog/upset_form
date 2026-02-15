import logo2 from '../assets/images/upset_logo2.png';
import React, { useState } from 'react';
import { FormData, INITIAL_DATA } from '../types';
import { StepTiming } from './StepTiming';
import { StepConcerns } from './StepConcerns';
import { StepQualify1 } from './StepQualify1';
import { StepContact } from './StepContact';
import { StepSuccess } from './StepSuccess';
import { ChevronRight } from 'lucide-react';

export const ConversationalForm: React.FC = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>(INITIAL_DATA);

  const updateData = (fields: Partial<FormData>) => {
    setFormData(prev => ({ ...prev, ...fields }));
  };

  const nextStep = () => setStep(prev => prev + 1);
  const prevStep = () => setStep(prev => prev - 1);

  // Total steps for user facing flow (excluding Success)
  const TOTAL_STEPS = 4;

  return (
    <div id="contact-form" className="relative z-20 pb-24 bg-slate-50 pt-10">
      <div className="max-w-3xl mx-auto px-4">
        
        {/* Step Indicator (Workport Style) */}
        {step <= TOTAL_STEPS && (
          <div className="flex items-center justify-center mb-10">
            {[1, 2, 3, 4].map((num) => {
              const isActive = step === num;
              const isPast = step > num;
              return (
                <div key={num} className="flex items-center">
                  <div className={`
                    w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg border-2 z-10 transition-all duration-300
                    ${isActive || isPast ? 'bg-[#000080] border-[#000080] text-white' : 'bg-white border-slate-200 text-slate-300'}
                  `}>
                    {num}
                  </div>
                  {num < TOTAL_STEPS && (
                    <div className={`h-1 w-8 md:w-16 transition-colors duration-300 ${isPast ? 'bg-[#000080]' : 'bg-slate-200'}`} />
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* Step Label Display */}
        {step <= TOTAL_STEPS && (
           <div className="text-center mb-8">
               <span className="text-[#000080] font-bold tracking-widest text-sm bg-blue-50 px-4 py-1 rounded-full border border-blue-100">
                  {step === 1 && "STEP 1. 希望時期"}
                  {step === 2 && "STEP 2. 重視点"}
                  {step === 3 && "STEP 3. プロフィール"}
                  {step === 4 && "STEP 4. 連絡先"}
               </span>
           </div>
        )}

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100 min-h-[500px] relative">
          <div className="p-6 md:p-12">
            
            {step === 1 && (
              <StepTiming 
                data={formData} 
                updateData={updateData} 
                onNext={nextStep} 
              />
            )}

            {step === 2 && (
              <StepConcerns 
                data={formData} 
                updateData={updateData} 
                onNext={nextStep} 
                onBack={prevStep}
              />
            )}

            {step === 3 && (
              <StepQualify1 
                data={formData} 
                updateData={updateData} 
                onNext={nextStep}
                onBack={prevStep}
              />
            )}

            {step === 4 && (
              <StepContact 
                data={formData} 
                updateData={updateData} 
                onNext={nextStep} 
                onBack={prevStep}
              />
            )}

            {step === 5 && (
              <StepSuccess />
            )}

          </div>
          
          <div className="flex items-center justify-center gap-2">
  <img
    src={logo2}
    alt="UPSET"
    className="h-6 w-auto"
  />
  <span className="text-xs text-slate-400 font-bold">
    20代・30代特化の転職エージェント「UPSET」
  </span>
</div>

        </div>
      </div>
    </div>
  );
};