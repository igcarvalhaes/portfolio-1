import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  gradient: string;
}

const ProjectCard = ({
  title,
  description,
  image,
  tags,
  liveUrl,
  githubUrl,
  gradient,
}: ProjectCardProps) => {
  return (
    <div className="group relative bg-card rounded-2xl border border-border/50 overflow-hidden hover:border-primary/30 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl cursor-pointer flex flex-col h-full">
      {/* Project Image */}
      <div className="relative h-48 overflow-hidden">
        <div className={`absolute inset-0 ${gradient} opacity-20`} />
        {image ? (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            onError={(e) => {
              // Fallback para caso a imagem não carregue
              const target = e.target as HTMLImageElement;
              target.style.display = "none";
              target.nextElementSibling?.classList.remove("hidden");
            }}
          />
        ) : null}
        <div className="hidden w-full h-full bg-muted/50 flex items-center justify-center text-4xl font-bold text-muted-foreground">
          {title.charAt(0)}
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col h-full">
        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>
        <p className="text-muted-foreground mb-2 text-sm leading-relaxed flex-grow">
          {description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-3">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 text-xs rounded-full bg-muted/50 text-foreground border border-border/30"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 mt-auto">
          {liveUrl && (
            <Button
              variant="outline"
              size="sm"
              className="flex-1 border-primary/30 hover:border-primary hover:bg-primary/10 transition-all duration-300"
              asChild
            >
              <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4 mr-2" />
                Live Demo
              </a>
            </Button>
          )}
          {githubUrl && (
            <Button
              variant="outline"
              size="sm"
              className="border-muted-foreground/30 hover:border-muted-foreground hover:bg-muted/20 transition-all duration-300 aspect-square flex-shrink-0"
              asChild
            >
              <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4" />
              </a>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
