import commonjs from "@rollup/plugin-commonjs";
import nodeResolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";

export default {
  input: "src/index.ts",
  output: {
    file: "dist/index.js",
    format: "cjs",
    sourcemap: true,
  },
  plugins: [nodeResolve(), commonjs(), typescript()],
  external: [
    "react",
    "react-dom",
    // Añade aquí cualquier otra dependencia externa
  ],
};
