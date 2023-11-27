// pages/schemes/[schemeName].js
import RootLayout from "@/app/layout";
import { fetchSchemeData } from "@/lib/api";
import { useState, useRef, createRef, useEffect } from 'react';
import LinkIcon from "../../components/icons/link";

export async function getServerSideProps(context) {
  // Fetch data based on the scheme name from the context params
  const { schemeName } = context.params;
  const schemeData = await fetchSchemeData(schemeName); // Implement this function to fetch data based on schemeName

  // If no data is found, you can redirect or return a 404
  if (!schemeData) {
    return {
      notFound: true,
    };
  }

  return {
    props: { schemeData }, // will be passed to the page component as props
  };
}

export default function SchemePage({ schemeData }) {
  const sections = ['Benefits', 'Eligibility', 'Documents Required', 'Application Process', 'Grievance Redressal'];
  const [activeSection, setActiveSection] = useState(sections[0]);
  const sectionRefs = useRef(sections.map(() => createRef()));
  const contentSectionRefs = useRef(sections.map(() => createRef())); // New refs for content sections
  const highlightRef = useRef(null);

  useEffect(() => {
    // Function to check URL and scroll to the section
    const checkURLAndScroll = () => {
      let hash = window.location.hash.replace('#', '');
      // Replace '%20' or dashes with spaces
      hash = decodeURIComponent(hash).replace(/-/g, ' ');

      if (hash) {
        const index = sections.findIndex(section => section === hash);
        if (index !== -1) {
          setActiveSection(sections[index]);
          scrollToSection(index);
        }
      }
    };

    // Call the function on component mount
    checkURLAndScroll();

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    return () => {
      // Clean up the event listener
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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

  // Update useEffect to add and remove scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [activeSection]);

  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash && sections.includes(hash)) {
      setActiveSection(hash);
      scrollToSection(sections.indexOf(hash));
    }
  }, []);

  const handleSectionClick = (section, index) => {
    setActiveSection(section);
    scrollToSection(index);
    window.history.pushState(null, '', `#${section}`); // Update URL with hash
  };

  const navbarHeight = 120; // Replace with the actual height of your navbar
  const scrollToSection = (index) => {
    const sectionElement = contentSectionRefs.current[index].current;
    if (sectionElement) {
      const sectionTop = sectionElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
      window.scrollTo({ top: sectionTop, behavior: 'smooth' });
      moveHighlightToSection(index);
    }
  };

  const moveHighlightToSection = (index) => {
    const sectionElement = sectionRefs.current[index].current;
    if (sectionElement && highlightRef.current) {
      const { offsetTop, clientHeight } = sectionElement;
      highlightRef.current.style.transform = `translateY(${offsetTop}px)`;
      highlightRef.current.style.height = `${clientHeight}px`;
    }
  };

  const copyToClipboard = (section) => {
    const url = `${window.location.origin}${window.location.pathname}#${section}`;
    navigator.clipboard.writeText(url).then(() => {
      // You can add some user feedback here, like a tooltip or a temporary text change
      console.log('Link copied to clipboard');
    });
  };

  useEffect(() => {
    // Initial positioning of the highlight
    moveHighlightToSection(sections.indexOf(activeSection));
  }, []);


  return (
    <RootLayout>
      {/* Scheme heading */}
      <div className="bg-iceland_poppy-500 text-white py-12">
        <div className="container mx-auto px-4 lg:px-0 max-w-7xl">
          <h1 className="text-4xl text-white font-bold">{schemeData.title}</h1>
          <div className="flex flex-wrap mt-4" style={{ display: "flex", alignContent: 'center' }}>
            {schemeData.residence != null && <div className="bg-white text-iceland_poppy-500 rounded-full px-4 py-1 mr-2 mb-2">
              {schemeData.residence == "Out of Delhi" ? "Applicable for people from both Delhi and Out of Delhi" : "Applicable for people from Delhi only"}
            </div>}
          </div>
        </div>
      </div>
      <div className="container mx-auto lg:py-20 max-w-7xl grid grid-cols-4">
        <div className="flex-1">
          <div className="sticky w-64 top-32">
            <div ref={highlightRef} className="absolute left-0 w-full bg-iceland_poppy-500 transition-transform duration-300 ease-in-out" style={{ zIndex: -99, borderRadius: 8 }}></div>
            {sections.map((section, index) => (
              <div
                ref={sectionRefs.current[index]}
                key={index}
                className={`p-4 cursor-pointer transition ${activeSection === section ? 'text-white' : 'text-black'}`}
                onClick={() => handleSectionClick(section, index)}
              >
                {section}
              </div>
            ))}
          </div>
        </div>

        <div className="col-span-3">
          {sections.map((section, index) => (
            <section style={{ marginBottom: 64 }} key={index} ref={contentSectionRefs.current[index]}>
              <div className="flex items-center">
                <h2 className="text-2xl font-bold mb-4">{section}</h2>
                <LinkIcon className="h-6 w-6 mb-4 ml-2 cursor-pointer hover:fill-gray-500 fill-blue-200 transition" onClick={() => copyToClipboard(section)} />
              </div>
              <div dangerouslySetInnerHTML={{ __html: schemeData[`${section.toLowerCase().replace(' ', '_')}_html`] }} />
            </section>
          ))}
        </div>
      </div>
    </RootLayout>
  );
}
