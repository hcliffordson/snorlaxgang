import axios from 'axios';
import { BACKEND_URI } from '../config';


/**
 * Login a user using the supplied email and password
 * @param email the email to use for login
 * @param password the password to use for login
 * @returns A promise resolving to the token for the user
 */
export const login = async (email: string, password: string): Promise<string> => {
  const payload = {
    email,
    password
  };
  const loginUrl = BACKEND_URI + '/auth/login';
  const response = await axios.post(loginUrl, payload);
  const token = response.data.token as string;
  if (!token || response.status !== 200) {
    throw new Error('Unauthorized');
  }
  localStorage.jwt = token;
  return token;
};

export const isUserLoggedIn = async (): Promise<boolean> => {
  const token = localStorage.jwt;
  const verifyUrl = BACKEND_URI + '/auth/verify';
  if (!token) {
    return false;
  }
  // validate the token
  const authHeader = `Bearer ${token}`;
  try {
    const resp = await axios.get(verifyUrl, {
      headers: {
        Authorization: authHeader
    }});
    return resp.status === 200;
  } catch (ex) {}
  return false;
};

