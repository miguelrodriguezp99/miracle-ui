// run-chromatic.js
import { execSync } from "child_process";
import dotenv from "dotenv";

// Carga las variables de entorno desde el archivo .env
dotenv.config();

// Obtiene el token desde las variables de entorno
const token = process.env.VITE_CHROMATIC_KEY;

if (!token) {
  console.error("Error: VITE_CHROMATIC_KEY is not set.");
  process.exit(1);
}

try {
  execSync(`npx chromatic --project-token=${token}`, { stdio: "inherit" });
} catch (error) {
  console.error("Error executing Chromatic command:", error);
  process.exit(1);
}
