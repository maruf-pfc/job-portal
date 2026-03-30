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

          {/* Auth / Profile (ALWAYS visible, responsive wrap) */}
          <div className="flex gap-2 sm:gap-3 items-center flex-wrap justify-end">
            <Show when="signed-out">
              <button className="px-3 sm:px-5 py-2 text-gray-700 text-sm sm:text-base font-semibold border border-gray-300 rounded-lg hover:bg-gray-100 hover:border-gray-400 transition-all duration-200 hover:shadow-sm">
                Recruiter Login
              </button>

              <SignInButton mode="modal">
                <button className="px-3 sm:px-5 py-2 text-gray-700 text-sm sm:text-base font-semibold border border-gray-300 rounded-lg hover:bg-gray-100 hover:border-gray-400 transition-all duration-200 hover:shadow-sm">
                  Sign In
                </button>
              </SignInButton>

              <SignUpButton mode="modal">
                <button className="px-3 sm:px-5 py-2 bg-blue-600 text-white text-sm sm:text-base font-semibold rounded-lg hover:bg-blue-700 active:bg-blue-800 transition-all duration-200 hover:shadow-md">
                  Sign Up
                </button>
              </SignUpButton>
            </Show>

            <Show when="signed-in">
              <div className="flex items-center gap-2 sm:gap-4 pl-2 sm:pl-4 border-l border-gray-200">
                <div className="text-right hidden sm:block pr-2 sm:pr-4 border-r border-gray-200">
                  <p className="text-sm font-semibold text-gray-800">
                    {user?.firstName} {user?.lastName}
                  </p>
                </div>

                <UserButton />
              </div>
            </Show>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
