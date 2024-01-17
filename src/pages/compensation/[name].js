// pages/assistance/[name].js
import RootLayout from "@/app/layout";
import { compensationData, compensationDataHindi, essentialDocsHindi } from "@/lib/api";
import { useState, useEffect, useRef, createRef } from 'react';
import LinkIcon from "../../components/icons/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { useTranslation } from "react-i18next";
import { getCookie } from "cookies-next";

export async function getServerSideProps(context) {
  const { name } = context.params;
  const { lang } = context.query;
  
  const decodedTitle = decodeURIComponent(name).replace(/-/g, ' ').replace(/%26/g, '&');
  // Fetch the entire dataset
  const allData = lang == 'hi' ? compensationDataHindi : compensationData

  // Find the relevant data based on the title
  const assistanceData = allData.find(item => item.title.toLowerCase() === decodedTitle.toLowerCase());

  if (!assistanceData) {
    return { notFound: true };
  }

  return { props: { assistanceData } };
}


export default function AssistancePage({ assistanceData }) {
  const { i18n, t } = useTranslation();
  const sections = ['Overview', 'Legislation', 'Required Documents', 'Other Information'];
  const [activeSection, setActiveSection] = useState(sections[0]);
  const sectionRefs = useRef(sections.map(() => createRef()));
  const contentSectionRefs = useRef(sections.map(() => createRef()));
  const highlightRef = useRef(null);
  const navbarHeight = 120; // Replace with the actual height of your navbar

  useEffect(() => {
    const moveHighlightToSection = (index) => {
      const sectionElement = sectionRefs.current[index].current;
      if (sectionElement && highlightRef.current) {
        const { offsetTop, clientHeight } = sectionElement;
        highlightRef.current.style.transform = `translateY(${offsetTop}px)`;
        highlightRef.current.style.height = `${clientHeight}px`;
      }
    };

    moveHighlightToSection(sections.indexOf(activeSection));

    const handleScroll = () => {
      const currentSectionIndex = sections.findIndex((section, index) => {
        const sectionElement = contentSectionRefs.current[index].current;
        if (sectionElement) {
          const { top, bottom } = sectionElement.getBoundingClientRect();
          return top <= navbarHeight && bottom > navbarHeight;
        }
        return false;
      });

      if (currentSectionIndex !== -1 && sections[currentSectionIndex] !== activeSection) {
        setActiveSection(sections[currentSectionIndex]);
        moveHighlightToSection(currentSectionIndex);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [activeSection, sections]);

  useEffect(() => {
    const defaultLanguage = getCookie('defaultLanguage');
    if (defaultLanguage == 'hi') {
      i18n.changeLanguage('hi');
    }
  }, [])

  const handleSectionClick = (section, index) => {
    setActiveSection(section);
    const sectionElement = contentSectionRefs.current[index].current;
    if (sectionElement) {
      const sectionTop = sectionElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
      window.scrollTo({ top: sectionTop, behavior: 'smooth' });
    }
    window.history.pushState(null, '', `#${section}`);
  };

  const copyToClipboard = (section) => {
    const url = `${window.location.origin}${window.location.pathname}#${section}`;
    navigator.clipboard.writeText(url).then(() => {
      console.log('Link copied to clipboard');
    });
  };

  return (
    <>
      <Navbar />
      <div className="contrast-bg contrast-text bg-gradient-to-r from-iceland_poppy-500 to-pink-500 text-white py-12">
        <div className="contrast-bg contrast-text container mx-auto px-12 md:px-12 xl:px-0 lg:px-14 max-w-7xl">
          <h1 className="contrast-bg contrast-text text-2xl md:text-3xl lg:text-4xl text-white font-bold">{assistanceData.title}</h1>
        </div>
      </div>
      <div className="contrast-bg contrast-text container mx-auto lg:py-20 max-w-7xl grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1">
        <div className="contrast-bg contrast-text lg:flex-1 xl:flex-1 md:w-1/3 xl:block hidden sm:hidden xl:block">
          <div className="contrast-bg contrast-text sticky w-64 top-32">
            <div ref={highlightRef} className="contrast-bg contrast-text absolute left-0 w-full bg-iceland_poppy-500 transition-transform duration-300 ease-in-out" style={{ zIndex: -99, borderRadius: 8 }}></div>
            {sections.map((section, index) => (
              <div
                ref={sectionRefs.current[index]}
                key={index}
                className={`p-4 cursor-pointer transition ${activeSection === section ? 'text-white' : 'text-black'}`}
                onClick={() => handleSectionClick(section, index)}
              >
                {t(section)}
              </div>
            ))}
          </div>
        </div>

        <div className="contrast-bg contrast-text col-span-3 mx-0 lg:mx-14 md:mx-12 xl:mx-0 md:my-0 lg:py-0 xl:py-0 md:py-4 px-12 py-12">
          <section className="contrast-bg contrast-text mb-12" ref={contentSectionRefs.current[0]}>
            <div className="contrast-bg contrast-text flex items-center">
              <h2 className="contrast-bg contrast-text text-2xl font-bold mb-2">{t('Overview')}</h2>
              <LinkIcon className="contrast-bg contrast-text h-6 w-6 mb-4 ml-2 cursor-pointer hover:fill-gray-500 fill-blue-600 transition" onClick={() => copyToClipboard('Overview')} />
            </div>
            <div dangerouslySetInnerHTML={{ __html: assistanceData.description_html }} />
          </section>

          <section className="contrast-bg contrast-text mb-12" ref={contentSectionRefs.current[1]}>
            <div className="contrast-bg contrast-text flex items-center">
              <h2 className="contrast-bg contrast-text text-2xl font-bold mb-4">{t('Legislation')}</h2>
              <LinkIcon className="contrast-bg contrast-text h-6 w-6 mb-4 ml-2 cursor-pointer hover:fill-gray-500 fill-blue-600 transition" onClick={() => copyToClipboard('Legislation')} />
            </div>
            <div dangerouslySetInnerHTML={{ __html: assistanceData.legislation }} />
          </section>

          <section className="contrast-bg contrast-text mb-12" ref={contentSectionRefs.current[2]}>
            <div className="contrast-bg contrast-text flex items-center">
              <h2 className="contrast-bg contrast-text text-2xl font-bold mb-4">{t('Required Documents')}</h2>
              <LinkIcon className="contrast-bg contrast-text h-6 w-6 mb-4 ml-2 cursor-pointer hover:fill-gray-500 fill-blue-600 transition" onClick={() => copyToClipboard('Required Documents')} />
            </div>
            <div dangerouslySetInnerHTML={{ __html: assistanceData.documents_required }} />
          </section>

          <section className="contrast-bg contrast-text mb-12" ref={contentSectionRefs.current[3]}>
            <div className="contrast-bg contrast-text flex items-center">
              <h2 className="contrast-bg contrast-text text-2xl font-bold mb-4">{t('Other Information')}</h2>
              <LinkIcon className="contrast-bg contrast-text h-6 w-6 mb-4 ml-2 cursor-pointer hover:fill-gray-500 fill-blue-600 transition" onClick={() => copyToClipboard('Other Information')} />
            </div>
            <div dangerouslySetInnerHTML={{ __html: assistanceData.other_info }} />
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
}
