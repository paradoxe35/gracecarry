"use client"

import { useParams, usePathname, useRouter } from "next/navigation"
import { useEffect, useState, useRef } from "react"

// Define available languages (adjust as needed)
const languages = [
  { code: "en", name: "English" },
  { code: "fr", name: "Français" },
  { code: "rw", name: "Kinyarwanda" },
]

export default function LanguageSelector() {
  const router = useRouter()
  const pathname = usePathname()
  const params = useParams()
  const dropdownRef = useRef<HTMLDivElement>(null)
  
  // Infer current language from the URL parameter (e.g., /en/about -> 'en')
  const currentLang = typeof params.countryCode === 'string' ? params.countryCode : 'en'; // Default to 'en'

  const [selectedLang, setSelectedLang] = useState(currentLang)
  const [isOpen, setIsOpen] = useState(false)

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  useEffect(() => {
    setSelectedLang(currentLang)
  }, [currentLang])

  const handleLanguageChange = (langCode: string) => {
    if (langCode === selectedLang) {
      setIsOpen(false)
      return
    }
    
    setSelectedLang(langCode)
    setIsOpen(false)

    // Construct the new path by replacing the current language code
    let newPathname = pathname
    if (pathname.startsWith(`/${currentLang}`)) {
      newPathname = pathname.replace(`/${currentLang}`, `/${langCode}`)
    } else {
      newPathname = `/${langCode}${pathname}`
    }

    router.push(newPathname)
  }

  // Get current language display name
  const currentLanguage = languages.find(lang => lang.code === selectedLang)

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Language selector button with globe icon */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-1 p-2 text-neutral-800 hover:text-primary transition-colors duration-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50"
        aria-label="Select language"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
      >
        {/* Globe icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
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
          {currentLanguage?.code.toUpperCase()}
        </span>
        
        {/* Dropdown arrow */}
        <svg
          className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'transform rotate-180' : ''}`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
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
                  selectedLang === lang.code ? 'text-primary font-medium bg-neutral-50' : 'text-neutral-800'
                }`}
                role="option"
                aria-selected={selectedLang === lang.code}
              >
                <span>{lang.name}</span>
                {selectedLang === lang.code && (
                  <svg className="h-4 w-4 text-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}