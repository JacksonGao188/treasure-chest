import resolve from "@rollup/plugin-node-resolve";
import { createRequire } from "module";
import { babel } from "@rollup/plugin-babel";
import alias from "@rollup/plugin-alias";
import path from "path";

const require = createRequire(import.meta.url);

const pkg = require("./package.json");

const getExternal = () => {
  return [
    ...Object.keys(pkg.dependencies ?? {}),
    ...Object.keys(pkg.peerDependencies ?? {}),
  ];
}

import { fileURLToPath } from "url";
let __dirname = fileURLToPath(new URL(".", import.meta.url));

export default {
  input: "src/cli.js",
  output: {
    file: "dist/cli.js",
    format: "esm",
    sourcemap: true,
  },
  external: getExternal(),
  plugins: [
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
      extensions: [".js", ".jsx", ".es6", ".es", ".mjs"],
    }),
    resolve({
      extensions: [".mjs", ".js", ".node"],
    }),
  ],
};
