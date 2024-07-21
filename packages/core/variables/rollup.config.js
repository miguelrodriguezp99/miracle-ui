/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import terser from "@rollup/plugin-terser";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";
import ignore from "rollup-plugin-ignore";

const packageJson = require("./package.json");

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: packageJson.main,
        format: "esm",
        sourcemap: true,
      },
    ],
    // external: ["react", "react-dom"],
    plugins: [
      typescript({
        exclude: ["./src/icons/**", "**/*.stories.tsx"],
      }),
      ignore(["./src/icons/**", "**/*.stories.tsx"]),
      peerDepsExternal(),
      resolve(),
      commonjs(),
      postcss({
        exclude: "src/app.css",
      }),
      terser(),
    ],
  },
  {
    input: "dist/cjs/types/src/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts.default()],
    external: [/\.css$/],
  },
];
