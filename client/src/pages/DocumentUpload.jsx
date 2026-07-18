import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, UploadCloud, Check } from 'lucide-react';
import { motion } from 'framer-motion';

const DocumentUpload = () => {
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
            <div className="h-full bg-[#F59E0B] w-1/4 rounded-full"></div>
          </div>
          
          <div className="flex flex-col items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-[#F59E0B] text-[#012b39] font-bold flex items-center justify-center shadow-sm">
              <Check size={16} strokeWidth={3} />
            </div>
            <span className="text-[11px] font-medium text-[#012b39]">Basic</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-[#F59E0B] text-[#012b39] font-bold flex items-center justify-center text-sm shadow-sm">2</div>
            <span className="text-[11px] font-medium text-[#012b39]">Gov ID</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-[#F1F5F9] text-[#94A3B8] font-bold flex items-center justify-center text-sm">3</div>
            <span className="text-[11px] font-medium text-[#64748B]">License</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-[#F1F5F9] text-[#94A3B8] font-bold flex items-center justify-center text-sm">4</div>
            <span className="text-[11px] font-medium text-[#64748B]">Location</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-[#F1F5F9] text-[#94A3B8] font-bold flex items-center justify-center text-sm">5</div>
            <span className="text-[11px] font-medium text-[#64748B]">Review</span>
          </div>
        </div>

        {/* Title */}
        <div className="mb-8">
          <h1 className="text-[28px] font-bold text-[#012b39] tracking-tight mb-2">
            Government ID
          </h1>
          <p className="text-[15px] text-[#64748B]">
            Verify your identity to continue.
          </p>
        </div>

        <form className="space-y-6">
          {/* Aadhaar Card Section */}
          <div className="border border-[#E2E8F0] rounded-2xl p-5 space-y-4">
            <div className="flex justify-between items-center mb-1">
              <h3 className="text-[16px] font-bold text-[#012b39]">Aadhaar Card</h3>
              <div className="bg-[#DCFCE7] text-[#15803D] px-2 py-1 rounded-md text-[11px] font-bold flex items-center gap-1">
                <Check size={12} strokeWidth={3} /> Verified
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="block text-[13px] text-[#012b39] font-medium">Aadhaar number</label>
              <div className="flex rounded-xl border border-[#E2E8F0] overflow-hidden bg-white">
                <input
                  type="text"
                  className="w-full px-4 py-3 outline-none text-[15px] text-[#012b39]"
                  placeholder="347437676342"
                  defaultValue="347437676342"
                />
              </div>
            </div>

            <div className="flex gap-3">
              <div className="flex-1 space-y-1.5">
                <label className="block text-[13px] text-[#012b39] font-medium">Front</label>
                <div className="border border-dashed border-[#CBD5E1] rounded-xl p-4 flex flex-col items-center justify-center gap-2 bg-[#F8FAFC] cursor-pointer hover:bg-gray-100 transition">
                  <UploadCloud size={24} className="text-[#64748B]" />
                  <div className="text-center">
                    <p className="text-[12px] text-[#012b39] font-medium">Tap to upload or drag & drop</p>
                    <p className="text-[10px] text-[#94A3B8]">JPG, PNG or PDF - up to 5MB</p>
                  </div>
                </div>
              </div>
              <div className="flex-1 space-y-1.5">
                <label className="block text-[13px] text-[#012b39] font-medium">Back</label>
                <div className="border border-dashed border-[#CBD5E1] rounded-xl p-4 flex flex-col items-center justify-center gap-2 bg-[#F8FAFC] cursor-pointer hover:bg-gray-100 transition">
                  <UploadCloud size={24} className="text-[#64748B]" />
                  <div className="text-center">
                    <p className="text-[12px] text-[#012b39] font-medium">Tap to upload or drag & drop</p>
                    <p className="text-[10px] text-[#94A3B8]">JPG, PNG or PDF - up to 5MB</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* PAN Card Section */}
          <div className="border border-[#E2E8F0] rounded-2xl p-5 space-y-4">
            <div className="flex justify-between items-center mb-1">
              <h3 className="text-[16px] font-bold text-[#012b39]">PAN Card</h3>
              <div className="bg-[#DCFCE7] text-[#15803D] px-2 py-1 rounded-md text-[11px] font-bold flex items-center gap-1">
                <Check size={12} strokeWidth={3} /> Verified
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="block text-[13px] text-[#012b39] font-medium">PAN number</label>
              <div className="flex rounded-xl border border-[#E2E8F0] overflow-hidden bg-white">
                <input
                  type="text"
                  className="w-full px-4 py-3 outline-none text-[15px] text-[#012b39]"
                  placeholder="ABCDE4553Y"
                  defaultValue="ABCDE4553Y"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="block text-[13px] text-[#012b39] font-medium">Upload PAN</label>
              <div className="border border-dashed border-[#CBD5E1] rounded-xl p-6 flex flex-col items-center justify-center gap-2 bg-[#F8FAFC] cursor-pointer hover:bg-gray-100 transition">
                <UploadCloud size={24} className="text-[#64748B]" />
                <div className="text-center">
                  <p className="text-[12px] text-[#012b39] font-medium">Tap to upload or drag & drop</p>
                  <p className="text-[10px] text-[#94A3B8]">JPG, PNG or PDF - up to 5MB</p>
                </div>
              </div>
            </div>
          </div>

        </form>
      </motion.div>

      {/* Floating Action Button */}
      <div className="fixed bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-white via-white to-transparent pb-8">
        <div className="max-w-md mx-auto">
          <button
            onClick={() => navigate('/license')}
            className="w-full rounded-full py-[16px] text-[17px] font-bold transition-all bg-[#012b39] hover:bg-[#011c26] text-white active:scale-[0.98] shadow-lg flex items-center justify-center gap-2"
          >
            Next <ArrowRight size={20} strokeWidth={2.5} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default DocumentUpload;
