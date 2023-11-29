"use client"
import { useState } from 'react';
import DocumentAccordion from "@/components/document_accordion";
import { essentialDocs } from "../../lib/api";
import CrossFilledRight from '@/components/icons/cross_filled';
import IconSearch from '@/components/icons/search';


const EssentialDocsPage = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredDocs, setFilteredDocs] = useState(essentialDocs);

    const handleSearchChange = (event) => {
        const term = event.target.value;
        setSearchTerm(term);

        if (!term) {
            setFilteredDocs(essentialDocs);
        } else {
            const filtered = essentialDocs.filter(doc =>
                doc.resource.toLowerCase().includes(term.toLowerCase()) ||
                doc.concerned_dept.toLowerCase().includes(term.toLowerCase()) ||
                doc.process.toLowerCase().includes(term.toLowerCase())
            );
            setFilteredDocs(filtered);
        }
    };

    const clearSearch = () => {
        setSearchTerm('');
        setFilteredDocs(essentialDocs);
    };

    return (
        <>
            <div className="banner relative bg-cover bg-center" style={{ backgroundImage: `url('/resources.png')`, height: '300px' }}>
                {/* Overlay */}
                <div className="overlay absolute inset-0" style={{ backgroundColor: "#072248", opacity: 0.9 }}></div>

                {/* Text over Overlay */}
                <div className="relative z-10 px-12">
                    <div className="mx-auto max-w-7xl text-left">
                        <h1 className="text-2xl sm:text-2xl xl:text-4xl lg:text-4xl md:text-2xl font-bold text-white mb-4 pt-12">Essential Documents</h1>
                        <p className="text-white">Explore essential documents for scheme applications and learn step-by-step how to acquire any missing documents. Simplified guides for a hassle-free application process at your fingertips.</p>
                    </div>
                </div>
            </div>
            <div className="grid px-12 xl:px-0 lg:px-12 md:px-12 max-w-7xl mx-auto my-12 md:grid-cols-1 lg:grid-cols-1 gap-6">
                <div className="grid grid-cols-12">
                    <div className="relative col-span-12">
                        <input
                            type="text"
                            value={searchTerm}
                            onChange={handleSearchChange}
                            placeholder="Search documents..."
                            className="pl-10 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                        <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                            {/* Replace with your search icon component */}
                            <IconSearch className="h-4 w-4 text-gray-500" />
                        </span>
                        {searchTerm && (
                            <button
                                onClick={clearSearch}
                                className="absolute inset-y-0 right-0 flex items-center pr-2"
                            >
                                {/* Replace with your clear icon component */}
                                <CrossFilledRight style={{ fill: "#e4750a" }} className="h-4 w-4 text-gray-500" />
                            </button>
                        )}
                    </div>
                </div>

                <DocumentAccordion data={filteredDocs} />
            </div>

        </>
    );
}

export default EssentialDocsPage;
