import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { assets } from "../assets/assets";
import Loading from "../components/Loading";
import Navbar from "../components/Navbar";
import { mms } from "../algorithm/mms";

const ApplyJob = ({}) => {
  const { id } = useParams();

  const [jobData, setJobData] = useState(null);
  const { jobs } = useContext(AppContext);
  const fetchJobData = async () => {
    const data = jobs.filter((job) => job._id === id);

    if (data.length !== 0) {
      setJobData(data[0]);
      console.log(data[0]);
    }
  };

  useEffect(() => {
    if (jobs.length > 0) {
      fetchJobData();
    }
  }, [id, jobs]);

  return jobData ? (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Job Header Card */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
          {/* Header Section */}
          <div className="bg-linear-to-r from-blue-600 to-blue-700 p-6 md:p-10">
            <div className="flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
              {/* Company and Job Info */}
              <div className="flex gap-4 items-start flex-1">
                <img
                  src={jobData.companyId.image}
                  alt={jobData.companyId.name}
                  className="w-16 h-16 md:w-20 md:h-20 rounded-lg object-cover shadow-md"
                />
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                    {jobData.title}
                  </h2>
                  <p className="text-blue-100 font-medium">
                    {jobData.companyId.name}
                  </p>
                </div>
              </div>

              {/* Apply Section */}
              <div className="flex flex-col items-start md:items-end gap-2 w-full md:w-auto">
                <button className="w-full md:w-auto px-8 py-3 bg-white text-blue-600 font-bold rounded-lg hover:bg-blue-50 transition-all duration-200 hover:shadow-lg transform hover:scale-105">
                  Apply Now
                </button>
                <p className="text-blue-100 text-sm">
                  Posted {mms.timeAgo(jobData.date)} ago
                </p>
              </div>
            </div>
          </div>

          {/* Job Details */}
          <div className="p-6 md:p-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Company */}
              <div className="flex items-center gap-3">
                <div className="p-3 bg-blue-100 rounded-lg">
                  <img
                    src={assets.suitcase_icon}
                    alt="Company"
                    className="w-6 h-6"
                  />
                </div>
                <div>
                  <p className="text-gray-600 text-sm">Company</p>
                  <p className="text-gray-900 font-semibold">
                    {jobData.companyId.name}
                  </p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-3">
                <div className="p-3 bg-green-100 rounded-lg">
                  <img
                    src={assets.location_icon}
                    alt="Location"
                    className="w-6 h-6"
                  />
                </div>
                <div>
                  <p className="text-gray-600 text-sm">Location</p>
                  <p className="text-gray-900 font-semibold">
                    {jobData.location}
                  </p>
                </div>
              </div>

              {/* Level */}
              <div className="flex items-center gap-3">
                <div className="p-3 bg-purple-100 rounded-lg">
                  <img
                    src={assets.person_icon}
                    alt="Level"
                    className="w-6 h-6"
                  />
                </div>
                <div>
                  <p className="text-gray-600 text-sm">Experience</p>
                  <p className="text-gray-900 font-semibold">
                    {jobData.level.split(" ")[0]}
                  </p>
                </div>
              </div>

              {/* Salary */}
              <div className="flex items-center gap-3">
                <div className="p-3 bg-yellow-100 rounded-lg">
                  <img
                    src={assets.money_icon}
                    alt="Salary"
                    className="w-6 h-6"
                  />
                </div>
                <div>
                  <p className="text-gray-600 text-sm">Salary</p>
                  <p className="text-gray-900 font-semibold">
                    {mms.convertMoney(jobData.salary)}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default ApplyJob;
