"use client";
import { content, type Locale } from "./content";
import { createContext, useContext, useEffect, useState } from "react";

type LanguageContext = { locale: Locale; setLocale: (locale: Locale) => void; t: (typeof content)[Locale] };
const Context = createContext<LanguageContext>({ locale: "vi", setLocale: () => {}, t: content.vi });
export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("vi");
  useEffect(() => { const saved = localStorage.getItem("camp-locale"); if (saved === "en" || saved === "vi") setLocaleState(saved); }, []);
  const setLocale = (next: Locale) => { localStorage.setItem("camp-locale", next); document.documentElement.lang = next; setLocaleState(next); };
  return <Context.Provider value={{ locale, setLocale, t: content[locale] }}>{children}</Context.Provider>;
}
export const useLanguage = () => useContext(Context);
