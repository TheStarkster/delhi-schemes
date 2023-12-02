import React, { useState } from "react";
import FindSchemeModal from "./find_scheme_modal";
import IconArrowRight from "./icons/right_arrow";
import ResourceIcon from "./icons/resources";
import CompensationIcon from "./icons/compensation";
import DisabilityIcon from "./icons/disability";
import EssentialDocsIcon from "./icons/essential_docs";


const Hero = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const ctaData = [
    {
      title: "Resources",
      subtitle: "Contact information of Govt agencies, hospitals, schools, etc",
      link: "/resources",
      icon: <ResourceIcon style={{ width: 40, height: 40 }} />
    },
    {
      title: "Compensation",
      subtitle: "Learn about compensation schemes for child victims of crime and abuse",
      link: "/compensation",
      icon: <CompensationIcon style={{ width: 40, height: 40 }} />
    },
    {
      title: "Essential Documents",
      subtitle: "Information on documents, registration of events, certificates, licenses, etc",
      link: "/essential-docs",
      icon: <EssentialDocsIcon style={{ width: 40, height: 40 }} />
    },
    {
      title: "Disability Information",
      subtitle: "Learn about disability schemes and services for children and families.",
      link: "/disability-information",
      icon: <DisabilityIcon style={{ width: 40, height: 40 }} />
    }
  ];
  return (
    <>
      <FindSchemeModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <section className="contrast-bg contrast-text relative">
        {/* Background image */}
        <div
          className="contrast-bg contrast-text absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('/schemes_hero.png')` }}
        ></div>

        {/* Overlay */}
        <div className="contrast-bg contrast-text absolute inset-0 opacity-90" style={{ backgroundColor: "#072248" }}></div>

        <div className="contrast-bg contrast-text relative">
          <div className="contrast-bg contrast-text container mx-auto grid grid-cols-1 gap-12 px-4 py-16 lg:px-8 lg:py-48 xl:max-w-7xl">
            <div className="contrast-bg contrast-text flex items-center lg:text-left">
              <div className="contrast-bg contrast-text lg:mt-[-30px] xl:mt-[-50px]">
                {/* Heading */}
                <div>
                  <h2 className="contrast-bg contrast-text text-3xl lg:text-5xl md:text-5xl font-black text-white dark:text-white lg-leading md-leading">
                    Social Security Schemes and Resources for Children and Families
                  </h2>
                  <h3 className="contrast-bg contrast-text text-sm lg:text-xl md:text-xl font-medium mb-12 mt-4 leading-relaxed text-white">
                    Your one-stop search for information on government schemes in Delhi
                  </h3>
                </div>
                {/* END Heading */}

                {/* Action */}
                <div className="contrast-bg contrast-text mb-4 lg:mb-24 xl:mb-28"> {/* Responsive margin */}
                  <a
                    onClick={() => setIsModalOpen(true)}
                    className="contrast-bg contrast-text inline-flex w-full lg:w-auto items-center justify-center space-x-2 rounded-lg border border-iceland_poppy-500 bg-iceland_poppy-500 px-6 py-3 text-white transition hover:border-iceland_poppy-600 hover:bg-iceland_poppy-700"
                  >
                    <span style={{ fontWeight: "bold" }}>Find Schemes for You</span>
                    <IconArrowRight />
                  </a>
                </div>


                {/* END Action */}

                {/* Horizontal Line */}
                <hr className="contrast-bg contrast-text border-white mb-12 opacity-20" />

                {/* Additional CTAs in a Grid */}
                <div className="contrast-bg contrast-text grid grid-cols-2 gap-6 md:place-items-center lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2">
                  {ctaData.map((cta, index) => (
                    <div key={index} className="contrast-bg contrast-text text-center" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', maxWidth: '100%' }}>
                      {cta.icon ?
                        <div className="contrast-bg contrast-text mb-4" style={{ padding: 12, borderRadius: 8, border: "#ff9d3e solid 1px" }}>{cta.icon}</div> : null}
                      <div className="contrast-bg contrast-text mb-8">
                        <h4 className="contrast-bg contrast-text text-md lg:text-xl xl:text-xl md:text-md font-semibold text-white">{cta.title}</h4>
                        <p className="contrast-bg contrast-text text-sm text-gray-400">{cta.subtitle}</p>
                      </div>
                      <a
                        href={cta.link}
                        className="contrast-bg contrast-text inline-flex items-center justify-center"
                        style={{ color: "#ff9d3e" }}
                      >
                        <span style={{ marginRight: '4px', fontSize: '14px', fontWeight: "bold" }}>Learn More</span>
                        <IconArrowRight />
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
