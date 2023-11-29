// pages/AllAssistance.js
"use client"
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { compensationData } from "@/lib/api"; // Replace with your actual data fetching function

export default function AllCompensation() {

    return (
        <>
        <div className="banner relative bg-cover bg-center" style={{ backgroundImage: `url('/compensation.png')`, height: '300px' }}>
            {/* Overlay */}
            <div className="overlay absolute inset-0" style={{ backgroundColor: "#072248", opacity: 0.7 }}></div>

            {/* Text over Overlay */}
            <div className="relative z-10 px-12">
                <div className="mx-auto max-w-7xl text-left">
                    <h1 className="text-2xl sm:text-2xl xl:text-4xl lg:text-4xl md:text-2xl font-bold text-white mb-4 pt-12">Support and Compensation Schemes in Delhi</h1>
                    <p className="text-white">Discover Delhi's comprehensive compensation initiatives, including programs for child and adolescent labor, bonded labor rehabilitation, and victim assistance, ensuring justice and support for all</p>
                </div>
            </div>
        </div>
            <div className="grid px-12 xl:px-0 lg:px-12 md:px-12 max-w-7xl mx-auto my-12 md:grid-cols-2 lg:grid-cols-1 gap-6">
                {compensationData.map((item, index) => (
                    <div key={index} className="border rounded-lg p-4 hover:shadow-lg transition">
                        <Link href={`/assistance/${encodeURIComponent(item.title.replace(/\s+/g, '-').toLowerCase())}`}>
                            <div className="text-2xl text-blue-600 font-bold hover:underline">{item.title}</div>
                        </Link>
                        <p className="text-gray-600 mt-2">{item.description.substring(0, 200)}...</p> {/* Truncate the description */}
                    </div>
                ))}
            </div>
            <div className="container mx-auto py-10">
                
            </div>

        </>
    );
}
