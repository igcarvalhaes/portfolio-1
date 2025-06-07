import { MoveRight } from "lucide-react";

interface ProjetosCardProps {
  nome: string;
  descricao: string;
  linkProjetoLive: string;
  linkRepo: string;
}

export function ProjetosCard({
  nome,
  descricao,
  linkProjetoLive,
  linkRepo,
}: ProjetosCardProps) {
  return (
    <article className="p-6 rounded-lg border-1 border-neutral-700 bg-neutral-800 max-w-2xl  md:max-w-7xl">
      <div className="flex flex-col md:p-12">
        <div className="flex justify-between mb-3 pb-4 ">
          <span className="font-bold text-3xl">
            <a target="_blank" href={linkProjetoLive}>
              {nome}
            </a>
          </span>
        </div>
        <div className="pt-4 mb-4">
          <p className="text-2xl text-left">{descricao}</p>
        </div>
        <div className="pt-4 mt-4 border-t border-neutral-700">
          <a target="_blank" href={linkRepo} className="flex gap-2">
            Repositório do Github <MoveRight />
          </a>
        </div>
      </div>
    </article>
  );
}
