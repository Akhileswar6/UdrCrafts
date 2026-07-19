import React, { useState, useRef, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';

const OTP = () => {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [countdown, setCountdown] = useState(30);
  const inputRefs = useRef([]);

  const location = useLocation();
  const navigate = useNavigate();

  const phone = location.state?.phone || '0000000000';
  const mockOtp = location.state?.mockOtp;


  useEffect(() => {
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, []);


  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [countdown]);

  const executeVerification = async (otpValue) => {
    if (otpValue.length !== 6) return;

    setError('');
    setIsLoading(true);

    try {
      const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000';
      const response = await fetch(`${apiUrl}/api/auth/verify-otp`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phone, otp: otpValue })
      });
      const data = await response.json();

      if (response.ok) {
        localStorage.setItem('token', data.token);


        setTimeout(() => {
          if (data.isNew || !data.partner.profileCompleted) {
            navigate('/welcome');
          } else {
            navigate('/dashboard');
          }
        }, 800);
      } else {
        setError(data.message || 'Verification failed');
        setIsLoading(false);
      }
    } catch (err) {
      setError('Network error. Is the backend running?');
      setIsLoading(false);
    }
  };

  const handleChange = (index, e) => {
    const value = e.target.value;
    if (isNaN(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value.substring(value.length - 1);
    setOtp(newOtp);


    if (value && index < 5 && inputRefs.current[index + 1]) {
      inputRefs.current[index + 1].focus();
    }


    if (newOtp.join('').length === 6) {

      setTimeout(() => {
        executeVerification(newOtp.join(''));
      }, 0);
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0 && inputRefs.current[index - 1]) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleVerify = (e) => {
    if (e) e.preventDefault();
    const otpValue = otp.join('');
    if (otpValue.length !== 6) {
      setError('Please enter all 6 digits');
      return;
    }
    executeVerification(otpValue);
  };

  return (
    <div className="flex min-h-screen flex-col bg-white items-center font-sans px-6" style={{ fontFamily: "'Inter', sans-serif" }}>
      <div className="w-full max-w-md mt-8 flex items-center">
        <button onClick={() => navigate(-1)} className="w-24 h-11 flex items-center justify-center rounded-full hover:bg-gray-50 transition-colors -ml-4 gap-1">
          <ArrowLeft size={16} className="text-[#475569]" /> <span className="text-[#475569] text-[14px]">Back</span>
        </button>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-md mt-6"
      >
        <div className="text-center mb-10 space-y-2">
          <h1 className="text-[32px] font-bold text-[#012b39] tracking-tight">Verify your number</h1>
          <p className="text-[15px] text-[#64748B]">
            We sent a 6-digit code to +91 {phone}
          </p>
          {mockOtp && <p className="text-[14px] text-[#F8B500] pt-1">Demo OTP: {mockOtp}</p>}
        </div>

        <form onSubmit={handleVerify} className="space-y-10">
          <div>
            <div className="flex justify-center gap-1.5 px-2">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  ref={(el) => (inputRefs.current[index] = el)}
                  type="text"
                  maxLength="1"
                  value={digit}
                  onChange={(e) => handleChange(index, e)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  disabled={isLoading}
                  className={`w-[52px] h-[58px] rounded-[18px] border bg-white text-center text-[22px] text-[#012b39] outline-none transition-all shadow-lg focus:border-[#94A3B8] focus:ring-1 focus:ring-[#94A3B8] disabled:opacity-70 ${error ? 'border-red-500 bg-red-50' : 'border-[#E2E8F0]'
                    }`}
                />
              ))}
            </div>
            {error && <p className="mt-4 text-center text-sm text-red-500 font-medium">{error}</p>}
          </div>

          <div className="text-center text-[15px]">
            {countdown > 0 ? (
              <p className="text-[#475569]">
                Resend code in <span className=" text-[#012b39]">0:{countdown.toString().padStart(2, '0')}</span>
              </p>
            ) : (
              <button type="button" onClick={() => setCountdown(30)} className=" text-[#012b39] hover:underline" disabled={isLoading}>
                Resend OTP
              </button>
            )}
          </div>

          <div className="pt-2 h-[44px] flex items-center justify-center">
            {isLoading && (
              <motion.p
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-[#64748B] text-[14px]"
              >
                ✓ Auto verifying...
              </motion.p>
            )}
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default OTP;
