// pages/AllAssistance.js
"use client"
import Link from 'next/link';
import { compensationData, compensationDataHindi } from "@/lib/api"; // Replace with your actual data fetching function
import { useTranslation } from 'react-i18next';

export default function AllCompensation() {
    const { t, i18n } = useTranslation();

    return (
        <>
        <div className="contrast-bg contrast-text banner relative bg-cover bg-center" style={{ backgroundImage: `url('/compensation.png')`, height: '300px' }}>
            {/* Overlay */}
            <div className="contrast-bg contrast-text overlay absolute inset-0" style={{ backgroundColor: "#072248", opacity: 0.7 }}></div>

            {/* Text over Overlay */}
            <div className="contrast-bg contrast-text relative z-10 px-12">
                <div className="contrast-bg contrast-text mx-auto max-w-7xl text-left">
                    <h1 className="contrast-bg contrast-text text-2xl sm:text-2xl xl:text-4xl lg:text-4xl md:text-2xl font-bold text-white mb-4 pt-12">{t('compensationBannerTitle')}</h1>
                    <p className="contrast-bg contrast-text text-white">{t('compensationBannerDescription')}</p>
                </div>
            </div>
        </div>
            <div className="contrast-bg contrast-text grid px-12 xl:px-0 lg:px-12 md:px-12 max-w-7xl mx-auto my-12 md:grid-cols-2 lg:grid-cols-1 gap-6">
                {(i18n.language == 'en' ? compensationData : compensationDataHindi).map((item, index) => (
                    <div key={index} className="contrast-bg contrast-text border rounded-lg p-4 hover:shadow-lg transition">
                        <Link href={`/compensation/${encodeURIComponent((item.title).replace(/\s+/g, '-').toLowerCase())}?lang=${i18n.language}`}>
                            <div className="contrast-bg contrast-text text-2xl text-blue-600 font-bold hover:underline">{item.title}</div>
                        </Link>
                        <p className="contrast-bg contrast-text text-gray-600 mt-2">{item.description.substring(0, 200)}...</p> {/* Truncate the description */}
                    </div>
                ))}
            </div>
        </>
    );
}
