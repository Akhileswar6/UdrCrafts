import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, UploadCloud, Check, X, Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';
import Stepper from '../components/Stepper';

const DrivingLicense = () => {
  const navigate = useNavigate();
  const [licenseData, setLicenseData] = useState({ number: '', expiry: '', front: null, back: null });
  const [isLicenseVerified, setIsLicenseVerified] = useState(false);
  const [isLicenseChecking, setIsLicenseChecking] = useState(false);

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
        <Stepper currentStep={3} />

        {/* Title */}
        <div className="mb-8">
          <h1 className="text-[28px] font-bold text-[#012b39] tracking-tight mb-2">
            Driving license
          </h1>
          <p className="text-[15px] text-[#64748B]">
            A valid two-wheeler or LMV license is required.
          </p>
        </div>

        <form className="space-y-6">
          {/* License Details Section */}
          <div className="border border-[#E2E8F0] rounded-2xl p-5 space-y-4">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-[16px] font-bold text-[#012b39]">License details</h3>
              {isLicenseChecking ? (
                <div className="bg-[#FEF9C3] text-[#CA8A04] px-2 py-1 rounded-md text-[11px] font-medium flex items-center gap-1">
                  <Loader2 size={12} className="animate-spin" /> Checking...
                </div>
              ) : isLicenseVerified ? (
                <div className="bg-[#DCFCE7] text-[#15803D] px-2 py-1 rounded-md text-[11px] font-medium flex items-center gap-1">
                  <Check size={12} strokeWidth={3} /> Verified
                </div>
              ) : null}
            </div>

            <div className="space-y-1.5">
              <label className="block text-[13px] text-[#012b39] font-medium">License number</label>
              <div className="flex rounded-xl border border-[#E2E8F0] overflow-hidden bg-white focus-within:border-[#94A3B8] transition-colors">
                <input
                  type="text"
                  value={licenseData.number}
                  onChange={(e) => setLicenseData({ ...licenseData, number: e.target.value })}
                  className="w-full px-4 py-2 outline-none text-[15px] text-[#012b39]"
                  placeholder="DL-01AB-2024-1234567"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="block text-[13px] text-[#012b39] font-medium">Expiry date</label>
              <div className="flex rounded-xl border border-[#E2E8F0] overflow-hidden bg-white focus-within:border-[#94A3B8] transition-colors">
                <input
                  type="date"
                  value={licenseData.expiry}
                  onChange={(e) => setLicenseData({ ...licenseData, expiry: e.target.value })}
                  className="w-full px-4 py-2 outline-none text-[15px] text-[#012b39]"
                />
              </div>
            </div>

            <div className="flex gap-3 pt-2">
              <div className="flex-1 space-y-1.5">
                <label className="block text-[13px] text-[#012b39] font-medium">Front</label>
                {licenseData.front ? (
                  <div className="relative w-full h-32 rounded-xl overflow-hidden border border-[#E2E8F0]">
                    <img src={licenseData.front} alt="License Front" className="w-full h-full object-cover" />
                    <button 
                      type="button"
                      onClick={() => setLicenseData({ ...licenseData, front: null })}
                      className="absolute top-2 right-2 w-7 h-7 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-100 transition-colors"
                    >
                      <X size={14} className="text-[#012b39]" />
                    </button>
                  </div>
                ) : (
                  <label className="border border-dashed border-[#CBD5E1] rounded-xl p-4 flex flex-col items-center justify-center gap-2 bg-[#F8FAFC] cursor-pointer hover:bg-gray-100 transition h-32">
                    <input type="file" className="hidden" accept="image/*,.pdf" onChange={(e) => { if (e.target.files.length > 0) setLicenseData({ ...licenseData, front: URL.createObjectURL(e.target.files[0]) }); }} />
                    <UploadCloud size={24} className="text-[#64748B]" />
                    <div className="text-center">
                      <p className="text-[12px] text-[#012b39] font-medium">Tap to upload</p>
                    </div>
                  </label>
                )}
              </div>
              <div className="flex-1 space-y-1.5">
                <label className="block text-[13px] text-[#012b39] font-medium">Back</label>
                {licenseData.back ? (
                  <div className="relative w-full h-32 rounded-xl overflow-hidden border border-[#E2E8F0]">
                    <img src={licenseData.back} alt="License Back" className="w-full h-full object-cover" />
                    <button 
                      type="button"
                      onClick={() => setLicenseData({ ...licenseData, back: null })}
                      className="absolute top-2 right-2 w-7 h-7 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-100 transition-colors"
                    >
                      <X size={14} className="text-[#012b39]" />
                    </button>
                  </div>
                ) : (
                  <label className="border border-dashed border-[#CBD5E1] rounded-xl p-4 flex flex-col items-center justify-center gap-2 bg-[#F8FAFC] cursor-pointer hover:bg-gray-100 transition h-32">
                    <input type="file" className="hidden" accept="image/*,.pdf" onChange={(e) => { if (e.target.files.length > 0) setLicenseData({ ...licenseData, back: URL.createObjectURL(e.target.files[0]) }); }} />
                    <UploadCloud size={24} className="text-[#64748B]" />
                    <div className="text-center">
                      <p className="text-[12px] text-[#012b39] font-medium">Tap to upload</p>
                    </div>
                  </label>
                )}
              </div>
            </div>

            {!isLicenseVerified && !isLicenseChecking && (
              <button
                type="button"
                onClick={() => {
                  if (licenseData.number && licenseData.expiry && licenseData.front && licenseData.back) {
                    setIsLicenseChecking(true);
                    setTimeout(() => {
                      setIsLicenseChecking(false);
                      setIsLicenseVerified(true);
                    }, 1500);
                  } else {
                    alert("Please enter license details and tap to upload both images first.");
                  }
                }}
                className="w-full py-[8px] rounded-full border border-[#012b39] text-[#012b39] text-[14px] font-medium hover:bg-gray-50 transition"
              >
                Verify License
              </button>
            )}
          </div>
        </form>

        {/* Action Button */}
        <div className="mt-8 pb-8">
          <button
            onClick={() => navigate('/location')}
            className="w-full rounded-full py-[12px] text-[15px] transition-all bg-[#012b39] hover:bg-[#011c26] text-white active:scale-[0.98] shadow-lg flex items-center justify-center gap-2"
          >
            Next <ArrowRight size={18} />
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default DrivingLicense;
