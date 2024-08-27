'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var resolve = require('@rollup/plugin-node-resolve');
var commonjs = require('@rollup/plugin-commonjs');
var typescript = require('@rollup/plugin-typescript');
var dts = require('rollup-plugin-dts');
var terser = require('@rollup/plugin-terser');
var peerDepsExternal = require('rollup-plugin-peer-deps-external');
var postcss = require('rollup-plugin-postcss');
var ignore = require('rollup-plugin-ignore');

/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */

const packageJson = require("./package.json");

var rollup_config = [
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
        exclude: [
          "./src/icons/**",
          "**/*.stories.tsx",
          "./src/UserIcon.tsx",
          "./src/CameraIcon.tsx",
        ],
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

exports.default = rollup_config;
