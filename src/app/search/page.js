"use client"
import React, { useEffect, useState } from 'react';

const SearchPage = (props) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [schemes, setSchemes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showScrollTopButton, setShowScrollTopButton] = useState(false);

    // Function to scroll to the top of the page
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // Function to toggle the visibility of the scroll-to-top button
    const checkScrollTop = () => {
        if (!showScrollTopButton && window.pageYOffset > 400){
            setShowScrollTopButton(true);
        } else if (showScrollTopButton && window.pageYOffset <= 400){
            setShowScrollTopButton(false);
        }
    };

    // Adding scroll event listener
    useEffect(() => {
        window.addEventListener('scroll', checkScrollTop);
        return () => {
            window.removeEventListener('scroll', checkScrollTop);
        };
    }, [showScrollTopButton]);

    const [filters, setFilters] = useState({
        gender: '',
        category: '',
        residence: '',
        disability: '',
        age: 0,
        reservation: '',
        maxFamilyIncome: '',
    });

    // Function to fetch data with filters and search term
    const fetchData = async () => {
        setLoading(true);
        try {
            const response = await fetch('http://20.193.132.230:3000/schemes/get_schemes', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ searchTerm, filters })
            });
            const data = await response.json();
            setSchemes(data);
        } catch (error) {
            console.error("Error fetching data: ", error);
        }
        setLoading(false);
    };

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

    return (
        <div className="container mx-auto my-20 px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="col-span-1">
                    {/* Filter Section */}
                    <div className="p-4 bg-white">
                        {/* Gender Filter */}
                        <div className="mb-6">
                            <h3 className="font-semibold flex justify-between text-lg mb-3"><p>Gender</p><button onClick={() => resetFilter('gender')} className="text-sm text-iceland_poppy-500">Reset</button></h3>
                            <div className="flex gap-4 items-center">
                                <label className="inline-flex items-center">
                                    <input type="radio" className="form-radio" name="gender" value="Male" onChange={handleFilterChange} checked={filters.gender === 'Male'} />
                                    <span className="ml-2">Male</span>
                                </label>
                                <label className="inline-flex items-center">
                                    <input type="radio" className="form-radio" name="gender" value="Female" onChange={handleFilterChange} checked={filters.gender === 'Female'} />
                                    <span className="ml-2">Female</span>
                                </label>
                                <label className="inline-flex items-center">
                                    <input type="radio" className="form-radio" name="gender" value="Others" onChange={handleFilterChange} checked={filters.gender === 'Others'} />
                                    <span className="ml-2">Others</span>
                                </label>

                            </div>
                        </div>

                        {/* Category Filter */}
                        <div className="mb-6">
                            <h3 className="font-semibold flex justify-between text-lg mb-3">
                                <p>Category</p>
                                <button onClick={() => resetFilter('category')} className="mt-2 text-sm text-iceland_poppy-500">Reset</button>
                            </h3>
                            <select name="category" className="form-select block w-full mt-1" onChange={handleFilterChange} value={filters.category}>
                                <option value="">Select Category</option>
                                <option value="Livelihood">Livelihood</option>
                                <option value="Skills">Skills</option>
                                <option value="Women and Children">Women and Children</option>
                                <option value="Health and Nutrition">Health and Nutrition</option>
                                <option value="Education">Education</option>
                                <option value="Scholarship">Scholarship</option>
                            </select>
                        </div>

                        {/* Residence Filter */}
                        <div className="mb-6">
                            <h3 className="font-semibold flex justify-between text-lg mb-3">
                                <p>Residence</p>
                                <button onClick={() => resetFilter('residence')} className="mt-2 text-sm text-iceland_poppy-500">Reset</button>
                            </h3>
                            <select name="residence" className="form-select block w-full mt-1" onChange={handleFilterChange} value={filters.residence}>
                                <option value="">Select Residence</option>
                                <option value="delhi">Delhi</option>
                                <option value="out_of_delhi">Out of Delhi</option>
                            </select>
                        </div>

                        {/* Reservation Filter */}
                        <div className="mb-6">
                            <h3 className="font-semibold flex justify-between text-lg mb-3">
                                <p>Reservation</p>
                                <button onClick={() => resetFilter('reservation')} className="mt-2 text-sm text-iceland_poppy-500">Reset</button>
                            </h3>
                            <select name="reservation" className="form-select block w-full mt-1" onChange={handleFilterChange} value={filters.reservation}>
                                <option value="">Select Reservation</option>
                                <option value="SC">SC</option>
                                <option value="OBC">OBC</option>
                                <option value="ST">ST</option>
                                <option value="General">General</option>
                                <option value="EBC">EBC</option>
                                <option value="NT">NT</option>
                                <option value="DNT">DNT</option>
                                <option value="Minorities">Minorities</option>
                                <option value="Economically Weaker Section (EWS)">Economically Weaker Section (EWS)</option>
                            </select>
                        </div>

                        {/* Disability Filter */}
                        <div className="mb-6">
                            <h3 className="font-semibold flex justify-between text-lg mb-3">
                                <p>Disability</p>
                                <button onClick={() => resetFilter('disability')} className="text-sm text-iceland_poppy-500">Reset</button>
                            </h3>
                            <div className="flex gap-4 items-center">
                                <label className="inline-flex items-center">
                                    <input type="radio" className="form-radio" name="disability" value="yes" onChange={handleFilterChange} checked={filters.disability === 'yes'} />
                                    <span className="ml-2">Yes</span>
                                </label>
                                <label className="inline-flex items-center">
                                    <input type="radio" className="form-radio" name="disability" value="no" onChange={handleFilterChange} checked={filters.disability === 'no'} />
                                    <span className="ml-2">No</span>
                                </label>
                            </div>
                        </div>

                        <div className="mb-6">
                            <h3 className="font-semibold flex justify-between text-lg mb-3">
                                <p>Age <span className='ml-2'>{filters.age}</span></p>
                                <button onClick={() => resetAgeFilter()} className="text-sm text-iceland_poppy-500">Reset</button>
                            </h3>
                            <input
                                type="range"
                                className="form-range w-full"
                                name="age"
                                min="0"
                                max="90"
                                value={filters.age}
                                onChange={handleFilterChange}
                            />
                        </div>

                        {/* Maximum Family Income Filter */}
                        <div className="mb-6">
                            <h3 className="font-semibold flex justify-between text-lg mb-3">
                                <p>Maximum Family Income</p>
                                <button onClick={() => resetFilter('maxFamilyIncome')} className="text-sm text-iceland_poppy-500">Reset</button>
                            </h3>
                            <input
                                type="text"
                                className="form-input block w-full mt-1"
                                name="maxFamilyIncome"
                                placeholder="Enter Maximum Family Income"
                                value={filters.maxFamilyIncome}
                                onChange={handleFilterChange}
                            />
                        </div>

                        {/* Reset All Filters Button */}
                        <div className="mt-4">
                            <button onClick={resetAllFilters} className="bg-iceland_poppy-500 hover:bg-iceland_poppy-700 text-white font-bold py-2 px-4 rounded">
                                Reset All Filters
                            </button>
                        </div>
                    </div>
                </div>
                <div className="md:col-span-3 ml-12">
                    {/* Content area */}
                    <div className="mb-6">
                        <div className="flex border border-gray-200 rounded-lg overflow-hidden">
                            <input
                                type="text"
                                className="px-4 py-2 w-full"
                                placeholder="Search..."
                                value={searchTerm}
                                onChange={handleSearchChange}
                            />
                            <button
                                onClick={handleSearch}
                                className="bg-iceland_poppy-500 text-white px-4 hover:bg-iceland_poppy-600"
                            >
                                Search
                            </button>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p className="text-gray-500 mb-4">
                                Showing {schemes.length} schemes
                            </p>
                        </div>
                        {loading
                            ? <>
                                {[1, 2, 3, 4, 5].map((item, index) => (<div key={index} className="max-w-full mx-auto mt-10">
                                    <div className="bg-white p-6 rounded-lg shadow-md">
                                        <div className="h-4 bg-gray-300 rounded pulse-animation"></div>
                                        <div className="mt-4 h-4 bg-gray-300 rounded pulse-animation"></div>
                                        <div className="mt-2 h-4 bg-gray-300 rounded pulse-animation"></div>
                                        <div className="mt-2 h-4 bg-gray-300 rounded pulse-animation"></div>
                                    </div>
                                </div>))}
                            </>
                            : schemes.map((scheme, index) => (
                                <a className='cursor-pointer' href={`http://localhost:3000/schemes/${scheme.title.replace(/[^a-zA-Z0-9]+/g, '-').toLowerCase()}`}>
                                    <div key={index} className="max-w-full mx-auto mt-10">
                                    <div className="bg-white p-6 rounded-lg shadow-md">
                                        <h2 className='text-xl font-bold mb-1'>{scheme.title}</h2>
                                        <p className='mb-4 text-blue-500'>{scheme.residence == null ? "Applicable for people from both Delhi and Out of Delhi" : "Applicable for people from Delhi only"}</p>
                                        <p className='mb-4 line-clamp-3 overflow-hidden text-ellipsis text-gray-500'>
                                            {scheme.benefits}
                                        </p>
                                        <div style={{ display: 'flex' }}>
                                            {scheme.reservations != null && scheme.reservations[0].name != 'N/A' && scheme.reservations.map((reservation, index) => (<div className='rounded-md bg-iceland_poppy-500 text-white mx-1 px-2'>{reservation.name}</div>))}
                                        </div>
                                    </div>
                                </div>
                                </a>
                            ))
                        }
                    </div>
                </div>
            </div>
            {/* Floating Action Button */}
            {showScrollTopButton && (
                <button
                    onClick={scrollToTop}
                    style={{ position: 'fixed', bottom: '40px', right: '40px', zIndex: 1000 }}
                    className="bg-iceland_poppy-500 hover:bg-iceland_poppy-700 text-white font-bold py-2 px-4 rounded-full shadow-md"
                >
                    Go to Top
                </button>
            )}
        </div>
    );
}

export default SearchPage;
