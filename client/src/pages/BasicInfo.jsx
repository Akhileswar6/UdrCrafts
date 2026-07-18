import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Calendar, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

const BasicInfo = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    dob: '',
    gender: 'Male',
    emergencyContact: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNext = (e) => {
    e.preventDefault();
    navigate('/documents');
  };

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
          <div className="absolute top-4 left-6 right-6 h-[3px] bg-[#F8FAFC] -z-10"></div>
          
          <div className="flex flex-col items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-[#F59E0B] text-[#012b39] font-bold flex items-center justify-center text-sm shadow-sm">1</div>
            <span className="text-[11px] font-medium text-[#012b39]">Basic</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-[#F1F5F9] text-[#94A3B8] font-bold flex items-center justify-center text-sm">2</div>
            <span className="text-[11px] font-medium text-[#64748B]">Gov ID</span>
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
            Basic information
          </h1>
          <p className="text-[15px] text-[#64748B]">
            Tell us a bit about yourself.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleNext} className="space-y-5">
          
          {/* Full Name */}
          <div className="space-y-1.5">
            <label className="block text-[14px] text-[#012b39] font-medium">
              Full name
            </label>
            <div className="flex rounded-xl border border-[#E2E8F0] overflow-hidden focus-within:border-[#94A3B8] transition-colors bg-white">
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full px-4 py-3.5 outline-none text-[16px] text-[#012b39] placeholder-[#94A3B8]"
                placeholder="Akhileswar Kamale"
                required
              />
            </div>
          </div>

          {/* Email */}
          <div className="space-y-1.5">
            <label className="block text-[14px] text-[#012b39] font-medium">
              Email
            </label>
            <div className="flex rounded-xl border border-[#E2E8F0] overflow-hidden focus-within:border-[#94A3B8] transition-colors bg-white">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3.5 outline-none text-[16px] text-[#012b39] placeholder-[#94A3B8]"
                placeholder="akhilkamale@gmail.com"
                required
              />
            </div>
          </div>

          {/* DOB and Gender Row */}
          <div className="flex gap-4">
            <div className="space-y-1.5 flex-1">
              <label className="block text-[14px] text-[#012b39] font-medium">
                Date of birth
              </label>
              <div className="relative flex rounded-xl border border-[#E2E8F0] overflow-hidden focus-within:border-[#94A3B8] transition-colors bg-white items-center pr-4">
                <input
                  type="date"
                  name="dob"
                  value={formData.dob}
                  onChange={handleChange}
                  className="w-full pl-4 py-3.5 outline-none text-[16px] text-[#012b39] bg-transparent [&::-webkit-calendar-picker-indicator]:opacity-0 [&::-webkit-calendar-picker-indicator]:absolute [&::-webkit-calendar-picker-indicator]:w-full"
                  required
                />
                <Calendar size={18} className="text-[#012b39] pointer-events-none" />
              </div>
            </div>

            <div className="space-y-1.5 flex-1">
              <label className="block text-[14px] text-[#012b39] font-medium">
                Gender
              </label>
              <div className="relative flex rounded-xl border border-[#E2E8F0] overflow-hidden focus-within:border-[#94A3B8] transition-colors bg-white items-center pr-4">
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  className="w-full pl-4 py-3.5 outline-none text-[16px] text-[#012b39] bg-transparent appearance-none"
                  required
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
                <ChevronDown size={18} className="text-[#012b39] pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Emergency Contact */}
          <div className="space-y-1.5">
            <label className="block text-[14px] text-[#012b39] font-medium">
              Emergency contact
            </label>
            <div className="flex rounded-xl border border-[#E2E8F0] overflow-hidden focus-within:border-[#94A3B8] transition-colors bg-white">
              <div className="flex items-center justify-center px-4 border-r border-[#E2E8F0] bg-white">
                <span className="font-medium text-[#012b39] text-[15px]">+91</span>
              </div>
              <input
                type="tel"
                name="emergencyContact"
                maxLength="10"
                value={formData.emergencyContact}
                onChange={(e) => setFormData({ ...formData, emergencyContact: e.target.value.replace(/\D/g, '') })}
                className="w-full px-4 py-3.5 outline-none text-[16px] text-[#012b39] placeholder-[#94A3B8]"
                placeholder="9392822250"
                required
              />
            </div>
          </div>

        </form>
      </motion.div>

      {/* Floating Action Button */}
      <div className="fixed bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-white via-white to-transparent pb-8">
        <div className="max-w-md mx-auto">
          <button
            onClick={handleNext}
            className="w-full rounded-full py-[16px] text-[17px] font-bold transition-all bg-[#012b39] hover:bg-[#011c26] text-white active:scale-[0.98] shadow-lg flex items-center justify-center gap-2"
          >
            Next <ArrowRight size={20} strokeWidth={2.5} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BasicInfo;
