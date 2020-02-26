import fs from 'fs';

const getManifest = () => {
  try {
    return JSON.parse(fs.readFileSync(`${__dirname}/public/manifest.json`, 'utf8'));
  } catch (error) {
    return {
      "main.css": "/public/app.css",
      "main.js": "/public/app.js",
    };
  }
};

export default getManifest;
