import { create } from 'zustand';

const useStore = create((set) => ({
  basicInfo: {
    fullName: '',
    email: '',
    dob: '',
    gender: 'Male',
    emergencyContact: ''
  },
  documents: {
    aadhaar: '',
    pan: ''
  },
  license: {
    licenseNumber: '',
    expiryDate: ''
  },
  location: {
    state: '',
    city: '',
    area: '',
    pincode: ''
  },
  setBasicInfo: (info) => set((state) => ({ basicInfo: { ...state.basicInfo, ...info } })),
  setDocuments: (docs) => set((state) => ({ documents: { ...state.documents, ...docs } })),
  setLicense: (licenseInfo) => set((state) => ({ license: { ...state.license, ...licenseInfo } })),
  setLocation: (loc) => set((state) => ({ location: { ...state.location, ...loc } })),
  setFullProfile: (data) => set(() => ({
    basicInfo: {
      fullName: data.fullName || '',
      email: data.email || '',
      dob: data.dob ? new Date(data.dob).toISOString().split('T')[0] : '',
      gender: data.gender || 'Male',
      emergencyContact: data.emergencyContact || ''
    },
    documents: {
      aadhaar: data.aadhaar || '',
      pan: data.pan || '',
      aadhaarFront: data.documents?.aadhaarFront || '',
      aadhaarBack: data.documents?.aadhaarBack || '',
      panImage: data.documents?.panCard || ''
    },
    license: {
      licenseNumber: data.drivingLicense || '',
      expiryDate: data.licenseExpiry || '',
      frontImage: data.documents?.licenseFront || '',
      backImage: data.documents?.licenseBack || ''
    },
    location: {
      state: data.state || '',
      city: data.city || '',
      area: data.area || '',
      pincode: data.pincode || ''
    }
  }))
}));

export default useStore;
