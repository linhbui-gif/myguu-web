const fs = require('fs');
const path = require('path');

// Function to read all files in a directory
const readFilesInDirectory = (directoryPath) => {
  return fs.readdirSync(directoryPath).filter((file) => {
    return fs.statSync(path.join(directoryPath, file)).isFile();
  });
};

// Function to find CSS and JS files in a directory
const findCSSFiles = (directoryPath) => {
  const files = readFilesInDirectory(directoryPath);
  const cssFiles = files.filter((file) => file.endsWith('.css')).map((file) => `static/css/${file}`);
  return cssFiles;
};

const findJSFiles = (directoryPath) => {
  const files = readFilesInDirectory(directoryPath);
  const jsFiles = files.filter((file) => file.endsWith('.js')).map((file) => `static/js/${file}`);
  return jsFiles;
};

// Function to update app-config.json with CSS and JS files
const updateAppConfig = (configPath, cssFiles, jsFiles) => {
  let config = require(configPath);
  config.listCSS = cssFiles;
  config.listSyncJS = jsFiles;
  fs.writeFileSync(configPath, JSON.stringify(config, null, 2));
};

// Main function to read CSS and JS files and update app-config.json
const main = () => {
  const staticCSSPath = './build/static/css';
  const staticJSPath = './build/static/js';
  const configPath = './app-config.json';

  const cssFiles = findCSSFiles(staticCSSPath)
  const jsFiles = findJSFiles(staticJSPath)

  updateAppConfig(configPath, cssFiles, jsFiles);
};

// Run the main function
main();
