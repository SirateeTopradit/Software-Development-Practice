const hospital = require("../models/Hospital");

// //get single hospital
// exports.getHospital=(req, res, next) => {
//   res.status(200).json({ success: true, msg: `Show hospital ${req.params.id}` });
// };

// //get all hospitals
// exports.getHospitals=(req, res, next) => {
//   res.status(200).json({ success: true, msg: `Show all hospitals` });
// };

// //post a hospital
// exports.postHospital=(req, res, next) => {
//   res.status(200).json({ success: true, msg: `Create new hospital` });
// };

// //put a hospital
// exports.updateHospital=(req, res, next) => {
//   res.status(200).json({ success: true, msg: `Update hospital ${req.params.id}` });
// };

// //delete a hospital
// exports.deleteHospital=(req, res, next) => {
//   res.status(200).json({ success: true, msg: `Delete hospital ${req.params.id}` });
// };

exports.createHospital = async (req, res, next) => {
  await hospital.create(req.body);
  console.log(req.body);
  res.status(201).json({ success: true, data: hospital });
};

exports.getHospitals = async (req, res, next) => {
  try {
    const hospitals = await hospital.find();
    res.status(200).json({ success: true, data: hospitals });
  } catch (err) {
    res.status(400).json({ success: false });
  }
};

exports.getHospital = async (req, res, next) => {
  try {
    const hospitals = await hospital.findById(req.params.id);
    res.status(200).json({ success: true, data: hospitals });
  } catch (err) {
    res.status(400).json({ success: false });
  }
};

exports.updateHospital = async (req, res, next) => {
  try {
    const hospitals = await hospital.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );
    if (!hospitals) {
      return res.status(400).json({ success: false });
    }
    res.status(200).json({ success: true, data: hospitals });
  } catch (err) {
    res.status(400).json({ success: false });
  }
};

exports.deleteHospital = async (req, res, next) => {
  try{
    const hospitals = await hospital.findByIdAndDelete(req.params.id);
    if (!hospitals) {
      return res.status(400).json({ success: false });
    }
    res.status(200).json({ success: true, data: {} });
  } catch (err) {
    res.status(400).json({ success: false });
  }
}