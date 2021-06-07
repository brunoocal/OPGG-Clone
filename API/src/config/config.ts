import path from "path";
import dotenv from "dotenv";

dotenv.config({ path: path.resolve(__dirname, "./.env") });

export const config: Record<string, string | boolean | number | undefined> = {
  dev: process.env.isDevMode === "development",
  port: process.env.PORT || 3005,
  riotApiKey: process.env.RIOTAPI,
};
