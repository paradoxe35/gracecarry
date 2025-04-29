"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState, useRef, useTransition } from "react";
import { switchLocaleAction } from "@/actions/i18nActions";
import { LOCALES } from "@/i18n/constants"; // Assuming LOCALES constant exists
import { useTranslations } from "next-intl";

type Language = {
  code: (typeof LOCALES)[number];
  name: string;
};

const languages: Language[] = [
  { code: "en", name: "English" },
  { code: "fr", name: "Français" },
  { code: "rw", name: "Kinyarwanda" },
];

type LanguageSelectorProps = {
  currentLocale: string;
};

export default function LanguageSelector({
  currentLocale,
}: LanguageSelectorProps) {
  const router = useRouter();
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [isPending, startTransition] = useTransition(); // For loading state
  const t = useTranslations("LanguageSelector");

  // Use the prop for initial state and current display
  const [selectedLang, setSelectedLang] = useState(currentLocale);
  const [isOpen, setIsOpen] = useState(false);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Update selectedLang state if the prop changes (e.g., after navigation)
  useEffect(() => {
    setSelectedLang(currentLocale);
  }, [currentLocale]);

  const handleLanguageChange = (langCode: string) => {
    // Use currentLocale prop for comparison
    if (langCode === currentLocale || isPending) {
      setIsOpen(false);
      return;
    }

    setIsOpen(false);

    startTransition(async () => {
      const result = await switchLocaleAction(langCode, pathname);
      if (result?.error) {
        // Handle error (e.g., show a toast notification)
        console.error("Language switch error:", result.error);
        // Reset selectedLang visually if the switch failed
        setSelectedLang(currentLocale);
      } else {
        // Update selectedLang state to reflect the new language
        setSelectedLang(langCode);
        // Optionally, you can also update the router or perform other actions here
        router.refresh(); // Refresh the page to apply the new locale
      }
    });
  };

  // Get current language display name based on prop
  const currentLanguageDisplay = languages.find(
    (lang) => lang.code === selectedLang
  );

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Language selector button with globe icon */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-1 p-2 text-neutral-800 hover:text-primary transition-colors duration-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50"
        aria-label={t("selectLanguage")}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        disabled={isPending} // Disable button during transition
      >
        {/* Globe icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-5 w-5 ${isPending ? "animate-spin" : ""}`} // Add spinner effect if pending
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>

        {/* Only show text on larger screens */}
        <span className="hidden md:inline text-sm font-medium">
          {currentLanguageDisplay?.code.toUpperCase()}
        </span>

        {/* Dropdown arrow */}
        <svg
          className={`w-4 h-4 transition-transform duration-200 ${isOpen ? "transform rotate-180" : ""}`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {/* Dropdown menu */}
      {isOpen && (
        <div
          className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10 overflow-hidden transform origin-top-right transition-all duration-200 ease-in-out"
          role="listbox"
        >
          <div className="py-1">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleLanguageChange(lang.code)}
                className={`w-full text-left px-4 py-2 text-sm hover:bg-neutral-100 transition-colors duration-150 flex items-center justify-between ${
                  currentLocale === lang.code
                    ? "text-primary font-medium bg-neutral-50"
                    : "text-neutral-800" // Highlight based on prop
                }`}
                role="option"
                aria-selected={currentLocale === lang.code} // Aria selected based on prop
                disabled={isPending} // Disable options during transition
              >
                <span>{t(lang.code)}</span>
                {currentLocale === lang.code &&
                  !isPending && ( // Show checkmark based on prop
                    <svg
                      className="h-4 w-4 text-primary"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
