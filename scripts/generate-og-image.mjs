import sharp from 'sharp';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const LOGO_PATH = path.join(__dirname, '../src/assets/logo4.png');
const OUTPUT_JPG = path.join(__dirname, '../public/og-image.jpg');

async function generate() {
  try {
    console.log('Generating og-image.jpg from logo4.png...');
    // Create a 500x500 square JPEG with a white background
    await sharp(LOGO_PATH)
      .resize(500, 500, {
        fit: 'contain',
        background: '#ffffff'
      })
      .flatten({ background: '#ffffff' }) // ensure transparent parts are white
      .jpeg({ quality: 90 })
      .toFile(OUTPUT_JPG);
    
    const meta = await sharp(OUTPUT_JPG).metadata();
    console.log(`Success: Generated ${OUTPUT_JPG} (${meta.width}x${meta.height}, format: ${meta.format})`);
  } catch (err) {
    console.error('Error generating image:', err);
  }
}

generate();
