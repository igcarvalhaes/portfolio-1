import { useState } from "react";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const links = ["Início", "Sobre", "Projetos"];

  return (
    <>
      <nav className="sticky top-0 z-50 bg-transparent px-6 py-4 flex items-center justify-between">
        {/* Links desktop (md+) */}
        <div className="hidden md:flex md:gap-10">
          {links.map((label) => (
            <a
              key={label}
              href={`#${label.toLowerCase()}`}
              className="
                relative text-xl font-medium text-neutral-300 transition duration-200
                after:content-[''] after:bg-neutral-300 after:h-[3px]
                after:w-0 after:left-0 after:-bottom-[5px]
                after:rounded-xl after:absolute after:transition-all after:duration-200
                hover:after:w-full hover:text-white
              "
            >
              {label}
            </a>
          ))}
        </div>

        {/* Botão hambúrguer (só mobile) */}
        <button
          className="md:hidden text-neutral-300 hover:text-white"
          onClick={() => setMenuOpen((o) => !o)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Drawer mobile (até <md) */}
      <div
        className={`
          fixed inset-y-0 left-0
          w-3/4 max-w-xs
          bg-neutral-900
          transform
          ${menuOpen ? "translate-x-0" : "-translate-x-full"}
          transition-transform duration-300
          md:hidden
          flex flex-col items-start pt-16 px-6 space-y-8
          z-40
        `}
      >
        {links.map((label) => (
          <a
            key={label}
            href={`#${label.toLowerCase()}`}
            onClick={() => setMenuOpen(false)}
            className="
              relative text-2xl font-medium text-neutral-300 transition duration-200
              after:content-[''] after:bg-neutral-300 after:h-[3px]
              after:w-0 after:left-0 after:-bottom-[5px]
              after:rounded-xl after:absolute after:transition-all after:duration-200
              hover:after:w-full hover:text-white
            "
          >
            {label}
          </a>
        ))}
      </div>
    </>
  );
}
