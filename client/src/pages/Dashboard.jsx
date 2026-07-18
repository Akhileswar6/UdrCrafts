import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Bell, LogOut, TrendingUp, Star, ShieldCheck, Box, Wallet, HeadphonesIcon, MapPin, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Dashboard = () => {
  const navigate = useNavigate();

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
        {/* Header */}
        <header className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-[#012b39] flex items-center justify-center text-[#F59E0B] font-bold text-lg shadow-sm">
              AK
            </div>
            <div>
              <p className="text-[13px] text-[#64748B] font-medium leading-tight mb-0.5">Welcome back</p>
              <h2 className="text-[18px] font-bold text-[#012b39] leading-tight">Akhileswar</h2>
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

        {/* Earnings Card */}
        <div className="bg-gradient-to-br from-[#012b39] to-[#0f4454] rounded-[28px] p-6 text-white mb-6 shadow-xl shadow-[#012b39]/20">
          <p className="text-[#94A3B8] text-[12px] font-bold uppercase tracking-wider mb-2">
            Today's Earnings
          </p>
          <h1 className="text-[44px] font-extrabold tracking-tight leading-none mb-4">
            ₹1,240
          </h1>
          
          <div className="flex items-center gap-4 mb-8">
            <div className="bg-[#3F3B20] text-[#EAB308] px-3 py-1.5 rounded-full text-[12px] font-bold flex items-center gap-1.5">
              <TrendingUp size={14} strokeWidth={3} /> +18% vs yesterday
            </div>
            <div className="flex items-center gap-1.5 text-[14px] font-bold">
              <Star size={16} className="text-[#F59E0B] fill-[#F59E0B]" /> 4.9 <span className="text-[#94A3B8] font-medium">/5</span>
            </div>
          </div>

          <div className="flex justify-between items-center border-t border-white/10 pt-5 px-2">
            <div className="text-center">
              <p className="text-[20px] font-bold leading-none mb-1">8</p>
              <p className="text-[#94A3B8] text-[10px] font-bold uppercase tracking-wider">Deliveries</p>
            </div>
            <div className="text-center">
              <p className="text-[20px] font-bold leading-none mb-1">4.5</p>
              <p className="text-[#94A3B8] text-[10px] font-bold uppercase tracking-wider">Hours</p>
            </div>
            <div className="text-center">
              <p className="text-[20px] font-bold leading-none mb-1">42 km</p>
              <p className="text-[#94A3B8] text-[10px] font-bold uppercase tracking-wider">Distance</p>
            </div>
          </div>
        </div>

        {/* Two Wide Cards */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="bg-white border border-[#E2E8F0] rounded-[20px] p-4 shadow-sm">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-full bg-[#DCFCE7] flex items-center justify-center">
                <ShieldCheck size={16} className="text-[#15803D]" strokeWidth={2.5} />
              </div>
              <span className="text-[13px] text-[#64748B]">Profile status</span>
            </div>
            <h3 className="text-[16px] font-bold text-[#012b39] mb-0.5">Verified</h3>
            <p className="text-[11px] text-[#94A3B8]">ID • SP-414906</p>
          </div>
          
          <div className="bg-white border border-[#E2E8F0] rounded-[20px] p-4 shadow-sm">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-full bg-[#DCFCE7] flex items-center justify-center">
                <Box size={16} className="text-[#15803D]" strokeWidth={2.5} />
              </div>
              <span className="text-[13px] text-[#64748B]">Documents</span>
            </div>
            <h3 className="text-[16px] font-bold text-[#012b39] mb-0.5">All Approved</h3>
          </div>
        </div>

        {/* Three Small Cards */}
        <div className="grid grid-cols-3 gap-3 mb-8">
          <div className="bg-white border border-[#E2E8F0] rounded-[20px] p-4 shadow-sm flex flex-col justify-between h-[100px]">
            <div className="w-8 h-8 rounded-full bg-[#FEF3C7] flex items-center justify-center">
              <Wallet size={16} className="text-[#D97706]" strokeWidth={2.5} />
            </div>
            <div>
              <p className="text-[12px] text-[#64748B] mb-0.5">Wallet</p>
              <p className="text-[15px] font-bold text-[#012b39] leading-none">₹4,320</p>
            </div>
          </div>
          
          <div className="bg-white border border-[#E2E8F0] rounded-[20px] p-4 shadow-sm flex flex-col justify-between h-[100px]">
            <div className="w-8 h-8 rounded-full bg-[#FEF3C7] flex items-center justify-center">
              <HeadphonesIcon size={16} className="text-[#D97706]" strokeWidth={2.5} />
            </div>
            <div>
              <p className="text-[12px] text-[#64748B] mb-0.5">Support</p>
              <p className="text-[15px] font-bold text-[#012b39] leading-none">24/7</p>
            </div>
          </div>
          
          <div className="bg-white border border-[#E2E8F0] rounded-[20px] p-4 shadow-sm flex flex-col justify-between h-[100px]">
            <div className="w-8 h-8 rounded-full bg-[#FEF3C7] flex items-center justify-center">
              <MapPin size={16} className="text-[#D97706]" strokeWidth={2.5} />
            </div>
            <div>
              <p className="text-[12px] text-[#64748B] mb-0.5">City</p>
              <p className="text-[15px] font-bold text-[#012b39] leading-none truncate">Bengaluru</p>
            </div>
          </div>
        </div>

        {/* Delivery Requests */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-[18px] font-bold text-[#012b39]">Delivery requests</h2>
          <button className="text-[#D97706] text-[13px] font-bold">See all</button>
        </div>

        <div className="space-y-4">
          {requests.map((req, i) => (
            <div key={i} className="bg-white border border-[#E2E8F0] rounded-[24px] p-5 shadow-sm">
              <div className="flex justify-between items-start mb-2">
                <div className="flex items-center gap-2">
                  <span className="bg-[#FEF3C7] text-[#D97706] text-[10px] font-bold px-2 py-1 rounded-full uppercase">New</span>
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
                <button className="bg-[#012b39] hover:bg-[#011c26] text-white px-5 py-2.5 rounded-full text-[14px] font-bold flex items-center gap-1 active:scale-[0.98] transition-transform">
                  Accept <ChevronRight size={16} strokeWidth={3} />
                </button>
              </div>
            </div>
          ))}
        </div>

      </motion.div>
    </div>
  );
};

export default Dashboard;
