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
      subtitle: "Information on schemes, policies, and services for children and families.",
      link: "/resources",
      icon: <ResourceIcon style={{ width: 40, height: 40 }} />
    },
    {
      title: "Compensation",
      subtitle: "Learn about compensation schemes for victims of crime and abuse.",
      link: "/compensation",
      icon: <CompensationIcon style={{ width: 40, height: 40 }} />
    },
    {
      title: "Essential Docs",
      subtitle: "Access essential documents for children and families.",
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
      <section className="relative">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('/schemes_hero.png')` }}
        ></div>

        {/* Overlay */}
        <div className="absolute inset-0 opacity-90" style={{ backgroundColor: "#072248" }}></div>

        <div className="relative">
          <div className="container mx-auto grid grid-cols-1 gap-12 px-4 py-16 lg:px-8 lg:py-48 xl:max-w-7xl">
            <div className="flex items-center lg:text-left">
              <div className="lg:mt-[-30px] xl:mt-[-50px]">
                {/* Heading */}
                <div>
                  <h2 className="text-3xl lg:text-5xl md:text-5xl font-black text-white dark:text-white lg-leading md-leading">
                    Social Security Schemes and Resources for Children and Families
                  </h2>
                  <h3 className="text-sm lg:text-xl md:text-xl font-medium mb-12 mt-4 leading-relaxed text-white">
                    Empowering Delhi: Transforming Lives Through Government Initiatives
                  </h3>
                </div>
                {/* END Heading */}

                {/* Action */}
                <div className="mb-4 lg:mb-24 xl:mb-28"> {/* Responsive margin */}
                  <a
                    href="#"
                    onClick={() => setIsModalOpen(true)}
                    className="inline-flex w-full lg:w-auto items-center justify-center space-x-2 rounded-lg border border-iceland_poppy-500 bg-iceland_poppy-500 px-6 py-3 text-white transition hover:border-iceland_poppy-600 hover:bg-iceland_poppy-700"
                  >
                    <span style={{ fontWeight: "bold" }}>Find Schemes for You</span>
                    <IconArrowRight />
                  </a>
                </div>


                {/* END Action */}

                {/* Horizontal Line */}
                <hr className="border-white mb-12 opacity-20" />

                {/* Additional CTAs in a Grid */}
                <div className="grid grid-cols-2 gap-6 md:place-items-center lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2">
                  {ctaData.map((cta, index) => (
                    <div key={index} className="text-center" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', maxWidth: '100%' }}>
                      {cta.icon ?
                        <div className="mb-4" style={{ padding: 12, borderRadius: 8, border: "#ff9d3e solid 1px" }}>{cta.icon}</div> : null}
                      <div className="mb-8">
                        <h4 className="text-md lg:text-xl xl:text-xl md:text-md font-semibold text-white">{cta.title}</h4>
                        <p className="text-sm text-gray-400">{cta.subtitle}</p>
                      </div>
                      <a
                        href={cta.link}
                        className="inline-flex items-center justify-center"
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
