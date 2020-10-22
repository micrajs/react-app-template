import { Language } from 'app/translation/types';

export interface SelectLanguageProps {
  language: Language;
  languages: Language[];
  defaultLanguage: Language;
  onChange(e: React.FormEvent<HTMLSelectElement>): void;
}
