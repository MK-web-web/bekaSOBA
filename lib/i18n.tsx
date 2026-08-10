"use client";

import {
  createContext,
  useCallback,
  useContext,
  useSyncExternalStore,
  ReactNode,
} from "react";

export type Lang = "fr" | "en";

const STORAGE_KEY = "dkg-lang";

function readLang(): Lang {
  if (typeof window === "undefined") return "fr";
  const stored = window.localStorage.getItem(STORAGE_KEY);
  return stored === "en" || stored === "fr" ? stored : "fr";
}

function subscribe(onStoreChange: () => void) {
  window.addEventListener("storage", onStoreChange);
  window.addEventListener("dkg-lang-change", onStoreChange);
  return () => {
    window.removeEventListener("storage", onStoreChange);
    window.removeEventListener("dkg-lang-change", onStoreChange);
  };
}

type LanguageContextType = {
  lang: Lang;
  setLang: (l: Lang) => void;
  toggle: () => void;
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const lang = useSyncExternalStore(subscribe, readLang, () => "fr");

  const setLang = useCallback((l: Lang) => {
    window.localStorage.setItem(STORAGE_KEY, l);
    window.dispatchEvent(new Event("dkg-lang-change"));
  }, []);

  const toggle = useCallback(() => {
    setLang(readLang() === "fr" ? "en" : "fr");
  }, [setLang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggle }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
