import axios from 'axios';

const API_BASE_URL = 'http://20.244.56.144/train';
const ACCESS_TOKEN = 'YOUR_ACCESS_TOKEN'; // Replace with your actual access token

export const fetchAllTrains = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/trains`, {
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching all trains:', error);
    throw error;
  }
};
