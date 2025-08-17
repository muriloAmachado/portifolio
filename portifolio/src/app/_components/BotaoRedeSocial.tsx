import { ReactNode } from "react";

interface BotaoRedeSocialProps {
  link: string;
  children: ReactNode;
  rotulo?: string;
}

export function BotaoRedeSocial({ link, children, rotulo }: BotaoRedeSocialProps) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={rotulo}
      className="w-12 h-12 bg-[var(--cinza-escuro)] text-[var(--primaria)] rounded-full flex items-center justify-center hover:bg-[var(--cinza-escuro-hover)] transition-colors"
    >
      {children}
    </a>
  );
}