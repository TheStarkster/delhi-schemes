"use client"
import { useTranslation } from "react-i18next";

export default function About() {
    const { i18n, t } = useTranslation();
    
    return (
        <div className="contrast-bg contrast-text container mx-auto max-w-7xl px-4">
            <section className="contrast-bg contrast-text my-10">
                <h2 className="contrast-bg contrast-text text-3xl font-semibold">{t("about.title")}</h2>
                <p className="contrast-bg contrast-text mt-4 text-lg">{t("about.content1")}</p>
                <p className="contrast-bg contrast-text mt-4 text-lg">{t("about.content2")}</p>
            </section>

            <section className="contrast-bg contrast-text my-10">
                <h2 className="contrast-bg contrast-text text-3xl font-semibold">{t("dcpcr.title")}</h2>
                <p className="contrast-bg contrast-text mt-4 text-lg">{t("dcpcr.content")}</p>
            </section>
        </div>
    );
}
