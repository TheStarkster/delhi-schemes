"use client"
import { useEffect, useState } from "react";
import SearchIcon from "./icons/search";
import { useRouter, usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";
import IconLanguage from "./icons/change_language";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [top, setTop] = useState(true);
  const [language, setLanguage] = useState(i18n.language);
  const [isSearchPage, setIsSearchPage] = useState(false);
  const [isOpen, setIsOpen] = useState(false); 
  const [showDropdown, setShowDropdown] = useState(false);
  const router = useRouter(); 

  useEffect(() => {
    const scrollHandler = () => {
      window.scrollY > 10 ? setTop(false) : setTop(true)
    };
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, [top]);

  useEffect(() => {
    const scrollHandler = () => {
      window.scrollY > 10 ? setTop(false) : setTop(true);
    };
    window.addEventListener('scroll', scrollHandler);

    // Check if the current page is /search
    setIsSearchPage(window.location.pathname === '/search');

    return () => window.removeEventListener('scroll', scrollHandler);
  }, []);

  const handleLanguageChange = (languageCode) => {
    setLanguage(languageCode);
    i18n.changeLanguage(languageCode);

    setShowDropdown(false);
  };

  return <>
  
    <div className="contrast-bg contrast-text flex justify-end items-center space-x-2 p-2 bg-white border-b max-w-7xl mx-auto">
      <div className="contrast-bg grid grid-cols-8 contrast-texth-28 max-w-screen-xl gap-4 px-4 sm:px-6 w-full">
        <a className="contrast-bg contrast-text col-span-6 text-blue-500 flex items-center" href="/">
          <img src="/logo.jpeg" alt="logo" className="contrast-bg contrast-text object-contain xl:mr-4 lg:mr-4 md:mr-4 w-full xl:max-w-[90px] lg:max-w-[90px] md:max-w-[90px] sm:max-w-[60px] max-w-[50px]" />
          <div className="contrast-bg contrast-text ml-2">
            <div className="contrast-bg contrast-text  font-bold xl:text-2xl lg:text-2xl md:text-xl hidden xl:block lg:block">{t('organization_name_full')}</div>
            <div className="contrast-bg contrast-text text-[12px] font-bold block sm:text-xl md:text-xl lg:text-xl lg:hidden">
              {t('organization_name_short_first_part')} <br /> {t('organization_name_short_second_part')}
            </div>
            <div className="contrast-bg contrast-text text-sm hidden lg:block">
              {t('government_of_nct_delhi')}
            </div>
          </div>
        </a>
        <div className="col-span-2 flex justify-end">
          <img src="/india-flag.jpg" alt="logo" className="object-contain mr-4 w-full max-w-[40px] xl:max-w-[80px] lg:max-w-[80px] md:max-w-[60px] sm:max-w-[50px]" />
          <img src="/india-emblem.jpg" alt="logo" className="object-contain w-full max-w-[30px] xl:max-w-[50px] lg:max-w-[50px] md:max-w-[35px] sm:max-w-[35px]" />
        </div>
      </div>
    </div>
    <header className={`bg-white sticky left-0 top-0 right-0 z-20 ${!top && `bg-white shadow-lg`}`}>
      <div
        className="contrast-bg contrast-text mx-auto justify-between flex h-28 max-w-screen-xl items-center gap-2 px-4 sm:px-6 lg:px-8"
      >
        <div className="contrast-bg contrast-text flex items-center">
          <nav className={`${isOpen ? 'block' : 'hidden'} absolute bg-white top-full left-0 w-full lg:static lg:w-auto lg:block`}>
            <ul className="contrast-bg contrast-text flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-4 p-4 lg:p-0">
              {usePathname() !== '/search' && (
                <li className="contrast-bg contrast-text hidden md:block" onClick={() => router.push('/search')}>
                  <div className="contrast-bg contrast-text flex items-center border-2 border-iceland_poppy-300 rounded-md overflow-hidden">
                    <SearchIcon className="contrast-bg contrast-text text-iceland_poppy-500 ml-4" />
                    <input
                      type="text"
                      placeholder={t('search_placeholder')}
                      className="contrast-bg contrast-text py-2 px-4 focus:outline-none"
                      readOnly
                    />
                  </div>
                </li>
              )}


              <li>
                <a className="contrast-bg contrast-text text-gray-500 transition hover:bg-iceland_poppy-500 hover:text-white rounded-md px-3 py-2 text-sm font-medium" href="/">
                  {t('nav_home')}
                </a>
              </li>
              <li>
                <a className="contrast-bg contrast-text text-gray-500 transition hover:bg-iceland_poppy-500 hover:text-white rounded-md px-3 py-2 text-sm font-medium" href="/resources">
                {t('nav_resources')}
                </a>
              </li>
              <li>
                <a className="contrast-bg contrast-text text-gray-500 transition hover:bg-iceland_poppy-500 hover:text-white rounded-md px-3 py-2 text-sm font-medium" href="/compensation">
                {t('nav_compensation')}
                </a>
              </li>
              <li>
                <a className="contrast-bg contrast-text text-gray-500 transition hover:bg-iceland_poppy-500 hover:text-white rounded-md px-3 py-2 text-sm font-medium" href="/essential-docs">
                  {t('nav_essential_docs')}
                </a>
              </li>
              <li>
                <a className="contrast-bg contrast-text text-gray-500 transition hover:bg-iceland_poppy-500 hover:text-white rounded-md px-3 py-2 text-sm font-medium" href="/disability-information">
                  {t('nav_disability_information')}
                </a>
              </li>
              <div className="contrast-bg contrast-text relative">
              <button style={{ color: "#e4750a" }} onClick={() => setShowDropdown(!showDropdown)} className="contrast-bg contrast-text flex items-center gap-2 text-gray-500 hover:text-blue-500">
                <IconLanguage className="contrast-bg contrast-text h-5 w-5" />
                <span>{language == 'en' ? "English" : "Hindi"}</span>
              </button>
              {showDropdown && (<div className="contrast-bg contrast-text absolute right-0 mt-2 w-40 bg-white border rounded shadow-xl">
                <ul>
                  <li className="contrast-bg contrast-text p-2 hover:bg-gray-100 cursor-pointer" onClick={() => handleLanguageChange("en")}>English</li>
                  <li className="contrast-bg contrast-text p-2 hover:bg-gray-100 cursor-pointer" onClick={() => handleLanguageChange("hi")}>हिन्दी</li>
                </ul>
              </div>)}
            </div>
            </ul>
          </nav>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="contrast-bg contrast-text rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 lg:hidden"
          >
            <span className="contrast-bg contrast-text sr-only">{t('toggle_menu_alt_text')}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="contrast-bg contrast-text h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  </>
}

export default Navbar