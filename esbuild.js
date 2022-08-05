require('esbuild')
  .build({
    entryPoints: ['./src/main.ts'],
    outdir: './dist',
    minify: true,
    target: 'es2020',
    platform: 'node',
    keepNames: true,
  })
  .catch((err) => {
    throw err;
  });
