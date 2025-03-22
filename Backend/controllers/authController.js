const authService = require("../services/authService");

const signup = async (req, res) => {
    try {
        const token = await authService.registerUser(req.body.name, req.body.email, req.body.password, req.body.role);
        res.status(201).json({ token });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

const login = async (req, res) => {
    try {
        const token = await authService.loginUser(req.body.email, req.body.password);
        res.json({ token });
    } catch (err) {
        res.status(401).json({ message: err.message });
    }
};

module.exports = { signup, login };
