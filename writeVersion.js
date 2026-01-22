import { readFileSync, writeFileSync } from "fs";
import { resolve } from "path";


// get version number
const outputPath = resolve(process.cwd(), "public/version.txt");
const packageObj = JSON.parse(
  readFileSync(resolve(process.cwd(), "package.json"), "utf8"));
const version = packageObj.version;

// write to file
writeFileSync(outputPath, `${version}\n`);

// confirm write during build
console.log(`${version} ➔ public/version.txt`);

