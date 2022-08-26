require("esbuild").build({
  entryPoints: ["src/01/index.js","src/02/index.js"],
  //outfile: "index.js",
  outdir: "dist",
  bundle: true,
  //loader: {".ts": "ts"},
  // watch: {
  //   onRebuild(error, result) {
  //     if (error) console.error('watch build failed:', error)
  //     else console.log('⚡watch build succeeded')
  //   },
  // },
  sourcemap: false,
  minify: true,
  external: ['*.svg', '*.woff', '*.eot', '*.ttf', '*.svg#PocGeofolia', '*.eot#iefix']
})
.then(() => console.log("Build Done !"))
.catch(() => process.exit(1));
