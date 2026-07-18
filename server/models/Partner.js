const mongoose = require('mongoose');

const partnerSchema = new mongoose.Schema(
  {
    phone: { type: String, required: true, unique: true },
    fullName: { type: String },
    email: { type: String },
    dob: { type: Date },
    gender: { type: String, enum: ['male', 'female', 'other'] },
    emergencyContact: { type: String },
    aadhaar: { type: String },
    pan: { type: String },
    drivingLicense: { type: String },
    address: { type: String },
    state: { type: String },
    city: { type: String },
    area: { type: String },
    pincode: { type: String },
    documents: {
      aadhaarFront: { type: String },
      aadhaarBack: { type: String },
      panCard: { type: String },
      licenseFront: { type: String },
      licenseBack: { type: String },
    },
    profileCompleted: { type: Boolean, default: false },
    verificationStatus: {
      type: String,
      enum: ['pending', 'in-progress', 'verified', 'rejected'],
      default: 'pending',
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Partner', partnerSchema);
