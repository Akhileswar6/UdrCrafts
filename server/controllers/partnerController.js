const Partner = require('../models/Partner');




exports.getProfile = async (req, res) => {
  try {
    const partner = await Partner.findById(req.partner._id);
    if (partner) {
      res.json(partner);
    } else {
      res.status(404).json({ message: 'Partner not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};




exports.updateProfile = async (req, res) => {
  try {
    const partner = await Partner.findById(req.partner._id);

    if (partner) {
      const {
        fullName, email, dob, gender, emergencyContact,
        aadhaar, pan, drivingLicense,
        address, state, city, area, pincode,
        documents
      } = req.body;

      partner.fullName = fullName || partner.fullName;
      partner.email = email || partner.email;
      partner.dob = dob || partner.dob;
      partner.gender = gender ? gender.toLowerCase() : partner.gender;
      partner.emergencyContact = emergencyContact || partner.emergencyContact;
      
      partner.aadhaar = aadhaar || partner.aadhaar;
      partner.pan = pan || partner.pan;
      partner.drivingLicense = drivingLicense || partner.drivingLicense;
      
      partner.address = address || partner.address;
      partner.state = state || partner.state;
      partner.city = city || partner.city;
      partner.area = area || partner.area;
      partner.pincode = pincode || partner.pincode;

      if (documents) {
        partner.documents = {
          aadhaarFront: documents.aadhaarFront || partner.documents?.aadhaarFront,
          aadhaarBack: documents.aadhaarBack || partner.documents?.aadhaarBack,
          panCard: documents.panCard || partner.documents?.panCard,
          licenseFront: documents.licenseFront || partner.documents?.licenseFront,
          licenseBack: documents.licenseBack || partner.documents?.licenseBack,
        };
      }

      partner.profileCompleted = true;
      partner.verificationStatus = 'in-progress';

      const updatedPartner = await partner.save();
      res.json(updatedPartner);
    } else {
      res.status(404).json({ message: 'Partner not found' });
    }
  } catch (error) {
    console.error('Update Profile Error:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};
