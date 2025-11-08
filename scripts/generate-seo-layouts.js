#!/usr/bin/env node

/**
 * Script to generate layout.tsx files for pages that need SEO metadata
 * 
 * This script scans for page.tsx files and creates corresponding layout.tsx
 * files if they don't exist, using the SEO configuration.
 * 
 * Usage:
 *   node scripts/generate-seo-layouts.js
 * 
 * Or with a specific path:
 *   node scripts/generate-seo-layouts.js --path /services
 */

const fs = require('fs');
const path = require('path');

const PAGES_DIR = path.join(process.cwd(), 'src/app/(pages)');

function findPageFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      findPageFiles(filePath, fileList);
    } else if (file === 'page.tsx') {
      fileList.push(dir);
    }
  });
  
  return fileList;
}

function getPathFromDirectory(dir) {
  const relativePath = path.relative(PAGES_DIR, dir);
  return '/' + relativePath.replace(/\\/g, '/');
}

function generateLayoutContent(pagePath) {
  return `import { generatePageMetadata } from '@/constants/seo';

export const metadata = generatePageMetadata('${pagePath}');

export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
`;
}

function main() {
  const args = process.argv.slice(2);
  const pathArg = args.find(arg => arg.startsWith('--path='));
  const filterPath = pathArg ? pathArg.split('=')[1] : null;
  
  console.log('🔍 Scanning for pages that need SEO layouts...\n');
  
  const pageDirs = findPageFiles(PAGES_DIR);
  let created = 0;
  let skipped = 0;
  
  pageDirs.forEach(pageDir => {
    const pagePath = getPathFromDirectory(pageDir);
    
    // Filter by path if specified
    if (filterPath && !pagePath.startsWith(filterPath)) {
      return;
    }
    
    const layoutPath = path.join(pageDir, 'layout.tsx');
    
    // Skip if layout already exists
    if (fs.existsSync(layoutPath)) {
      skipped++;
      return;
    }
    
    // Generate layout file
    const layoutContent = generateLayoutContent(pagePath);
    fs.writeFileSync(layoutPath, layoutContent, 'utf8');
    console.log(`✅ Created: ${layoutPath}`);
    created++;
  });
  
  console.log(`\n✨ Done! Created ${created} layouts, skipped ${skipped} existing layouts.`);
  console.log('\n📝 Next steps:');
  console.log('   1. Review the generated layout files');
  console.log('   2. Update SEO config in src/constants/seo.ts if needed');
  console.log('   3. Customize layout component names if desired');
}

if (require.main === module) {
  main();
}

module.exports = { generateLayoutContent, getPathFromDirectory };

