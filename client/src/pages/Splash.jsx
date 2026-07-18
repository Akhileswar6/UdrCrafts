import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Splash = () => {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen flex-col bg-white font-sans text-gray-900 selection:bg-yellow-400 selection:text-black" style={{ fontFamily: "'Inter', sans-serif" }}>

      {/* 
        ========================================
        Top Navigation Bar
        ========================================
      */}
      <div className="w-full px-6 pt-8 pb-4 flex justify-between items-center max-w-md mx-auto">
        <div className="font-medium text-[24px] text-[#012b39] tracking-tight leading-tight mt-1">
          <span className="">UdrCrafts</span>
          <sup className="relative -top-2 ml-[1px] text-[0.4em] font-bold ">
            &reg;
          </sup>
        </div>
        <button
          onClick={() => navigate('/login')}
          className="text-[#64748B] px-5 py-2 rounded-full text-[14px]  hover:text-[#012b39]"
        >
          Sign in
        </button>
      </div>

      {/* 
        ========================================
        Main Content Section
        ========================================
      */}
      <div className="px-6 pt-10 flex-1 flex flex-col items-center text-center bg-white w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="w-full max-w-md mx-auto flex flex-col items-center"
        >
          <h2 className="text-[42px] leading-[1.1] font-bold tracking-tight mb-5">
            <span className="text-[#012b39]">Become a</span><br />
            <span className="text-[#F8B500]">Shipping Partner</span>
          </h2>


          <p className="text-[15px] text-[#64748B] mb-10 px-2 leading-relaxed">
            Deliver with flexibility, earn on your schedule, and grow with a network trusted across the country.
          </p>

          <div className="flex justify-center gap-3 w-full mb-12">
            {/* Box 1 */}
            <div className="flex-1 bg-white border border-[#E2E8F0] rounded-[24px] py-5 flex flex-col items-center justify-center shadow-sm">
              <h4 className="text-[20px] font-medium  text-[#012b39]">50k+</h4>
              <p className="text-[12px] text-[#94A3B8]  mt-0.5">Partners</p>
            </div>
            {/* Box 2 */}
            <div className="flex-1 bg-white border border-[#E2E8F0] rounded-[24px] py-5 flex flex-col items-center justify-center shadow-sm">
              <h4 className="text-[20px] font-medium  text-[#012b39]">₹40k</h4>
              <p className="text-[12px] text-[#94A3B8] mt-0.5">Avg / mo</p>
            </div>
            {/* Box 3 */}
            <div className="flex-1 bg-white border border-[#E2E8F0] rounded-[24px] py-5 flex flex-col items-center justify-center shadow-sm">
              <h4 className="text-[20px] font-medium text-[#012b39] flex items-center gap-0.5">4.8<span>★</span></h4>
              <p className="text-[12px] text-[#94A3B8] mt-0.5">Rated</p>
            </div>
          </div>

          <button
            onClick={() => navigate('/login')}
            className="w-full bg-[#012b39] hover:bg-[#011c26] text-white rounded-full py-[10px] text-[17px] flex items-center justify-center gap-2 transition-all active:scale-[0.98] shadow-lg shadow-[#012b39]/10"
          >
            Get Started <ArrowRight size={20} strokeWidth={2.5} />
          </button>

          <p className="text-[13px] text-[#94A3B8] mt-6  mb-20">
            By continuing you agree to our <a href="#" className="underline text-[#64748B] hover:text-[#012b39]">Terms</a> & <a href="#" className="underline text-[#64748B] hover:text-[#012b39]">Privacy</a>
          </p>
        </motion.div>
      </div>

    </div>
  );
};

export default Splash;
