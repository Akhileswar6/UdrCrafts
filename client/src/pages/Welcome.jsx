import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Sparkles, Clock, FileText, IdCard, MapPin, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Welcome = () => {
  const navigate = useNavigate();

  const steps = [
    {
      title: 'Basic information',
      time: 'Takes about 1 min',
      icon: <FileText size={20} className="text-[#D97706]" strokeWidth={2} />,
    },
    {
      title: 'Government ID & PAN',
      time: 'Takes about 2 min',
      icon: <IdCard size={20} className="text-[#D97706]" strokeWidth={2} />,
    },
    {
      title: 'Driving license',
      time: 'Takes about 1 min',
      icon: <IdCard size={20} className="text-[#D97706]" strokeWidth={2} />,
    },
    {
      title: 'Location details',
      time: 'Takes about 1 min',
      icon: <MapPin size={20} className="text-[#D97706]" strokeWidth={2} />,
    },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-white font-sans px-6 py-8 pb-32" style={{fontFamily:"'Inter', sans-serif"}}>
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-md mx-auto"
      >
        {/* Top Tag */}
        <div className="inline-flex items-center gap-1.5 bg-[#FEF3C7] text-[#D97706] px-3 py-1.5 rounded-full mb-6">
          <Sparkles size={16} strokeWidth={2.5} />
          <span className="text-[13px] font-bold tracking-wide">Almost there</span>
        </div>

        {/* Header */}
        <h1 className="text-[36px] leading-tight font-extrabold text-[#012b39] tracking-tight mb-2">
          Welcome aboard!
        </h1>
        <p className="text-[17px] text-[#64748B] mb-8">
          Let's set up your partner profile. It only takes a few minutes.
        </p>

        {/* Estimated Time Card */}
        <div className="bg-[#122A30] rounded-[24px] p-6 mb-8 text-white shadow-lg">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-[#F59E0B] rounded-full flex items-center justify-center shrink-0">
              <Clock size={24} className="text-[#012b39]" strokeWidth={2.5} />
            </div>
            <div>
              <p className="text-[#94A3B8] text-[13px] font-bold uppercase tracking-wider mb-0.5">
                Estimated Time
              </p>
              <p className="text-[24px] font-bold tracking-tight">
                ~ 5 minutes
              </p>
            </div>
          </div>
          
          <div className="w-full bg-[#1F373E] h-2 rounded-full mb-3 overflow-hidden">
            <div className="bg-[#F59E0B] h-full w-[8%] rounded-full"></div>
          </div>
          
          <div className="flex justify-between items-center text-[13px] text-[#94A3B8] font-medium">
            <span>Step 1 of 6</span>
            <span>8% complete</span>
          </div>
        </div>

        {/* Steps List */}
        <div className="space-y-4">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="flex items-center gap-4 p-4 border border-[#E2E8F0] rounded-[20px] bg-white shadow-sm"
            >
              <div className="w-12 h-12 bg-[#FEF3C7] rounded-full flex items-center justify-center shrink-0">
                {step.icon}
              </div>
              <div>
                <h3 className="text-[17px] font-bold text-[#012b39]">
                  {step.title}
                </h3>
                <p className="text-[14px] text-[#64748B]">
                  {step.time}
                </p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Floating Action Button area */}
      <div className="fixed bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-white via-white to-transparent pb-8">
        <div className="max-w-md mx-auto">
          <button
            onClick={() => navigate('/basic-info')}
            className="w-full rounded-full py-[18px] text-[17px] font-bold transition-all bg-[#012b39] hover:bg-[#011c26] text-white active:scale-[0.98] shadow-lg flex items-center justify-center gap-2"
          >
            Start Onboarding <ArrowRight size={20} strokeWidth={2.5} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
