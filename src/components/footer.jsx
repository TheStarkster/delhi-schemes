"use client";

import { useEffect, useState } from "react";

const Footer = (props) => {
  const [showFeedback, showFeedbackForm] = useState(false)

  const [visitCount, setVisitCount] = useState("Loading...")


  // Feedback modal...
  const FeedbackModal = () => {
    return <div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

      <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
            <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <div class="px-4 py-6 bg-white sm:p-6">
                <div class="mt-3 text-center sm:mt-0 sm:text-left">
                  <h3 class="text-lg leading-6 font-medium text-gray-900" id="modal-title">
                    Feedback
                  </h3>
                  <div class="mt-2">
                    <p class="text-sm text-gray-500">
                      Please provide your feedback below. We will get back to you at the earliest.
                    </p>
                  </div>
                </div>
                <div class="mt-5">
                  <label for="name" class="block text-sm font-medium text-gray-700">
                    Name
                  </label>
                  <div class="mt-1">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      autocomplete="given-name"
                      class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                </div>
                <div class="mt-5">
                  <label for="phone" class="block text-sm font-medium text-gray-700">
                    Phone
                  </label>
                  <div class="mt-1">
                    <input
                      type="text"
                      name="phone"
                      id="phone"
                      autocomplete="phone"
                      class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                </div>
                <div class="mt-5">
                  <label for="feedback" class="block text-sm font-medium text-gray-700">
                    Feedback
                  </label>
                  <div class="mt-1">
                    <textarea
                      id="feedback"
                      name="feedback"
                      rows="3"
                      class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                      placeholder="Enter your feedback here..."
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>
            <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
              <button type="button" class="inline-flex w-full justify-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 sm:ml-3 sm:w-auto" onClick={() => showFeedbackForm(false)}>Submit</button>
              <button type="button" class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto" onClick={() => showFeedbackForm(false)}>Close</button>
            </div>
          </div>
        </div>
      </div>
    </div>

  }

  useEffect(() => {
    fetch("https://dcpcr-ews-api.grevity.in/schemes/visit-count")
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setVisitCount(res.count)
      })
  }, [])

  return (
    <>
      {showFeedback && <FeedbackModal />}
      <footer className="contrast-bg contrast-text bg-[#203a5d]">
        <div className="contrast-bg contrast-text mx-auto max-w-screen-xl space-y-4 px-4 py-8 sm:space-y-8 sm:py-16 sm:px-6 lg:space-y-16 lg:px-8">
          <div className="contrast-bg contrast-text grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div>
              <img src="/delhi_gov_logo.png" className="contrast-bg contrast-text w-32 sm:w-48 lg:w-60" />

              <p className="contrast-bg contrast-text mt-4 text-xs sm:text-sm md:max-w-xs lg:text-base text-gray-500">
                Empowering Delhi's citizens with diverse government schemes for a brighter future.
              </p>

              <ul className="contrast-bg contrast-text mt-4 flex gap-4">
                <li>
                  <a
                    href="https://www.facebook.com/DCPCR/"
                    rel="noreferrer"
                    target="_blank"
                    className="contrast-bg contrast-text text-white transition opacity-75"
                  >
                    <span className="contrast-bg contrast-text sr-only">Facebook</span>
                    <svg
                      className="contrast-bg contrast-text h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </li>

                <li>
                  <a
                    href="https://www.instagram.com/dcpcr_delhi/"
                    rel="noreferrer"
                    target="_blank"
                    className="contrast-bg contrast-text text-white transition opacity-75"
                  >
                    <span className="contrast-bg contrast-text sr-only">Instagram</span>

                    <svg
                      className="contrast-bg contrast-text h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </li>

                <li>
                  <a
                    href="https://twitter.com/DCPCR"
                    rel="noreferrer"
                    target="_blank"
                    className="contrast-bg contrast-text text-white transition opacity-75"
                  >
                    <span className="contrast-bg contrast-text sr-only">https://twitter.com/DCPCR</span>

                    <svg
                      className="contrast-bg contrast-text h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg" style={{ fill: 'white' }} height="1em" viewBox="0 0 448 512">
                      <path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm297.1 84L257.3 234.6 379.4 396H283.8L209 298.1 123.3 396H75.8l111-126.9L69.7 116h98l67.7 89.5L313.6 116h47.5zM323.3 367.6L153.4 142.9H125.1L296.9 367.6h26.3z" /></svg>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.youtube.com/@dcpcrdelhigovernment795"
                    rel="noreferrer"
                    target="_blank"
                    className="contrast-bg contrast-text text-white transition opacity-75"
                  >
                    <span className="contrast-bg contrast-text sr-only">Youtube</span>
                    <svg
                      className="contrast-bg contrast-text h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512" style={{ fill: "white" }}>
                      <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z" /></svg>
                  </a>
                </li>
              </ul>
            </div>

            <div className="contrast-bg contrast-text grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:col-span-2 lg:grid-cols-2">
              <div>
                <p className="contrast-bg contrast-text font-medium text-white" style={{ fontSize: '18px' }}>Quick Links</p>

                <ul className="contrast-bg contrast-text mt-4 space-y-3 text-sm">
                  <li>
                    <a onClick={() => showFeedbackForm(true)} className="cursor-pointer contrast-bg contrast-text text-white transition opacity-75">
                      Give Feedback
                    </a>
                  </li>
                  <li>
                    <a href="/about-us" className="contrast-bg contrast-text text-white transition opacity-75">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="/contact-us" className="contrast-bg contrast-text text-white transition opacity-75">
                      Contact Us
                    </a>
                  </li>
                  <li>
                    <a href="/disclaimer" className="contrast-bg contrast-text text-white transition opacity-75">
                      Disclaimer
                    </a>
                  </li>
                  <li>
                    <a href="/privacy-policy" className="contrast-bg contrast-text text-white transition opacity-75">
                      Privacy policy
                    </a>
                  </li>
                  <li>
                    <a href="https://dcpcr.delhi.gov.in" target="_blank" className="contrast-bg contrast-text text-white transition opacity-75">
                      DCPCR
                    </a>
                  </li>
                  <li>
                    <a href="https://delhi.gov.in" target="_blank" className="contrast-bg contrast-text text-white transition opacity-75">
                      Delhi Government
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="contrast-bg contrast-text font-medium text-white text-lg mb-4">Get in Touch</h2>
                <div className="contrast-bg contrast-text border border-gray-300 overflow-hidden">
                  <iframe
                    title="DCPCR Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.7167828179417!2d77.22752707550211!3d28.66819767564528!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd07c8cb2179%3A0x18a0aec28fadcba7!2sDelhi%20Commission%20for%20Protection%20of%20Child%20Rights%20(DCPCR)!5e0!3m2!1sen!2sin!4v1700754622504!5m2!1sen!2sin"
                    width="100%"
                    height="280"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>

          <p className="contrast-bg contrast-text text-xs text-center text-gray-500">
            &copy; 2024. DCPCR. All rights reserved.
          </p>
          <hr style={{ marginTop: 18, opacity: 0.2 }} />
          <div style={{ marginTop: 18 }}>
            <div className="flex items-center space-x-4">
              <div>
                <span className="font-medium text-gray-500">Total Visitors Count:</span>
                <span className="ml-2 inline-block bg-green-200 text-green-800 text-xs font-bold px-2 rounded-full">{visitCount}</span>
              </div>

              <div className="flex-1 text-right">
                <span className="text-sm text-gray-500">Last update: 08 January 2024</span>
              </div>

              <div className="max-w-7xl mx-auto flex items-center p-2">
                <div className="flex items-center space-x-2">
                  <p className="text-gray-500 text-sm">Accessibility Controls: </p>
                  <button onClick={() => handleFontSizeChange('normal')} className="contrast-bg contrast-text px-2 py-1 text-sm font-medium text-gray-700 bg-gray-200 rounded hover:bg-gray-300">A</button>
                  <button onClick={() => handleFontSizeChange('large')} className="contrast-bg contrast-text px-2 py-1 text-base font-medium text-gray-700 bg-gray-200 rounded hover:bg-gray-300">A</button>
                  <button onClick={() => handleFontSizeChange('x-large')} className="contrast-bg contrast-text px-2 py-1 text-lg font-medium text-gray-700 bg-gray-200 rounded hover:bg-gray-300">A</button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </footer>
    </>
  );
};

export default Footer;
