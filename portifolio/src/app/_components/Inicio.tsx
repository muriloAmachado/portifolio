import { AUTOR, SOBRE_MIM } from '@/lib/constants';
import Image from 'next/image';
import {useTranslations} from 'next-intl';

export default function Inicio() {
    const t = useTranslations('SobreMim');
    return (
        <div className="flex flex-col md:flex-row w-full bg-accent items-center justify-between px-6 md:px-24 py-10 gap-8">
            
            {/* Imagem primeiro no mobile */}
            <div className="w-full md:w-1/2 flex justify-center items-center order-1 md:order-2">
                <Image 
                    src="/window.svg"
                    alt="Window"
                    width={0}
                    height={0}
                    className="h-auto max-h-[300px] md:h-full w-auto object-contain"
                />
            </div>

            {/* Texto depois no mobile */}
            <div className="text-wrap w-full md:w-1/2 text-center md:text-left order-2 md:order-1">
                <h1 className="text-4xl md:text-6xl mb-6">{t("autor")}</h1>
                <p className="break-words max-w-full">{t("descricao")}</p>
            </div>
        </div>
    );
}
