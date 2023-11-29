"use client"
import { useEffect, useState } from "react";
import IconLanguage from "./icons/change_language";
import SearchIcon from "./icons/search";
import { useRouter, usePathname } from "next/navigation";

const Navbar = () => {
  const [top, setTop] = useState(true);
  const [language, setLanguage] = useState("English"); // Default language
  const [isSearchPage, setIsSearchPage] = useState(false); // State to track if it's the search page
  const [showDropdown, setShowDropdown] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // For hamburger menu
  const router = useRouter(); // Use the useLocation hook

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

  return <header className={`bg-white sticky left-0 top-0 right-0 z-20 ${!top && `bg-white shadow-lg`}`}>
    <div
      className="mx-auto justify-between flex h-28 max-w-screen-xl items-center gap-2 px-4 sm:px-6 lg:px-8"
    >
      <a className="flex items-center text-blue-500" href="/">
        <span className="sr-only">Home</span>
        <img src="/logo.jpeg" alt="logo" className="object-contain mr-4 w-full max-w-[90px]" />
        <div className="ml-2">
          <div className="text-2xl font-bold" style={{ letterSpacing: '2px' }}>DCPCR</div>
          <div className="text-xs italic hidden md:block">
            Delhi Commission for
            <br />
            Protection of Child Rights
          </div>
        </div>
      </a>

      <div className="flex items-center">
      <nav className={`${isOpen ? 'block' : 'hidden'} absolute bg-white top-full left-0 w-full lg:static lg:w-auto lg:block`}>
      <ul className="flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-4 p-4 lg:p-0">
            {usePathname() === '/' && (
              <li className="hidden md:block" onClick={() => router.push('/search')}>
                <div className="flex items-center border-2 border-gray-300 rounded-md overflow-hidden">
                  <SearchIcon className="text-gray-500 ml-4" />
                  <input
                    type="text"
                    placeholder="Search..."
                    className="py-2 px-4 focus:outline-none"
                    readOnly
                  />
                </div>
              </li>
            )}

            {
              usePathname() !== '/' && <>
                {
                  usePathname() !== '/search' && (<li>
                    <a className="flex items-center border-2 border-orange-500 p-2 rounded-lg rounded-md px-3 py-2 text-sm font-medium" href="/search">
                    <SearchIcon className="h-5 w-5 text-iceland_poppy-500 mr-2" /> <p className="mr-1 text-iceland_poppy-500">Search</p>
                    </a>
                  </li>)
                }
                <li>
                  <a className="text-gray-500 transition hover:bg-iceland_poppy-500 hover:text-white rounded-md px-3 py-2 text-sm font-medium" href="/">
                    Home
                  </a>
                </li>
                <li>
                  <a className="text-gray-500 transition hover:bg-iceland_poppy-500 hover:text-white rounded-md px-3 py-2 text-sm font-medium" href="/resources">
                    Resources
                  </a>
                </li>
                <li>
                  <a className="text-gray-500 transition hover:bg-iceland_poppy-500 hover:text-white rounded-md px-3 py-2 text-sm font-medium" href="/compensation">
                    Compensation
                  </a>
                </li>
                <li>
                  <a className="text-gray-500 transition hover:bg-iceland_poppy-500 hover:text-white rounded-md px-3 py-2 text-sm font-medium" href="/essential-docs">
                    Essential Docs
                  </a>
                </li>
                <li>
                  <a className="text-gray-500 transition hover:bg-iceland_poppy-500 hover:text-white rounded-md px-3 py-2 text-sm font-medium" href="/">
                    Disability Information
                  </a>
                </li>
              </>
            }
            {/* <div className="relative">
              <button style={{ color: "#e4750a" }} onClick={() => setShowDropdown(!showDropdown)} className="flex items-center gap-2 text-gray-500 hover:text-blue-500">
                <IconLanguage className="h-5 w-5" />
                <span>{language}</span>
              </button>
              {showDropdown && (<div className="absolute right-0 mt-2 w-40 bg-white border rounded shadow-xl">
                <ul>
                  <li className="p-2 hover:bg-gray-100 cursor-pointer" onClick={() => handleLanguageChange("English")}>English</li>
                  <li className="p-2 hover:bg-gray-100 cursor-pointer" onClick={() => handleLanguageChange("Hindi")}>हिन्दी</li>
                </ul>
              </div>)}
            </div> */}
          </ul>
        </nav>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 lg:hidden"
          >
          <span className="sr-only">Toggle menu</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
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
}

export default Navbar