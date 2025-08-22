import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { bebasNeue } from '../[locale]/fonts';

export default function Inicio() {
    const t = useTranslations('SobreMim');
    return (
        <div  className="mt-20">
            <div id='sobre-mim' className="flex flex-col md:flex-row w-full bg-accent items-center justify-between px-6 md:px-24 py-10 gap-8">
            {/* Imagem primeiro no mobile */}
            <div className="w-full md:w-1/2 flex justify-center items-center order-1 md:order-2">
                <Image 
                    src="/Eu.jpg"
                    alt="Minha foto de perfil"
                    width={600}
                    height={700}
                    className="rounded-3xl"
                />
            </div>

            {/* Texto depois no mobile */}
            <div className="text-wrap w-full md:w-1/2 text-center md:text-left order-2 md:order-1">
                <h1 className="text-4xl md:text-6xl mb-6">{AUTOR}</h1>
                <p className="break-words max-w-full">{SOBRE_MIM}</p>
            </div>
            </div>
        </div>
    );
}
