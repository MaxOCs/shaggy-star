import React, { useState } from "react";

const HamburgerMenu = () => {
// Estado para controlar si el menú está abierto o cerrado
const [isMenuOpen, setIsMenuOpen] = useState(false);

// Función para alternar el estado del menú
const toggleMenu = () => {
  setIsMenuOpen(!isMenuOpen);
};

return (
  <header className="font-semibold flex flex-wrap items-center justify-between px-4 py-4 md:px-10 lg:px-40 w-full bg-white bg-[radial-gradient(100%_50%_at_50%_0%,rgba(0,163,255,0.13)_0,rgba(0,163,255,0)_50%,rgba(0,163,255,0)_100%)]">
    {/* Logo de la empresa */}
    <img
      className="size-10 ml-2 justify-center items-center"
      src="/img/logomf.webp"
      alt="Logo de la empresa"
      width="50"
      height="50"
    />

    {/* Ícono de menú hamburguesa (solo visible en móviles) */}
    <div
      id="hamburger"
      className="md:hidden cursor-pointer text-2xl"
      onClick={toggleMenu}
    >
      &#9776;
    </div>

    {/* Menú de navegación */}
    <nav
      id="menu"
      className={`${
        isMenuOpen ? "flex" : "hidden"
      } md:flex flex-col md:flex-row items-center gap-5 w-full md:w-auto absolute md:static top-16 left-0 bg-white md:bg-transparent p-4 md:p-0`}
    >
      <a href="#about" className="hover:text-purple-300" onClick={toggleMenu}>
        ¿Quienes somos?
      </a>
      <a href="#blog" className="hover:text-purple-300" onClick={toggleMenu}>
        Blog
      </a>
      <a href="#comentarios" className="hover:text-purple-500" onClick={toggleMenu}>
        Comentarios
      </a>
      <a href="#servicios" className="hover:text-purple-300"  onClick={toggleMenu}>
        Servicios
      </a>
    </nav>
  </header>
);
};

export default HamburgerMenu;