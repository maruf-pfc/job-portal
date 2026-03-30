import React, { useState, useContext, useRef } from "react";
import { assets } from "../assets/assets";
import { AppContext } from "../context/AppContext";

const Hero = () => {
  const {setSearchFilter, setIsSearched } = useContext(AppContext);

  const titleRef = useRef(null);
  const locationRef = useRef(null);

  const handleSearch = () => {
    setSearchFilter({
      title: titleRef.current.value,
      location: locationRef.current.value,
    });
    setIsSearched(true);
    // console.log("Search Filter Updated:", {
    //   title: titleRef.current.value,
    //   location: locationRef.current.value,
    // })
  }

  return (
    <section className="bg-linear-to-b from-blue-50 to-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-6 mb-12">
          {/* Heading */}
          <div className="space-y-3">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
              Over 10,000 <span className="text-blue-600">Jobs</span> Available
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Your Next Career Move Starts Here - Find Your Dream Job Today!
            </p>
          </div>

          {/* Search Bar */}
          <div className="pt-8">
            <div className="bg-white rounded-xl shadow-lg p-4 md:p-6 max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                {/* Job Search Input */}
                <div className="flex items-center gap-3 border border-gray-300 rounded-lg px-4 py-3 focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-transparent transition-all">
                  <img
                    src={assets.search_icon}
                    alt="Search"
                    className="w-5 h-5 text-gray-400 shrink-0"
                  />
                  <input
                    type="text"
                    placeholder="Job title or keyword..."
                    className="flex-1 outline-none text-gray-700 placeholder-gray-400 bg-transparent"
                    ref={titleRef}
                  />
                </div>

                {/* Location Search Input */}
                <div className="flex items-center gap-3 border border-gray-300 rounded-lg px-4 py-3 focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-transparent transition-all">
                  <img
                    src={assets.location_icon}
                    alt="Location"
                    className="w-5 h-5 text-gray-400 shrink-0"
                  />
                  <input
                    type="text"
                    placeholder="City or location..."
                    className="flex-1 outline-none text-gray-700 placeholder-gray-400 bg-transparent"
                    ref={locationRef}
                  />
                </div>

                {/* Search Button */}
                <button
                  onClick={handleSearch}
                  className="bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 active:bg-blue-800 transition-all duration-200 hover:shadow-md py-3 px-6 cursor-pointer"
                >
                  Search Jobs
                </button>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 pt-8">
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-blue-600">
                10,000+
              </p>
              <p className="text-gray-600 text-sm md:text-base">Active Jobs</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-blue-600">
                5,000+
              </p>
              <p className="text-gray-600 text-sm md:text-base">Companies</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-blue-600">
                50,000+
              </p>
              <p className="text-gray-600 text-sm md:text-base">Candidates</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-blue-600">
                98%
              </p>
              <p className="text-gray-600 text-sm md:text-base">Success Rate</p>
            </div>
          </div>

          {/* Trusted by */}
          <div className="pt-12 md:pt-16">
            <div className="text-center mb-8">
              <p className="text-gray-600 text-sm md:text-base font-medium uppercase tracking-wider">
                Trusted By
              </p>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mt-2">
                Leading Companies Worldwide
              </h3>
            </div>

            {/* Company Logos Grid */}
            <div className="bg-gray-50 rounded-xl py-8 md:py-12 px-4">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-6xl mx-auto items-center justify-center">
                <div className="flex justify-center">
                  <img
                    src={assets.microsoft_logo}
                    alt="Microsoft"
                    className="h-12 w-auto"
                  />
                </div>

                <div className="flex justify-center">
                  <img
                    src={assets.walmart_logo}
                    alt="Walmart"
                    className="h-12 w-auto"
                  />
                </div>

                <div className="flex justify-center">
                  <img
                    src={assets.accenture_logo}
                    alt="Accenture"
                    className="h-12 w-auto"
                  />
                </div>

                <div className="flex justify-center">
                  <img
                    src={assets.samsung_logo}
                    alt="Samsung"
                    className="h-12 w-auto"
                  />
                </div>

                <div className="flex justify-center">
                  <img
                    src={assets.adobe_logo}
                    alt="Adobe"
                    className="h-12 w-auto"
                  />
                </div>

                <div className="flex justify-center">
                  <img
                    src={assets.amazon_logo}
                    alt="Amazon"
                    className="h-12 w-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
