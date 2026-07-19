import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, User, IdCard, CarFront, MapPin, Edit2 } from 'lucide-react';
import { motion } from 'framer-motion';
import useStore from '../store/useStore';

const Profile = () => {
  const navigate = useNavigate();
  const { basicInfo, documents, license, location } = useStore();

  const maskEmail = (email) => {
    if (!email) return '';
    const [name, domain] = email.split('@');
    if (!name || !domain) return email;
    return `${name[0]}***@${domain}`;
  };

  return (
    <div className="flex min-h-screen flex-col bg-[#FFFCF5] font-sans px-6 py-6 pb-32" style={{fontFamily:"'Inter', sans-serif"}}>
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-md mx-auto"
      >
                <button onClick={() => navigate('/dashboard')} className="w-24 h-11 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors -ml-4 gap-1 mb-4">
          <ArrowLeft size={16} className="text-[#475569]"  /> <span className='text-[#475569] text-[14px]'>Back</span>
        </button>

                <div className="flex flex-col items-center mb-8 bg-white border border-[#E2E8F0] rounded-3xl p-6 shadow-md relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-r from-[#012b39] to-[#0f4454]"></div>
          
          <div className="relative w-24 h-24 rounded-full bg-white p-1.5 mb-3 mt-6 shadow-md">
            <div className="w-full h-full rounded-full bg-[#FEF3C7] flex items-center justify-center text-[#D97706] font-bold text-3xl">
              {basicInfo.fullName ? basicInfo.fullName.substring(0, 2).toUpperCase() : 'AK'}
            </div>
          </div>
          
          <h1 className="text-[24px] font-bold text-[#012b39] tracking-tight mb-1 text-center">
            {basicInfo.fullName || 'Akhileswar'}
          </h1>
          <p className="text-[14px] text-[#64748B] text-center mb-4">
            {basicInfo.email || 'partner@udrcrafts.com'}
          </p>
          
          <div className="bg-[#DCFCE7] text-[#15803D] px-4 py-1.5 rounded-full text-[13px] font-medium flex items-center gap-1.5 border border-[#BBF7D0]">
            <User size={14} strokeWidth={2.5} /> Active Partner
          </div>
        </div>

        <div className="space-y-4">
          
                    <div className="border border-[#E2E8F0] rounded-3xl p-5 bg-white shadow-md">
            <div className="flex items-center justify-between border-b border-[#F1F5F9] pb-4 mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#FEF3C7] flex items-center justify-center">
                  <User size={18} className="text-[#D97706]" strokeWidth={2.5} />
                </div>
                <h3 className="font-medium text-[#012b39] text-[16px]">Basic information</h3>
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="flex justify-between items-center text-[14px]">
                <span className="text-[#64748B]">Full name</span>
                <span className="font-medium text-[#012b39]">{basicInfo.fullName || 'Not provided'}</span>
              </div>
              <div className="flex justify-between items-center text-[14px]">
                <span className="text-[#64748B]">Email</span>
                <span className="font-medium text-[#012b39]">{maskEmail(basicInfo.email) || 'Not provided'}</span>
              </div>
              <div className="flex justify-between items-center text-[14px]">
                <span className="text-[#64748B]">Date of birth</span>
                <span className="font-medium text-[#012b39]">{basicInfo.dob || 'Not provided'}</span>
              </div>
              <div className="flex justify-between items-center text-[14px]">
                <span className="text-[#64748B]">Gender</span>
                <span className="font-medium text-[#012b39] capitalize">{basicInfo.gender || 'Not provided'}</span>
              </div>
              <div className="flex justify-between items-center text-[14px]">
                <span className="text-[#64748B]">Emergency contact</span>
                <span className="font-medium text-[#012b39]">{basicInfo.emergencyContact ? `+91 ${basicInfo.emergencyContact}` : 'Not provided'}</span>
              </div>
            </div>
          </div>

                    <div className="border border-[#E2E8F0] rounded-3xl p-5 bg-white shadow-md">
            <div className="flex items-center justify-between border-b border-[#F1F5F9] pb-4 mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#FEF3C7] flex items-center justify-center">
                  <IdCard size={18} className="text-[#D97706]" strokeWidth={2.5} />
                </div>
                <h3 className="font-medium text-[#012b39] text-[16px]">Government ID</h3>
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="flex justify-between items-center text-[14px]">
                <span className="text-[#64748B]">Aadhaar</span>
                <span className="font-medium text-[#012b39]">{documents.aadhaar || 'Not provided'}</span>
              </div>
              {(documents.aadhaarFront || documents.aadhaarBack) && (
                <div className="flex gap-2">
                  {documents.aadhaarFront && <img src={documents.aadhaarFront} alt="Aadhaar Front" className="w-16 h-12 object-cover rounded-md border border-[#E2E8F0]" />}
                  {documents.aadhaarBack && <img src={documents.aadhaarBack} alt="Aadhaar Back" className="w-16 h-12 object-cover rounded-md border border-[#E2E8F0]" />}
                </div>
              )}
              <div className="flex justify-between items-center text-[14px] pt-2 border-t border-[#F1F5F9]">
                <span className="text-[#64748B]">PAN</span>
                <span className="font-medium text-[#012b39]">{documents.pan || 'Not provided'}</span>
              </div>
              {documents.panImage && (
                <div className="flex gap-2">
                  <img src={documents.panImage} alt="PAN Card" className="w-16 h-12 object-cover rounded-md border border-[#E2E8F0]" />
                </div>
              )}
            </div>
          </div>

                    <div className="border border-[#E2E8F0] rounded-3xl p-5 bg-white shadow-md">
            <div className="flex items-center justify-between border-b border-[#F1F5F9] pb-4 mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#FEF3C7] flex items-center justify-center">
                  <CarFront size={18} className="text-[#D97706]" strokeWidth={2.5} />
                </div>
                <h3 className="font-medium text-[#012b39] text-[16px]">Driving license</h3>
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="flex justify-between items-center text-[14px]">
                <span className="text-[#64748B]">License number</span>
                <span className="font-medium text-[#012b39]">{license.licenseNumber || 'Not provided'}</span>
              </div>
              <div className="flex justify-between items-center text-[14px]">
                <span className="text-[#64748B]">Expiry date</span>
                <span className="font-medium text-[#012b39]">{license.expiryDate || 'Not provided'}</span>
              </div>
              {(license.frontImage || license.backImage) && (
                <div className="flex gap-2 pt-2 border-t border-[#F1F5F9]">
                  {license.frontImage && <img src={license.frontImage} alt="License Front" className="w-16 h-12 object-cover rounded-md border border-[#E2E8F0]" />}
                  {license.backImage && <img src={license.backImage} alt="License Back" className="w-16 h-12 object-cover rounded-md border border-[#E2E8F0]" />}
                </div>
              )}
            </div>
          </div>

                    <div className="border border-[#E2E8F0] rounded-3xl p-5 bg-white shadow-md">
            <div className="flex items-center justify-between border-b border-[#F1F5F9] pb-4 mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#FEF3C7] flex items-center justify-center">
                  <MapPin size={18} className="text-[#D97706]" strokeWidth={2.5} />
                </div>
                <h3 className="font-medium text-[#012b39] text-[16px]">Location</h3>
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="flex justify-between items-center text-[14px]">
                <span className="text-[#64748B]">City</span>
                <span className="font-medium text-[#012b39]">{location.city && location.state ? `${location.city}, ${location.state}` : 'Not provided'}</span>
              </div>
              <div className="flex justify-between items-center text-[14px]">
                <span className="text-[#64748B]">Area</span>
                <span className="font-medium text-[#012b39]">{location.area || 'Not provided'}</span>
              </div>
              <div className="flex justify-between items-center text-[14px]">
                <span className="text-[#64748B]">Pincode</span>
                <span className="font-medium text-[#012b39]">{location.pincode || 'Not provided'}</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Profile;
