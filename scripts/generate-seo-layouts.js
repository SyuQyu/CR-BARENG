#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const PAGES_DIR = path.join(process.cwd(), 'src', 'app', '(pages)');

function findPageFiles(dir, fileList = []) {
  const entries = fs.readdirSync(dir);

  entries.forEach((entry) => {
    const entryPath = path.join(dir, entry);
    const stat = fs.statSync(entryPath);

    if (stat.isDirectory()) {
      findPageFiles(entryPath, fileList);
    } else if (entry === 'page.tsx') {
      fileList.push(dir);
    }
  });

  return fileList;
}

function stripRouteGroups(relativePath) {
  if (!relativePath) {
    return '';
  }

  return relativePath
    .split(path.sep)
    .filter(Boolean)
    .filter((segment) => !(segment.startsWith('(') && segment.endsWith(')')))
    .join('/');
}

function getPathFromDirectory(dir) {
  const relativePath = path.relative(PAGES_DIR, dir);
  const cleanPath = stripRouteGroups(relativePath);

  if (!cleanPath) {
    return '/';
  }

  return `/${cleanPath}`;
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

function parseArgs() {
  const args = process.argv.slice(2);
  const options = {
    filterPath: null,
    dryRun: false,
    force: false,
  };

  for (let i = 0; i < args.length; i += 1) {
    const arg = args[i];

    if (arg === '--path' && args[i + 1]) {
      options.filterPath = args[i + 1];
      i += 1;
      continue;
    }

    if (arg.startsWith('--path=')) {
      options.filterPath = arg.split('=')[1];
      continue;
    }

    if (arg === '--dry-run') {
      options.dryRun = true;
      continue;
    }

    if (arg === '--force') {
      options.force = true;
    }
  }

  return options;
}

function main() {
  const { filterPath, dryRun, force } = parseArgs();
  console.log('🎯  Scanning for pages that need dedicated SEO layouts...\n');

  const pageDirs = findPageFiles(PAGES_DIR).sort();
  let created = 0;
  let updated = 0;
  let skipped = 0;

  pageDirs.forEach((pageDir) => {
    const pagePath = getPathFromDirectory(pageDir);

    if (filterPath && !pagePath.startsWith(filterPath)) {
      return;
    }

    const layoutPath = path.join(pageDir, 'layout.tsx');
    const layoutContent = generateLayoutContent(pagePath);
    const layoutRelativePath = path.relative(process.cwd(), layoutPath);
    const exists = fs.existsSync(layoutPath);

    if (exists && !force) {
      skipped += 1;
      return;
    }

    const action = exists ? 'updated' : 'created';
    const logPrefix = dryRun ? '📝  [dry-run]' : exists ? '♻️  Updated' : '✅  Created';

    if (!dryRun) {
      fs.writeFileSync(layoutPath, layoutContent, 'utf8');
    }

    if (action === 'updated') {
      updated += 1;
    } else {
      created += 1;
    }

    console.log(`${logPrefix}: ${layoutRelativePath} (${pagePath})`);
  });

  console.log('\n📊  Summary');
  console.log(`   ✅ Created: ${created}`);
  console.log(`   ♻️  Updated: ${updated}`);
  console.log(`   ⏭️  Skipped: ${skipped}`);

  if (dryRun) {
    console.log('\nℹ️  Dry run mode enabled — no files were written.');
  } else {
    console.log('\n✨  All done! Review the generated layouts and adjust SEO copy in src/constants/seo.ts as needed.');
  }
}

if (path.resolve(process.argv[1] || '') === __filename) {
  main();
}

export { generateLayoutContent, getPathFromDirectory };
