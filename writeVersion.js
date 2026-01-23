import { readFileSync, writeFileSync } from "fs";
import { resolve } from "path";


// get version number
const packageObj = JSON.parse(
  readFileSync(resolve(process.cwd(), "package.json"), "utf8"));
const version = packageObj.version;
  
const outputPath = resolve(process.cwd(), "public/version.txt");
const outputString = `${version}\n${new Date().toUTCString()}\n`;

// write to file
writeFileSync(outputPath, outputString);

// verify write during build
console.log(`${version} ➔ public/version.txt`);

