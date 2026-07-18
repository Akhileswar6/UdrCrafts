import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Calendar, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import Stepper from '../components/Stepper';

const BasicInfo = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    dob: '',
    gender: 'Male',
    emergencyContact: ''
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' });
    }
  };

  const handleNext = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!formData.fullName) newErrors.fullName = 'Enter your full name';
    if (!formData.email) newErrors.email = 'Enter a valid email';
    if (!formData.dob) newErrors.dob = 'Select your date of birth';
    if (!formData.gender) newErrors.gender = 'Select a gender';
    if (!formData.emergencyContact || formData.emergencyContact.length !== 10) newErrors.emergencyContact = 'Enter a 10-digit contact';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setErrors({});
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
          <button onClick={() => navigate(-1)} className="w-24 h-11 flex items-center justify-center rounded-full hover:bg-gray-50 transition-colors -ml-4 gap-1 mb-4">
            <ArrowLeft size={16} className="text-[#475569]"  /> <span className='text-[#475569] text-[14px]'>Back</span>
          </button>

        {/* Stepper */}
        <Stepper currentStep={1} />

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
            <div className={`flex rounded-xl border ${errors.fullName ? 'border-red-500' : 'border-[#E2E8F0]'} overflow-hidden focus-within:border-[#94A3B8] transition-colors bg-white`}>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full px-4 py-2 outline-none text-[15px] text-[#012b39] placeholder-[#94A3B8]"
                placeholder="Full Name"
                required
              />
            </div>
            {errors.fullName && <p className="text-red-400 text-[12px]">{errors.fullName}</p>}
          </div>

          {/* Email */}
          <div className="space-y-1.5">
            <label className="block text-[14px] text-[#012b39] font-medium">
              Email
            </label>
            <div className={`flex rounded-xl border ${errors.email ? 'border-red-500' : 'border-[#E2E8F0]'} overflow-hidden focus-within:border-[#94A3B8] transition-colors bg-white`}>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 outline-none text-[15px] text-[#012b39] placeholder-[#94A3B8]"
                placeholder="Email Address"
                required
              />
            </div>
            {errors.email && <p className="text-red-400 text-[12px]">{errors.email}</p>}
          </div>

          {/* DOB and Gender Row */}
          <div className="flex gap-4">
            <div className="space-y-1.5 flex-1">
              <label className="block text-[14px] text-[#012b39] font-medium">
                Date of birth
              </label>
              <div className={`relative flex rounded-xl border ${errors.dob ? 'border-red-500' : 'border-[#E2E8F0]'} overflow-hidden focus-within:border-[#94A3B8] transition-colors bg-white items-center pr-4`}>
                <input
                  type="date"
                  name="dob"
                  value={formData.dob}
                  onChange={handleChange}
                  className="w-full pl-4 py-2 outline-none text-[15px] text-[#012b39] bg-transparent [&::-webkit-calendar-picker-indicator]:opacity-0 [&::-webkit-calendar-picker-indicator]:absolute [&::-webkit-calendar-picker-indicator]:w-full"
                  required
                />
                <Calendar size={18} className="text-[#012b39] pointer-events-none" />
              </div>
              {errors.dob && <p className="text-red-400 text-[12px]">{errors.dob}</p>}
            </div>

            <div className="space-y-1.5 flex-1">
              <label className="block text-[14px] text-[#012b39] font-medium mb-1">
                Gender
              </label>
              <div className="flex gap-2">
                {['Male', 'Female', 'Other'].map((g) => (
                  <button
                    type="button"
                    key={g}
                    onClick={() => {
                      setFormData({ ...formData, gender: g });
                      if (errors.gender) setErrors({ ...errors, gender: '' });
                    }}
                    className={`flex-1 py-[9px] rounded-xl border text-[13px] font-medium transition-colors ${
                      formData.gender === g
                        ? 'border-[#012b39] bg-[#012b39] text-white'
                        : errors.gender ? 'border-red-500 bg-white text-red-500' : 'border-[#E2E8F0] bg-white text-[#64748B] hover:border-[#94A3B8]'
                    }`}
                  >
                    {g}
                  </button>
                ))}
              </div>
              {errors.gender && <p className="text-red-400 text-[12px]">{errors.gender}</p>}
            </div>
          </div>

          {/* Emergency Contact */}
          <div className="space-y-1.5">
            <label className="block text-[14px] text-[#012b39] font-medium">
              Emergency contact
            </label>
            <div className={`flex rounded-xl border ${errors.emergencyContact ? 'border-red-500' : 'border-[#E2E8F0]'} overflow-hidden focus-within:border-[#94A3B8] transition-colors bg-white`}>
              <div className="flex items-center justify-center px-4 border-r border-[#E2E8F0] bg-white">
                <span className="font-medium text-[#012b39] text-[15px]">+91</span>
              </div>
              <input
                type="tel"
                name="emergencyContact"
                maxLength="10"
                value={formData.emergencyContact}
                onChange={(e) => {
                  setFormData({ ...formData, emergencyContact: e.target.value.replace(/\D/g, '') });
                  if (errors.emergencyContact) setErrors({ ...errors, emergencyContact: '' });
                }}
                className="w-full px-4 py-2 outline-none text-[15px] text-[#012b39] placeholder-[#94A3B8]"
                placeholder="9876543210"
                required
              />
            </div>
            {errors.emergencyContact && <p className="text-red-400 text-[12px]">{errors.emergencyContact}</p>}
          </div>

        </form>

        {/* Action Button */}
        <div className="mt-12 pb-8">
          <button
            onClick={handleNext}
            className="w-full rounded-full py-[12px] text-[15px] transition-all bg-[#012b39] hover:bg-[#011c26] text-white active:scale-[0.98] shadow-lg flex items-center justify-center gap-2"
          >
            Next <ArrowRight size={18} />
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default BasicInfo;
