require('esbuild')
  .build({
    entryPoints: ['./src/index.ts'],
    outdir: './dist',
    minify: true,
    target: 'es2020',
    platform: 'node',
  })
  .catch((err) => {
    throw err;
  });
