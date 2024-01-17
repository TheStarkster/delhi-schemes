"use client"

import { useTranslation } from "react-i18next";

export default function PrivacyPolicy() {
  const { t, i18n } = useTranslation();

  return (
    <div className="contrast-bg contrast-text container mx-auto max-w-7xl px-4">
      <section className="contrast-bg contrast-text my-10">
        <p><span style={{ fontSize: 24 }}><strong>{t("privacyPolicy.introduction")}</strong></span></p>
        <p style={{ marginBottom: "24px" }}>{t("privacyPolicy.introText")}</p>

        <p><span style={{ fontSize: 24 }}><strong>{t("privacyPolicy.purpose")}</strong></span></p>
        <p style={{ marginBottom: "24px" }}>{t("privacyPolicy.purposeText")}</p>

        <p><span style={{ fontSize: 24 }}><strong>{t("privacyPolicy.privacyCommitment")}</strong></span></p>
        <p style={{ marginBottom: "24px" }}>{t("privacyPolicy.privacyCommitmentText")}</p>

        <p><strong><span style={{ fontSize: 24 }}>{t("privacyPolicy.notCollectInfo")}</span></strong></p>
        <p style={{ marginBottom: "24px" }}>{t("privacyPolicy.notCollectInfoText")}</p>

        <p><span style={{ fontSize: 24 }}><strong>{t("privacyPolicy.externalLinks")}</strong></span></p>
        <p style={{ marginBottom: "24px" }}>{t("privacyPolicy.externalLinksText")}</p>

        <p><strong><span style={{ fontSize: 24 }}>{t("privacyPolicy.noLiability")}</span></strong></p>
        <p style={{ marginBottom: "24px" }}>{t("privacyPolicy.noLiabilityText")}</p>

        <p><span style={{ fontSize: 24 }}><strong>{t("privacyPolicy.policyChanges")}</strong></span></p>
        <p>{t("privacyPolicy.policyChangesText")}</p>
      </section>
    </div>
  );
}
