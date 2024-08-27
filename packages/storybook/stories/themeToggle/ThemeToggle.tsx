import { useEffect, useState } from "react";
import Moon from "./Moon";
import Sun from "./Sun";
import React from "react";

export default function ThemeToggle() {
  // Inicializar el estado de "dark" basado en el localStorage o las preferencias del sistema
  const [dark, setDark] = useState(() => {
    const storedPreference = localStorage.getItem("theme");
    if (storedPreference) {
      return storedPreference === "dark";
    }
    return (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    );
  });

  // Aplicar el tema basado en el estado inicial
  useEffect(() => {
    if (dark) {
      document.body.classList.add("dark");
      document.documentElement.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  // Manejar cambios en las preferencias del sistema
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleSystemThemeChange = (e: {
      matches: boolean | ((prevState: boolean) => boolean);
    }) => {
      // Solo actualiza el estado si no hay preferencia manual
      if (!localStorage.getItem("theme")) {
        setDark(e.matches);
      }
    };

    mediaQuery.addEventListener("change", handleSystemThemeChange);

    return () => {
      mediaQuery.removeEventListener("change", handleSystemThemeChange);
    };
  }, []);

  const switchTheme = () => {
    const newDarkMode = !dark;
    setDark(newDarkMode);
    localStorage.setItem("theme", newDarkMode ? "dark" : "light");
  };

  // Función para manejar el cambio de tema manualmente
  const darkModeHandler = () => {
    switchTheme();
  };

  return (
    <div>
      <button
        className="flex items-center justify-center"
        onClick={() => darkModeHandler()}
      >
        {!dark && <Moon props="h-6 max-w-min fill-black" />}
        {dark && <Sun props="h-6 max-w-min fill-white" />}
      </button>
    </div>
  );
}
