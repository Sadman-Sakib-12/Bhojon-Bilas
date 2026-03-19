import React from 'react';
import { FaFacebook, FaGoogle, FaLinkedin } from 'react-icons/fa';

const LoginPage = () => {
  return (
    <div className="min-h-screen bg-[#f3f4f6] flex items-center justify-center p-6 font-sans">
      {/* Main Card Container */}
      <div className="bg-white rounded-[2rem] shadow-2xl flex flex-col md:flex-row max-w-5xl w-full overflow-hidden border border-gray-100">

        {/* Left Side - Image Section */}
        <div className="md:w-3/5 relative h-64 md:h-[550px]">
          <img
            src="https://i.ibb.co.com/Qygjn7g/Screenshot-1.png"
            alt="Burger with fries"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        {/* Right Side - Form Section */}
        <div className="md:w-2/5 p-10 bg-white flex flex-col justify-center">
          <div className="w-full">

            {/* Logo */}
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="bg-[#f27d21] p-1 rounded-md">
                <div className="w-5 h-3 bg-white rounded-sm"></div>
              </div>
              <h1 className="text-xl font-bold text-[#f27d21]">BhojonBilas.</h1>
            </div>

            {/* Title */}
            <h2 className="text-center text-lg font-black text-gray-900">Create an Account</h2>
            <div className="flex items-center justify-center gap-2 mt-1 mb-6">
              <div className="h-[1px] w-8 bg-gray-200"></div>
              <span className="text-[10px] font-bold text-gray-400 uppercase">Sign Up</span>
              <div className="h-[1px] w-8 bg-gray-200"></div>
            </div>

            {/* Form */}
            <form className="space-y-4">
              <div>
                <label className="text-[10px] font-bold text-gray-500 mb-1 block">Email Address</label>
                <input
                  type="email"
                  placeholder="demo@example.com"
                  className="w-full px-4 py-2 bg-white border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-orange-500"
                />
              </div>

              <div>
                <label className="text-[10px] font-bold text-gray-500 mb-1 block">Password</label>
                <input
                  type="password"
                  placeholder="******"
                  className="w-full px-4 py-2 bg-white border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-orange-500"
                />
              </div>

              <div className="flex items-center gap-2">
                <input type="checkbox" className="w-3 h-3 border-gray-300 rounded accent-[#f27d21]" />
                <span className="text-[11px] font-medium text-gray-400">Remember my preference</span>
              </div>

              <button className="w-full bg-[#f27d21] text-white font-bold py-2.5 rounded-md text-xs shadow-md hover:bg-orange-600 transition-colors">
                Sign Me In
              </button>
            </form>

            {/* Social Login */}
            <div className="mt-6 text-center">
              <div className="flex items-center justify-center gap-2 mb-4">
                <div className="h-[1px] flex-grow bg-gray-100"></div>
                <span className="text-[10px] text-gray-400">Continue With</span>
                <div className="h-[1px] flex-grow bg-gray-100"></div>
              </div>



              <button className="flex items-center justify-center gap-2 px-3 py-2 w-full border border-orange-600 rounded-md text-[12px] font-medium text-gray-600 hover:bg-orange-50 transition-all outline-none focus:ring-2 focus:ring-orange-100">
                <FaGoogle className="text-red-500 text-sm" />
                <span>Google</span>
              </button>



              <p className="mt-6 text-[11px] text-gray-400">
                Don't have an account? <span className="text-orange-500 font-bold cursor-pointer hover:underline">Sign up</span>
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;