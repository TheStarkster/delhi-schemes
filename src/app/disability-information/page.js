"use client"
import BloodDisorderIcon from "@/components/icons/blood_disorder";
import DisabilityIcon from "@/components/icons/disability";
import IntellectualDisorderIcon from "@/components/icons/intellectual_disorder";
import MentalDisorderIcon from "@/components/icons/mental_disorder";
import MultipleDisordersIcon from "@/components/icons/multiple_disorder";
import NeurologicalIcon from "@/components/icons/neurological_disorder";
import { useState } from "react";
import { useTranslation } from "react-i18next";


const DisabilityInfoModal = ({ isOpen, onClose, content }) => {
    if (!isOpen) return null;

    return (
        <div class="relative" style={{ zIndex: 9999 }} aria-labelledby="modal-title" role="dialog" aria-modal="true">
            <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

            <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                    <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full xl:max-w-5xl sm:max-w-lg">
                        <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                            {/* Body here */}
                            {content.children}
                        </div>
                        <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                            <button onClick={onClose} type="button" class="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default function DisabilityInformation() {
    const [isOpened, setIsOpened] = useState(false);
    const [content, setContent] = useState();
    const { t, i18n } = useTranslation();

    return (
        <>
            <DisabilityInfoModal onClose={() => setIsOpened(false)} isOpen={isOpened} content={content} />

            <div className="contrast-bg contrast-text banner relative bg-cover bg-center" style={{ backgroundImage: `url('/disability_info.png')`, height: '300px' }}>
                {/* Overlay */}
                <div className="contrast-bg contrast-text overlay absolute inset-0" style={{ backgroundColor: "#072248", opacity: 0.8 }}></div>

                {/* Text over Overlay */}
                <div className="contrast-bg contrast-text relative z-10 px-12">
                    <div className="contrast-bg contrast-text mx-auto max-w-7xl text-left">
                        <h1 className="contrast-bg contrast-text text-2xl sm:text-2xl xl:text-4xl lg:text-4xl md:text-2xl font-bold text-white mb-4 pt-12">{t('disability_information_page_title')}</h1>
                        <p className="contrast-bg contrast-text text-white">{t('disability_information_page_subtitle')}</p>
                    </div>
                </div>
            </div>
            <div className="contrast-bg contrast-text container mx-auto max-w-7xl px-4">
                <div className="contrast-bg contrast-text grid xl:grid-cols-3 gap-6 lg:grid-cols-3 my-12">
                    <div className="contrast-bg contrast-text border rounded-lg p-4 hover:shadow-lg transition" onClick={() => {
                        setIsOpened(true);
                        setContent({
                            title: "Physical Disability",
                            children: <div className="contrast-bg contrast-text mx-14%">
                                <h1 className="contrast-bg contrast-text text-2xl mb-4 font-bold">{t('physicalDisabilityTitle')}</h1>
                                <div className="contrast-bg contrast-text whitespace-pre-wrap text-lg">
                                    {t('physicalDisabilityDescription')}
                                    <ul className="contrast-bg contrast-text list-disc pl-5">
                                        <li>
                                            <strong>{t('locomotorDisabilitiesTitle')}</strong> {t('locomotorDisabilitiesDescription')}
                                            <ol className="contrast-bg contrast-text list-decimal pl-5">
                                                <li>{t('leprosyCuredPerson')}</li>
                                                <li>{t('cerebralPalsy')}</li>
                                                <li>{t('dwarfism')}</li>
                                                <li>{t('muscularDystrophy')}</li>
                                                <li>{t('acidAttackVictims')}</li>
                                            </ol>
                                        </li>
                                        <li>
                                            <strong>{t('visualImpairmentTitle')}</strong> {t('visualImpairmentDescription')}
                                            <ul className="contrast-bg contrast-text list-disc pl-5">
                                                <li><strong>{t('blindnessTitle')}</strong> {t('blindnessDescription')}</li>
                                                <li><strong>{t('lowVisionTitle')}</strong> {t('lowVisionDescription')}</li>
                                            </ul>
                                        </li>
                                        <li>
                                            <strong>{t('hearingImpairmentTitle')}</strong>
                                            <ol className="contrast-bg contrast-text list-decimal pl-5">
                                                <li>{t('deaf')}</li>
                                                <li>{t('hardOfHearing')}</li>
                                                <li>{t('speechAndLanguageDisability')}</li>
                                            </ol>
                                        </li>
                                    </ul>
                                </div>
                                <hr className="contrast-bg contrast-text my-1%" />
                            </div>
                        })
                    }}>
                        <div className="contrast-bg contrast-text flex items-center justify-center">
                            <div className="contrast-bg contrast-text rounded-xl bg-iceland_poppy-200 p-4">
                                <DisabilityIcon style={{ width: 50, height: 50 }} />
                            </div>
                        </div>
                        <div className="contrast-bg contrast-text text-2xl font-bold text-center mt-6">{t('physicalDisabilityTitle')}</div>
                        <p className="contrast-bg contrast-text text-gray-600 mt-2 text-center">{t('physicalDisabilityDescription')}</p>
                    </div>
                    <div className="contrast-bg contrast-text border rounded-lg p-4 hover:shadow-lg transition" onClick={() => {
                        setIsOpened(true);
                        setContent({
                            children: (
                                <div className="contrast-bg contrast-text mx-14%">
                                    <h1 className="contrast-bg contrast-text text-2xl font-bold">{t('intellectualDisabilityTitle')}</h1>
                                    <div className="contrast-bg contrast-text whitespace-pre-wrap text-lg">
                                        {t('intellectualDisabilityDescription')}
                                        <ul className="contrast-bg contrast-text list-disc pl-5">
                                            <li>{t('specificLearningDisabilities')}</li>
                                            <li>{t('autismSpectrumDisorder')}</li>
                                        </ul>
                                    </div>
                                    <hr className="contrast-bg contrast-text my-1%" />
                                </div>
                            )
                        })
                    }}>
                        <div className="contrast-bg contrast-text flex items-center justify-center">
                            <div className="contrast-bg contrast-text rounded-xl bg-iceland_poppy-200 p-4">
                                <IntellectualDisorderIcon style={{ width: 50, height: 50, fill: 'white' }} />
                            </div>
                        </div>
                        <div className="contrast-bg contrast-text text-2xl font-bold text-center mt-6">{t('intellectualDisabilityTitle')}</div>
                        <p className="contrast-bg contrast-text text-gray-600 mt-2 text-center">{t('intellectualDisabilityShortDescription')}</p>
                    </div>

                    <div className="contrast-bg contrast-text border rounded-lg p-4 hover:shadow-lg transition" onClick={() => {
                        setIsOpened(true);
                        setContent({
                            children: (
                                <div className="contrast-bg contrast-text mx-14%">
                                    <h1 className="contrast-bg contrast-text text-2xl font-bold">{t('neurologicalTitle')}</h1>
                                    <div className="contrast-bg contrast-text whitespace-pre-wrap text-lg">
                                        {t('neurologicalDescription')}
                                        <ul className="contrast-bg contrast-text list-disc pl-5">
                                            <li>
                                                <strong>{t('multipleSclerosisTitle')}:</strong> {t('multipleSclerosisDescription')}
                                            </li>
                                            <li>
                                                <strong>{t('parkinsonsDiseaseTitle')}:</strong> {t('parkinsonsDiseaseDescription')}
                                            </li>
                                        </ul>
                                    </div>
                                    <hr className="contrast-bg contrast-text my-1%" />
                                </div>
                            )
                        })
                    }}>
                        <div className="contrast-bg contrast-text flex items-center justify-center">
                            <div className="contrast-bg contrast-text rounded-xl bg-iceland_poppy-200 p-4">
                                <NeurologicalIcon style={{ width: 50, height: 50, fill: 'white' }} />
                            </div>
                        </div>
                        <div className="contrast-bg contrast-text text-2xl font-bold text-center mt-6">{t('neurologicalTitle')}</div>
                        <p className="contrast-bg contrast-text text-gray-600 mt-2 text-center">{t('neurologicalShortDescription')}</p>
                    </div>

                    <div className="contrast-bg contrast-text border rounded-lg p-4 hover:shadow-lg transition" onClick={() => {
                        setIsOpened(true);
                        setContent({
                            children: (
                                <div className="contrast-bg contrast-text mx-14%">
                                    <h1 className="contrast-bg contrast-text text-2xl font-bold">{t('bloodDisorderTitle')}</h1>
                                    <div className="contrast-bg contrast-text whitespace-pre-wrap text-lg">
                                        {t('bloodDisorderDescription')}
                                        <ol className="contrast-bg contrast-text list-decimal pl-5">
                                            <li>
                                                <strong>{t('haemophiliaTitle')}:</strong> {t('haemophiliaDescription')}
                                            </li>
                                            <li>
                                                <strong>{t('thalassemiaTitle')}:</strong> {t('thalassemiaDescription')}
                                            </li>
                                            <li>
                                                <strong>{t('sickleCellDiseaseTitle')}:</strong> {t('sickleCellDiseaseDescription')}
                                            </li>
                                        </ol>
                                    </div>
                                    <hr className="contrast-bg contrast-text my-1%" />
                                </div>
                            )
                        })
                    }}>
                        <div className="contrast-bg contrast-text flex items-center justify-center">
                            <div className="contrast-bg contrast-text rounded-xl bg-iceland_poppy-200 p-4">
                                <BloodDisorderIcon style={{ width: 50, height: 50, fill: 'white' }} />
                            </div>
                        </div>
                        <div className="contrast-bg contrast-text text-2xl font-bold text-center mt-6">{t('bloodDisorderTitle')}</div>
                        <p className="contrast-bg contrast-text text-gray-600 mt-2 text-center">{t('bloodDisorderShortDescription')}</p>
                    </div>

                    <div className="contrast-bg contrast-text border rounded-lg p-4 hover:shadow-lg transition" onClick={() => {
                        setIsOpened(true);
                        setContent({
                            children: (
                                <div className="contrast-bg contrast-text mx-14%">
                                    <h1 className="contrast-bg contrast-text text-2xl font-bold">{t('multipleDisordersTitle')}</h1>
                                    <div className="contrast-bg contrast-text whitespace-pre-wrap text-lg">
                                        {t('multipleDisordersDescription')}
                                    </div>
                                    <hr className="contrast-bg contrast-text my-1%" />
                                </div>
                            )
                        })
                    }}>
                        <div className="contrast-bg contrast-text flex items-center justify-center">
                            <div className="contrast-bg contrast-text rounded-xl bg-iceland_poppy-200 p-4">
                                <MultipleDisordersIcon style={{ width: 50, height: 50, fill: 'white' }} />
                            </div>
                        </div>
                        <div className="contrast-bg contrast-text text-2xl font-bold text-center mt-6">{t('multipleDisordersTitle')}</div>
                        <p className="contrast-bg contrast-text text-gray-600 mt-2 text-center">{t('multipleDisordersShortDescription')}</p>
                    </div>

                    <div className="contrast-bg contrast-text border rounded-lg p-4 hover:shadow-lg transition" onClick={() => {
                        setIsOpened(true);
                        setContent({
                            children: (
                                <div className="contrast-bg contrast-text mx-14%">
                                    <h1 className="contrast-bg contrast-text text-2xl font-bold">{t('mentalBehaviourTitle')}</h1>
                                    <div className="contrast-bg contrast-text whitespace-pre-wrap text-lg">
                                        {t('mentalBehaviourDescription')}
                                    </div>
                                    <hr className="contrast-bg contrast-text my-1%" />
                                </div>
                            )
                        })
                    }}>
                        <div className="contrast-bg contrast-text flex items-center justify-center">
                            <div className="contrast-bg contrast-text rounded-xl bg-iceland_poppy-200 p-4">
                                <MentalDisorderIcon style={{ width: 50, height: 50, fill: 'white' }} />
                            </div>
                        </div>
                        <div className="contrast-bg contrast-text text-2xl font-bold text-center mt-6">{t('mentalBehaviourTitle')}</div>
                        <p className="contrast-bg contrast-text text-gray-600 mt-2 text-center">{t('mentalBehaviourShortDescription')}</p>
                    </div>

                </div>
            </div>
        </>
    )
}
