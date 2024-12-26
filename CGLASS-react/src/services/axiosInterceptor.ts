import { UserManager } from 'oidc-client-ts';
import axios from 'axios';
import { IDENTITY_CONFIG } from '../oauthConfig/config';

const userManager = new UserManager(IDENTITY_CONFIG);

const api = axios.create({
  baseURL: 'https://localhost:7181',
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use(
  async (config) => {
    const user = await userManager.getUser();
    
    if (user && user.access_token) {
      const expirationTime = user.expires_at ? user.expires_at * 1000 : 0; 
      const now = new Date().getTime();

      if (expirationTime - now < 5 * 60 * 1000) {  
        try {
          const refreshedUser = await userManager.signinSilent();
          if (refreshedUser) {
            config.headers['Authorization'] = `Bearer ${refreshedUser.access_token}`;
          }
        } catch (error) {
          console.error('Error refreshing token:', error);
        }
      } else {
        config.headers['Authorization'] = `Bearer ${user.access_token}`;
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
