import { MapPin, Calendar, Coffee } from "lucide-react";

const AboutSection = () => {
  return (
    <div className="bg-card rounded-2xl p-6 border border-border/50 hover:border-secondary/30 transition-all duration-500 mb-6">
      <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
        Sobre Mim
      </h2>

      <div className="space-y-4">
        <p className="text-muted-foreground leading-relaxed">
          Sou um desenvolvedor front-end, estudante de Engenharia de Computação
          na UERJ, apaixonado por criar interfaces bonitas e interativas,
          focadas em usabilidades, desempenho e acessibilidade, utilizando boas
          práticas de código limpo.
        </p>

        <div className="space-y-3">
          <div className="flex items-center gap-3 text-sm">
            <MapPin className="w-4 h-4 text-primary" />
            <span className="text-muted-foreground">Rio de Janeiro, RJ</span>
          </div>
          <div className="flex items-center gap-3 text-sm">
            <Calendar className="w-4 h-4 text-secondary" />
            <span className="text-muted-foreground">
              Estagiário na{" "}
              <a
                href="https://www.linkedin.com/company/serrajreng/posts/?feedView=all"
                className="rainbow-text transition-all duration-300 inline-block font-semibold"
              >
                Serra Jr. Engenharia
              </a>
            </span>
          </div>
          <div className="flex items-center gap-3 text-sm">
            <Coffee className="w-4 h-4 text-accent" />
            <span className="text-muted-foreground">
              Movido por café & criatividade
            </span>
          </div>
        </div>

        <div className="mt-6 p-4 rounded-xl bg-gradient-to-r from-secondary/10 to-accent/10 border border-secondary/20">
          <p className="text-sm text-muted-foreground">
            Quando não estou programando, você me encontrará explorando novas
            tecnologias, aprimorando minhas habilidades através de projetos
            pessoais, ou estudando para me tornar um engenheiro completo.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
