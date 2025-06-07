import "./App.css";
import { Navbar } from "./components/Navbar";
import { Github, Linkedin, Mail, MoveRight, Twitter } from "lucide-react";

function App() {
  return (
    <>
      <div className="min-h-screen bg-neutral-900 text-neutral-300">
        <Navbar />
        <main>
          <section
            id="sobre"
            className="min-h-screen flex items-center justify-center flex-col"
          >
            <div className="flex flex-col items-center gap-12 md:gap-32 md:flex-row md:justify-center md:items-center w-full md:max-w-5xl">
              {/* Foto */}
              <div className="order-1 md:order-2 w-full  flex justify-center">
                <div className="w-64 h-64 md:w-110 md:h-110">
                  <img
                    src="https://github.com/igcarvalhaes.png"
                    alt="Foto de perfil"
                    className="object-cover rounded-full w-full h-full"
                  />
                </div>
              </div>

              {/* Texto */}
              <div className="order-2 gap-5 md:gap-15 md:order-1 w-full flex flex-col items-center md:items-start justify-center text-center md:text-left px-4">
                <h2 className="text-white text-3xl font-bold md:text-6xl md:text-left">
                  Igor Carvalhaes
                </h2>
                <p className="text-lg md:text-3xl font-light mx-2 md:w-180 md:text-left md:mx-0">
                  Sou um desenvolvedor front-end, estudante de Engenharia de
                  Computação na UERJ, apaixonado por criar interfaces bonitas e
                  interativas, focadas em usabilidades, desempenho e
                  acessibilidade, utilizando boas práticas de código limpo.
                </p>
                <nav
                  className="flex w-full justify-center gap-10 md:justify-start"
                  aria-label="links para redes sociais"
                >
                  <a
                    href="mailto:igorcarvalhaes123@gmail.com"
                    target="_blank"
                    title="Entre em contato por email"
                    className="relative link-underline flex items-center gap-2 p-2 rounded-lg transition-all duration-200 text-neutral-300 hover:text-neutral-50 after:content-[''] after:bg-neutral-300 after:h-[3px] after:w-0 after:left-0 after:-bottom-[5px] after:rounded-xl after:absolute after:transition-all after:duration-200 hover:after:w-full"
                  >
                    <Mail size={30} />
                  </a>
                  <a
                    href="https://x.com/igcarvalhaes"
                    className="relative link-underline flex items-center gap-2 p-2 rounded-lg transition-all duration-200 text-neutral-300 hover:text-neutral-50 after:content-[''] after:bg-neutral-300 after:h-[3px] after:w-0 after:left-0 after:-bottom-[5px] after:rounded-xl after:absolute after:transition-all after:duration-200 hover:after:w-full"
                  >
                    <Twitter size={30} />
                  </a>
                  <a
                    href="https://github.com/igcarvalhaes/"
                    className="relative link-underline flex items-center gap-2 p-2 rounded-lg transition-all duration-200 text-neutral-300 hover:text-neutral-50 after:content-[''] after:bg-neutral-300 after:h-[3px] after:w-0 after:left-0 after:-bottom-[5px] after:rounded-xl after:absolute after:transition-all after:duration-200 hover:after:w-full"
                  >
                    <Github size={30} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/igor-carvalhaes/"
                    className="relative link-underline flex items-center gap-2 p-2 rounded-lg transition-all duration-200 text-neutral-300 hover:text-neutral-50 after:content-[''] after:bg-neutral-300 after:h-[3px] after:w-0 after:left-0 after:-bottom-[5px] after:rounded-xl after:absolute after:transition-all after:duration-200 hover:after:w-full"
                  >
                    <Linkedin size={30} />
                  </a>
                </nav>
              </div>
            </div>
          </section>

          <section id="projetos" className="flex justify-center py-16">
            <div className="grid gap-6 md:mx-8 mx-4 md:max-w-7xl w-full">
              <article className="p-6 rounded-lg border-1 border-neutral-700 bg-neutral-800 max-w-2xl  md:max-w-7xl">
                <div className="flex flex-col md:p-12">
                  <div className="flex justify-between mb-3 pb-4 ">
                    <span className="font-bold text-3xl">
                      <a href="#">Ignite Feed</a>
                    </span>
                  </div>
                  <div className="pt-4 mb-4">
                    <p className="text-2xl text-left">
                      Uma aplicação de feed desenvolvida durante o módulo de
                      Fundamentos do Ignite ReactJS da Rocketseat. Neste
                      projeto, eu aprendi e apliquei conceitos essenciais do
                      React, como componentização, props, gerenciamento de
                      estado, imutabilidade e hooks.
                    </p>
                  </div>
                  <div className="pt-4 mt-4 border-t border-neutral-700">
                    <a href="#" className="flex gap-2">
                      Repositório no Github <MoveRight />
                    </a>
                  </div>
                </div>
              </article>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}

export default App;
