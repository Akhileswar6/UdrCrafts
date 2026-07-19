const jwt = require('jsonwebtoken');
const Partner = require('../models/Partner');



exports.login = async (req, res) => {
  try {
    const { phone } = req.body;
    if (!phone) {
      return res.status(400).json({ message: 'Phone number is required' });
    }
    


    return res.status(200).json({ message: 'OTP sent successfully', mockOtp: '111111' });
  } catch (error) {
    return res.status(500).json({ message: 'Server error', error: error.message });
  }
};



exports.verifyOtp = async (req, res) => {
  try {
    const { phone, otp } = req.body;
    
    if (otp !== '111111') {
      return res.status(400).json({ message: 'Invalid OTP' });
    }

    let partner = await Partner.findOne({ phone });
    let isNew = false;
    if (!partner) {
      partner = await Partner.create({ phone });
      isNew = true;
    }

    const token = jwt.sign({ id: partner._id }, process.env.JWT_SECRET || 'secret123', {
      expiresIn: '30d',
    });

    return res.status(200).json({
      token,
      partner,
      isNew,
      message: 'Verified successfully'
    });
  } catch (error) {
    return res.status(500).json({ message: 'Server error', error: error.message });
  }
};
