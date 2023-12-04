"use client"
import { useEffect, useState } from "react";
import SearchIcon from "./icons/search";
import { useRouter, usePathname } from "next/navigation";

const Navbar = () => {
  const [top, setTop] = useState(true);
  const [language, setLanguage] = useState("English"); // Default language
  const [isSearchPage, setIsSearchPage] = useState(false); // State to track if it's the search page
  // const [showDropdown, setShowDropdown] = useState(false);
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


  const [fontSize, setFontSize] = useState('normal'); // normal, large, x-large
  const [contrast, setContrast] = useState('normal'); // normal, high

  // Handlers for font size and contrast
  const handleFontSizeChange = (size) => {
    setFontSize(size);
    // Apply the font size change to the body or a specific container
    document.body.className = `font-${size}`;
  };

  const handleContrastChange = (contrastLevel) => {
    if (contrastLevel === 'high') {
      document.body.classList.add('high-contrast-mode');
    } else {
      document.body.classList.remove('high-contrast-mode');
    }
  };


  return <>
    <div className="contrast-bg contrast-text flex justify-end items-center space-x-2 p-2 bg-white border-b max-w-7xl mx-auto">
      {/* Font Size Controls */}
      {/* <div>
     <p className="text-gray-500 text-sm">Accessibility Controls: </p>
      <button
        onClick={() => handleFontSizeChange('normal')}
        className="contrast-bg contrast-text px-2 py-1 text-sm font-medium text-gray-700 bg-gray-200 rounded hover:bg-gray-300"
      >
        A
      </button>
      <button
        onClick={() => handleFontSizeChange('large')}
        className="contrast-bg contrast-text px-2 py-1 text-base font-medium text-gray-700 bg-gray-200 rounded hover:bg-gray-300"
      >
        A
      </button>
      <button
        onClick={() => handleFontSizeChange('x-large')}
        className="contrast-bg contrast-text px-2 py-1 text-lg font-medium text-gray-700 bg-gray-200 rounded hover:bg-gray-300"
      >
        A
      </button>
     </div> */}
      <div className="contrast-bg grid grid-cols-8 contrast-texth-28 max-w-screen-xl gap-4 px-4 sm:px-6 w-full">
        <a className="contrast-bg contrast-text col-span-6 text-blue-500 flex items-center" href="/">
          <img src="/logo.jpeg" alt="logo" className="contrast-bg contrast-text object-contain xl:mr-4 lg:mr-4 md:mr-4 w-full xl:max-w-[90px] lg:max-w-[90px] md:max-w-[90px] sm:max-w-[60px] max-w-[50px]" />
          <div className="contrast-bg contrast-text ml-2">
            <div className="contrast-bg contrast-text  font-bold xl:text-2xl lg:text-2xl md:text-xl hidden xl:block lg:block">Delhi Commission for Protection of Child Rights</div>
            <div className="contrast-bg contrast-text text-[12px] font-bold block sm:text-xl md:text-xl lg:text-xl lg:hidden">
              Delhi Commission for <br /> Protection of Child Rights
            </div>
            <div className="contrast-bg contrast-text text-sm hidden lg:block">
              Government of NCT of Delhi
            </div>
          </div>
        </a>
        <div className="col-span-2 flex justify-end">
          <img src="/india-flag.jpg" alt="logo" className="object-contain mr-4 w-full max-w-[40px] xl:max-w-[80px] lg:max-w-[80px] md:max-w-[60px] sm:max-w-[50px]" />
          <img src="/india-emblem.jpg" alt="logo" className="object-contain w-full max-w-[30px] xl:max-w-[50px] lg:max-w-[50px] md:max-w-[35px] sm:max-w-[35px]" />
        </div>
      </div>


      {/* Contrast Controls */}
      {/* <button
        onClick={() => handleContrastChange('normal')}
        className="contrast-bg contrast-text px-2 py-1 text-sm font-medium text-gray-700 bg-gray-200 rounded hover:bg-gray-300"
      >
        Normal Contrast
      </button>
      <button
        onClick={() => handleContrastChange('high')}
        className="contrast-bg contrast-text px-2 py-1 text-sm font-medium text-gray-700 bg-gray-200 rounded hover:bg-gray-300"
      >
        High Contrast
      </button> */}
    </div>
    <header className={`bg-white sticky left-0 top-0 right-0 z-20 ${!top && `bg-white shadow-lg`}`}>
      <div
        className="contrast-bg contrast-text mx-auto justify-between flex h-28 max-w-screen-xl items-center gap-2 px-4 sm:px-6 lg:px-8"
      >
        {/* <div className="contrast-bg contrast-text mx-auto justify-between flex h-28 max-w-screen-xl items-center gap-2 px-4 sm:px-6 lg:px-8">
        <a className="contrast-bg contrast-text flex items-center text-blue-500" href="/">
          <span className="contrast-bg contrast-text sr-only">Home</span>
          <img src="/logo.jpeg" alt="logo" className="contrast-bg contrast-text object-contain mr-4 w-full max-w-[90px]" />
          <div className="contrast-bg contrast-text ml-2">
            <div className="contrast-bg contrast-text text-2xl font-bold" style={{ letterSpacing: '2px' }}>DCPCR</div>
            <div className="contrast-bg contrast-text text-xs italic hidden md:block">
              Delhi Commission for
              <br />
              Protection of Child Rights
            </div>
          </div>
        </a>
      </div> */}

        <div className="contrast-bg contrast-text flex items-center">
          <nav className={`${isOpen ? 'block' : 'hidden'} absolute bg-white top-full left-0 w-full lg:static lg:w-auto lg:block`}>
            <ul className="contrast-bg contrast-text flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-4 p-4 lg:p-0">
              {usePathname() !== '/search' && (
                <li className="contrast-bg contrast-text hidden md:block" onClick={() => router.push('/search')}>
                  <div className="contrast-bg contrast-text flex items-center border-2 border-iceland_poppy-300 rounded-md overflow-hidden">
                    <SearchIcon className="contrast-bg contrast-text text-iceland_poppy-500 ml-4" />
                    <input
                      type="text"
                      placeholder="Search..."
                      className="contrast-bg contrast-text py-2 px-4 focus:outline-none"
                      readOnly
                    />
                  </div>
                </li>
              )}


              <li>
                <a className="contrast-bg contrast-text text-gray-500 transition hover:bg-iceland_poppy-500 hover:text-white rounded-md px-3 py-2 text-sm font-medium" href="/">
                  Home
                </a>
              </li>
              <li>
                <a className="contrast-bg contrast-text text-gray-500 transition hover:bg-iceland_poppy-500 hover:text-white rounded-md px-3 py-2 text-sm font-medium" href="/resources">
                  Resources
                </a>
              </li>
              <li>
                <a className="contrast-bg contrast-text text-gray-500 transition hover:bg-iceland_poppy-500 hover:text-white rounded-md px-3 py-2 text-sm font-medium" href="/compensation">
                  Compensation
                </a>
              </li>
              <li>
                <a className="contrast-bg contrast-text text-gray-500 transition hover:bg-iceland_poppy-500 hover:text-white rounded-md px-3 py-2 text-sm font-medium" href="/essential-docs">
                  Essential Docs
                </a>
              </li>
              <li>
                <a className="contrast-bg contrast-text text-gray-500 transition hover:bg-iceland_poppy-500 hover:text-white rounded-md px-3 py-2 text-sm font-medium" href="/disability-information">
                  Disability Information
                </a>
              </li>
              {/* <div className="contrast-bg contrast-text relative">
              <button style={{ color: "#e4750a" }} onClick={() => setShowDropdown(!showDropdown)} className="contrast-bg contrast-text flex items-center gap-2 text-gray-500 hover:text-blue-500">
                <IconLanguage className="contrast-bg contrast-text h-5 w-5" />
                <span>{language}</span>
              </button>
              {showDropdown && (<div className="contrast-bg contrast-text absolute right-0 mt-2 w-40 bg-white border rounded shadow-xl">
                <ul>
                  <li className="contrast-bg contrast-text p-2 hover:bg-gray-100 cursor-pointer" onClick={() => handleLanguageChange("English")}>English</li>
                  <li className="contrast-bg contrast-text p-2 hover:bg-gray-100 cursor-pointer" onClick={() => handleLanguageChange("Hindi")}>हिन्दी</li>
                </ul>
              </div>)}
            </div> */}
            </ul>
          </nav>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="contrast-bg contrast-text rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 lg:hidden"
          >
            <span className="contrast-bg contrast-text sr-only">Toggle menu</span>
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