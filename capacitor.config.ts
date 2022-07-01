import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.fastthumbs',
  appName: 'com.fastthumbs',
  webDir: 'build',
  bundledWebRuntime: false,
  plugins: {
  "GoogleAuth": {
  "scopes": ["profile","email"],
  "serverClientId": "656892509205-bh1n3qjetjhoa4cnipegrts720ntb6o4.apps.googleusercontent.com",
  "forceCodeForRefreshToken": true,
   }
  }
};

export default config;
