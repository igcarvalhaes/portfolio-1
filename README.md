# 🚀 Igor Carvalhaes - Portfólio Frontend

> Portfólio pessoal desenvolvido com React, TypeScript e Tailwind CSS, apresentando projetos e habilidades em desenvolvimento frontend.

## 📋 Sobre o Projeto

Este é o portfólio pessoal de Igor Carvalhaes, estudante de Engenharia de Computação na UERJ, focado em desenvolvimento frontend. O projeto foi construído com tecnologias modernas e design responsivo, seguindo as melhores práticas de desenvolvimento.

## ✨ Funcionalidades

- 🎨 **Design Moderno**: Interface limpa com gradientes e animações suaves
- 📱 **Totalmente Responsivo**: Adaptado para todos os dispositivos
- 🌟 **Animações Interativas**: Efeitos hover e transições fluidas
- 🎯 **Seções Organizadas**: Hero, Sobre, Habilidades, Projetos e Footer
- 🌈 **Efeito Rainbow**: Animação especial no nome do footer
- ⚡ **Performance Otimizada**: Build otimizado com Vite

## 🛠️ Tecnologias Utilizadas

### Frontend

- **React 18.3.1** - Biblioteca para interfaces
- **TypeScript 5.5.3** - Tipagem estática
- **Vite 5.4.1** - Build tool moderna
- **Tailwind CSS 3.4.11** - Framework CSS utilitário

### UI/UX

- **shadcn/ui** - Componentes reutilizáveis
- **Radix UI** - Primitivos acessíveis
- **Lucide React** - Ícones modernos
- **CSS Grid** - Layout Bento Grid responsivo

### Ferramentas de Desenvolvimento

- **ESLint** - Linting de código
- **PostCSS** - Processamento CSS
- **Autoprefixer** - Compatibilidade CSS

## 📁 Estrutura do Projeto

```
portifolio/
├── public/
│   ├── favicon.ico
│   ├── placeholder.svg
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── ui/                    # Componentes base do shadcn/ui
│   │   │   ├── badge.tsx
│   │   │   ├── button.tsx
│   │   │   ├── toast.tsx
│   │   │   └── ...
│   │   ├── AboutSection.tsx       # Seção sobre o desenvolvedor
│   │   ├── Footer.tsx             # Footer com efeito rainbow
│   │   ├── HeroSection.tsx        # Seção principal/apresentação
│   │   ├── ProjectCard.tsx        # Card individual de projeto
│   │   ├── ProjectsSection.tsx    # Galeria de projetos
│   │   └── SkillsSection.tsx      # Habilidades e tecnologias
│   ├── hooks/
│   │   └── use-toast.ts           # Hook para notificações
│   ├── lib/
│   │   └── utils.ts               # Funções utilitárias
│   ├── pages/
│   │   ├── Index.tsx              # Página principal
│   │   └── NotFound.tsx           # Página 404
│   ├── App.tsx                    # Componente raiz
│   ├── index.css                  # Estilos globais + animações
│   └── main.tsx                   # Ponto de entrada
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── vite.config.ts
```

## 🎯 Seções do Portfólio

### 🏠 Hero Section

- Foto de perfil com animação
- Nome com gradiente colorido
- Links para redes sociais (GitHub, LinkedIn, Twitter, Email)
- Botão para navegação aos projetos

### 👨‍💻 About Section

- Biografia pessoal
- Localização (Rio de Janeiro, RJ)
- Status de disponibilidade para oportunidades
- Informações sobre motivação e objetivos

### ⚡ Skills Section

- **Frontend**: React, JavaScript, TypeScript, HTML, CSS, Tailwind CSS
- **Ferramentas**: Git, Vite, VS Code, GitHub, API Integration
- **Conceitos**: DOM Manipulation, Componentização, Hooks, Responsive Design

### 💼 Projects Section

Showcases de 6 projetos principais:

1. **Ignite Feed** - Feed social com React
2. **Weather App** - Aplicativo de clima com API
3. **Biblioteca** - Sistema de gerenciamento de livros
4. **Etch-a-Sketch** - Aplicativo de desenho interativo
5. **Pedra, Papel & Tesoura** - Jogo clássico
6. **Calculadora** - Calculadora funcional

### 🌈 Footer

- Copyright com efeito rainbow animado
- Interação especial no hover do nome

## 🚀 Como Executar

### Pré-requisitos

- Node.js (v22.14.0 ou superior)
- npm (v11.2.0 ou superior)

### Instalação

```bash
# Clone o repositório
git clone https://github.com/igcarvalhaes/portifolio.git

# Entre no diretório
cd portifolio

# Instale as dependências
npm install

# Execute o projeto em modo desenvolvimento
npm run dev

# Acesse no navegador
http://localhost:5173
```

### Scripts Disponíveis

```bash
npm run dev        # Servidor de desenvolvimento
npm run build      # Build de produção
npm run preview    # Preview do build
npm run lint       # Verificação de código
```

## 📱 Layout Responsivo

O projeto utiliza um sistema de grid responsivo (Bento Grid) que se adapta a diferentes tamanhos de tela:

- **Mobile** (< 768px): Layout de coluna única
- **Tablet** (768px - 1024px): Layout de 2 colunas
- **Desktop** (> 1024px): Layout de 12 colunas com posicionamento específico

## 🎨 Design System

### Cores

- **Primary**: Azul ciano (#00A6D6)
- **Secondary**: Roxo vibrante (#B366F2)
- **Accent**: Verde esmeralda (#22C55E)

### Animações

- Efeito float nos elementos
- Transições suaves (300ms)
- Hover effects interativos
- Rainbow animation no footer

## 📈 Performance

- ⚡ Build otimizado com Vite
- 🖼️ Imagens otimizadas
- 📦 Code splitting automático
- 🎯 Lazy loading implementado

## 🔮 Próximas Implementações

- [ ] Modo escuro/claro
- [ ] Formulário de contato funcional
- [ ] Blog pessoal
- [ ] Mais projetos showcases
- [ ] Testes automatizados
- [ ] PWA (Progressive Web App)

## 👨‍💻 Desenvolvedor

**Igor Carvalhaes**

- 🎓 Estudante de Engenharia de Computação - UERJ
- 💼 Desenvolvedor Frontend
- 📍 Rio de Janeiro, RJ
- 🔗 [GitHub](https://github.com/igcarvalhaes)
- 💼 [LinkedIn](https://linkedin.com/in/igorcarvalhaes)
- 📧 contatoigorcarvalhaes@gmail.com

## 📄 Licença

Este projeto é pessoal e está disponível sob a licença MIT. Sinta-se livre para se inspirar, mas por favor, não copie diretamente.

---

<div align="center">
  <p>Feito com ❤️ e muito ☕ por Igor Carvalhaes</p>
</div>
