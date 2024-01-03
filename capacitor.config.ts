import { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "io.ionic.starter",
  appName: "newsapp",
  webDir: "dist",
  server: {
    androidScheme: "http",
  },
};

export default config;
