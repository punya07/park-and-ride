const axios = require("axios");

const API_URL = "http://localhost:5000/api/ride"; // Change this to match your backend URL


exports.bookRide = async (rideData, token) => {
  try {
    const response = await axios.post(`${API_URL}/book`, rideData, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`, // Ensure user is authenticated
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error booking ride:", error.response?.data || error.message);
    throw error.response?.data || error.message;
  }
};


exports.getRideHistory = async (token) => {
  try {
    const response = await axios.get(`${API_URL}/history`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching ride history:", error.response?.data || error.message);
    throw error.response?.data || error.message;
  }
};


exports.cancelRide = async (rideId, token) => {
  try {
    const response = await axios.put(`${API_URL}/cancel/${rideId}`, {}, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error canceling ride:", error.response?.data || error.message);
    throw error.response?.data || error.message;
  }
};


exports.completeRide = async (rideId, token) => {
  try {
    const response = await axios.put(`${API_URL}/complete/${rideId}`, {}, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error completing ride:", error.response?.data || error.message);
    throw error.response?.data || error.message;
  }
};
