import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-1">
            <img src={assets.logo} alt="JobPortal Logo" className="h-10 mb-4 invert" />
            <p className="text-sm text-gray-400 mb-4">
              Connecting talented professionals with their dream jobs across
              Bangladesh.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-blue-400 transition-colors">
                <img
                  src={assets.facebook_icon}
                  alt="Facebook"
                  className="h-6 w-6 invert"
                />
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                <img
                  src={assets.twitter_icon}
                  alt="Twitter"
                  className="h-6 w-6 invert"
                />
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                <img
                  src={assets.instagram_icon}
                  alt="Instagram"
                  className="h-6 w-6 invert"
                />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="/" className="hover:text-blue-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/jobs"
                  className="hover:text-blue-400 transition-colors"
                >
                  Browse Jobs
                </a>
              </li>
              <li>
                <a
                  href="/companies"
                  className="hover:text-blue-400 transition-colors"
                >
                  Companies
                </a>
              </li>
              <li>
                <a
                  href="/applications"
                  className="hover:text-blue-400 transition-colors"
                >
                  My Applications
                </a>
              </li>
            </ul>
          </div>

          {/* For Candidates */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-4">
              For Candidates
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  Browse Jobs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  Career Advice
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  Salary Guide
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  Interview Tips
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-4">Support</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8">
          {/* Bottom Footer */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-400">
              &copy; 2024 JobPortal. All rights reserved.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 text-sm">
              <a href="#" className="hover:text-blue-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
