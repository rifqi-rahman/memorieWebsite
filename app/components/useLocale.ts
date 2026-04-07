"use client";

import { useEffect, useSyncExternalStore } from "react";

export type Locale = "en" | "id";

const STORAGE_KEY = "memorie-locale";
const listeners = new Set<() => void>();

function detectDeviceLocale(): Locale {
  if (typeof window === "undefined") return "en";

  const preferred = window.navigator.languages?.join(",") ?? window.navigator.language;
  return /(^|,\s*)id(-|,|$)/i.test(preferred) ? "id" : "en";
}

function getClientLocale(): Locale {
  if (typeof window === "undefined") return "en";

  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved === "id" || saved === "en") {
    return saved;
  }

  return detectDeviceLocale();
}

function getServerLocale(): Locale {
  return "en";
}

function emitLocaleChange() {
  listeners.forEach((listener) => listener());
}

function subscribeLocale(listener: () => void) {
  listeners.add(listener);

  const onStorage = (event: StorageEvent) => {
    if (event.key === STORAGE_KEY) {
      emitLocaleChange();
    }
  };

  window.addEventListener("storage", onStorage);

  return () => {
    listeners.delete(listener);
    window.removeEventListener("storage", onStorage);
  };
}

export function setLocalePreference(locale: Locale) {
  if (typeof window === "undefined") return;
  localStorage.setItem(STORAGE_KEY, locale);
  document.documentElement.setAttribute("lang", locale);
  emitLocaleChange();
}

export function useLocale() {
  const locale = useSyncExternalStore(subscribeLocale, getClientLocale, getServerLocale);

  useEffect(() => {
    document.documentElement.setAttribute("lang", locale);
  }, [locale]);

  return {
    locale,
    isIndonesian: locale === "id",
    setLocalePreference,
  };
}
