import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Shield, Check, Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';

const Verification = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    'Basic information',
    'Aadhaar verification',
    'PAN verification',
    'Driving license',
    'Location details'
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentStep((prev) => {
        if (prev >= steps.length) {
          clearInterval(timer);
          setTimeout(() => navigate('/success'), 500);
          return prev;
        }
        return prev + 1;
      });
    }, 1200);

    return () => clearInterval(timer);
  }, [navigate, steps.length]);

  return (
    <div className="flex min-h-screen flex-col bg-[#FFFCF5] font-sans items-center justify-center px-6 py-6" style={{fontFamily:"'Inter', sans-serif"}}>
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md mx-auto flex flex-col items-center"
      >
        {/* Shield Icon Area */}
        <div className="relative mb-8">
          <div className="absolute inset-0 border-[3px] border-dashed border-[#FCD34D] rounded-full animate-[spin_10s_linear_infinite]"></div>
          <div className="w-[80px] h-[80px] bg-[#F59E0B] rounded-full flex items-center justify-center m-2 shadow-lg shadow-[#F59E0B]/20">
            <Shield size={36} className="text-[#012b39]" strokeWidth={2.5} />
          </div>
        </div>

        {/* Title */}
        <div className="text-center mb-8">
          <h1 className="text-[24px] font-bold text-[#012b39] tracking-tight mb-2">
            Verifying your details
          </h1>
          <p className="text-[14px] text-[#64748B]">
            Sit tight — this only takes a moment.
          </p>
        </div>

        {/* Status Card */}
        <div className="w-full bg-white border border-[#E2E8F0] rounded-2xl p-5 shadow-sm mb-8">
          <div className="space-y-4">
            {steps.map((step, index) => {
              const isCompleted = index < currentStep;
              const isCurrent = index === currentStep;
              
              return (
                <div key={index} className="flex items-center gap-3">
                  {isCompleted ? (
                    <div className="w-5 h-5 rounded-full bg-[#22C55E] flex items-center justify-center shrink-0">
                      <Check size={12} className="text-white" strokeWidth={3} />
                    </div>
                  ) : isCurrent ? (
                    <div className="w-5 h-5 shrink-0 flex items-center justify-center">
                      <Loader2 size={18} className="text-[#F59E0B] animate-spin" strokeWidth={2.5} />
                    </div>
                  ) : (
                    <div className="w-5 h-5 rounded-full border-2 border-[#E2E8F0] shrink-0"></div>
                  )}
                  
                  <span className={`text-[14px] font-medium transition-colors ${isCompleted ? 'text-[#012b39]' : isCurrent ? 'text-[#012b39] font-bold' : 'text-[#94A3B8]'}`}>
                    {step}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full h-1.5 bg-[#F1F5F9] rounded-full overflow-hidden">
          <motion.div 
            className="h-full bg-[#F59E0B] rounded-full"
            initial={{ width: '0%' }}
            animate={{ width: `${(currentStep / steps.length) * 100}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>

      </motion.div>
    </div>
  );
};

export default Verification;
