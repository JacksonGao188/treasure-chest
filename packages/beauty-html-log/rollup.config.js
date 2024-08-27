import path from 'path'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import rollupTypescript from 'rollup-plugin-typescript2'
import babel from '@rollup/plugin-babel'
import { DEFAULT_EXTENSIONS } from '@babel/core'
import alias from "@rollup/plugin-alias";
import { terser } from 'rollup-plugin-terser'
import pkg from './package.json'

const env = process.env.NODE_ENV

const getExternal = () => {
  return [
    ...Object.keys(pkg.dependencies ?? {}),
    ...Object.keys(pkg.peerDependencies ?? {}),
  ];
}

const config = {
  input: path.resolve(__dirname, 'src/index.ts'),
  output: {
    file: pkg.main,
    format: "es",
  },
  external: getExternal(),
  plugins: [
    resolve(),
    commonjs(),
    rollupTypescript(),
    alias({
      entries: [
        {
          find: "@",
          replacement: path.resolve(__dirname, "./src"),
        },
      ],
    }),
    babel({
      babelHelpers: "bundled",
      extensions: [...DEFAULT_EXTENSIONS, '.ts'],
    }),
  ]
}

// 若打包正式环境，压缩代码 
if (env === 'production') {
  config.plugins.push(terser({
    compress: {
      pure_getters: true,
      unsafe: true,
      unsafe_comps: true,
      warnings: false
    }
  }))
}

export default config
