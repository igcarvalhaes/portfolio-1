export function Navbar() {
  return (
    <>
      <nav className="sticky top-0 flex justify-baseline gap-10 w-full px-10 py-8">
        <a
          className="relative text-2xl font-medium transition duration-200 after:content-[''] after:bg-neutral-300 after:h-[3px] after:w-0 after:left-0 after:-bottom-[5px] after:rounded-xl after:absolute after:transition-width after:transition-all after:duration-200 hover:after:w-full"
          href="#"
        >
          Início
        </a>

        <a
          className="relative text-2xl font-medium transition duration-200 after:content-[''] after:bg-neutral-300 after:h-[3px] after:w-0 after:left-0 after:-bottom-[5px] after:rounded-xl after:absolute after:transition-width after:transition-all after:duration-200 hover:after:w-full"
          href="#sobre"
        >
          Sobre
        </a>
        <a
          className="relative text-2xl font-medium transition duration-200 after:content-[''] after:bg-neutral-300 after:h-[3px] after:w-0 after:left-0 after:-bottom-[5px] after:rounded-xl after:absolute after:transition-width after:transition-all after:duration-200 hover:after:w-full"
          href="#projetos"
        >
          Projetos
        </a>
      </nav>
    </>
  );
}
