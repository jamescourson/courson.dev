import { readFileSync, writeFileSync } from "fs";
import { resolve } from "path";

const outputPath = resolve(process.cwd(), "public/version.txt");
const packageObj = JSON.parse(
  readFileSync(resolve(process.cwd(), "package.json"), "utf8"));
const version = packageObj.version;

writeFileSync(outputPath, `${version}\n`);
console.log(`${version} ➔ public/version.txt`);

