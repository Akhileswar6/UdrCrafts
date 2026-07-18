import React from 'react';
import { Check } from 'lucide-react';

const steps = [
  { id: 1, label: 'Basic' },
  { id: 2, label: 'Gov ID' },
  { id: 3, label: 'License' },
  { id: 4, label: 'Location' },
  { id: 5, label: 'Review' },
];

const Stepper = ({ currentStep }) => {
  return (
    <div className="flex items-center justify-between mb-10 relative px-2">
      {/* Background Line */}
      <div className="absolute top-4 left-8 right-8 h-1 bg-[#E2E8F0]"></div>
      
      {/* Active Progress Line */}
      <div 
        className="absolute top-4 left-8 h-1 bg-[#F8B500] transition-all duration-300 ease-in-out"
        style={{ width: `calc((100% - 4rem) * ${(currentStep - 1) / 4})` }}
      ></div>

      {steps.map((step) => {
        const isCompleted = step.id < currentStep;
        const isActive = step.id === currentStep;

        return (
          <div key={step.id} className="flex flex-col items-center gap-2 relative z-10">
            <div 
              className={`w-8 h-8 rounded-full flex items-center justify-center text-sm transition-colors ${
                isCompleted || isActive 
                  ? 'bg-[#F8B500] text-[#012b39] font-bold shadow-sm' 
                  : 'bg-[#F1F5F9] text-[#94A3B8]'
              }`}
            >
              {isCompleted ? <Check size={16} strokeWidth={3} /> : step.id}
            </div>
            <span 
              className={`text-[11px] ${
                isCompleted || isActive ? 'text-[#012b39] font-medium' : 'text-[#64748B]'
              }`}
            >
              {step.label}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default Stepper;
