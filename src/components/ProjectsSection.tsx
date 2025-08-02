import ProjectCard from "./ProjectCard";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Ignite Feed",
      description:
        "Feed social desenvolvido com React, aplicando componentização, props, estados e hooks. Projeto do módulo Fundamentos do Ignite ReactJS da Rocketseat.",
      image:
        "https://raw.githubusercontent.com/igcarvalhaes/ignite-feed/refs/heads/main/public/preview.png",
      tags: ["React", "CSS", "Vite", "JavaScript"],
      liveUrl: "https://ignite-feed-ebon-seven.vercel.app/",
      githubUrl: "https://github.com/igcarvalhaes/ignite-feed",
      gradient: "gradient-primary",
    },
    {
      title: "Weather App",
      description:
        "Site de previsão do tempo com busca por cidade, consumindo API da OpenWeatherMap. Desenvolvido com JavaScript puro e estilizado com Tailwind CSS.",
      image:
        "https://raw.githubusercontent.com/igcarvalhaes/weatherwebsite/refs/heads/main/img/01.png",
      tags: ["JavaScript", "Tailwind CSS", "API", "HTML"],
      liveUrl: "https://igcarvalhaes.github.io/weatherwebsite/",
      githubUrl: "https://github.com/igcarvalhaes/weatherwebsite",
      gradient: "gradient-secondary",
    },
    {
      title: "Biblioteca",
      description:
        "Aplicação para gerenciamento de livros com funcionalidades para adicionar, editar e excluir itens. Desenvolvido com JavaScript e manipulação de DOM.",
      image:
        "https://raw.githubusercontent.com/igcarvalhaes/library/refs/heads/main/images/library02.png",
      tags: ["JavaScript", "DOM", "CSS", "HTML"],
      liveUrl: "https://igcarvalhaes.github.io/library/",
      githubUrl: "https://github.com/igcarvalhaes/library",
      gradient: "bg-gradient-to-br from-accent to-primary",
    },
    {
      title: "Etch-a-Sketch",
      description:
        "Desenhe livremente em uma grade de pixels, com funcionalidades para limpar a tela e alterar a cor do traço. Desenvolvido com JavaScript puro.",
      image:
        "https://raw.githubusercontent.com/igcarvalhaes/etch-a-sketch/refs/heads/main/images/etch-a-sketch.png",
      tags: ["JavaScript", "CSS", "DOM", "Canvas"],
      liveUrl: "https://igcarvalhaes.github.io/etch-a-sketch/",
      githubUrl: "https://github.com/igcarvalhaes/etch-a-sketch",
      gradient: "gradient-primary",
    },
    {
      title: "Pedra, Papel & Tesoura",
      description:
        "Jogo clássico onde você compete contra o computador. Implementa lógica de pontuação, sistema de rodadas e declara o vencedor após cinco partidas.",
      image:
        "https://raw.githubusercontent.com/igcarvalhaes/rock-paper-scissors/refs/heads/main/rockpaperscissors.png",
      tags: ["JavaScript", "Game Logic", "CSS", "HTML"],
      liveUrl: "https://igcarvalhaes.github.io/rock-paper-scissors/",
      githubUrl: "https://github.com/igcarvalhaes/rock-paper-scissors",
      gradient: "gradient-secondary",
    },
    {
      title: "Calculadora",
      description:
        "Calculadora funcional para operações matemáticas básicas. Projeto focado em manipulação do DOM e lógica de cálculo com JavaScript.",
      image:
        "https://raw.githubusercontent.com/igcarvalhaes/calculator/refs/heads/main/images/calculator.png",
      tags: ["JavaScript", "Math Logic", "CSS", "DOM"],
      liveUrl: "https://igcarvalhaes.github.io/calculator/",
      githubUrl: "https://github.com/igcarvalhaes/calculator",
      gradient: "bg-gradient-to-br from-accent to-primary",
    },
  ];

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Projetos em Destaque
        </h2>
        <p className="text-muted-foreground">
          Alguns dos meus trabalhos recentes mostrando diferentes tecnologias e
          abordagens
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;
