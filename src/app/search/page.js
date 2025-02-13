"use client"

import React, { useContext, useEffect, useRef, useState } from 'react';
import { useSearchParams } from 'next/navigation'
import { I18nContext } from '../context';

const SearchPage = (props) => {
    const { t, i18n } = useContext(I18nContext);
    const [searchTerm, setSearchTerm] = useState('');
    const [schemes, setSchemes] = useState();
    // const [loading, setLoading] = useState(true);
    const [showScrollTopButton, setShowScrollTopButton] = useState(false);
    const [showFilters, setShowFilters] = useState(false);

    const toggleFilters = () => {
        setShowFilters(!showFilters);
    };

    const [filters, setFilters] = useState({
        gender: '',
        category: '',
        residence: '',
        disability: '',
        age: 0,
        reservation: '',
        maxFamilyIncome: '',
    });
    const searchParams = useSearchParams();
    const abortController = useRef(new AbortController());

    // Function to scroll to the top of the page
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // Function to toggle the visibility of the scroll-to-top button
    const checkScrollTop = () => {
        if (!showScrollTopButton && window.pageYOffset > 400) {
            setShowScrollTopButton(true);
        } else if (showScrollTopButton && window.pageYOffset <= 400) {
            setShowScrollTopButton(false);
        }
    };

    function cleanObject(obj) {
        return Object.entries(obj)
            .filter(([_, value]) => value != null)
            .reduce((acc, [key, value]) => ({ ...acc, [key]: value }), {});
    }

    useEffect(() => {
        const reconstructedObject = {
            gender: searchParams.get('gender'),
            residence: searchParams.get('resident'),
            category: searchParams.get('category'),
            reservation: searchParams.get('reservation'),
            disability: searchParams.get('differentlyAbled') === 'true' ? 'yes' : searchParams.get('differentlyAbled') === 'false' ? 'no' : null,
            maxFamilyIncome: searchParams.get('annualIncome') ? Number(searchParams.get('annualIncome')) : null,
            age: searchParams.get('age') ? Number(searchParams.get('age')) : null
        };

        if (Object.keys(cleanObject(reconstructedObject)).length > 0) {
            setFilters(cleanObject(reconstructedObject));
        }
    }, [])

    // Adding scroll event listener
    useEffect(() => {
        window.addEventListener('scroll', checkScrollTop);
        return () => {
            window.removeEventListener('scroll', checkScrollTop);
        };
    }, [showScrollTopButton]);



    // Function to fetch data with filters and search term
    const fetchData = async () => {

        // Abort previous request
        abortController.current.abort();
        abortController.current = new AbortController();

        try {
            const response = await fetch('http://localhost:3000/schemes/get_schemes', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    searchTerm, filters: {
                        ...filters,
                        disability: filters.disability === 'yes' ? true : filters.disability === 'no' ? false : null,
                    }
                }),
                signal: abortController.current.signal
            });
            const data = await response.json();
            setSchemes(data);
        } catch (error) {
            if (error.name !== 'AbortError') {
                console.error("Error fetching data: ", error);
            }
        }
    };

    useEffect(() => {
        return () => {
            abortController.current.abort();
        };
    }, []);

    // useEffect to call fetchData on component mount and when search term or filters change
    useEffect(() => {
        fetchData();
    }, [searchTerm, filters]);

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleSearch = () => {
        // Implement search functionality here
        console.log('Searching for:', searchTerm);
    };

    const handleFilterChange = (e) => {
        if (e.target.name === 'age') {
            setFilters({ ...filters, age: Number(e.target.value) });
        } else {
            setFilters({ ...filters, [e.target.name]: e.target.value });
        }
    };

    const resetFilter = (filterName) => {
        setFilters({ ...filters, [filterName]: '' });
    };

    const resetAgeFilter = () => {
        setFilters({ ...filters, age: 0 });
    };


    const resetAllFilters = () => {
        setFilters({
            gender: '',
            category: '',
            residence: '',
            disability: '',
            age: 0,
            reservation: '',
            maxFamilyIncome: '',
        });
    };

    useEffect(() => {
        if (showFilters) {
            document.body.classList.add('noScroll');
        } else {
            document.body.classList.remove('noScroll');
        }
    }, [showFilters]);


    return (
        <>
            <div className="contrast-bg contrast-text container mx-auto my-20 px-4">
                <div className="contrast-bg contrast-text grid grid-cols-1 md:grid-cols-4 lg:grid-cols-8 xl:grid-cols-4 gap-4">
                    <div className={`col-span-1 xl:col-span-1 lg:col-span-3 lg:block ${showFilters ? 'showFilter' : 'hiddenFilter'}`}>
                        {/* Filter Section */}
                        <div className="contrast-bg contrast-text p-4 py-12 lg:py-0 xl:py-0 bg-white">
                            {/* Gender Filter */}
                            <div className="contrast-bg contrast-text mb-6">
                                <h3 className="contrast-bg contrast-text font-semibold flex justify-between text-lg mb-3">
                                    <p>{t('Gender')}</p>
                                    <button onClick={() => resetFilter('gender')} className="contrast-bg contrast-text text-sm text-iceland_poppy-500">{t('Reset')}</button>
                                </h3>
                                <div className="contrast-bg contrast-text flex gap-4 items-center">
                                    <label className="contrast-bg contrast-text inline-flex items-center">
                                        <input type="radio" className="contrast-bg contrast-text form-radio" name="gender" value="Male" onChange={handleFilterChange} checked={filters.gender === 'Male'} />
                                        <span className="contrast-bg contrast-text text-sm ml-2">{t('All Genders')}</span>
                                    </label>
                                    <label className="contrast-bg contrast-text inline-flex items-center">
                                        <input type="radio" className="contrast-bg contrast-text form-radio" name="gender" value="Female" onChange={handleFilterChange} checked={filters.gender === 'Female'} />
                                        <span className="contrast-bg contrast-text text-sm ml-2">{t('Only females')}</span>
                                    </label>
                                    <label className="contrast-bg contrast-text inline-flex items-center">
                                        <input type="radio" className="contrast-bg contrast-text form-radio" name="gender" value="Others" onChange={handleFilterChange} checked={filters.gender === 'Others'} />
                                        <span className="contrast-bg contrast-text text-sm ml-2">{t('Only others')}</span>
                                    </label>
                                </div>
                            </div>
                            {/* Category Filter */}
                            <div className="contrast-bg contrast-text mb-6">
                                <h3 className="contrast-bg contrast-text font-semibold flex justify-between text-lg mb-3">
                                    <p>{t('Category')}</p>
                                    <button onClick={() => resetFilter('category')} className="contrast-bg contrast-text mt-2 text-sm text-iceland_poppy-500">{t('Reset')}</button>
                                </h3>
                                <select name="category" className="contrast-bg contrast-text form-select block w-full mt-1" onChange={handleFilterChange} value={filters.category}>
                                    <option value="">{t('Select Category')}</option>
                                    <option value="Livelihood">{t('Livelihood')}</option>
                                    <option value="Skills">{t('Skills')}</option>
                                    <option value="Women and Children">{t('Women and Children')}</option>
                                    <option value="Health and Nutrition">{t('Health and Nutrition')}</option>
                                    <option value="Education">{t('Education')}</option>
                                    <option value="Scholarship">{t('Scholarship')}</option>
                                </select>
                            </div>
                            {/* Residence Filter */}
                            <div className="contrast-bg contrast-text mb-6">
                                <h3 className="contrast-bg contrast-text font-semibold flex justify-between text-lg mb-3">
                                    <p>{t('Residence')}</p>
                                    <button onClick={() => resetFilter('residence')} className="contrast-bg contrast-text mt-2 text-sm text-iceland_poppy-500">{t('Reset')}</button>
                                </h3>
                                <select name="residence" className="contrast-bg contrast-text form-select block w-full mt-1" onChange={handleFilterChange} value={filters.residence}>
                                    <option value="">{t('Select Residence')}</option>
                                    <option value="delhi">{t('Delhi')}</option>
                                    <option value="out_of_delhi">{t('Out of Delhi')}</option>
                                </select>
                            </div>

                            {/* Reservation Filter */}
                            <div className="contrast-bg contrast-text mb-6">
                                <h3 className="contrast-bg contrast-text font-semibold flex justify-between text-lg mb-3">
                                    <p>{t('Reservation')}</p>
                                    <button onClick={() => resetFilter('reservation')} className="contrast-bg contrast-text mt-2 text-sm text-iceland_poppy-500">{t('Reset')}</button>
                                </h3>
                                <select name="reservation" className="contrast-bg contrast-text form-select block w-full mt-1" onChange={handleFilterChange} value={filters.reservation}>
                                    <option value="">{t('Select Reservation')}</option>
                                    <option value="SC">{t('category_option_sc')}</option>
                                    <option value="OBC">{t('category_option_obc')}</option>
                                    <option value="ST">{t('category_option_st')}</option>
                                    <option value="General">{t('category_option_general')}</option>
                                    <option value="EBC">{t('category_option_ebc')}</option>
                                    <option value="DNT">{t('category_option_dnt')}</option>
                                    <option value="Minorities">{t('category_option_minorities')}</option>
                                    <option value="Economically Weaker Section (EWS)">{t('category_option_ews')}</option>
                                </select>
                            </div>

                            {/* Disability Filter */}
                            <div className="contrast-bg contrast-text mb-6">
                                <h3 className="contrast-bg contrast-text font-semibold flex justify-between text-lg mb-3">
                                    <p>{t('Disability')}</p>
                                    <button onClick={() => resetFilter('disability')} className="contrast-bg contrast-text text-sm text-iceland_poppy-500">{t('Reset')}</button>
                                </h3>
                                <div className="contrast-bg contrast-text flex gap-4 items-center">
                                    <label className="contrast-bg contrast-text inline-flex items-center">
                                        <input type="radio" className="contrast-bg contrast-text form-radio" name="disability" value="yes" onChange={handleFilterChange} checked={filters.disability === 'yes'} />
                                        <span className="contrast-bg contrast-text ml-2">{t('Yes')}</span>
                                    </label>
                                    <label className="contrast-bg contrast-text inline-flex items-center">
                                        <input type="radio" className="contrast-bg contrast-text form-radio" name="disability" value="no" onChange={handleFilterChange} checked={filters.disability === 'no'} />
                                        <span className="contrast-bg contrast-text ml-2">{t('No')}</span>
                                    </label>
                                </div>
                            </div>

                            <div className="contrast-bg contrast-text mb-6">
                                <h3 className="contrast-bg contrast-text font-semibold flex justify-between text-lg mb-3">
                                    <p>{t('Age')} <span className='ml-2'>{filters.age}</span></p>
                                    <button onClick={() => resetAgeFilter()} className="contrast-bg contrast-text text-sm text-iceland_poppy-500">{t('Reset')}</button>
                                </h3>
                                <input
                                    type="range"
                                    className="contrast-bg contrast-text form-range w-full"
                                    name="age"
                                    min="0"
                                    max="90"
                                    value={filters.age}
                                    onChange={handleFilterChange}
                                />
                            </div>

                            {/* Maximum Family Income Filter */}
                            <div className="contrast-bg contrast-text mb-6">
                                <h3 className="contrast-bg contrast-text font-semibold flex justify-between text-lg mb-3">
                                    <p>{t('Maximum Family Income')}</p>
                                    <button onClick={() => resetFilter('maxFamilyIncome')} className="contrast-bg contrast-text text-sm text-iceland_poppy-500">{t('Reset')}</button>
                                </h3>
                                <input
                                    type="text"
                                    className="contrast-bg contrast-text form-input block w-full mt-1"
                                    name="maxFamilyIncome"
                                    placeholder={t('Enter Maximum Family Income')}
                                    value={filters.maxFamilyIncome}
                                    onChange={handleFilterChange}
                                />
                            </div>

                            {/* Reset All Filters Button */}
                            <div className="contrast-bg contrast-text mt-4">
                                <button onClick={resetAllFilters} className="contrast-bg contrast-text reset-button bg-iceland_poppy-500 hover:bg-iceland_poppy-700 text-white font-bold py-2 px-4 rounded">
                                    {t('Reset All Filters')}
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="contrast-bg contrast-text col-span-1 md:col-span-3 md:col-span-4 xl:col-span-3 lg:col-span-5 xl:ml-12 lg:ml-12">
                        {/* Content area */}
                        <div className="contrast-bg contrast-text mb-6">
                            <div className="contrast-bg contrast-text flex border border-gray-200 rounded-lg overflow-hidden">
                                <input
                                    type="text"
                                    className="contrast-bg contrast-text px-4 py-2 w-full"
                                    placeholder={t('Search...')}
                                    value={searchTerm}
                                    onChange={handleSearchChange}
                                />
                                <button
                                    onClick={handleSearch}
                                    className="contrast-bg contrast-text bg-iceland_poppy-500 text-white px-4 hover:bg-iceland_poppy-600"
                                >
                                    {t('Search')}
                                </button>
                            </div>
                        </div>
                        <div>
                            <div>
                                <p className="contrast-bg contrast-text text-gray-500 mb-4">
                                    {t('Showing {count} schemes')} { schemes?.length || 0 }
                                </p>
                            </div>
                            {schemes == null
                                ? <>
                                    {[1, 2, 3, 4, 5].map((item, index) => (
                                        <div key={index} className="contrast-bg contrast-text max-w-full mx-auto mt-10">
                                            <div className="contrast-bg contrast-text bg-white p-6 rounded-lg shadow-md">
                                                <div className="contrast-bg contrast-text h-4 bg-gray-300 rounded pulse-animation"></div>
                                                <div className="contrast-bg contrast-text mt-4 h-4 bg-gray-300 rounded pulse-animation"></div>
                                                <div className="contrast-bg contrast-text mt-2 h-4 bg-gray-300 rounded pulse-animation"></div>
                                                <div className="contrast-bg contrast-text mt-2 h-4 bg-gray-300 rounded pulse-animation"></div>
                                            </div>
                                        </div>
                                    ))}
                                </>
                                : schemes.map((scheme, index) => (
                                    <a key={index} className='cursor-pointer' href={`/schemes/${scheme.title.replace(/[^a-zA-Z0-9]+/g, '-').toLowerCase()}`}>
                                        <div key={index} className="contrast-bg contrast-text max-w-full mx-auto mt-10">
                                            <div className="contrast-bg contrast-text bg-white p-6 rounded-lg shadow-md">
                                                <h2 className='text-xl font-bold mb-1'>{i18n.language == 'en' ? scheme.title : scheme.title_hindi}</h2>
                                                <p className='mb-4 text-blue-500'>{scheme.residence == null ? t("Applicable for people from both Delhi and Out of Delhi") : t("Applicable for people from Delhi only")}</p>
                                                <p className='mb-4 line-clamp-3 overflow-hidden text-ellipsis text-gray-500'>
                                                    {i18n.language == 'en' ? scheme.benefits : scheme.benefits_hindi}
                                                </p>
                                                <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                                                    {scheme.reservations != null && scheme.reservations[0].name != 'N/A' && scheme.reservations.map((reservation, index) => (
                                                        <div key={index} className='rounded-md bg-iceland_poppy-500 text-white mx-1 my-1 px-2'>
                                                            {reservation.name}
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                ))
                            }
                        </div>
                    </div>
                </div>
                <div className="contrast-bg contrast-text fixed bottom-0 left-0 right-0 bg-white p-4 xl:hidden lg:hidden" style={{ zIndex: 9999 }}>
                    <button
                        onClick={toggleFilters}
                        className="contrast-bg contrast-text w-full bg-iceland_poppy-500 text-white py-2 rounded"
                    >
                        {showFilters ? t('Hide Filters') : t('Show Filters')}
                    </button>
                </div>
                {/* Floating Action Button */}
                {showScrollTopButton && (
                    <button
                        onClick={scrollToTop}
                        style={{ position: 'fixed', right: '40px', zIndex: 1000 }}
                        className="contrast-bg contrast-text bg-iceland_poppy-500 bottom-[90px] lg:bottom-[40px] xl:bottom-[40px] md:bottom-[90px] hover:bg-iceland_poppy-700 text-white font-bold py-2 px-4 rounded-full shadow-md"
                    >
                        {t('Go to Top')}
                    </button>
                )}

            </div>
        </>
    );
}

export default SearchPage;
