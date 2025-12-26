// Read package.json file
// Modify it to set "type" to "commonjs"
// Write the modified content back to ./dist/cjs/package.json
import { readFileSync, writeFileSync } from 'node:fs';
import { join, dirname  } from 'node:path';
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const originalPackageJsonPath = join(__dirname, '..', 'package.json');
const packageJsonContent = readFileSync(originalPackageJsonPath, 'utf-8');
const packageJson = JSON.parse(packageJsonContent);
packageJson.type = 'commonjs';
const commonJsPackageJsonPath = join(__dirname, '../dist/cjs/package.json');
writeFileSync(commonJsPackageJsonPath, JSON.stringify(packageJson, null, 2), 'utf-8');
