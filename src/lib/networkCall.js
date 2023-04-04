import axios from 'axios';

export const networkCall = async (url) => {
  const res = await axios.get(url);
  return res.data;
};
