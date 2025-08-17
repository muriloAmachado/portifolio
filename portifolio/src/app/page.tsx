import { NavigationMenu } from "@/components/ui/navigation-menu";
import Image from "next/image";
import Inicio from "./_components/Inicio";
import {MenuNavegacao} from "./_components/MenuNavegacao";
import Projetos from "./_components/Projetos";
import Experiencias from "./_components/Experiencias";
import Contato from "./_components/Contato";

export default function Home() {
  return (
    <div className="bg-background min-h-screen flex flex-col">
      {/* Menu fixo no topo */}
      <MenuNavegacao />      

      <main className="flex flex-col gap-8 items-center sm:items-start px-2 sm:px-8 md:px-16 flex-1">
        <Inicio />
        <Experiencias/>
        <Projetos/>
        <Contato/>
      </main>

      {/* Rodapé */}
      <footer className="flex gap-6 flex-wrap items-center justify-center py-4">
        {/* Conteúdo do footer */}
      </footer>
    </div>
  );
}
