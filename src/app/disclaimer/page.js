"use client"
import { useTranslation } from "react-i18next";

export default function Disclaimer() {
  const { t, i18n } = useTranslation();

  return (
    <div className="contrast-bg contrast-text container mx-auto max-w-7xl px-4">
      <section className="contrast-bg contrast-text my-10">
        <h2 className="contrast-bg contrast-text text-3xl font-semibold">{t("disclaimer.title")}</h2>
        <p className="contrast-bg contrast-text mt-4 text-lg">{t("disclaimer.content1")}</p>
        <p className="contrast-bg contrast-text mt-4 text-lg">{t("disclaimer.content2")}</p>
        <p className="contrast-bg contrast-text mt-4 text-lg">{t("disclaimer.content3")}</p>
        <p className="contrast-bg contrast-text mt-4 text-lg">{t("disclaimer.content4")}</p>
      </section>
    </div>
  );
}
