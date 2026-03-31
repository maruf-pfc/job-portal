import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import { assets, JobCategories, JobLocations } from "../assets/assets";
import JobCard from "./JobCard";

const JobListing = () => {
  const { isSearched, searchFilter, setSearchFilter, jobs } =
    useContext(AppContext);

  const [showFilters, setShowFilters] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedLocations, setSelectedLocations] = useState([]);

  const [filteredJobs, setFilteredJobs] = useState(jobs);

  const handleCategoryChange = (category) => {
    setSelectedCategories((prev) => 
      prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category]
    )
  }
  const handleLocationChange = (location) => {
    setSelectedLocations((prev) => 
      prev.includes(location) ? prev.filter((c) => c !== location) : [...prev, location]
    )
  }

  useEffect(() => {
    const matchesTitle = job => searchFilter.title === "" || job.title.toLowerCase().includes(searchFilter.title.toLowerCase());
    const matchesLocationSearch = job => searchFilter.location === "" || job.location.toLowerCase().includes(searchFilter.location.toLowerCase());
    const matchesCategory = job => selectedCategories.length === 0 || selectedCategories.includes(job.category);
    const matchesLocation = job => selectedLocations.length === 0 || selectedLocations.includes(job.location);

    const newFilteredJobs = jobs.slice().filter(job => matchesCategory(job) && matchesLocation(job) && matchesTitle(job) && matchesLocationSearch(job));

    setFilteredJobs(newFilteredJobs);
    setCurrentPage(1); // Reset to first page on filter change
  }, [searchFilter, selectedCategories, selectedLocations, jobs]);

  return (
    <div className="min-h-screen bg-gray-50" id="job-list">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Sidebar */}
          <div className="w-full lg:w-1/4">
            <div className="bg-white rounded-xl shadow-sm p-6 sticky top-20 space-y-6">
              {/* Search Filter from Hero Component */}
              {isSearched &&
                (searchFilter.title !== "" || searchFilter.location !== "") && (
                  <div className="pb-6 border-b border-gray-200">
                    <h3 className="font-semibold text-gray-900 text-sm uppercase tracking-wider mb-4">
                      Current Search
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {searchFilter.title && (
                        <span className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-3 py-2 rounded-full text-sm font-medium">
                          {searchFilter.title}
                          <img
                            src={assets.cross_icon}
                            alt="Remove"
                            className="w-4 h-4 cursor-pointer hover:opacity-70 transition-opacity"
                            onClick={(e) =>
                              setSearchFilter({ ...searchFilter, title: "" })
                            }
                          />
                        </span>
                      )}
                      {searchFilter.location && (
                        <span className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-3 py-2 rounded-full text-sm font-medium">
                          {searchFilter.location}
                          <img
                            src={assets.cross_icon}
                            alt="Remove"
                            className="w-4 h-4 cursor-pointer hover:opacity-70 transition-opacity"
                            onClick={(e) =>
                              setSearchFilter({ ...searchFilter, location: "" })
                            }
                          />
                        </span>
                      )}
                    </div>
                  </div>
                )}

              <button
                onClick={() => setShowFilters(!showFilters)}
                className="lg:hidden bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
              >
                {showFilters ? "Close" : "Filter Jobs"}
              </button>

              <div
                className={`${showFilters ? "block" : "hidden"} lg:block space-y-6`}
              >
                {/* Filter by Category */}
                <div className="pb-6 border-b border-gray-200">
                  <h4 className="font-semibold text-gray-900 text-sm uppercase tracking-wider mb-4">
                    Category
                  </h4>
                  <ul className="space-y-3">
                    {JobCategories.map((category, index) => {
                      return (
                        <li key={index} className="flex items-center gap-3">
                          <input
                            type="checkbox"
                            name={category}
                            id={category}
                            onChange={() => handleCategoryChange(category)}
                            checked = {selectedCategories.includes(category)}
                            className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 cursor-pointer"
                          />
                          <label
                            htmlFor={category}
                            className="text-gray-700 cursor-pointer hover:text-gray-900 transition-colors"
                          >
                            {category}
                          </label>
                        </li>
                      );
                    })}
                  </ul>
                </div>

                {/* Filter by Location */}
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm uppercase tracking-wider mb-4">
                    Location
                  </h4>
                  <ul className="space-y-3">
                    {JobLocations.map((location, index) => {
                      return (
                        <li key={index} className="flex items-center gap-3">
                          <input
                            type="checkbox"
                            name={location}
                            id={location}
                            onChange={() => handleLocationChange(location)}
                            checked = {selectedLocations.includes(location)}
                            className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 cursor-pointer"
                          />
                          <label
                            htmlFor={location}
                            className="text-gray-700 cursor-pointer hover:text-gray-900 transition-colors"
                          >
                            {location}
                          </label>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Job Listings */}
          <section className="w-full lg:w-3/4">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Latest Jobs
              </h2>
              <p className="text-gray-600">
                Discover the latest job opportunities available for you
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Job Card */}
              {filteredJobs
                .slice((currentPage - 1) * 6, currentPage * 6)
                .map((job, index) => {
                  return <JobCard key={index} job={job} />;
                })}
            </div>

            {/* Pagination */}
            {filteredJobs.length > 0 && (
              <div className="flex items-center justify-center mt-8 gap-3">
                <button
                  onClick={() => setCurrentPage(Math.max(currentPage - 1, 1))}
                  disabled={currentPage === 1}
                  className="w-10 h-10 flex items-center justify-center rounded-md border border-gray-300 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <img src={assets.left_arrow_icon} alt="Previous" />
                </button>
                {Array.from({ length: Math.ceil(filteredJobs.length / 6) }).map(
                  (_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentPage(index + 1)}
                      className={`w-10 h-10 flex items-center justify-center rounded-md border text-sm font-medium transition-colors
                          ${
                            currentPage === index + 1
                              ? "bg-blue-600 text-white border-blue-600"
                              : "border-gray-300 text-gray-700 hover:bg-gray-100"
                          }
                        `}
                    >
                      {index + 1}
                    </button>
                  ),
                )}
                <button
                  onClick={() =>
                    setCurrentPage(
                      Math.min(currentPage + 1, Math.ceil(filteredJobs.length / 6)),
                    )
                  }
                  disabled={currentPage === Math.ceil(filteredJobs.length / 6)}
                  className="w-10 h-10 flex items-center justify-center rounded-md border border-gray-300 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <img src={assets.right_arrow_icon} alt="Next" />
                </button>
              </div>
            )}
          </section>
        </div>
      </div>
    </div>
  );
};

export default JobListing;
