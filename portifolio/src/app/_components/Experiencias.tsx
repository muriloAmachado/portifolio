import { useTranslations } from "next-intl";
import { bebasNeue } from "../[locale]/fonts";
import { CardExperiencia } from "./CardExperiencia";
import { Cargo } from "@/lib/constants";

export default function Experiencias() {
  const t = useTranslations("Experiencias");

  const experiencias: Cargo[] = [
  {
    "cargo": "Desenvolvedor full-stack",
    "periodo": "Abr 2025 - Presente",
    "empresa": "90 Tecnologia da Informação",
    "descricao": "Teste"
  },
  {
    "cargo": "Suporte Técnico",
    "periodo": "Mai 2023 - Abr 2025",
    "empresa": "TPA Sistemas LTDA",
    "descricao": "Teste"
  }
];

  return (
    <div id="experiencias" className="flex justify-between w-full items-start px-10 md:px-8 py-10 gap-10">
      <h1 className={`${bebasNeue.className} text-6xl`}>{t("experiencias")}</h1>

      <div className="flex flex-col gap-12">
        {
          experiencias.map((e, index)=> (
             <CardExperiencia 
              key={index} 
              cargo={e.cargo} 
              periodo={e.periodo} 
              empresa={e.empresa} 
              descricao={e.descricao}
            />
          ))
        }
      </div>
    </div>
  );
}
