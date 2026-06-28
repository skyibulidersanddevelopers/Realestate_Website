/**
 * convert-images.mjs
 * Converts all JPG/PNG project images to WebP with SEO-friendly filenames.
 * Quality: 82 (good balance of quality vs. file size for real estate imagery)
 * Run: node scripts/convert-images.mjs
 */

import sharp from 'sharp';
import { readdir, mkdir } from 'fs/promises';
import { existsSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ASSETS_DIR = path.join(__dirname, '../src/assets');
const WEBP_QUALITY = 82;

// ── SEO-friendly filename mapping ───────────────────────────────────────────
// Key: original filename (without ext), Value: SEO-friendly slug
const SEO_NAMES = {
  // Project 1 — SKYi Meridian Heights (Luxury Villas, Sarjapur Rd)
  'Enscape1_1': 'skyi-meridian-heights-luxury-villa-sarjapur-bangalore-1',
  'Enscape1_2': 'skyi-meridian-heights-luxury-villa-sarjapur-bangalore-2',
  'Enscape1_3': 'skyi-meridian-heights-luxury-villa-sarjapur-bangalore-3',
  'Enscape1_4': 'skyi-meridian-heights-villa-layout-plan-bangalore',
  'Enscape1_5': 'skyi-meridian-heights-villa-exterior-sarjapur',

  // Project 2 — SKYi Enclave Prime (Villa Plots, Whitefield/Hoskote)
  'Enscape2_1': 'skyi-enclave-prime-villa-plots-whitefield-bangalore-1',
  'Enscape2_2': 'skyi-enclave-prime-villa-plots-whitefield-bangalore-2',
  'Enscape2_3': 'skyi-enclave-prime-premium-plots-hoskote-bangalore',
  'Enscape2_4': 'skyi-enclave-prime-residential-layout-whitefield',

  // Project 3 — SKYi Serene Meadows (Villa Plots, Hosur Rd)
  'image3_1': 'skyi-serene-meadows-villa-plots-hosur-road-bangalore-1',
  'image3_2': 'skyi-serene-meadows-villa-plots-hosur-road-bangalore-2',
  'image3_3': 'skyi-serene-meadows-plot-layout-chandapura-bangalore',
  'image3_4': 'skyi-serene-meadows-residential-plot-hosur-road',

  // Project 4 — SKYi Nexus Towers (Luxury Apartments, Electronic City)
  'Enscape4_1': 'skyi-nexus-towers-luxury-apartments-electronic-city-bangalore-1',
  'Enscape4_2': 'skyi-nexus-towers-luxury-apartments-electronic-city-bangalore-2',
  'Enscape4_3': 'skyi-nexus-towers-2bhk-3bhk-apartments-electronic-city',
  'Enscape4_4': 'skyi-nexus-towers-apartment-floor-plan-electronic-city',

  // Project 5 — SKYi Woodland Vistas (Eco Villas, Kanakapura Rd)
  'Enscape5_1': 'skyi-woodland-vistas-eco-villa-kanakapura-road-bangalore-1',
  'Enscape5_2': 'skyi-woodland-vistas-eco-villa-kanakapura-road-bangalore-2',
  'Enscape5_3': 'skyi-woodland-vistas-3bhk-eco-villa-kanakapura-bangalore',
  'Enscape5_4': 'skyi-woodland-vistas-4bhk-eco-villa-kanakapura-bangalore',
  'Enscape5_5': 'skyi-woodland-vistas-sustainable-villa-exterior-bangalore',
  'Enscape5_6': 'skyi-woodland-vistas-eco-friendly-villa-garden-bangalore',
  'Enscape5_7': 'skyi-woodland-vistas-villa-community-kanakapura-road',

  // Project 6 — SKYi Harmony Residences (Row Houses, Yelahanka)
  'Enscape6_1': 'skyi-harmony-residences-row-house-yelahanka-bangalore-1',
  'Enscape6_2': 'skyi-harmony-residences-row-house-yelahanka-bangalore-2',
  'Enscape6_3': 'skyi-harmony-residences-premium-row-house-north-bangalore',
  'Enscape6_4': 'skyi-harmony-residences-row-house-layout-yelahanka',

  // Project 7 — SKYi Pinnacle Estates (Ultra-Luxury Villas, Devanahalli)
  'Enscape7_1': 'skyi-pinnacle-estates-ultra-luxury-villa-devanahalli-bangalore-1',
  'Enscape7_2': 'skyi-pinnacle-estates-ultra-luxury-villa-devanahalli-bangalore-2',
  'Enscape7_3': 'skyi-pinnacle-estates-luxury-villa-near-airport-bangalore',
  'Enscape7_4': 'skyi-pinnacle-estates-villa-floor-plan-devanahalli',

  // Root assets
  'aboutImage2': 'skyi-builders-developers-hosur-premium-real-estate',
  'founderImage': 'sampath-kumar-managing-director-skyi-builders-hosur',
  'hosur_map': 'skyi-builders-office-location-map-hosur-tamil-nadu',
  'logo2': 'skyi-builders-developers-logo',
  'hero_desktop_building_v2': 'skyi-builders-premium-residential-project-bangalore',
  'hero_desktop_building_v3': 'skyi-builders-luxury-villa-project-hosur',
  'hero_desktop_building_v4': 'skyi-builders-commercial-project-bangalore',
  'hero_desktop_building_v5': 'skyi-builders-residential-layout-hosur',
  'hero_desktop_building_v6': 'skyi-builders-luxury-apartment-project-bangalore',
  'impressive_services_bg': 'skyi-builders-construction-services-hosur-bangalore',
  'luxury_interior_renovation': 'skyi-builders-luxury-interior-renovation-hosur',
  'background_mobile': 'skyi-builders-premium-real-estate-mobile-banner',
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
    const isPrimaryImage = seoName.endsWith('-1');

    // We overwrite existing to ensure everything is resized to 1600px width limit
    await convertImage(inputPath, outputPath, file, isPrimaryImage);
  }
}

// ── Main ─────────────────────────────────────────────────────────────────────
async function main() {
  console.log('🚀 SKYi Builders — Image → WebP Conversion');
  console.log('═'.repeat(60));
  console.log(`Quality: ${WEBP_QUALITY} | Target: <200KB per image (Thumbnails: <50KB)\n`);

  // Process project subdirectories
  const projectDirs = ['project1','project2','project3','project4','project5','project6','project7'];
  for (const proj of projectDirs) {
    await processDirectory(path.join(ASSETS_DIR, proj), proj);
  }

  // Process root assets (only specific large ones that are actively used)
  const rootAssets = [
    'aboutImage2.png',
    'founderImage.PNG',
    'hosur_map.png',
    'logo2.png',
    'hero_desktop_building_v2.png',
    'hero_desktop_building_v3.png',
    'hero_desktop_building_v4.png',
    'hero_desktop_building_v5.png',
    'hero_desktop_building_v6.png',
    'impressive_services_bg.png',
    'luxury_interior_renovation.png',
    'background_mobile.png',
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
  console.log('\n📝 Next step: Update imports in your JSX files to use .webp versions.');
}

main().catch(console.error);
