import { useState } from "react";
import FindSchemeModal from "./find_scheme_modal";
import IconArrowRight from "./icons/right_arrow";

const Hero = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const ctaData = [
    {
      title: "Healthy Delhi Initiative",
      subtitle: "Explore comprehensive health and nutrition programs for a healthier Delhi.",
      link: "#"
    },
    {
      title: "Delhi Employment Hub",
      subtitle: "Connect with opportunities for sustainable livelihood and career growth.",
      link: "#"
    },
    {
      title: "Educate Delhi",
      subtitle: "Discover educational schemes promoting quality learning for all ages.",
      link: "#"
    },
    {
      title: "Women and Child Welfare",
      subtitle: "Access dedicated support and resources for the empowerment of women and children.",
      link: "#"
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
        <div className="absolute inset-0" style={{ backgroundColor: "#072248", opacity: .86 }}></div>

        <div className="relative">
          <div className="container mx-auto grid grid-cols-1 gap-12 px-4 py-16 lg:px-8 lg:py-48 xl:max-w-7xl">
            <div className="flex items-center text-center lg:text-left">
              <div className="lg:mt-[-30px] xl:mt-[-50px]">
                {/* Heading */}
                <div>
                  <h2 className="text-5xl font-black text-white dark:text-white" style={{ lineHeight: '60px' }}>
                    Social Security Schemes and Resources for Children and Families
                  </h2>
                  <h3 className="text-xl font-medium mb-12 mt-4 leading-relaxed text-white">
                    Empowering Delhi: Transforming Lives Through Government Initiatives
                  </h3>
                </div>
                {/* END Heading */}

                {/* Action */}
                <div className="mb-4 lg:mb-6 xl:mb-28"> {/* Responsive margin */}
                  <a
                    href="#"
                    onClick={() => setIsModalOpen(true)}
                    className="inline-flex items-center justify-center space-x-2 rounded-lg border border-iceland_poppy-500 bg-iceland_poppy-500 px-6 py-3 leading-6 text-white transition hover:border-iceland_poppy-600 hover:bg-iceland_poppy-700 hover:text-white focus:ring focus:ring-iceland_poppy-400 focus:ring-opacity-50 active:border-iceland_poppy-700 active:bg-iceland_poppy-700 dark:focus:ring-iceland_poppy-400 dark:focus:ring-opacity-90"
                    >
                    <span style={{ fontWeight: "bold" }}>Find Schemes for You</span>
                    <IconArrowRight />
                  </a>
                </div>
                {/* END Action */}

                {/* Horizontal Line */}
                <hr className="border-gray-500 mb-12" />

                {/* Additional CTAs in a Grid */}
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">
                  {ctaData.map((cta, index) => (
                    <div key={index} className="text-left" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                      <div className="mb-8">
                        <h4 className="text-lg font-semibold text-white">{cta.title}</h4>
                        <p className="text-sm text-gray-300">{cta.subtitle}</p>
                      </div>
                      <a
                        href={cta.link}
                        className="inline-flex items-center text-white hover:text-white"
                        style={{
                          background: 'rgba(255, 255, 255, 0.4)', // White color with lower opacity
                          borderRadius: '12px', // Border radius for rounded corners
                          padding: '6px 16px', // Padding for top/bottom and left/right
                          textDecoration: 'none', // Optional: removes underline from link
                        }}
                      >
                        <span style={{ marginRight: '4px', fontSize: '14px' }}>Learn More</span>
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
