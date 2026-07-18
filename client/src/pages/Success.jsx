import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Check, Copy, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Success = () => {
  const navigate = useNavigate();

  const handleCopy = () => {
    navigator.clipboard.writeText('SP-414906');
    alert('Partner ID Copied!');
  };

  return (
    <div className="flex min-h-screen flex-col bg-[#FFFCF5] font-sans items-center justify-center px-6 py-6" style={{fontFamily:"'Inter', sans-serif"}}>
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md mx-auto flex flex-col items-center text-center"
      >
        {/* Success Checkmark */}
        <div className="w-[110px] h-[110px] bg-[#22C55E] rounded-full flex items-center justify-center mb-8 shadow-xl shadow-[#22C55E]/20">
          <Check size={56} className="text-white" strokeWidth={3.5} />
        </div>

        {/* Title */}
        <h1 className="text-[36px] font-extrabold text-[#012b39] tracking-tight mb-4 leading-tight">
          Profile created!
        </h1>
        <p className="text-[17px] text-[#64748B] mb-10 leading-relaxed px-2">
          Welcome to the network, Akhileswar. Your account is verified and ready to go.
        </p>

        {/* Partner ID Card */}
        <div className="w-full bg-[#FFFCF5] border border-[#E2E8F0] rounded-[24px] p-6 mb-10 shadow-sm relative overflow-hidden">
          <p className="text-[12px] font-bold text-[#94A3B8] tracking-wider uppercase mb-2">
            Your Partner ID
          </p>
          <div className="flex items-center justify-between">
            <span className="text-[28px] font-extrabold text-[#012b39] tracking-tight">
              SP-414906
            </span>
            <button 
              onClick={handleCopy}
              className="w-10 h-10 rounded-full bg-[#FEF3C7] flex items-center justify-center text-[#D97706] hover:bg-[#FDE68A] transition-colors"
            >
              <Copy size={18} strokeWidth={2.5} />
            </button>
          </div>
        </div>

        {/* Actions */}
        <div className="w-full space-y-4">
          <button
            onClick={() => navigate('/dashboard')}
            className="w-full rounded-full py-[18px] text-[17px] font-bold transition-all bg-[#012b39] hover:bg-[#011c26] text-white active:scale-[0.98] shadow-lg flex items-center justify-center gap-2"
          >
            Go to Dashboard <ArrowRight size={20} strokeWidth={2.5} />
          </button>
          
          <button 
            onClick={() => navigate('/')}
            className="text-[15px] text-[#64748B] font-medium underline hover:text-[#012b39] transition-colors"
          >
            Back to home
          </button>
        </div>

      </motion.div>
    </div>
  );
};

export default Success;
