import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Bell, LogOut, TrendingUp, Star, ShieldCheck, Box, Wallet, HeadphonesIcon, MapPin, ChevronRight, ChevronDown, X } from 'lucide-react';
import { motion } from 'framer-motion';
import useStore from '../store/useStore';

const Dashboard = () => {
  const navigate = useNavigate();
  const { basicInfo, documents, license, setFullProfile } = useStore();
  const [showDocsModal, setShowDocsModal] = useState(false);
  const firstName = basicInfo.fullName ? basicInfo.fullName.split(' ')[0] : 'Akhileswar';
  const initials = basicInfo.fullName ? basicInfo.fullName.substring(0, 2).toUpperCase() : 'AK';

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) return;
        const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000';
        const res = await fetch(`${apiUrl}/api/partner/profile`, {
          headers: { 'Authorization': `Bearer ${token}` }
        });
        if (res.ok) {
          const data = await res.json();
          setFullProfile(data);
        }
      } catch (error) {
        console.error('Error fetching profile:', error);
      }
    };
    fetchProfile();
  }, [setFullProfile]);

  const requests = [
    { id: 'ORD-8821', from: 'Indiranagar', to: 'Whitefield', distance: '12.4 km', amount: '₹180' },
    { id: 'ORD-8822', from: 'HSR Layout', to: 'Koramangala', distance: '4.8 km', amount: '₹90' },
    { id: 'ORD-8823', from: 'MG Road', to: 'Yelahanka', distance: '18.2 km', amount: '₹240' },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-[#FFFCF5] font-sans px-6 py-8 pb-32" style={{fontFamily:"'Inter', sans-serif"}}>
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-md mx-auto"
      >
                <header className="flex justify-between items-center mb-8">
          <div 
            onClick={() => navigate('/profile')} 
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-full bg-[#012b39] flex items-center justify-center text-[#F59E0B] font-medium text-md shadow-sm group-hover:opacity-90 transition-opacity">
              {initials}
            </div>
            <div>
              <p className="text-[13px] text-[#64748B] font-medium leading-tight mb-0.5">Welcome back</p>
              <div className="flex items-center gap-1">
                <h2 className="text-[17px] font-medium text-[#012b39] leading-tight">{firstName} </h2>
                <ChevronDown size={16} className="text-[#64748B] mt-0.5 group-hover:text-[#012b39] transition-colors" />
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button className="w-10 h-10 rounded-full border border-[#E2E8F0] flex items-center justify-center text-[#012b39] bg-white shadow-sm hover:bg-gray-50">
              <Bell size={18} />
            </button>
            <button onClick={() => navigate('/login')} className="w-10 h-10 rounded-full border border-[#E2E8F0] flex items-center justify-center text-[#012b39] bg-white shadow-sm hover:bg-gray-50">
              <LogOut size={18} />
            </button>
          </div>
        </header>

                <div className="bg-gradient-to-br from-[#012b39] to-[#0f4454] rounded-[28px] p-6 text-white mb-6 shadow-xl shadow-[#012b39]/20">
          <p className="text-[#94A3B8] text-[12px] font-medium uppercase tracking-wider mb-2">
            Today's Earnings
          </p>
          <h1 className="text-[44px] font-bold tracking-tight leading-none mb-4">
            ₹1,240
          </h1>
          
          <div className="flex items-center gap-4 mb-8">
            <div className="bg-[#3F3B20] text-[#EAB308] px-3 py-1.5 rounded-full text-[12px] font-medium flex items-center gap-1.5">
              <TrendingUp size={14} strokeWidth={3} /> +18% vs yesterday
            </div>
            <div className="flex items-center gap-1.5 text-[14px] font-medium">
              <Star size={16} className="text-[#F59E0B] fill-[#F59E0B]" /> 4.9 <span className="text-[#94A3B8] font-medium">/ 5</span>
            </div>
          </div>

          <div className="flex justify-between items-center border-t border-white/10 pt-5 px-2">
            <div className="text-center">
              <p className="text-[20px] font-medium leading-none mb-1">8</p>
              <p className="text-[#94A3B8] text-[10px] font-medium uppercase tracking-wider">Deliveries</p>
            </div>
            <div className="text-center">
              <p className="text-[20px] font-medium leading-none mb-1">4.5</p>
              <p className="text-[#94A3B8] text-[10px] font-medium uppercase tracking-wider">Hours</p>
            </div>
            <div className="text-center">
              <p className="text-[20px] font-medium leading-none mb-1">42 km</p>
              <p className="text-[#94A3B8] text-[10px] font-medium uppercase tracking-wider">Distance</p>
            </div>
          </div>
        </div>

                <div className="grid grid-cols-2 gap-4 mb-4">
          <div onClick={() => navigate('/profile')} className="bg-white border border-[#E2E8F0] rounded-[20px] p-4 shadow-sm cursor-pointer hover:border-[#94A3B8] transition-colors">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-full bg-[#DCFCE7] flex items-center justify-center">
                <ShieldCheck size={16} className="text-[#15803D]" strokeWidth={2.5} />
              </div>
              <span className="text-[13px] text-[#64748B]">Profile status</span>
            </div>
            <h3 className="text-[16px] font-medium text-[#012b39] mb-0.5">Verified</h3>
            <p className="text-[11px] text-[#94A3B8]">ID • SP-414906</p>
          </div>
          
          <div onClick={() => setShowDocsModal(true)} className="bg-white border border-[#E2E8F0] rounded-[20px] p-4 shadow-sm cursor-pointer hover:border-[#94A3B8] transition-colors">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-full bg-[#DCFCE7] flex items-center justify-center">
                <Box size={16} className="text-[#15803D]" strokeWidth={2.5} />
              </div>
              <span className="text-[13px] text-[#64748B]">Documents</span>
            </div>
            <h3 className="text-[16px] font-medium text-[#012b39] mb-0.5">All Approved</h3>
          </div>
        </div>

                <div className="grid grid-cols-3 gap-3 mb-8">
          <div className="bg-white border border-[#E2E8F0] rounded-[20px] p-4 shadow-sm flex flex-col justify-between h-[100px]">
            <div className="w-8 h-8 rounded-full bg-[#FEF3C7] flex items-center justify-center">
              <Wallet size={16} className="text-[#D97706]" strokeWidth={2.5} />
            </div>
            <div>
              <p className="text-[12px] text-[#64748B] mb-0.5">Wallet</p>
              <p className="text-[15px] font-medium text-[#012b39]">₹4,320</p>
            </div>
          </div>
          
          <div className="bg-white border border-[#E2E8F0] rounded-[20px] p-4 shadow-sm flex flex-col justify-between h-[100px]">
            <div className="w-8 h-8 rounded-full bg-[#FEF3C7] flex items-center justify-center">
              <HeadphonesIcon size={16} className="text-[#D97706]" strokeWidth={2.5} />
            </div>
            <div>
              <p className="text-[12px] text-[#64748B] mb-0.5">Support</p>
              <p className="text-[15px] font-medium text-[#012b39] ">24/7</p>
            </div>
          </div>
          
          <div className="bg-white border border-[#E2E8F0] rounded-[20px] p-4 shadow-sm flex flex-col justify-between h-[100px]">
            <div className="w-8 h-8 rounded-full bg-[#FEF3C7] flex items-center justify-center">
              <MapPin size={16} className="text-[#D97706]" strokeWidth={2.5} />
            </div>
            <div>
              <p className="text-[12px] text-[#64748B] mb-0.5">City</p>
              <p className="text-[15px] font-medium text-[#012b39]  truncate">Bengaluru</p>
            </div>
          </div>
        </div>

                <div className="flex justify-between items-center mb-4">
          <h2 className="text-[18px] font-semibold text-[#012b39]">Delivery requests</h2>
          <button className="text-[#D97706] text-[13px] font-medium">See all</button>
        </div>

        <div className="space-y-4">
          {requests.map((req, i) => (
            <div key={i} className="bg-white border border-[#E2E8F0] rounded-[24px] p-5 shadow-sm">
              <div className="flex justify-between items-start mb-2">
                <div className="flex items-center gap-2">
                  <span className="bg-[#FEF3C7] text-[#D97706] text-[10px] font-medium px-2 py-1 rounded-full uppercase">New</span>
                  <span className="text-[13px] text-[#94A3B8] font-medium">{req.id}</span>
                </div>
                <span className="text-[20px] font-bold text-[#012b39]">{req.amount}</span>
              </div>
              
              <div className="flex justify-between items-end mt-3">
                <div>
                  <h3 className="text-[15px] font-semibold text-[#012b39] mb-1">
                    {req.from} <span className="text-[#94A3B8] font-normal mx-1">→</span> {req.to}
                  </h3>
                  <p className="text-[13px] text-[#64748B]">{req.distance}</p>
                </div>
                <button className="bg-[#012b39] hover:bg-[#011c26] text-white px-4 py-1.5 rounded-full text-[13px] font-medium flex items-center gap-1 active:scale-[0.98] transition-transform">
                  Accept <ChevronRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>

      </motion.div>

            {showDocsModal && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-2xl w-full max-w-md max-h-[85vh] overflow-y-auto p-6"
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-[20px] font-bold text-[#012b39]">Uploaded Documents</h2>
              <button onClick={() => setShowDocsModal(false)} className="p-2 bg-gray-100 rounded-full text-gray-500 hover:bg-gray-200 transition-colors">
                <X size={18} />
              </button>
            </div>
            
            <div className="space-y-6">
              {documents.aadhaarFront && (
                <div>
                  <h3 className="text-[14px] font-medium text-[#64748B] mb-2">Aadhaar Front</h3>
                  <img src={documents.aadhaarFront} alt="Aadhaar Front" className="w-full h-auto rounded-xl border border-[#E2E8F0]" />
                </div>
              )}
              {documents.aadhaarBack && (
                <div>
                  <h3 className="text-[14px] font-medium text-[#64748B] mb-2">Aadhaar Back</h3>
                  <img src={documents.aadhaarBack} alt="Aadhaar Back" className="w-full h-auto rounded-xl border border-[#E2E8F0]" />
                </div>
              )}
              {documents.panImage && (
                <div>
                  <h3 className="text-[14px] font-medium text-[#64748B] mb-2">PAN Card</h3>
                  <img src={documents.panImage} alt="PAN Card" className="w-full h-auto rounded-xl border border-[#E2E8F0]" />
                </div>
              )}
              {license.frontImage && (
                <div>
                  <h3 className="text-[14px] font-medium text-[#64748B] mb-2">Driving License Front</h3>
                  <img src={license.frontImage} alt="License Front" className="w-full h-auto rounded-xl border border-[#E2E8F0]" />
                </div>
              )}
              {license.backImage && (
                <div>
                  <h3 className="text-[14px] font-medium text-[#64748B] mb-2">Driving License Back</h3>
                  <img src={license.backImage} alt="License Back" className="w-full h-auto rounded-xl border border-[#E2E8F0]" />
                </div>
              )}
              {!documents.aadhaarFront && !documents.panImage && !license.frontImage && (
                <p className="text-center text-[#64748B] py-8 text-[14px]">No documents uploaded yet.</p>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
