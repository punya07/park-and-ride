const Admin = require("../models/Admin");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const createAdmin = async (name, email, password) => {
    const existingAdmin = await Admin.findOne({ email });
    if (existingAdmin) throw new Error("Admin already exists");

    const hashedPassword = await bcrypt.hash(password, 10);
    const admin = new Admin({ name, email, password: hashedPassword });

    await admin.save();
    return admin;
};

const adminLogin = async (email, password) => {
    const admin = await Admin.findOne({ email });
    if (!admin || !(await bcrypt.compare(password, admin.password))) throw new Error("Invalid credentials");

    return jwt.sign({ id: admin._id, role: "admin" }, process.env.JWT_SECRET, { expiresIn: "1h" });
};

module.exports = { createAdmin, adminLogin };
