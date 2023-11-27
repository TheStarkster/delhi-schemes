"use client"
import React, { useEffect, useState } from 'react';

const SearchPage = (props) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [schemes, setSchemes] = useState([]);
    const [loading, setLoading] = useState(true);

    // Function to fetch data
    const fetchData = async () => {
        try {
            const response = await fetch('http://20.193.132.230:3000/schemes');
            const data = await response.json();
            setSchemes(data);
            setLoading(false)
        } catch (error) {
            console.error("Error fetching data: ", error);
            // setLoading(false)
        }
    };

    // useEffect to call fetchData on component mount
    useEffect(() => {
        fetchData();
    }, []);

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleSearch = () => {
        // Implement search functionality here
        console.log('Searching for:', searchTerm);
    };

    const [filters, setFilters] = useState({
        gender: '',
        category: '',
        residence: '',
        disability: '',
    });

    const handleFilterChange = (e) => {
        setFilters({ ...filters, [e.target.name]: e.target.value });
    };

    const resetFilter = (filterName) => {
        setFilters({ ...filters, [filterName]: '' });
    };

    const resetAllFilters = () => {
        setFilters({
            gender: '',
            category: '',
            residence: '',
            disability: '',
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
                                    <input type="radio" className="form-radio" name="gender" value="male" onChange={handleFilterChange} checked={filters.gender === 'male'} />
                                    <span className="ml-2">Male</span>
                                </label>
                                <label className="inline-flex items-center">
                                    <input type="radio" className="form-radio" name="gender" value="female" onChange={handleFilterChange} checked={filters.gender === 'female'} />
                                    <span className="ml-2">Female</span>
                                </label>
                                <label className="inline-flex items-center">
                                    <input type="radio" className="form-radio" name="gender" value="others" onChange={handleFilterChange} checked={filters.gender === 'others'} />
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
                                <option value="livelihood">Livelihood</option>
                                <option value="skills">Skills</option>
                                <option value="women_children">Women and Children</option>
                                <option value="health_nutrition">Health and Nutrition</option>
                                <option value="education">Education</option>
                                <option value="scholarship">Scholarship</option>
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
                                <div key={index} className="max-w-full mx-auto mt-10">
                                    <div className="bg-white p-6 rounded-lg shadow-md">
                                        <h2 className='text-xl font-bold mb-2'>{scheme.title}</h2>
                                        <p className='mb-4 text-blue-500'>{scheme.residence == "Out of Delhi" ? "Applicable for people from both Delhi and Out of Delhi" : "Applicable for people from Delhi only"}</p>
                                        <p className='mb-4 line-clamp-3 overflow-hidden text-ellipsis'>
                                            {scheme.benefits}
                                        </p>
                                        <div style={{ display: 'flex' }}>
                                        {scheme.reservations != null && scheme.reservations[0].name != 'N/A' && scheme.reservations.map((reservation, index) => (<div className='rounded-md bg-iceland_poppy-500 text-white mx-1 px-2'>{reservation.name}</div>))}
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SearchPage;
