import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, User, IdCard, CarFront, MapPin, Check, Edit2, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const Review = () => {
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
            <div className="h-full bg-[#F59E0B] w-full rounded-full"></div>
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
            <div className="w-8 h-8 rounded-full bg-[#F59E0B] text-[#012b39] font-bold flex items-center justify-center shadow-sm">
              <Check size={16} strokeWidth={3} />
            </div>
            <span className="text-[11px] font-medium text-[#012b39]">Location</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-[#F59E0B] text-[#012b39] font-bold flex items-center justify-center text-sm shadow-sm">5</div>
            <span className="text-[11px] font-medium text-[#012b39]">Review</span>
          </div>
        </div>

        {/* Title */}
        <div className="mb-8">
          <h1 className="text-[28px] font-bold text-[#012b39] tracking-tight mb-2">
            Review your details
          </h1>
          <p className="text-[15px] text-[#64748B]">
            Make sure everything looks correct before we verify.
          </p>
        </div>

        <div className="space-y-4">
          
          {/* Card 1 */}
          <div className="border border-[#E2E8F0] rounded-3xl p-5 bg-white">
            <div className="flex items-center justify-between border-b border-[#F1F5F9] pb-4 mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#FEF3C7] flex items-center justify-center">
                  <User size={18} className="text-[#D97706]" strokeWidth={2.5} />
                </div>
                <h3 className="font-bold text-[#012b39] text-[16px]">Basic information</h3>
              </div>
              <button onClick={() => navigate('/basic-info')} className="bg-[#F8FAFC] text-[#334155] px-3 py-1.5 rounded-full text-[12px] font-bold flex items-center gap-1.5 hover:bg-gray-200 transition">
                <Edit2 size={12} strokeWidth={3} /> Edit
              </button>
            </div>
            
            <div className="space-y-3">
              <div className="flex justify-between items-center text-[14px]">
                <span className="text-[#64748B]">Full name</span>
                <span className="font-semibold text-[#012b39]">Akhileswar Kamale</span>
              </div>
              <div className="flex justify-between items-center text-[14px]">
                <span className="text-[#64748B]">Email</span>
                <span className="font-semibold text-[#012b39]">akhilkamale@gmail.com</span>
              </div>
              <div className="flex justify-between items-center text-[14px]">
                <span className="text-[#64748B]">Date of birth</span>
                <span className="font-semibold text-[#012b39]">1998-05-27</span>
              </div>
              <div className="flex justify-between items-center text-[14px]">
                <span className="text-[#64748B]">Gender</span>
                <span className="font-semibold text-[#012b39]">male</span>
              </div>
              <div className="flex justify-between items-center text-[14px]">
                <span className="text-[#64748B]">Emergency contact</span>
                <span className="font-semibold text-[#012b39]">+91 9392822250</span>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="border border-[#E2E8F0] rounded-3xl p-5 bg-white">
            <div className="flex items-center justify-between border-b border-[#F1F5F9] pb-4 mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#FEF3C7] flex items-center justify-center">
                  <IdCard size={18} className="text-[#D97706]" strokeWidth={2.5} />
                </div>
                <h3 className="font-bold text-[#012b39] text-[16px]">Government ID</h3>
              </div>
              <button onClick={() => navigate('/documents')} className="bg-[#F8FAFC] text-[#334155] px-3 py-1.5 rounded-full text-[12px] font-bold flex items-center gap-1.5 hover:bg-gray-200 transition">
                <Edit2 size={12} strokeWidth={3} /> Edit
              </button>
            </div>
            
            <div className="space-y-3">
              <div className="flex justify-between items-center text-[14px]">
                <span className="text-[#64748B]">Aadhaar</span>
                <span className="font-semibold text-[#012b39]">XXXX XXXX 6342</span>
              </div>
              <div className="flex justify-between items-center text-[14px]">
                <span className="text-[#64748B]">PAN</span>
                <span className="font-semibold text-[#012b39]">ABCDE4553Y</span>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="border border-[#E2E8F0] rounded-3xl p-5 bg-white">
            <div className="flex items-center justify-between border-b border-[#F1F5F9] pb-4 mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#FEF3C7] flex items-center justify-center">
                  <CarFront size={18} className="text-[#D97706]" strokeWidth={2.5} />
                </div>
                <h3 className="font-bold text-[#012b39] text-[16px]">Driving license</h3>
              </div>
              <button onClick={() => navigate('/license')} className="bg-[#F8FAFC] text-[#334155] px-3 py-1.5 rounded-full text-[12px] font-bold flex items-center gap-1.5 hover:bg-gray-200 transition">
                <Edit2 size={12} strokeWidth={3} /> Edit
              </button>
            </div>
            
            <div className="space-y-3">
              <div className="flex justify-between items-center text-[14px]">
                <span className="text-[#64748B]">License number</span>
                <span className="font-semibold text-[#012b39]">DL-01AB-2024-1234567</span>
              </div>
              <div className="flex justify-between items-center text-[14px]">
                <span className="text-[#64748B]">Expiry date</span>
                <span className="font-semibold text-[#012b39]">2026-07-31</span>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="border border-[#E2E8F0] rounded-3xl p-5 bg-white">
            <div className="flex items-center justify-between border-b border-[#F1F5F9] pb-4 mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#FEF3C7] flex items-center justify-center">
                  <MapPin size={18} className="text-[#D97706]" strokeWidth={2.5} />
                </div>
                <h3 className="font-bold text-[#012b39] text-[16px]">Location</h3>
              </div>
              <button onClick={() => navigate('/location')} className="bg-[#F8FAFC] text-[#334155] px-3 py-1.5 rounded-full text-[12px] font-bold flex items-center gap-1.5 hover:bg-gray-200 transition">
                <Edit2 size={12} strokeWidth={3} /> Edit
              </button>
            </div>
            
            <div className="space-y-3">
              <div className="flex justify-between items-center text-[14px]">
                <span className="text-[#64748B]">City</span>
                <span className="font-semibold text-[#012b39]">Bengaluru, Karnataka</span>
              </div>
              <div className="flex justify-between items-center text-[14px]">
                <span className="text-[#64748B]">Area</span>
                <span className="font-semibold text-[#012b39]">Indiranagar</span>
              </div>
              <div className="flex justify-between items-center text-[14px]">
                <span className="text-[#64748B]">Pincode</span>
                <span className="font-semibold text-[#012b39]">560038</span>
              </div>
            </div>
          </div>

          {/* Success Banner */}
          <div className="bg-[#DCFCE7] border border-[#BBF7D0] rounded-xl p-4 flex gap-2 items-center mt-6">
            <CheckCircle2 className="text-[#15803D] shrink-0" size={18} strokeWidth={2.5} />
            <p className="text-[14px] text-[#166534] font-medium">
              All documents verified. Ready to submit.
            </p>
          </div>

        </div>
      </motion.div>

      {/* Floating Action Button */}
      <div className="fixed bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-white via-white to-transparent pb-8">
        <div className="max-w-md mx-auto">
          <button
            onClick={() => navigate('/verification')}
            className="w-full rounded-full py-[16px] text-[17px] font-bold transition-all bg-[#012b39] hover:bg-[#011c26] text-white active:scale-[0.98] shadow-lg"
          >
            Submit for Verification
          </button>
        </div>
      </div>
    </div>
  );
};

export default Review;
