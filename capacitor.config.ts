import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.fastthumbs',
  appName: 'com.fastthumbs',
  webDir: 'build',
  bundledWebRuntime: false,
  plugins: {
  "GoogleAuth": {
  "scopes": ["profile","email"],
  "serverClientId": "656892509205-hlu9t4brei63ns3m8mbuvl86b6qj3q5d.apps.googleusercontent.com"
   }
  }
};

export default config;
