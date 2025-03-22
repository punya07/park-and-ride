const adminService = require("../services/adminService");

const createAdmin = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const admin = await adminService.createAdmin(name, email, password);
    res.status(201).json(admin);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const loginAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const token = await adminService.adminLogin(email, password);
    res.json({ token });
  } catch (err) {
    res.status(401).json({ message: err.message });
  }
};

module.exports = { createAdmin, loginAdmin };
