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
    <div className="flex min-h-screen flex-col bg-white font-sans px-6 py-8 pb-32" style={{ fontFamily: "'Inter', sans-serif" }}>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-md mx-auto"
      >

        <div className="font-medium text-[24px] text-[#012b39] tracking-tight leading-tight mt-1 mb-10">
          <span className="">UdrCrafts</span>
          <sup className="relative -top-2 ml-[1px] text-[0.4em] font-bold ">
            &reg;
          </sup>
        </div>

                <h1 className="text-[32px] font-bold text-[#012b39] tracking-tight mb-2">
          Welcome <span className="text-[#F8B500]">Aboard!</span>
        </h1>
        <p className="text-[15px] text-[#64748B] mb-8">
          Let's set up your partner profile. It only takes a few minutes.
        </p>

                <div className="bg-[#122A30] rounded-[24px] p-6 mb-8 text-white shadow-lg">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-[#F59E0B] rounded-full flex items-center justify-center shrink-0">
              <Clock size={24} className="text-[#012b39]" strokeWidth={2.5} />
            </div>
            <div>
              <p className="text-[#94A3B8] text-[13px] font-medium uppercase tracking-wider mb-0.5">
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
                <h3 className="text-[15px] font-medium  text-[#012b39]">
                  {step.title}
                </h3>
                <p className="text-[13px] text-[#64748B]">
                  {step.time}
                </p>
              </div>
            </div>
          ))}
        </div>

                <div className="mt-12 pb-8">
          <button
            onClick={() => navigate('/basic-info')}
            className="w-full rounded-full py-[10px] text-[17px] transition-all bg-[#012b39] hover:bg-[#011c26] text-white active:scale-[0.98] shadow-lg flex items-center justify-center gap-2"
          >
            Start Onboarding
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Welcome;
