import { useTranslations } from "next-intl";
import { bebasNeue } from "../[locale]/fonts";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { CardProjeto } from "./CardProjeto";

export default function Projetos() {
  const t = useTranslations("Projetos");

  return (
    <div id="projetos" className="px-10 md:px-8 py-10 gap-10 w-full">
      <h1 className={`${bebasNeue.className} text-6xl`}>{t("projetos")}</h1>
      <p className="mb-6 text-[var(--cinza-claro)]">{t("descricao")}</p>

      <Carousel>
        <CarouselContent>
          <CarouselItem className="basis-1/2">
            <CardProjeto titulo="teste" descricao="teste" ano={2016} tecnologias={["next.js", "html", "cobol"]} urlCodigoFonte="http://www.google.com" />
          </CarouselItem>
          <CarouselItem className="basis-1/2">
            <CardProjeto titulo="teste" descricao="teste" ano={2016} tecnologias={["css", "html", "cobol"]} urlCodigoFonte="http://www.google.com" />
          </CarouselItem>
          <CarouselItem className="basis-1/2">
            <CardProjeto titulo="teste" descricao="teste" ano={2016} tecnologias={["css", "html", "cobol"]} urlCodigoFonte="http://www.google.com" />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}