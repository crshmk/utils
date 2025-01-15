import babel from '@rollup/plugin-babel'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import terser from '@rollup/plugin-terser'
import typescript from '@rollup/plugin-typescript'
import copy from 'rollup-plugin-copy'

export default {
  input: './src/index.js',
  output: [
    {
      file: './dist/index.mjs',
      format: 'esm',
      name: 'bundle'
    },
    {
      file: './dist/index.cjs',
      format: 'cjs',
      name: 'bundle'
    }
  ],
  plugins: [
    typescript({
      tsconfig: './tsconfig.json', 
      declaration: true,
      declarationDir: './dist', 
      rootDir: './src',
    }),
    babel({
      babelHelpers: 'bundled', 
      exclude: 'node_modules/**',
    }),
    resolve(),
    commonjs(),
    terser(),
    copy({
      targets: [
        { src: 'src/index.d.ts', dest: 'dist' }
      ]
    })
  ],
  external: ['ramda', 'react']
}
