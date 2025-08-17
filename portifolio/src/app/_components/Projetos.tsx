import { AUTOR, SOBRE_MIM } from '@/lib/contants';
import Image from 'next/image';

export default function Projetos() {
    return (
         <div 
            id="projetos" 
            className="flex flex-col w-full bg-accent justify-between px-6 md:px-24 py-10 gap-8"
        >
            <h1 className="text-4xl md:text-6xl text-left mb-4">PROJETOS</h1>

            <div className="flex flex-col flex-wrap items-center justify-center gap-8 w-full">
                <div className="w-72 h-40 bg-background rounded-2xl shadow-md flex items-center justify-center">
                    Projeto 1
                </div>
                <div className="w-72 h-40 bg-background rounded-2xl shadow-md flex items-center justify-center">
                    Projeto 2
                </div>
                <div className="w-72 h-40 bg-background rounded-2xl shadow-md flex items-center justify-center">
                    Projeto 3
                </div>
            </div>
        </div>
    );
}
