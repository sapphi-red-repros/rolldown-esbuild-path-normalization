import { build } from 'esbuild'

await build({
  entryPoints: ['./src/index.js'],
  bundle: true,
  plugins: [
    {
      name: 'path-normalization',
      setup(build) {
        build.onResolve({ filter: /.*/ }, (args) => {
          if (args.kind === 'entry-point') return

          return {
            path: args.path,
            namespace: 'file'
          }
        })
      }
    }
  ]
})
