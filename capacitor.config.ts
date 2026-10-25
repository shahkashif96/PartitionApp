import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.partition.pdfsplitter',
  appName: 'Partition',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;
