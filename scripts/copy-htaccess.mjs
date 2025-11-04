import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Copy .htaccess from public to out directory
const sourcePath = path.join(__dirname, '../public/.htaccess');
const destPath = path.join(__dirname, '../out/.htaccess');

try {
  // Check if source exists
  if (!fs.existsSync(sourcePath)) {
    console.error('Error: .htaccess not found in public directory');
    process.exit(1);
  }

  // Copy the file
  fs.copyFileSync(sourcePath, destPath);
  console.log('✓ .htaccess copied to out directory');
} catch (error) {
  console.error('Error copying .htaccess:', error.message);
  process.exit(1);
}

