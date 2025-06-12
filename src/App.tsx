import "./App.css";
import { Navbar } from "./components/Navbar";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { ProjetosCard } from "./components/ProjetosCard";
import { Footer } from "./components/Footer";

const projetos = [
  {
    id: 1,
    nome: "Ignite Feed",
    descricao:
      "Uma aplicação de feed desenvolvida durante o módulo de Fundamentos do Ignite ReactJS da Rocketseat. Neste projeto, eu aprendi e apliquei conceitos essenciais do React, como componentização, props, gerenciamento de estado, imutabilidade e hooks",
    linkProjetoLive: "https://ignite-feed-ebon-seven.vercel.app/",
    linkRepo: "https://github.com/igcarvalhaes/ignite-feed",
  },
  {
    id: 2,
    nome: "Biblioteca",
    descricao:
      "Uma aplicação de biblioteca criada como parte do curso The Odin Project. Este projeto foi desenvolvido para gerenciar livros, permitindo adicionar, editar e excluir itens. Aprendi conceitos fundamentais de DOM manipulation e lógica de programação com JavaScript.",
    linkProjetoLive: "https://igcarvalhaes.github.io/library/",
    linkRepo: "https://github.com/igcarvalhaes/library",
  },
  {
    id: 3,
    nome: "Weather App",
    descricao:
      "Um site para consulta de previsão do tempo, onde o usuário pode buscar informações meteorológicas de qualquer cidade. Desenvolvido com JavaScript puro, consumindo dados de uma API gratuita da OpenWeatherMap e utilizando Tailwind CSS para o design responsivo.",
    linkProjetoLive: "https://igcarvalhaes.github.io/weatherwebsite/",
    linkRepo: "https://github.com/igcarvalhaes/weatherwebsite",
  },
  {
    id: 4,
    nome: "Pedra, Papel & Tesoura",
    descricao:
      "Você e o computador participarão de uma série de rodadas, cada uma escolhendo uma das três opções: Pedra, Papel ou Tesoura. O jogo acompanha a pontuação e declara o vencedor após cinco rodadas.",
    linkProjetoLive: "https://igcarvalhaes.github.io/rock-paper-scissors/",
    linkRepo: "https://github.com/igcarvalhaes/rock-paper-scissors",
  },
  {
    id: 5,
    nome: "Calculadora",
    descricao:
      "Uma calculadora funcional que permite realizar operações matemáticas básicas, como adição, subtração, multiplicação e divisão. Desenvolvida como parte do curso The Odin Project, esse projeto foca no uso de JavaScript para manipulação do DOM e lógica de cálculo.",
    linkProjetoLive: "https://igcarvalhaes.github.io/calculator/",
    linkRepo: "https://github.com/igcarvalhaes/calculator",
  },
];

function App() {
  return (
    <>
      <div id="início" className="min-h-screen bg-neutral-900 text-neutral-300">
        <Navbar />
        <main>
          <section
            id="sobre"
            className="min-h-screen flex items-center justify-center flex-col"
          >
            <div className="flex flex-col items-center gap-12 md:gap-0 md:flex-row md:justify-center md:items-center w-full md:max-w-5xl">
              {/* Foto */}
              <div className="order-1 md:order-2 w-full flex justify-center">
                <div className="w-64 h-64 md:w-[18.75rem] md:h-[18.75rem]">
                  <img
                    src="https://github.com/igcarvalhaes.png"
                    alt="Foto de perfil"
                    className="object-cover rounded-full w-full h-full"
                  />
                </div>
              </div>

              {/* Texto */}
              <div className="order-2 gap-5 md:gap-8 md:order-1 w-full flex flex-col items-center md:items-start justify-center text-center md:text-left px-4">
                <h2 className="text-white text-3xl font-bold md:text-4xl md:text-left">
                  Igor Carvalhaes
                </h2>
                <p className="text-lg md:text-xl font-light mx-2 md:w-130 md:text-left md:mx-0">
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
                    href="mailto:contatoigorcarvalhaes@gmail.com"
                    target="_blank"
                    title="Entre em contato por email"
                    className="relative link-underline flex items-center gap-2 p-2 rounded-lg transition-all duration-200 text-neutral-300 hover:text-neutral-50 after:content-[''] after:bg-neutral-300 after:h-[3px] after:w-0 after:left-0 after:-bottom-[5px] after:rounded-xl after:absolute after:transition-all after:duration-200 hover:after:w-full"
                  >
                    <Mail size={30} className="md:w-[23px] md:h-[23px]" />
                  </a>
                  <a
                    href="https://x.com/igcarvalhaes"
                    className="relative link-underline flex items-center gap-2 p-2 rounded-lg transition-all duration-200 text-neutral-300 hover:text-neutral-50 after:content-[''] after:bg-neutral-300 after:h-[3px] after:w-0 after:left-0 after:-bottom-[5px] after:rounded-xl after:absolute after:transition-all after:duration-200 hover:after:w-full"
                    target="_blank"
                  >
                    <Twitter size={30} className="md:w-[23px] md:h-[23px]" />
                  </a>
                  <a
                    href="https://github.com/igcarvalhaes/"
                    className="relative link-underline flex items-center gap-2 p-2 rounded-lg transition-all duration-200 text-neutral-300 hover:text-neutral-50 after:content-[''] after:bg-neutral-300 after:h-[3px] after:w-0 after:left-0 after:-bottom-[5px] after:rounded-xl after:absolute after:transition-all after:duration-200 hover:after:w-full"
                    target="_blank"
                  >
                    <Github size={30} className="md:w-[23px] md:h-[23px]" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/igor-carvalhaes/"
                    className="relative link-underline flex items-center gap-2 p-2 rounded-lg transition-all duration-200 text-neutral-300 hover:text-neutral-50 after:content-[''] after:bg-neutral-300 after:h-[3px] after:w-0 after:left-0 after:-bottom-[5px] after:rounded-xl after:absolute after:transition-all after:duration-200 hover:after:w-full"
                    target="_blank"
                  >
                    <Linkedin size={30} className="md:w-[23px] md:h-[23px]" />
                  </a>
                </nav>
              </div>
            </div>
          </section>

          <section id="projetos" className="flex justify-center py-16">
            <div className="grid gap-6 md:mx-8 mx-4 md:max-w-7xl w-full place-items-center">
              <h1 className="text-5xl font-bold text-center mb-5 md:text-4xl">
                Projetos
              </h1>
              {projetos.map((projeto) => (
                <ProjetosCard
                  key={projeto.id}
                  nome={projeto.nome}
                  descricao={projeto.descricao}
                  linkProjetoLive={projeto.linkProjetoLive}
                  linkRepo={projeto.linkRepo}
                />
              ))}
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}

export default App;
