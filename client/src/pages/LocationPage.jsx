import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, MapPin, Check, Navigation, Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';
import Stepper from '../components/Stepper';

const LocationPage = () => {
  const navigate = useNavigate();
  const [locationData, setLocationData] = useState({
    state: '',
    city: '',
    area: '',
    pincode: ''
  });
  const [coords, setCoords] = useState({ lat: 12.9716, lon: 77.5946 });
  const [isLoadingLocation, setIsLoadingLocation] = useState(false);

  const fetchLiveLocation = () => {
    setIsLoadingLocation(true);
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser");
      setIsLoadingLocation(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        try {
          const { latitude, longitude } = position.coords;
          const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`);
          const data = await response.json();
          
          if (data && data.address) {
            setCoords({ lat: latitude, lon: longitude });
            setLocationData({
              state: data.address.state || '',
              city: data.address.city || data.address.town || data.address.county || '',
              area: data.address.suburb || data.address.neighbourhood || data.address.residential || data.address.village || data.address.road || '',
              pincode: data.address.postcode || ''
            });
          }
        } catch (error) {
          console.error("Error fetching location details:", error);
          alert("Could not fetch address details.");
        } finally {
          setIsLoadingLocation(false);
        }
      },
      (error) => {
        console.error("Error getting location:", error);
        alert("Please allow location access to use this feature.");
        setIsLoadingLocation(false);
      }
    );
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
        <Stepper currentStep={4} />

        {/* Title */}
        <div className="mb-8">
          <h1 className="text-[28px] font-bold text-[#012b39] tracking-tight mb-2">
            Your service location
          </h1>
          <p className="text-[15px] text-[#64748B]">
            Where would you like to deliver?
          </p>
        </div>

        {/* Map Placeholder */}
        <div className="relative w-full h-48 bg-[#FEF9C3] rounded-3xl mb-3 flex items-center justify-center overflow-hidden border border-[#FEF08A] shadow-inner" style={!coords ? { backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(253,230,138,0.3) 10px, rgba(253,230,138,0.3) 20px)' } : {}}>
          {coords ? (
            <iframe
              width="100%"
              height="100%"
              frameBorder="0"
              allowFullScreen
              loading="lazy"
              className="absolute inset-0 z-0"
              src={`https://maps.google.com/maps?q=${coords.lat},${coords.lon}&z=15&output=embed`}
            ></iframe>
          ) : (
            <div className="w-12 h-12 bg-[#012b39] rounded-full flex items-center justify-center shadow-lg relative z-10">
              <MapPin size={24} className="text-[#F59E0B]" strokeWidth={2.5} />
            </div>
          )}
          <button 
            type="button"
            onClick={fetchLiveLocation}
            disabled={isLoadingLocation}
            className="absolute bottom-4 right-4 bg-[#012b39] text-white text-[13px] px-4 py-2 rounded-full flex items-center gap-2 shadow-lg disabled:opacity-70 transition-opacity z-10"
          >
            {isLoadingLocation ? <Loader2 size={14} className="animate-spin" /> : <Navigation size={14} />} 
            {isLoadingLocation ? 'Fetching...' : 'Use current location'}
          </button>
        </div>

        <p className="text-[13px] text-[#64748B] mb-8 px-1">
          Tip: tap the map or drag the pin to fine-tune your location.
        </p>

        <form className="space-y-5">
          <div className="flex gap-4">
            <div className="space-y-1.5 flex-1">
              <label className="block text-[13px] text-[#012b39] font-medium">State</label>
              <div className="flex rounded-xl border border-[#E2E8F0] overflow-hidden bg-white focus-within:border-[#94A3B8] transition-colors">
                <input
                  type="text"
                  className="w-full px-4 py-2 outline-none text-[15px] text-[#012b39]"
                  placeholder="State"
                  value={locationData.state}
                  onChange={(e) => setLocationData({ ...locationData, state: e.target.value })}
                />
              </div>
            </div>
            <div className="space-y-1.5 flex-1">
              <label className="block text-[13px] text-[#012b39] font-medium">City</label>
              <div className="flex rounded-xl border border-[#E2E8F0] overflow-hidden bg-white focus-within:border-[#94A3B8] transition-colors">
                <input
                  type="text"
                  className="w-full px-4 py-2 outline-none text-[15px] text-[#012b39]"
                  placeholder="City"
                  value={locationData.city}
                  onChange={(e) => setLocationData({ ...locationData, city: e.target.value })}
                />
              </div>
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="block text-[13px] text-[#012b39] font-medium">Area / Locality</label>
            <div className="flex rounded-xl border border-[#E2E8F0] overflow-hidden bg-white focus-within:border-[#94A3B8] transition-colors">
              <input
                type="text"
                className="w-full px-4 py-2 outline-none text-[15px] text-[#012b39]"
                placeholder="Area"
                value={locationData.area}
                onChange={(e) => setLocationData({ ...locationData, area: e.target.value })}
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="block text-[13px] text-[#012b39] font-medium">Pincode</label>
            <div className="flex rounded-xl border border-[#E2E8F0] overflow-hidden bg-white focus-within:border-[#94A3B8] transition-colors">
              <input
                type="text"
                className="w-full px-4 py-2 outline-none text-[15px] text-[#012b39]"
                placeholder="Pincode"
                value={locationData.pincode}
                onChange={(e) => setLocationData({ ...locationData, pincode: e.target.value })}
              />
            </div>
          </div>
        </form>

        {/* Action Button */}
        <div className="mt-8 pb-8">
          <button
            onClick={() => navigate('/review')}
            className="w-full rounded-full py-[12px] text-[15px] transition-all bg-[#012b39] hover:bg-[#011c26] text-white active:scale-[0.98] shadow-lg flex items-center justify-center gap-2"
          >
            Review details <ArrowRight size={18} />
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default LocationPage;
