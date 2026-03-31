import React from "react";
import { assets } from "../assets/assets";

const AppDownload = () => {
  return (
    <section className="bg-linear-to-r from-blue-600 to-blue-700 py-16 md:py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 md:mb-8 leading-tight">
              Download Our Mobile App For Better Experience
            </h2>
            <p className="text-blue-50 text-base md:text-lg mb-8 max-w-md mx-auto lg:mx-0">
              Get instant job notifications, easy application tracking, and
              exclusive mobile-only features right at your fingertips.
            </p>

            {/* Download Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#"
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-all duration-200 hover:shadow-lg transform hover:scale-105"
              >
                <img
                  src={assets.play_store}
                  alt="Download on Google Play"
                  className="h-6"
                />
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-all duration-200 hover:shadow-lg transform hover:scale-105"
              >
                <img
                  src={assets.app_store}
                  alt="Download on App Store"
                  className="h-6"
                />
              </a>
            </div>

            {/* Benefits */}
            <div className="mt-10 md:mt-12 grid grid-cols-3 md:grid-cols-3 gap-6 md:gap-8 text-blue-50">
              <div className="text-center">
                <p className="text-2xl md:text-3xl font-bold">100K+</p>
                <p className="text-xs md:text-sm mt-2">Downloads</p>
              </div>
              <div className="text-center">
                <p className="text-2xl md:text-3xl font-bold">4.8★</p>
                <p className="text-xs md:text-sm mt-2">Rating</p>
              </div>
              <div className="text-center">
                <p className="text-2xl md:text-3xl font-bold">50K+</p>
                <p className="text-xs md:text-sm mt-2">Active Users</p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm md:max-w-md lg:max-w-lg">
              <img
                src={assets.hero_img}
                alt="Mobile App Screenshot"
                className="w-full h-auto rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 rounded-2xl bg-linear-to-t from-blue-900/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppDownload;
