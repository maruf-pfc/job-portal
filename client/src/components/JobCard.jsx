import React from "react";
import { assets } from "../assets/assets";

const JobCard = ({ job }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col h-full">
      {/* Company Header */}
      <div className="flex items-start gap-3 p-4 md:p-5 border-b border-gray-100">
        <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center shrink-0">
          <img src={assets.company_icon} alt="Company" className="w-6 h-6" />
        </div>
        <h4 className="font-semibold text-gray-900 text-base md:text-lg line-clamp-2">
          {job.title}
        </h4>
      </div>

      {/* Content */}
      <div className="p-4 md:p-5 space-y-3 grow">
        {/* Location and Level */}
        <div className="flex flex-wrap gap-2">
          <span className="inline-flex items-center gap-1 bg-blue-50 text-blue-700 px-2.5 py-1 rounded-full text-xs font-medium">
            <img src={assets.location_icon} alt="" className="w-3 h-3" />
            <span className="hidden sm:inline">{job.location}</span>
          </span>
          <span className="inline-flex items-center gap-1 bg-purple-50 text-purple-700 px-2.5 py-1 rounded-full text-xs font-medium">
            <img src={assets.suitcase_icon} alt="" className="w-3 h-3" />
            <span className="hidden sm:inline">{job.level}</span>
          </span>
        </div>

        {/* Description */}
        <p
          className="text-gray-600 text-xs md:text-sm leading-relaxed line-clamp-2"
          dangerouslySetInnerHTML={{ __html: job.description.slice(0, 150) }}
        ></p>
      </div>

      {/* Footer - Buttons */}
      <div className="flex gap-2 p-4 md:p-5 border-t border-gray-100 bg-gray-50">
        <button className="flex-1 px-3 md:px-4 py-1.5 md:py-2 bg-blue-600 text-white text-sm md:text-base font-semibold rounded-md hover:bg-blue-700 active:bg-blue-800 transition-all duration-200 hover:shadow-md cursor-pointer">
          Apply
        </button>
        <button className="flex-1 px-3 md:px-4 py-1.5 md:py-2 border border-gray-300 text-gray-700 text-sm md:text-base font-semibold rounded-md hover:bg-gray-100 hover:border-gray-400 transition-all duration-200 cursor-pointer">
          More
        </button>
      </div>
    </div>
  );
};

export default JobCard;
