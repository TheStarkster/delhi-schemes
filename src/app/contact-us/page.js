"use client"

import { useTranslation } from "react-i18next";

// pages/contact.js
export default function Contact() {
  const { t, i18n } = useTranslation();

  return (
    <div className="contrast-bg contrast-text container mx-auto px-4">
      <header className="contrast-bg contrast-text text-center py-10">
        <h1 className="contrast-bg contrast-text text-4xl font-bold">{t("contact.title")}</h1>
        <p className="contrast-bg contrast-text mt-4 text-xl">{t("contact.subtitle")}</p>
      </header>

      <div className="contrast-bg contrast-text grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="contrast-bg contrast-text text-3xl font-semibold">{t("contact.addressTitle")}</h2>
          <p className="contrast-bg contrast-text mt-4 text-lg">{t("contact.address")}</p>
          <p className="contrast-bg contrast-text mt-2 text-lg">{t("contact.phone")}</p>
          <p className="contrast-bg contrast-text mt-2 text-lg">{t("contact.email")}</p>
          {/* Add more contact details if necessary */}
        </div>

        <div className="contrast-bg contrast-text md:col-span-2">
          <iframe
            className="contrast-bg contrast-text w-full h-96"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src={t("contact.mapSrc")}
          >
          </iframe>
        </div>
      </div>

      <footer className="contrast-bg contrast-text text-center py-10">
        <p>{t("contact.footer")}</p>
      </footer>
    </div>
  )
}
