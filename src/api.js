import axios from "axios";

const API_URL = "https://api.quicksell.co/v1/internal/frontend-assignment";

const fetchData = async () => {
  try {
    const data = await axios.get(API_URL);
    return data.data;
  } catch (error) {
    console.log("error fetching tasks ", error);
    throw error;
  }
};

export default fetchData;
