// pages/contact.js
export default function Contact() {
    return (
      <div className="contrast-bg contrast-text container mx-auto px-4">
        <header className="contrast-bg contrast-text text-center py-10">
          <h1 className="contrast-bg contrast-text text-4xl font-bold">Contact Us</h1>
          <p className="contrast-bg contrast-text mt-4 text-xl">Get in touch with us</p>
        </header>
  
        <div className="contrast-bg contrast-text grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="contrast-bg contrast-text text-3xl font-semibold">Our Address</h2>
            <p className="contrast-bg contrast-text mt-4 text-lg">5th Floor, ISBT Building, Kashmere Gate, Near, Yudhister Setu, Inter State Bus Terminal, Kashmere Gate, New Delhi, Delhi 110006</p>
            <p className="contrast-bg contrast-text mt-2 text-lg">Phone: 011 2386 2685</p>
            <p className="contrast-bg contrast-text mt-2 text-lg">Email: dcpcr[at]hotmail[dot]com / delhichildrightscommission[at]gmail[dot]com</p>
            {/* Add more contact details if necessary */}
          </div>
  
          <div className="contrast-bg contrast-text md:col-span-2">
            <iframe
              className="contrast-bg contrast-text w-full h-96"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.7167828179417!2d77.22752707550211!3d28.66819767564528!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd07c8cb2179%3A0x18a0aec28fadcba7!2sDelhi%20Commission%20for%20Protection%20of%20Child%20Rights%20(DCPCR)!5e0!3m2!1sen!2sin!4v1700754622504!5m2!1sen!2sin"
            >
            </iframe>
          </div>
        </div>
  
        <footer className="contrast-bg contrast-text text-center py-10">
          <p>© 2023 Your Company Name. All rights reserved.</p>
        </footer>
      </div>
    )
  }
  