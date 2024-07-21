/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
const { preserveShebangs } = require("rollup-plugin-preserve-shebangs");
import { terser } from "rollup-plugin-terser";

export default {
  input: "cli.js",
  output: {
    file: "dist/cli.js",
    format: "es",
    exports: "auto",
  },
  plugins: [
    resolve(),
    preserveShebangs(),
    terser(), // Minificación (opcional)
    commonjs(),
  ],
};
