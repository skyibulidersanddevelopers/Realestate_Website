/**
 * convert-images-new.mjs
 * Converts all JPG/PNG images in project1_1 to project7_7 folders to WebP with SEO-friendly filenames.
 * Quality: 82 (good balance of quality vs. file size for real estate imagery)
 * Run: node scripts/convert-images-new.mjs
 */

import sharp from 'sharp';
import { readdir } from 'fs/promises';
import { existsSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ASSETS_DIR = path.join(__dirname, '../src/assets');
const WEBP_QUALITY = 82;

// ── SEO-friendly filename mapping ───────────────────────────────────────────
// Key: original filename (without ext), Value: SEO-friendly slug
const SEO_NAMES = {
  // Project 1 — SKYi Meridian Heights
  '1': 'skyi-meridian-heights-luxury-villa-sarjapur-bangalore-1',
  '1A': 'skyi-meridian-heights-luxury-villa-sarjapur-bangalore-2',
  '1B': 'skyi-meridian-heights-luxury-villa-sarjapur-bangalore-3',
  'PLAN1': 'skyi-meridian-heights-villa-layout-plan-bangalore',

  // Project 2 — SKYi Enclave Prime
  '2': 'skyi-enclave-prime-villa-plots-whitefield-bangalore-1',
  '2A': 'skyi-enclave-prime-villa-plots-whitefield-bangalore-2',
  'PLAN2': 'skyi-enclave-prime-premium-plots-hoskote-bangalore',
  'PLAN2A': 'skyi-enclave-prime-residential-layout-whitefield',

  // Project 3 — SKYi Serene Meadows
  '3': 'skyi-serene-meadows-villa-plots-hosur-road-bangalore-1',
  '3A': 'skyi-serene-meadows-villa-plots-hosur-road-bangalore-2',
  'PLAN3': 'skyi-serene-meadows-plot-layout-chandapura-bangalore',

  // Project 4 — SKYi Nexus Towers
  '4': 'skyi-nexus-towers-luxury-apartments-electronic-city-bangalore-1',
  '4A': 'skyi-nexus-towers-luxury-apartments-electronic-city-bangalore-2',
  'PLAN4': 'skyi-nexus-towers-2bhk-3bhk-apartments-electronic-city',

  // Project 5 — SKYi Woodland Vistas
  '5': 'skyi-woodland-vistas-eco-villa-kanakapura-road-bangalore-1',
  '5A': 'skyi-woodland-vistas-eco-villa-kanakapura-road-bangalore-2',
  'PLAN5': 'skyi-woodland-vistas-3bhk-eco-villa-kanakapura-bangalore',

  // Project 6 — SKYi Harmony Residences
  '6': 'skyi-harmony-residences-row-house-yelahanka-bangalore-1',
  '6A': 'skyi-harmony-residences-row-house-yelahanka-bangalore-2',
  'PLAN6': 'skyi-harmony-residences-premium-row-house-north-bangalore',
  'PLAN6A': 'skyi-harmony-residences-row-house-layout-yelahanka',

  // Project 7 — SKYi Pinnacle Estates
  '7': 'skyi-pinnacle-estates-ultra-luxury-villa-devanahalli-bangalore-1',
  '7A': 'skyi-pinnacle-estates-ultra-luxury-villa-devanahalli-bangalore-2',
  'PLAN7': 'skyi-pinnacle-estates-luxury-villa-near-airport-bangalore',
};

// ── Conversion function ──────────────────────────────────────────────────────
async function convertImage(inputPath, outputPath, filename, shouldGenerateThumbnail = false) {
  try {
    let imagePipeline = sharp(inputPath);
    const metadata = await imagePipeline.metadata();

    // Resize full size image to max 1600px width if it's larger
    if (metadata.width && metadata.width > 1600) {
      imagePipeline = imagePipeline.resize(1600, null, { withoutEnlargement: true });
    }

    await imagePipeline
      .webp({ quality: WEBP_QUALITY, effort: 4 })
      .toFile(outputPath);

    // Generate a smaller thumbnail (max 600px width) if requested
    if (shouldGenerateThumbnail) {
      const ext = path.extname(outputPath);
      const dir = path.dirname(outputPath);
      const base = path.basename(outputPath, ext);
      const thumbPath = path.join(dir, `${base}-thumbnail.webp`);

      await sharp(inputPath)
        .resize(600, null, { withoutEnlargement: true })
        .webp({ quality: 80, effort: 4 })
        .toFile(thumbPath);
      console.log(`  📸 Created thumbnail: ${base}-thumbnail.webp`);
    }

    const { size: inputSize } = await import('fs').then(m => {
      return new Promise((resolve) => {
        m.stat(inputPath, (err, s) => resolve(s));
      });
    });

    const { size: outputSize } = await import('fs').then(m => {
      return new Promise((resolve) => {
        m.stat(outputPath, (err, s) => resolve(s));
      });
    });

    const reduction = (((inputSize - outputSize) / inputSize) * 100).toFixed(1);
    console.log(`  ✅ ${filename} → ${path.basename(outputPath)} (${(inputSize/1024).toFixed(0)}KB → ${(outputSize/1024).toFixed(0)}KB, -${reduction}%)`);
    return true;
  } catch (err) {
    console.error(`  ❌ Failed: ${filename} — ${err.message}`);
    return false;
  }
}

// ── Process a directory ──────────────────────────────────────────────────────
async function processDirectory(dirPath, projectName) {
  const files = await readdir(dirPath);
  const imageFiles = files.filter(f => /\.(jpg|jpeg|png)$/i.test(f));

  if (imageFiles.length === 0) return;

  console.log(`\n📁 ${projectName} (${imageFiles.length} images)`);

  for (const file of imageFiles) {
    const stem = path.basename(file, path.extname(file));
    const seoName = SEO_NAMES[stem] || stem.toLowerCase().replace(/[^a-z0-9]/g, '-');
    const inputPath = path.join(dirPath, file);
    const outputPath = path.join(dirPath, `${seoName}.webp`);

    // Determine if this is the primary project image to generate a thumbnail
    // Ends with -1
    const isPrimaryImage = seoName.endsWith('-1');

    // We overwrite existing to ensure everything is resized to 1600px width limit
    await convertImage(inputPath, outputPath, file, isPrimaryImage);
  }
}

// ── Main ─────────────────────────────────────────────────────────────────────
async function main() {
  console.log('🚀 SKYi Builders — Image → WebP Conversion (projectX_X folders)');
  console.log('═'.repeat(60));
  console.log(`Quality: ${WEBP_QUALITY} | Target: <200KB per image (Thumbnails: <50KB)\n`);

  // Process new project subdirectories
  const projectDirs = ['project1_1','project2_2','project3_3','project4_4','project5_5','project6_6','project7_7'];
  for (const proj of projectDirs) {
    await processDirectory(path.join(ASSETS_DIR, proj), proj);
  }

  // Process specific new root assets
  const rootAssets = [
    'layout_image.png',
    'renovation_image.png',
  ];

  console.log(`\n📁 Root assets (${rootAssets.length} images)`);
  for (const file of rootAssets) {
    const cleanStem = path.basename(file, path.extname(file));
    const seoName = SEO_NAMES[cleanStem] || cleanStem.toLowerCase().replace(/[^a-z0-9]/g, '-');
    const inputPath = path.join(ASSETS_DIR, file);
    const outputPath = path.join(ASSETS_DIR, `${seoName}.webp`);

    if (!existsSync(inputPath)) {
      console.log(`  ⚠️  Not found: ${file}`);
      continue;
    }

    // Overwrite to apply resizing
    await convertImage(inputPath, outputPath, file, false);
  }

  console.log('\n' + '═'.repeat(60));
  console.log('✅ Conversion complete!');
}

main().catch(console.error);
