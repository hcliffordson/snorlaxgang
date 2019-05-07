import axios from 'axios';
import { BACKEND_URI } from '../config';


/**
 * Login a user using the supplied email and password
 * @param email the email to use for login
 * @param password the password to use for login
 * @returns A promise resolving to the token for the user
 */
export const login = async (email: string, password: string): Promise<string> => {
  // TODO
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

