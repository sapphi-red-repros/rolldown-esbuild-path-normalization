import { rolldown } from 'rolldown'

const bundle = await rolldown({
  input: 'src/index.js',
  plugins: [
    {
      name: 'path-normalization',
      resolveId(id) {
        return id
      }
    }
  ]
})
const result = await bundle.generate({})
console.log(result.output[0].code)
