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
          <span className="font-bold text-2xl md:text-3xl">
            <a
              className="relative hover:text-neutral-100 after:content-[''] after:bg-neutral-300 after:h-[3px] after:w-0 after:left-0 after:-bottom-[5px] after:rounded-xl after:absolute after:transition-width after:transition-all after:duration-500 hover:after:w-full"
              target="_blank"
              href={linkProjetoLive}
            >
              {nome}
            </a>
          </span>
        </div>
        <div className="pt-4 mb-4">
          <p className="text-1xl md:text-2xl text-left">{descricao}</p>
        </div>
        <div className="pt-4 mt-4 border-t border-neutral-700">
          <a
            target="_blank"
            href={linkRepo}
            className="flex gap-2 hover:text-neutral-100"
          >
            Repositório do Github <MoveRight />
          </a>
        </div>
      </div>
    </article>
  );
}
