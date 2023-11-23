import { useEffect, useState } from "react";

const Navbar = () => {
  const [top, setTop] = useState(true);

  useEffect(() => {
    const scrollHandler = () => {
      window.scrollY > 10 ? setTop(false) : setTop(true)
    };
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, [top]);

  return <header className={`bg-white sticky left-0 top-0 right-0 z-20 ${!top && `bg-white shadow-lg`}`}>
    <div
      className="mx-auto flex h-28 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8"
    >
      <a className="block text-blue-500 flex items-center" href="/">
        <span className="sr-only">Home</span>
        <img
          src="./logo.jpeg"
          alt="logo"
          className="w-full max-w-[90px] object-contain mr-4"
        />
        <div className="ml-2">
          <div className="text-2xl font-bold" style={{ letterSpacing: '2px' }}>DCPCR</div>
          <div className="text-xs italic">
            Delhi Commission for
            <br />
            Protection of Child Rights
          </div>
        </div>
      </a>

      <div className="flex flex-1 items-center justify-end md:justify-between">
        <nav aria-label="Global" className="hidden md:block ml-auto">
          <ul className="flex items-center gap-6 text-md">
            <li>
              <a className="text-gray-500 transition hover:bg-blue-500 hover:text-white rounded-md px-3 py-2 text-sm font-medium" href="/">
                Home
              </a>
            </li>

            <li>
              <a className="text-gray-500 transition hover:bg-blue-500 hover:text-white rounded-md px-3 py-2 text-sm font-medium" href="/">
                About
              </a>
            </li>

            <li>
              <a className="text-gray-500 transition hover:bg-blue-500 hover:text-white rounded-md px-3 py-2 text-sm font-medium" href="/">
                Resources
              </a>
            </li>

            <li>
              <a className="text-gray-500 transition hover:bg-blue-500 hover:text-white rounded-md px-3 py-2 text-sm font-medium" href="/">
                Compensation
              </a>
            </li>

            <li>
              <a className="text-gray-500 hover:bg-blue-500 hover:text-white rounded-md px-3 py-2 text-sm font-medium" href="/">
                Essential Docs
              </a>
            </li>
          </ul>
        </nav>

        <div className="flex items-center gap-4">
          <button
            className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden"
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
    </div>
  </header>
}

export default Navbar