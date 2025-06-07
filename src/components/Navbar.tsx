export function Navbar() {
  return (
    <>
      <nav className="sticky top-0 flex justify-baseline gap-10 w-full px-10 py-8">
        <a
          className="text-2xl font-medium transition duration-100 hover:text-white "
          href="#"
        >
          Início
        </a>
        <a
          className="text-2xl font-medium transition duration-100 hover:text-white"
          href="#"
        >
          Sobre
        </a>
        <a
          className="text-2xl font-medium transition duration-100 hover:text-white"
          href="#"
        >
          Projetos
        </a>
      </nav>
    </>
  );
}
