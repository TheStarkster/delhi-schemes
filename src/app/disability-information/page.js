"use client"
import BloodDisorderIcon from "@/components/icons/blood_disorder";
import DisabilityIcon from "@/components/icons/disability";
import IntellectualDisorderIcon from "@/components/icons/intellectual_disorder";
import MentalDisorderIcon from "@/components/icons/mental_disorder";
import MultipleDisordersIcon from "@/components/icons/multiple_disorder";
import NeurologicalIcon from "@/components/icons/neurological_disorder";
import { useState } from "react";


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

    return (
        <>
            <DisabilityInfoModal onClose={() => setIsOpened(false)} isOpen={isOpened} content={content} />

            <div className="contrast-bg contrast-text banner relative bg-cover bg-center" style={{ backgroundImage: `url('/disability_info.png')`, height: '300px' }}>
                {/* Overlay */}
                <div className="contrast-bg contrast-text overlay absolute inset-0" style={{ backgroundColor: "#072248", opacity: 0.8 }}></div>

                {/* Text over Overlay */}
                <div className="contrast-bg contrast-text relative z-10 px-12">
                    <div className="contrast-bg contrast-text mx-auto max-w-7xl text-left">
                        <h1 className="contrast-bg contrast-text text-2xl sm:text-2xl xl:text-4xl lg:text-4xl md:text-2xl font-bold text-white mb-4 pt-12">Disability Information</h1>
                        <p className="contrast-bg contrast-text text-white">Explore a comprehensive guide to various disabilities and learn about the inclusive schemes and support initiatives offered by the Delhi government to empower individuals with disabilities.</p>
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
                                <h1 className="contrast-bg contrast-text text-2xl mb-4 font-bold">Physical Disability</h1>
                                <div className="contrast-bg contrast-text whitespace-pre-wrap text-lg">
                                    Under the overall ambit of Physical Disability, three types of disabilities are broadly classified:
                                    <ul className="contrast-bg contrast-text list-disc pl-5">
                                        <li>
                                            <strong>Locomotor Disabilities:</strong> Locomotor Disability is the disability of the bones, joints, or muscles leading to substantial restriction of the movement of the limbs or a usual form of cerebral palsy. Different types of locomotor disabilities are classified as the following-
                                            <ol className="contrast-bg contrast-text list-decimal pl-5">
                                                <li>Leprosy cured person- Any person who has been cured of leprosy but is suffering from- loss of sensation in hands or feet as well as loss of sensation and partial paralysis in the eyelid but with no visible deformity; visible deformity and partial paralysis but having sufficient mobility in their hands and feet to enable them to engage in normal economic activity; extreme physical deformity as well as advanced age which prevents the person from undertaking any gainful occupation</li>
                                                <li>Cerebral palsy - A group of non-progressive conditions characterised by abnormal motor control posture resulting from brain insult or injuries occurring in the perinatal, neonatal or infant period of development</li>
                                                <li>Dwarfism - Medical or genetic condition resulting in an adult height of 4 feet 10 inches (147 centimetres) or less.</li>
                                                <li>Muscular dystrophy - A group of hereditary genetic muscle diseases that weakens the muscles that move the human body. A person with multiple dystrophy has incorrect and missing information in their genes, which prevents them from making the proteins they need for healthy muscles. Dystrophy is a disorder in which an organ or tissue of the body wastes away.</li>
                                                <li>Acid attack victims - A person disfigured due to violent assaults by throwing of acid or similar corrosive substance</li>
                                            </ol>
                                        </li>
                                        <li>
                                            <strong>Visual Impairment:</strong> Visual Impairment can be further classified as the following:
                                            <ul className="contrast-bg contrast-text list-disc pl-5">
                                                <li><strong>Blindness</strong> - A condition where a person suffers from any of the following conditions namely: Total absence of sight; or Visual acuity not exceeding 6/60 or 20/200 (Snellen) in the better eye with correcting lenses; or Limitation of the field vision subtending an angle of 20 degrees or worse</li>
                                                <li><strong>Low-vision</strong> - A person with impairment of visual functioning even after treatment or standard refractive correction but who uses or is potentially capable of using vision for the planning or execution of a task with appropriate assistive devices</li>
                                            </ul>
                                        </li>
                                        <li>
                                            <strong>Hearing Impairment</strong>
                                            <ol className="contrast-bg contrast-text list-decimal pl-5">
                                                <li>Deaf - Persons having 70 DB hearing loss in speech frequencies in both ears.</li>
                                                <li>Hard of hearing - Loss of sixty decibels or more in the better ear in the conversational range of frequencies.</li>
                                                <li>Speech and Language Disability - A permanent disability arising out of conditions such as laryngectomy (Laryngectomy is the removal of part or all of the larynx (voice box) or aphasia (A language disorder caused by damage in a specific area of the brain that affects a person's ability to communicate) affecting one or more components of speech and language due to organic or neurological causes</li>
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
                        <div className="contrast-bg contrast-text text-2xl font-bold text-center mt-6">Physical Disability</div>
                        <p className="contrast-bg contrast-text text-gray-600 mt-2 text-center">Under the overall ambit of Physical Disability, three types of disabilities are broadly classified: Locomotor, Visually Impaired, Blindness, Low-vision...</p>
                    </div>
                    <div className="contrast-bg contrast-text border rounded-lg p-4 hover:shadow-lg transition" onClick={() => {
                        setIsOpened(true);
                        setContent({
                            children: <div className="contrast-bg contrast-text mx-14%">
                                <h1 className="contrast-bg contrast-text text-2xl font-bold">Intellectual Disability</h1>
                                <div className="contrast-bg contrast-text whitespace-pre-wrap text-lg">
                                    Under the ambit of intellectual disabilities, two types of disabilities are broadly classified as:
                                    <ul className="contrast-bg contrast-text list-disc pl-5">
                                        <li>Specific Learning Disabilities: Affects a person’s ability to acquire, process and/or use either, spoken, read, written or nonverbal information.</li>
                                        <li>Autism Spectrum Disorder: A condition of uneven skill development primarily affecting the communication and social abilities of a person, marked by repetitive and ritualistic behaviour.</li>
                                    </ul>
                                </div>
                                <hr className="contrast-bg contrast-text my-1%" />
                            </div>
                        })
                    }}>
                        <div className="contrast-bg contrast-text flex items-center justify-center">
                            <div className="contrast-bg contrast-text rounded-xl bg-iceland_poppy-200 p-4">
                                <IntellectualDisorderIcon style={{ width: 50, height: 50, fill: 'white' }} />
                            </div>
                        </div>
                        <div className="contrast-bg contrast-text text-2xl font-bold text-center mt-6">Intellectual Disability</div>
                        <p className="contrast-bg contrast-text text-gray-600 mt-2 text-center">Under the ambit of intellectual disabilities, two types of disabilities are broadly classified as: Specific Learning Disabilities and Autism Spectrum Disorder</p>
                    </div>
                    <div className="contrast-bg contrast-text border rounded-lg p-4 hover:shadow-lg transition" onClick={() => {
                        setIsOpened(true);
                        setContent({
                            children: <div className="contrast-bg contrast-text mx-14%">
                                <h1 className="contrast-bg contrast-text text-2xl font-bold">Neurological</h1>
                                <div className="contrast-bg contrast-text whitespace-pre-wrap text-lg">
                                    Disability caused due to chronic neurological conditions:
                                    <ul className="contrast-bg contrast-text list-disc pl-5">
                                        <li>
                                            <strong>Multiple sclerosis:</strong> A disease in which the immune system eats away the protective covering of nerves leading to damage to the protective covering (myelin sheath) that surrounds nerve fibres in the brain and affecting the ability of nerve cells in the brain and spinal cord to communicate with each other.
                                        </li>
                                        <li>
                                            <strong>Parkinson's disease:</strong> A long term disorder of the nervous system marked by tremor, muscular rigidity, and slow imprecise movement, chiefly affecting middle-aged and elderly people. Its symptoms are associated with degeneration of the nerve cells in deep parts of the brain called the basal ganglia of the brain and low or falling levels of dopamine, a neurotransmitter.
                                        </li>
                                    </ul>
                                </div>
                                <hr className="contrast-bg contrast-text my-1%" />
                            </div>
                        })
                    }}>
                        <div className="contrast-bg contrast-text flex items-center justify-center">
                            <div className="contrast-bg contrast-text rounded-xl bg-iceland_poppy-200 p-4">
                                <NeurologicalIcon style={{ width: 50, height: 50, fill: 'white' }} />
                            </div>
                        </div>
                        <div className="contrast-bg contrast-text text-2xl font-bold text-center mt-6">Neurological</div>
                        <p className="contrast-bg contrast-text text-gray-600 mt-2 text-center">Disability caused due to chronic neurological conditions Multiple sclerosis and Parkinson's disease. A long term disorder...</p>
                    </div>
                    <div className="contrast-bg contrast-text border rounded-lg p-4 hover:shadow-lg transition" onClick={() => {
                        setIsOpened(true);
                        setContent({
                            children: <div className="contrast-bg contrast-text mx-14%">
                            <h1 className="contrast-bg contrast-text text-2xl font-bold">Blood Disorder</h1>
                            <div className="contrast-bg contrast-text whitespace-pre-wrap text-lg">
                                Disability caused due to Blood disorders:
                                <ol className="contrast-bg contrast-text list-decimal pl-5">
                                    <li>
                                        <strong>Haemophilia:</strong> An inheritable disease, usually affecting only male but transmitted by women to their male children, characterised by loss or impairment of the normal clotting ability of blood so that a minor wound may result in fatal bleeding.
                                    </li>
                                    <li>
                                        <strong>Thalassemia:</strong> An inherited blood disorder characterised by less oxygen-carrying protein (haemoglobin) and fewer red blood cells in the body than normal. Symptoms include fatigue, weakness, paleness, and slow growth.
                                    </li>
                                    <li>
                                        <strong>Sickle cell disease:</strong> A hemolytic disorder characterised by chronic anaemia, periodic episodes of extreme pain, and various complications due to associated tissue and organ damage; “hemolytic” refers to the destruction of the cell membrane of red blood cells resulting in the release of haemoglobin from within the red blood cells into the blood plasma.
                                    </li>
                                </ol>
                            </div>
                            <hr className="contrast-bg contrast-text my-1%" />
                        </div>
                        })
                    }}>
                        <div className="contrast-bg contrast-text flex items-center justify-center">
                            <div className="contrast-bg contrast-text rounded-xl bg-iceland_poppy-200 p-4">
                                <BloodDisorderIcon style={{ width: 50, height: 50, fill: 'white' }} />
                            </div>
                        </div>
                        <div className="contrast-bg contrast-text text-2xl font-bold text-center mt-6">Blood disorder</div>
                        <p className="contrast-bg contrast-text text-gray-600 mt-2 text-center">Disability caused due to Blood disorders: Haemophilia, Thalassemia, Sickle cell disease...</p>
                    </div>
                    <div className="contrast-bg contrast-text border rounded-lg p-4 hover:shadow-lg transition" onClick={() => {
                        setIsOpened(true);
                        setContent({
                            children: <div className="contrast-bg contrast-text mx-14%">
                            <h1 className="contrast-bg contrast-text text-2xl font-bold">Multiple Disorders</h1>
                            <div className="contrast-bg contrast-text whitespace-pre-wrap text-lg">
                                A condition in which a person may have a combination of hearing and visual impairments causing severe communication, developmental, and educational problems. (More than one of the above-specified disabilities).
                            </div>
                            <hr className="contrast-bg contrast-text my-1%" />
                        </div>
                        
                        })
                    }}>
                        <div className="contrast-bg contrast-text flex items-center justify-center">
                            <div className="contrast-bg contrast-text rounded-xl bg-iceland_poppy-200 p-4">
                                <MultipleDisordersIcon style={{ width: 50, height: 50, fill: 'white' }} />
                            </div>
                        </div>
                        <div className="contrast-bg contrast-text text-2xl font-bold text-center mt-6">Multiple disorder</div>
                        <p className="contrast-bg contrast-text text-gray-600 mt-2 text-center">A condition in which a person may have a combination of hearing and visual impairments causing severe communication...</p>
                    </div>
                    <div className="contrast-bg contrast-text border rounded-lg p-4 hover:shadow-lg transition" onClick={() => {
                        setIsOpened(true);
                        setContent({
                            children: <div className="contrast-bg contrast-text mx-14%">
                                <h1 className="contrast-bg contrast-text text-2xl font-bold">Mental Behaviour</h1>
                                <div className="contrast-bg contrast-text whitespace-pre-wrap text-lg">
                                    A substantial disorder of thinking, mood, perception, orientation or memory that grossly impairs judgement, behaviour, capacity to recognise reality or ability to meet the ordinary demands of life, but does not include retardation which is a condition of arrested or incomplete development of mind of a person, specially characterised by subnormality of intelligence.
                                </div>
                                <hr className="contrast-bg contrast-text my-1%" />
                            </div>
                        })
                    }}>
                        <div className="contrast-bg contrast-text flex items-center justify-center">
                            <div className="contrast-bg contrast-text rounded-xl bg-iceland_poppy-200 p-4">
                                <MentalDisorderIcon style={{ width: 50, height: 50, fill: 'white' }} />
                            </div>
                        </div>
                        <div className="contrast-bg contrast-text text-2xl font-bold text-center mt-6">Mental disorder</div>
                        <p className="contrast-bg contrast-text text-gray-600 mt-2 text-center">A substantial disorder of thinking, mood, perception, orientation or memory that grossly impairs judgement, behaviour, capacity to ...</p>
                    </div>
                </div>
            </div>
        </>
    )
}
