import { AUTOR, SOBRE_MIM } from '@/lib/contants';
import Image from 'next/image';

export default function Experiencias() {
    return (
        <div id='experiencias' className="flex flex-col md:flex-row w-full bg-accent items-center justify-between px-6 md:px-24 py-10 gap-8">
            <div className="text-wrap w-full md:w-1/2 text-center md:text-left  ">
                <h1 className="text-4xl md:text-6xl mb-6">EXPERIÊNCIAS</h1>
            </div>
            <div className="w-full md:w-1/2 flex justify-center items-center ">
                <p className="break-words max-w-full">{SOBRE_MIM}</p>
            </div>

            {/* Texto depois no mobile */}
            
        </div>
    );
}
