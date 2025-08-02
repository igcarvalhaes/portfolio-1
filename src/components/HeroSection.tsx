import { Github, Linkedin, Mail, ArrowDown, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <div className="col-span-12 md:col-span-8 lg:col-span-6 lg:col-start-2 bg-gradient-to-br from-card to-muted/30 rounded-3xl p-8 border border-border/50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl" />
      <div className="absolute top-4 right-4 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-4 left-4 w-24 h-24 bg-secondary/10 rounded-full blur-2xl" />

      <div className="relative z-10 flex flex-col items-center text-center h-full justify-center min-h-[400px]">
        {/* Avatar */}
        <div className="relative mb-6 animate-float">
          <div className="w-32 h-32 rounded-full bg-gradient-primary p-1 animate-pulse-glow">
            <img
              src="https://github.com/igcarvalhaes.png"
              alt="Igor Carvalhaes"
              className="w-full h-full rounded-full object-cover"
            />
          </div>
        </div>

        {/* Name and Title */}
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent leading-tight py-2">
          Igor Carvalhaes
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-6">
          Desenvolvedor Front-End
        </p>
        <p className="text-lg text-muted-foreground max-w-md mb-8">
          Estudante de Engenharia de Computação na UERJ, apaixonado por criar
          interfaces bonitas e interativas, focadas em usabilidades, desempenho
          e acessibilidade.
        </p>

        {/* Social Links */}
        <div className="flex gap-4 mb-8">
          <Button
            variant="outline"
            size="icon"
            className="rounded-full border-primary/30 hover:border-primary hover:bg-primary/10 transition-all duration-300"
            asChild
          >
            <a
              href="https://github.com/igcarvalhaes/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-5 h-5" />
            </a>
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="rounded-full border-secondary/30 hover:border-secondary hover:bg-secondary/10 transition-all duration-300"
            asChild
          >
            <a
              href="https://www.linkedin.com/in/igor-carvalhaes/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="rounded-full border-accent/30 hover:border-accent hover:bg-accent/10 transition-all duration-300"
            asChild
          >
            <a
              href="https://x.com/igcarvalhaes"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter className="w-5 h-5" />
            </a>
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="rounded-full border-accent/30 hover:border-accent hover:bg-accent/10 transition-all duration-300"
            asChild
          >
            <a href="mailto:contatoigorcarvalhaes@gmail.com">
              <Mail className="w-5 h-5" />
            </a>
          </Button>
        </div>

        {/* CTA Button */}
        <Button
          className="gradient-primary hover:glow-primary transition-all duration-300 rounded-full px-8 py-6 text-lg font-semibold group"
          onClick={() => {
            document.getElementById("projetos")?.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }}
        >
          Ver Meus Trabalhos
          <ArrowDown className="ml-2 w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" />
        </Button>
      </div>
    </div>
  );
};

export default HeroSection;
