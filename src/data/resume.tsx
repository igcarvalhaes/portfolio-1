import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Igor Carvalhaes",
  initials: "IC",
  url: "https://www.igorcarvalhaes.com",
  location: "Rio de Janeiro, RJ",
  locationLink: "https://www.google.com/maps/place/rio+de+janeiro",
  description:
    "Desenvolvedor Front-End. Estudante de Engenharia de Computação na UERJ, apaixonado por criar interfaces bonitas e interativas.",
  summary:
    "Sou um desenvolvedor front-end, estudante de Engenharia de Computação na UERJ, apaixonado por criar interfaces bonitas e interativas, focadas em usabilidades, desempenho e acessibilidade, utilizando boas práticas de código limpo. Quando não estou programando, você me encontrará explorando novas tecnologias, aprimorando minhas habilidades através de projetos pessoais, ou estudando para me tornar um engenheiro completo.",
  avatarUrl: "/me.png",
  skills: [
    "React",
    "JavaScript",
    "TypeScript",
    "HTML",
    "CSS",
    "Tailwind CSS",
    "Git",
    "Vite",
    "VS Code",
    "GitHub",
    "API Integration",
    "DOM Manipulation",
    "Componentização",
    "Hooks",
    "Responsive Design",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "contatoigorcarvalhaes@gmail.com",
    tel: "+5521999999999",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/igcarvalhaes",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/igor-carvalhaes/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/igcarvalhaes",
        icon: Icons.x,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:contatoigorcarvalhaes@gmail.com",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Serra Jr. Engenharia",
      href: "https://www.linkedin.com/company/serrajreng/posts/?feedView=all",
      badges: [],
      location: "Rio de Janeiro, RJ",
      title: "Estagiário",
      logoUrl: "/serrajr.png",
      start: "2024",
      end: "Presente",
      description:
        "Desenvolvimento e manutenção de aplicações web utilizando React e JavaScript. Foco em criar interfaces responsivas e acessíveis, aplicando boas práticas de desenvolvimento.",
    },
  ],
  education: [
    {
      school: "Universidade do Estado do Rio de Janeiro (UERJ)",
      href: "https://www.uerj.br",
      degree: "Bacharelado em Engenharia de Computação",
      logoUrl: "/uerj.png",
      start: "2022",
      end: "Presente",
    },
  ],
  projects: [
    {
      title: "Ignite Feed",
      href: "https://ignite-feed-ebon-seven.vercel.app/",
      dates: "2024",
      active: true,
      description:
        "Feed social desenvolvido com React, aplicando componentização, props, estados e hooks. Projeto do módulo Fundamentos do Ignite ReactJS da Rocketseat.",
      technologies: [
        "React",
        "CSS",
        "Vite",
        "JavaScript",
      ],
      links: [
        {
          type: "Website",
          href: "https://ignite-feed-ebon-seven.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/igcarvalhaes/ignite-feed",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "https://raw.githubusercontent.com/igcarvalhaes/ignite-feed/refs/heads/main/public/preview.png",
      video: "",
    },
    {
      title: "Weather App",
      href: "https://igcarvalhaes.github.io/weatherwebsite/",
      dates: "2024",
      active: true,
      description:
        "Site de previsão do tempo com busca por cidade, consumindo API da OpenWeatherMap. Desenvolvido com JavaScript puro e estilizado com Tailwind CSS.",
      technologies: [
        "JavaScript",
        "Tailwind CSS",
        "API",
        "HTML",
      ],
      links: [
        {
          type: "Website",
          href: "https://igcarvalhaes.github.io/weatherwebsite/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/igcarvalhaes/weatherwebsite",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "https://raw.githubusercontent.com/igcarvalhaes/weatherwebsite/refs/heads/main/img/01.png",
      video: "",
    },
    {
      title: "Biblioteca",
      href: "https://igcarvalhaes.github.io/library/",
      dates: "2024",
      active: true,
      description:
        "Aplicação para gerenciamento de livros com funcionalidades para adicionar, editar e excluir itens. Desenvolvido com JavaScript e manipulação de DOM.",
      technologies: [
        "JavaScript",
        "DOM",
        "CSS",
        "HTML",
      ],
      links: [
        {
          type: "Website",
          href: "https://igcarvalhaes.github.io/library/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/igcarvalhaes/library",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "https://raw.githubusercontent.com/igcarvalhaes/library/refs/heads/main/images/library02.png",
      video: "",
    },
    {
      title: "Etch-a-Sketch",
      href: "https://igcarvalhaes.github.io/etch-a-sketch/",
      dates: "2024",
      active: true,
      description:
        "Desenhe livremente em uma grade de pixels, com funcionalidades para limpar a tela e alterar a cor do traço. Desenvolvido com JavaScript puro.",
      technologies: [
        "JavaScript",
        "CSS",
        "DOM",
        "Canvas",
      ],
      links: [
        {
          type: "Website",
          href: "https://igcarvalhaes.github.io/etch-a-sketch/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/igcarvalhaes/etch-a-sketch",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "https://raw.githubusercontent.com/igcarvalhaes/etch-a-sketch/refs/heads/main/images/etch-a-sketch.png",
      video: "",
    },
    {
      title: "Pedra, Papel & Tesoura",
      href: "https://igcarvalhaes.github.io/rock-paper-scissors/",
      dates: "2024",
      active: true,
      description:
        "Jogo clássico onde você compete contra o computador. Implementa lógica de pontuação, sistema de rodadas e declara o vencedor após cinco partidas.",
      technologies: [
        "JavaScript",
        "Game Logic",
        "CSS",
        "HTML",
      ],
      links: [
        {
          type: "Website",
          href: "https://igcarvalhaes.github.io/rock-paper-scissors/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/igcarvalhaes/rock-paper-scissors",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "https://raw.githubusercontent.com/igcarvalhaes/rock-paper-scissors/refs/heads/main/rockpaperscissors.png",
      video: "",
    },
    {
      title: "Calculadora",
      href: "https://igcarvalhaes.github.io/calculator/",
      dates: "2024",
      active: true,
      description:
        "Calculadora funcional para operações matemáticas básicas. Projeto focado em manipulação do DOM e lógica de cálculo com JavaScript.",
      technologies: [
        "JavaScript",
        "Math Logic",
        "CSS",
        "DOM",
      ],
      links: [
        {
          type: "Website",
          href: "https://igcarvalhaes.github.io/calculator/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/igcarvalhaes/calculator",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "https://raw.githubusercontent.com/igcarvalhaes/calculator/refs/heads/main/images/calculator.png",
      video: "",
    },
  ],
  hackathons: [
    // Adicione seus hackathons aqui se participou de algum
    // Ou remova esta seção se preferir
  ],
} as const;
