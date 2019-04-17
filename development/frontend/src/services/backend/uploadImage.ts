import axios, { AxiosRequestConfig } from 'axios';
import { BACKEND_URI } from '../config';
const uploadUrl = BACKEND_URI + '/image';

export const uploadImage = async (image: any): Promise<string> => {
  const data = new FormData();
  data.append('file', image);
  const config: AxiosRequestConfig = {
    headers: {
      'Content-Type': 'image/png'
    }
  };
  const response = await axios.post(
    uploadUrl,
    data,
    config
  );
  const imgId = response.data;
  return uploadUrl + '/' + imgId;
};
