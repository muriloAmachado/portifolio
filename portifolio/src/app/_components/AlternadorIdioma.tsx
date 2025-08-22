"use client";

import { usePathname, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

type Language = "pt-BR" | "en-US";

export default function AlternadorIdioma() {
  const router = useRouter();
  const pathname = usePathname();

  const languages: { code: Language; label: string; flag: string }[] = [
    { code: "pt-BR", label: "Português", flag: "br" },
    { code: "en-US", label: "English", flag: "us" },
  ];

  function changeLang(lang: Language) {
    const pathWithoutLocale = pathname.replace(/^\/(pt-BR|en-US)/, "");
    router.push(`/${lang}${pathWithoutLocale}`);
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="flex items-center gap-2">
          <span
            className={`fi fi-${
              pathname.startsWith("/en-US") ? "us" : "br"
            }`}
          />
          {pathname.startsWith("/en-US") ? "English" : "Português"}
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-40">
        {languages.map((l) => (
          <DropdownMenuItem
            key={l.code}
            onClick={() => changeLang(l.code)}
            className="flex items-center gap-2"
          >
            <span className={`fi fi-${l.flag}`} />
            {l.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
