import { LINGUAGENS } from '@/lib/constants';
import {defineRouting} from 'next-intl/routing';
 
export const routing = defineRouting({
  // A list of all locales that are supported
  locales: LINGUAGENS,
 
  // Used when no locale matches
  defaultLocale: 'pt-BR'
});