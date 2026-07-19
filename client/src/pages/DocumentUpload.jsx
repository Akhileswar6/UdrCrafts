import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, UploadCloud, ShieldCheck, X, Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';
import Stepper from '../components/Stepper';
import useStore from '../store/useStore';

const DocumentUpload = () => {
  const navigate = useNavigate();
  const { documents, setDocuments } = useStore();
  const [aadhaarData, setAadhaarData] = useState({ number: documents.aadhaar || '', front: null, back: null });
  const [panData, setPanData] = useState({ number: documents.pan || '', image: null });
  const [isAadhaarVerified, setIsAadhaarVerified] = useState(false);
  const [isAadhaarChecking, setIsAadhaarChecking] = useState(false);
  const [isPanVerified, setIsPanVerified] = useState(false);
  const [isPanChecking, setIsPanChecking] = useState(false);
  const [uploading, setUploading] = useState({ aadhaarFront: false, aadhaarBack: false, pan: false });

  const handleFileUpload = (e, field, callback) => {
    const file = e.target.files[0];
    if (file) {
      setUploading(prev => ({ ...prev, [field]: true }));
      const reader = new FileReader();
      reader.onloadend = () => {
        setTimeout(() => {
          callback(reader.result);
          setUploading(prev => ({ ...prev, [field]: false }));
        }, 1500);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-white font-sans px-6 py-6 pb-32" style={{fontFamily:"'Inter', sans-serif"}}>
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-md mx-auto"
      >
                  <button onClick={() => navigate(-1)} className="w-24 h-11 flex items-center justify-center rounded-full hover:bg-gray-50 transition-colors -ml-4 gap-1 mb-4">
            <ArrowLeft size={16} className="text-[#475569]"  /> <span className='text-[#475569] text-[14px]'>Back</span>
          </button>

                <Stepper currentStep={2} />

                <div className="mb-8">
          <h1 className="text-[28px] font-bold text-[#012b39] tracking-tight mb-2">
            Government ID
          </h1>
          <p className="text-[15px] text-[#64748B]">
            Verify your identity to continue.
          </p>
        </div>

        <form className="space-y-6">
                    <div className="border border-[#E2E8F0] rounded-2xl p-5 space-y-4">
            <div className="flex justify-between items-center mb-1">
              <h3 className="text-[16px] font-bold text-[#012b39]">Aadhaar Card</h3>
              {isAadhaarChecking ? (
                <div className="bg-[#FEF9C3] text-[#CA8A04] px-2 py-1 rounded-md text-[11px] font-medium flex items-center gap-1">
                  <Loader2 size={12} className="animate-spin" /> Checking...
                </div>
              ) : isAadhaarVerified ? (
                <div className="bg-[#DCFCE7] text-[#15803D] px-2 py-1 rounded-md text-[11px] font-medium flex items-center gap-1">
                  <ShieldCheck size={14} strokeWidth={2.5} /> Verified
                </div>
              ) : null}
            </div>

            <div className="space-y-1.5">
              <label className="block text-[13px] text-[#012b39] font-medium">Aadhaar number</label>
              <div className="flex rounded-xl border border-[#E2E8F0] overflow-hidden bg-white focus-within:border-[#94A3B8] transition-colors">
                <input
                  type="text"
                  maxLength={12}
                  value={aadhaarData.number}
                  onChange={(e) => setAadhaarData({ ...aadhaarData, number: e.target.value.replace(/\D/g, '') })}
                  className="w-full px-4 py-2 outline-none text-[15px] text-[#012b39]"
                  placeholder="12-Digit Aadhaar"
                />
              </div>
            </div>

            <div className="flex gap-3">
              <div className="flex-1 space-y-1.5">
                <label className="block text-[13px] text-[#012b39] font-medium">Front</label>
                {uploading.aadhaarFront ? (
                  <div className="border border-dashed border-[#CBD5E1] bg-[#F8FAFC] rounded-xl p-4 flex flex-col items-center justify-center gap-3 h-32">
                    <Loader2 size={24} className="text-[#F8B500] animate-spin" />
                    <div className="w-full max-w-[120px] bg-gray-200 rounded-full h-1.5 overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 1.5, ease: "linear" }}
                        className="bg-[#012b39] h-1.5 rounded-full"
                      />
                    </div>
                    <span className="text-[12px] font-medium text-[#012b39]">Uploading...</span>
                  </div>
                ) : aadhaarData.front ? (
                  <div className="relative w-full h-32 rounded-xl overflow-hidden border border-[#E2E8F0]">
                    <img src={aadhaarData.front} alt="Aadhaar Front" className="w-full h-full object-cover" />
                    <button 
                      type="button"
                      onClick={() => setAadhaarData({ ...aadhaarData, front: null })}
                      className="absolute top-2 right-2 w-7 h-7 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-100 transition-colors"
                    >
                      <X size={14} className="text-[#012b39]" />
                    </button>
                  </div>
                ) : (
                  <label className="border border-dashed border-[#CBD5E1] bg-[#F8FAFC] hover:bg-gray-100 rounded-xl p-4 flex flex-col items-center justify-center gap-2 cursor-pointer transition h-32">
                    <input type="file" className="hidden" accept="image/*,.pdf" onChange={(e) => handleFileUpload(e, 'aadhaarFront', (base64) => setAadhaarData({ ...aadhaarData, front: base64 }))} />
                    <UploadCloud size={24} className="text-[#64748B]" />
                    <div className="text-center">
                      <p className="text-[12px] font-medium text-[#012b39]">Tap to upload</p>
                    </div>
                  </label>
                )}
              </div>
              <div className="flex-1 space-y-1.5">
                <label className="block text-[13px] text-[#012b39] font-medium">Back</label>
                {uploading.aadhaarBack ? (
                  <div className="border border-dashed border-[#CBD5E1] bg-[#F8FAFC] rounded-xl p-4 flex flex-col items-center justify-center gap-3 h-32">
                    <Loader2 size={24} className="text-[#F8B500] animate-spin" />
                    <div className="w-full max-w-[120px] bg-gray-200 rounded-full h-1.5 overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 1.5, ease: "linear" }}
                        className="bg-[#012b39] h-1.5 rounded-full"
                      />
                    </div>
                    <span className="text-[12px] font-medium text-[#012b39]">Uploading...</span>
                  </div>
                ) : aadhaarData.back ? (
                  <div className="relative w-full h-32 rounded-xl overflow-hidden border border-[#E2E8F0]">
                    <img src={aadhaarData.back} alt="Aadhaar Back" className="w-full h-full object-cover" />
                    <button 
                      type="button"
                      onClick={() => setAadhaarData({ ...aadhaarData, back: null })}
                      className="absolute top-2 right-2 w-7 h-7 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-100 transition-colors"
                    >
                      <X size={14} className="text-[#012b39]" />
                    </button>
                  </div>
                ) : (
                  <label className="border border-dashed border-[#CBD5E1] bg-[#F8FAFC] hover:bg-gray-100 rounded-xl p-4 flex flex-col items-center justify-center gap-2 cursor-pointer transition h-32">
                    <input type="file" className="hidden" accept="image/*,.pdf" onChange={(e) => handleFileUpload(e, 'aadhaarBack', (base64) => setAadhaarData({ ...aadhaarData, back: base64 }))} />
                    <UploadCloud size={24} className="text-[#64748B]" />
                    <div className="text-center">
                      <p className="text-[12px] font-medium text-[#012b39]">Tap to upload</p>
                    </div>
                  </label>
                )}
              </div>
            </div>

            {!isAadhaarVerified && !isAadhaarChecking && (
              <button
                type="button"
                onClick={() => {
                  if (aadhaarData.number && aadhaarData.front && aadhaarData.back) {
                    setIsAadhaarChecking(true);
                    setTimeout(() => {
                      setIsAadhaarChecking(false);
                      setIsAadhaarVerified(true);
                    }, 1500);
                  } else {
                    alert("Please enter Aadhaar number and tap to upload both images first.");
                  }
                }}
                className="w-full py-[8px] rounded-full border border-[#012b39] text-[#012b39] text-[14px] font-medium hover:bg-gray-50 transition"
              >
                Verify Aadhaar
              </button>
            )}
          </div>

                    <div className="border border-[#E2E8F0] rounded-2xl p-5 space-y-4">
            <div className="flex justify-between items-center mb-1">
              <h3 className="text-[16px] font-bold text-[#012b39]">PAN Card</h3>
              {isPanChecking ? (
                <div className="bg-[#FEF9C3] text-[#CA8A04] px-2 py-1 rounded-md text-[11px] font-medium flex items-center gap-1">
                  <Loader2 size={12} className="animate-spin" /> Checking...
                </div>
              ) : isPanVerified ? (
                <div className="bg-[#DCFCE7] text-[#15803D] px-2 py-1 rounded-md text-[11px] font-medium flex items-center gap-1">
                  <ShieldCheck size={14} strokeWidth={2.5} /> Verified
                </div>
              ) : null}
            </div>

            <div className="space-y-1.5">
              <label className="block text-[13px] text-[#012b39] font-medium">PAN number</label>
              <div className="flex rounded-xl border border-[#E2E8F0] overflow-hidden bg-white focus-within:border-[#94A3B8] transition-colors">
                <input
                  type="text"
                  value={panData.number}
                  onChange={(e) => setPanData({ ...panData, number: e.target.value })}
                  className="w-full px-4 py-2 outline-none text-[15px] text-[#012b39]"
                  placeholder="ABCDE4553Y"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="block text-[13px] text-[#012b39] font-medium">Upload PAN</label>
              {uploading.pan ? (
                <div className="border border-dashed border-[#CBD5E1] bg-[#F8FAFC] rounded-xl p-6 flex flex-col items-center justify-center gap-3 h-40">
                  <Loader2 size={24} className="text-[#F8B500] animate-spin" />
                  <div className="w-full max-w-[120px] bg-gray-200 rounded-full h-1.5 overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 1.5, ease: "linear" }}
                      className="bg-[#012b39] h-1.5 rounded-full"
                    />
                  </div>
                  <span className="text-[12px] font-medium text-[#012b39]">Uploading...</span>
                </div>
              ) : panData.image ? (
                <div className="relative w-full h-40 rounded-xl overflow-hidden border border-[#E2E8F0]">
                  <img src={panData.image} alt="PAN Card" className="w-full h-full object-cover" />
                  <button 
                    type="button"
                    onClick={() => setPanData({ ...panData, image: null })}
                    className="absolute top-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-100 transition-colors"
                  >
                    <X size={16} className="text-[#012b39]" />
                  </button>
                </div>
              ) : (
                <label className="border border-dashed border-[#CBD5E1] bg-[#F8FAFC] hover:bg-gray-100 rounded-xl p-6 flex flex-col items-center justify-center gap-2 cursor-pointer transition h-40">
                  <input type="file" className="hidden" accept="image/*,.pdf" onChange={(e) => handleFileUpload(e, 'pan', (base64) => setPanData({ ...panData, image: base64 }))} />
                  <UploadCloud size={24} className="text-[#64748B]" />
                  <div className="text-center">
                    <p className="text-[12px] font-medium text-[#012b39]">Tap to upload</p>
                  </div>
                </label>
              )}
            </div>

            {!isPanVerified && !isPanChecking && (
              <button
                type="button"
                onClick={() => {
                  if (panData.number && panData.image) {
                    setIsPanChecking(true);
                    setTimeout(() => {
                      setIsPanChecking(false);
                      setIsPanVerified(true);
                    }, 1500);
                  } else {
                    alert("Please enter PAN number and tap to upload the image first.");
                  }
                }}
                className="w-full py-[8px] rounded-full border border-[#012b39] text-[#012b39] text-[14px] font-medium hover:bg-gray-50 transition"
              >
                Verify PAN
              </button>
            )}
          </div>

        </form>

                <div className="mt-8 pb-8">
          <button
            onClick={() => {
              setDocuments({ 
                aadhaar: aadhaarData.number, 
                pan: panData.number,
                aadhaarFront: aadhaarData.front,
                aadhaarBack: aadhaarData.back,
                panImage: panData.image
              });
              navigate('/license');
            }}
            className="w-full rounded-full py-[12px] text-[15px] transition-all bg-[#012b39] hover:bg-[#011c26] text-white active:scale-[0.98] shadow-lg flex items-center justify-center gap-2"
          >
            Next <ArrowRight size={18} />
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default DocumentUpload;
