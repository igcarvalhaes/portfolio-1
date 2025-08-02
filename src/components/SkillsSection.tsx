import { Badge } from "@/components/ui/badge";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        "React",
        "JavaScript",
        "TypeScript",
        "HTML",
        "CSS",
        "Tailwind CSS",
      ],
      gradient: "from-primary to-secondary",
    },
    {
      title: "Ferramentas",
      skills: ["Git", "Vite", "VS Code", "GitHub", "API Integration"],
      gradient: "from-secondary to-accent",
    },
    {
      title: "Conceitos",
      skills: [
        "DOM Manipulation",
        "Componentização",
        "Hooks",
        "Responsive Design",
      ],
      gradient: "from-accent to-primary",
    },
  ];

  return (
    <div className="col-span-12 md:col-span-6 lg:col-span-4 lg:col-start-8 bg-card rounded-2xl p-6 border border-border/50 hover:border-primary/30 transition-all duration-500">
      <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
        Habilidades & Tecnologias
      </h2>

      <div className="space-y-6">
        {skillCategories.map((category, index) => (
          <div key={index} className="space-y-3">
            <h3
              className={`text-lg font-semibold bg-gradient-to-r ${category.gradient} bg-clip-text text-transparent`}
            >
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, skillIndex) => (
                <Badge
                  key={skillIndex}
                  variant="secondary"
                  className="bg-muted/70 hover:bg-muted/90 transition-colors duration-300 border border-border/50 hover:border-primary/40 text-foreground/90 hover:text-foreground cursor-pointer"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 p-4 rounded-xl bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20">
        <p className="text-sm text-muted-foreground">
          Sempre aprendendo e explorando novas tecnologias para me manter
          atualizado com as tendências da indústria.
        </p>
      </div>
    </div>
  );
};

export default SkillsSection;
