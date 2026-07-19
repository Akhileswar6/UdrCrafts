import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Phone, Lock, ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';

const Login = () => {
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    if (phone.length !== 10) {
      setError('Please enter a valid 10-digit phone number');
      return;
    }
    if (!agreed) {
      setError('Please agree to the Terms of Service & Privacy Policy');
      return;
    }

    setError('');
    setIsLoading(true);

    try {

      const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000';
      const response = await fetch(`${apiUrl}/api/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phone })
      });
      const data = await response.json();

      if (response.ok) {
        navigate('/otp', { state: { phone, mockOtp: data.mockOtp } });
      } else {
        setError(data.message || 'Login failed');
      }
    } catch (err) {
      setError('Network error. Is the backend running?');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-white items-center font-sans px-6" style={{ fontFamily: "'Inter', sans-serif" }}>
      <div className="w-full max-w-md mt-8 flex items-center">
        <button onClick={() => navigate(-1)} className="w-24 h-11 flex items-center justify-center rounded-full hover:bg-gray-50 transition-colors -ml-4 gap-1">
          <ArrowLeft size={16} className="text-[#475569]" /> <span className='text-[#475569] text-[14px]'>Back</span>
        </button>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-md mt-6"
      >

                <div className="text-center mb-10 space-y-2">
          <h1 className="text-[32px] font-bold text-[#012b39] tracking-tight">
            Enter your mobile number
          </h1>
          <p className="text-sm text-[#64748B]">
            We'll send you a 6-digit code to verify.
          </p>
        </div>

                <form onSubmit={handleLogin} className="space-y-6">
          <div className="space-y-2">
            <label className="block text-[15px] text-[#012b39] font-medium">
              Mobile number
            </label>
            <div className="flex rounded-full border border-[#E2E8F0] overflow-hidden focus-within:border-[#94A3B8] transition-colors bg-white">
              <div className="flex items-center justify-center px-4 border-r border-[#E2E8F0]">
                <div className="flex items-center gap-1.5 leading-tight">
                  <span className="font-bold text-[#012b39] text-[15px] tracking-wide">IN</span>
                  <span className="font-semibold text-[#012b39] text-[15px] tracking-wide">+91</span>
                </div>
              </div>
              <input
                type="tel"
                maxLength="10"
                value={phone}
                onChange={(e) => setPhone(e.target.value.replace(/\D/g, ''))}
                className="w-full px-5 py-[12px] outline-none text-[15px] text-[#012b39] placeholder-[#94A3B8] shadow-md"
                placeholder="986543210"
              />
            </div>
            {error && <p className="text-sm text-red-500 font-medium pl-1">{error}</p>}
          </div>

          <div className="flex items-center gap-3 pt-1">
            <input
              type="checkbox"
              id="terms"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
              className="w-4 h-4 rounded border-[#CBD5E1] text-[#EAB308] accent-[#EAB308] focus:ring-0 cursor-pointer"
            />
            <label htmlFor="terms" className="text-[13px] text-[#475569] cursor-pointer">
              I agree to the <span className=" underline text-[#012b39]">Terms of Service</span> & <span className="underline text-[#012b39]">Privacy Policy</span>.
            </label>
          </div>

                    <div className="bg-[#DCFCE7] border border-[#BBF7D0] rounded-xl px-4 py-3 flex gap-2.5 items-center justify-center mt-3 mx-1">
            <Lock className="text-[#15803D] shrink-0" size={16} strokeWidth={2.5} />
            <p className="text-[13px] text-[#166534] font-medium leading-tight">
              Your information is secure
            </p>
          </div>

          <div className="pt-6">
            <button
              type="submit"
              disabled={isLoading || phone.length !== 10 || !agreed}
              className={`w-full rounded-full py-[10px] text-[17px]  transition-all mb-10 ${isLoading || phone.length !== 10 || !agreed
                  ? 'bg-[#83959A] text-white opacity-90 cursor-not-allowed'
                  : 'bg-[#012b39] hover:bg-[#011c26] text-white active:scale-[0.98]'
                }`}
            >
              {isLoading ? 'Sending...' : 'Continue'}
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default Login;
