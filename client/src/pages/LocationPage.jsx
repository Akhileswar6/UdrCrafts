import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, MapPin, Check, Navigation } from 'lucide-react';
import { motion } from 'framer-motion';

const LocationPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen flex-col bg-white font-sans px-6 py-6 pb-32" style={{fontFamily:"'Inter', sans-serif"}}>
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-md mx-auto"
      >
        {/* Back Button */}
        <button 
          onClick={() => navigate(-1)}
          className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-[#012b39] mb-8 hover:bg-gray-50 transition"
        >
          <ArrowLeft size={20} strokeWidth={2} />
        </button>

        {/* Stepper */}
        <div className="flex items-center justify-between mb-10 relative px-2">
          {/* Connecting Line */}
          <div className="absolute top-4 left-6 right-6 h-[3px] bg-[#F8FAFC] -z-10">
            <div className="h-full bg-[#F59E0B] w-3/4 rounded-full"></div>
          </div>
          
          <div className="flex flex-col items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-[#F59E0B] text-[#012b39] font-bold flex items-center justify-center shadow-sm">
              <Check size={16} strokeWidth={3} />
            </div>
            <span className="text-[11px] font-medium text-[#012b39]">Basic</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-[#F59E0B] text-[#012b39] font-bold flex items-center justify-center shadow-sm">
              <Check size={16} strokeWidth={3} />
            </div>
            <span className="text-[11px] font-medium text-[#012b39]">Gov ID</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-[#F59E0B] text-[#012b39] font-bold flex items-center justify-center shadow-sm">
              <Check size={16} strokeWidth={3} />
            </div>
            <span className="text-[11px] font-medium text-[#012b39]">License</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-[#F59E0B] text-[#012b39] font-bold flex items-center justify-center text-sm shadow-sm">4</div>
            <span className="text-[11px] font-medium text-[#012b39]">Location</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-[#F1F5F9] text-[#94A3B8] font-bold flex items-center justify-center text-sm">5</div>
            <span className="text-[11px] font-medium text-[#64748B]">Review</span>
          </div>
        </div>

        {/* Title */}
        <div className="mb-8">
          <h1 className="text-[28px] font-bold text-[#012b39] tracking-tight mb-2">
            Your service location
          </h1>
          <p className="text-[15px] text-[#64748B]">
            Where would you like to deliver?
          </p>
        </div>

        {/* Map Placeholder */}
        <div className="relative w-full h-48 bg-[#FEF9C3] rounded-3xl mb-8 flex items-center justify-center overflow-hidden border border-[#FEF08A] shadow-inner" style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(253,230,138,0.3) 10px, rgba(253,230,138,0.3) 20px)' }}>
          <div className="w-12 h-12 bg-[#012b39] rounded-full flex items-center justify-center shadow-lg relative z-10">
            <MapPin size={24} className="text-[#F59E0B]" strokeWidth={2.5} />
          </div>
          <button className="absolute bottom-4 right-4 bg-[#012b39] text-white text-[13px] font-bold px-4 py-2 rounded-full flex items-center gap-2 shadow-lg">
            <Navigation size={14} /> Use current location
          </button>
        </div>

        <form className="space-y-5">
          <div className="flex gap-4">
            <div className="space-y-1.5 flex-1">
              <label className="block text-[13px] text-[#012b39] font-medium">State</label>
              <div className="flex rounded-xl border border-[#E2E8F0] overflow-hidden bg-white focus-within:border-[#94A3B8] transition-colors">
                <input
                  type="text"
                  className="w-full px-4 py-3 outline-none text-[15px] text-[#012b39]"
                  placeholder="Karnataka"
                  defaultValue="Karnataka"
                />
              </div>
            </div>
            <div className="space-y-1.5 flex-1">
              <label className="block text-[13px] text-[#012b39] font-medium">City</label>
              <div className="flex rounded-xl border border-[#E2E8F0] overflow-hidden bg-white focus-within:border-[#94A3B8] transition-colors">
                <input
                  type="text"
                  className="w-full px-4 py-3 outline-none text-[15px] text-[#012b39]"
                  placeholder="Bengaluru"
                  defaultValue="Bengaluru"
                />
              </div>
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="block text-[13px] text-[#012b39] font-medium">Area / Locality</label>
            <div className="flex rounded-xl border border-[#E2E8F0] overflow-hidden bg-white focus-within:border-[#94A3B8] transition-colors">
              <input
                type="text"
                className="w-full px-4 py-3 outline-none text-[15px] text-[#012b39]"
                placeholder="Indiranagar"
                defaultValue="Indiranagar"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="block text-[13px] text-[#012b39] font-medium">Pincode</label>
            <div className="flex rounded-xl border border-[#E2E8F0] overflow-hidden bg-white focus-within:border-[#94A3B8] transition-colors">
              <input
                type="text"
                className="w-full px-4 py-3 outline-none text-[15px] text-[#012b39]"
                placeholder="560038"
                defaultValue="560038"
              />
            </div>
          </div>
        </form>
      </motion.div>

      {/* Floating Action Button */}
      <div className="fixed bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-white via-white to-transparent pb-8">
        <div className="max-w-md mx-auto">
          <button
            onClick={() => navigate('/review')}
            className="w-full rounded-full py-[16px] text-[17px] font-bold transition-all bg-[#012b39] hover:bg-[#011c26] text-white active:scale-[0.98] shadow-lg flex items-center justify-center gap-2"
          >
            Review details <ArrowRight size={20} strokeWidth={2.5} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default LocationPage;
