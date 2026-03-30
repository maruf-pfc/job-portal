import { useState } from "react";
import {
  Show,
  SignInButton,
  SignUpButton,
  UserButton,
  useUser,
} from "@clerk/react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user } = useUser();

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="shrink-0">
            <img
              src={assets.logo}
              alt="Job Portal Logo"
              className="h-8 w-auto"
            />
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex md:gap-3 md:items-center">
            <Show when="signed-out">
              <button className="px-5 py-2 text-gray-700 font-semibold border border-gray-300 rounded-lg hover:bg-gray-100 hover:border-gray-400 transition-all duration-200 hover:shadow-sm">
                Recruiter Login
              </button>
              <SignInButton mode="modal">
                <button className="px-5 py-2 text-gray-700 font-semibold border border-gray-300 rounded-lg hover:bg-gray-100 hover:border-gray-400 transition-all duration-200 hover:shadow-sm">
                  Sign In
                </button>
              </SignInButton>
              <SignUpButton mode="modal">
                <button className="px-5 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 active:bg-blue-800 transition-all duration-200 hover:shadow-md">
                  Sign Up
                </button>
              </SignUpButton>
            </Show>
            <Show when="signed-in">
              <div className="flex items-center gap-4 pl-4 border-l border-gray-200">
                <Link
                  to={"/applications"}
                  className="px-4 py-2 text-gray-700 font-medium hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200"
                >
                  Applied Jobs
                </Link>
                <div className="text-right hidden sm:block pr-4 border-r border-gray-200">
                  <p className="text-sm font-semibold text-gray-800">
                    {user?.firstName} {user?.lastName}
                  </p>
                </div>
                <UserButton />
              </div>
            </Show>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 border-t border-gray-100">
            <div className="flex flex-col gap-3 pt-4 border-t border-gray-100">
              <Show when="signed-out">
                <button className="w-full px-4 py-2 text-gray-700 font-semibold border border-gray-300 rounded-lg hover:bg-gray-100 hover:border-gray-400 transition-all duration-200 hover:shadow-sm">
                  Recruiter Login
                </button>
                <SignInButton mode="modal">
                  <button className="w-full px-4 py-2 text-gray-700 font-semibold border border-gray-300 rounded-lg hover:bg-gray-100 hover:border-gray-400 transition-all duration-200 hover:shadow-sm">
                    Sign In
                  </button>
                </SignInButton>
                <SignUpButton mode="modal">
                  <button className="w-full px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 active:bg-blue-800 transition-all duration-200 hover:shadow-md">
                    Sign Up
                  </button>
                </SignUpButton>
              </Show>
              <Show when="signed-in">
                <Link
                  to={"/applications"}
                  className="w-full px-4 py-2 text-gray-700 font-medium hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200 block text-center"
                >
                  Applied Jobs
                </Link>
                <div className="flex flex-col items-center gap-3 py-4 border-t border-gray-100">
                  <p className="text-sm font-semibold text-gray-800">
                    {user?.firstName} {user?.lastName}
                  </p>
                  <UserButton />
                </div>
              </Show>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
