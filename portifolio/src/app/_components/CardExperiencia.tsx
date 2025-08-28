interface ExperienciaProps {
  cargo: string,
  periodo: string,
  empresa: string,
  descricao: string
}

export function CardExperiencia({ cargo, periodo, empresa, descricao }: ExperienciaProps) {
  return (
    <div className="flex flex-col w-150 gap-4 border-l-2 border-[var(--primaria)] pl-4">
    <div className="flex justify-between">
      <span className="text-[var(--primaria)] font-bold">{cargo}</span>
      <span className="text-[var(--cinza-claro)]">{periodo}</span>
    </div>
    <span className="text-[var(--cinza-claro)]">{empresa}</span>
    <span className="text-[var(--cinza-claro)] text-sm">{descricao}</span>
  </div>

  );
}