const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('--- 1. Compiling React Components with esbuild ---');
try {
  execSync('npx esbuild js/components/*.js js/app.js --loader:.js=jsx --jsx=transform --outdir=js --allow-overwrite', { stdio: 'inherit' });
} catch (err) {
  console.error('Error running esbuild:', err.message);
  process.exit(1);
}

console.log('--- 2. Preparing dist/ directory for Vercel Deployment ---');
const distDir = path.resolve(__dirname, '..', 'dist');
if (fs.existsSync(distDir)) {
  fs.rmSync(distDir, { recursive: true, force: true });
}
fs.mkdirSync(distDir, { recursive: true });

// Copy index.html
fs.copyFileSync(path.resolve(__dirname, '..', 'index.html'), path.join(distDir, 'index.html'));

// Copy directories: js, css
function copyDirSync(src, dest) {
  fs.mkdirSync(dest, { recursive: true });
  const entries = fs.readdirSync(src, { withFileTypes: true });
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyDirSync(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

console.log('--- 3. Copying js/ and css/ assets to dist/ ---');
copyDirSync(path.resolve(__dirname, '..', 'js'), path.join(distDir, 'js'));
copyDirSync(path.resolve(__dirname, '..', 'css'), path.join(distDir, 'css'));

// Copy image files if present
const rootFiles = fs.readdirSync(path.resolve(__dirname, '..'));
for (const file of rootFiles) {
  if (/\.(jpg|jpeg|png|webp|svg|ico)$/i.test(file)) {
    fs.copyFileSync(path.resolve(__dirname, '..', file), path.join(distDir, file));
  }
}

console.log('--- 4. Verification of dist/ output ---');
const distFiles = fs.readdirSync(distDir);
console.log('dist contents:', distFiles);
const distJsFiles = fs.readdirSync(path.join(distDir, 'js'));
console.log('dist/js contents:', distJsFiles);

console.log('✓ Build completed successfully! Vercel dist/ is ready with all JS/CSS assets.');
