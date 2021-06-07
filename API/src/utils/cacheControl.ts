const { config } = require("../../src/config/config");

export const cacheResponse = (res: any, seconds: number) => {
  if (!config.dev) {
    res.set("Cache-Control", `public, max-age=${seconds}`);
  }
}
