import React from 'react';
import { FaGoogle, FaFacebook, FaLinkedin, FaCamera } from 'react-icons/fa';

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-[#f3f4f6] flex items-center justify-center p-4 md:p-8 font-sans">
      {/* Main Card Container */}
      <div className="bg-white rounded-[2.5rem] shadow-2xl flex flex-col md:flex-row max-w-5xl w-full overflow-hidden border border-gray-100">
        
        {/* Left Side - Design/Image Section */}
        <div className="md:w-[40%] relative hidden md:block overflow-hidden bg-orange-600">
          <img 
            src="https://i.ibb.co.com/Qygjn7g/Screenshot-1.png" 
            alt="Register Banner" 
            className="absolute inset-0 w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-orange-900/60 to-transparent flex flex-col justify-end p-10 text-white">
            <h2 className="text-3xl font-black mb-2">Join BhojonBilas.</h2>
            <p className="text-sm font-medium opacity-90">Create an account to discover the best foods around you.</p>
          </div>
        </div>

        {/* Right Side - Register Form */}
        <div className="md:w-[60%] p-8 md:p-12 bg-white overflow-y-auto max-h-[90vh]">
          <div className="max-w-md mx-auto w-full">
            
            {/* Logo & Header */}
            <div className="text-center mb-8">
              <div className="flex items-center justify-center gap-2 mb-2">
                <div className="bg-[#f27d21] p-1 rounded-md">
                   <div className="w-5 h-3 bg-white rounded-sm"></div>
                </div>
                <h1 className="text-xl font-bold text-[#f27d21]">BhojonBilas.</h1>
              </div>
              <h2 className="text-2xl font-black text-gray-900">Create Account</h2>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mt-1">Sign Up</p>
            </div>

            <form className="space-y-4">
              {/* Profile Image Upload (Optional) */}
              <div className="flex flex-col items-center mb-6">
                <div className="relative w-20 h-20 bg-gray-100 rounded-full border-2 border-dashed border-gray-300 flex items-center justify-center cursor-pointer hover:border-orange-500 transition-colors">
                  <FaCamera className="text-gray-400 text-xl" />
                  <input type="file" className="absolute inset-0 opacity-0 cursor-pointer" title="Upload Profile Image" />
                </div>
                <span className="text-[10px] font-bold text-gray-400 mt-2 uppercase">Profile Image (Optional)</span>
              </div>

              {/* Full Name & Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-[10px] font-bold text-gray-500 mb-1 block">Full Name <span className="text-red-500">*</span></label>
                  <input required type="text" placeholder="John Doe" className="w-full px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm focus:ring-1 focus:ring-orange-500 outline-none" />
                </div>
                <div>
                  <label className="text-[10px] font-bold text-gray-500 mb-1 block">Email Address <span className="text-red-500">*</span></label>
                  <input required type="email" placeholder="demo@example.com" className="w-full px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm focus:ring-1 focus:ring-orange-500 outline-none" />
                </div>
              </div>

              {/* Phone & Address */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-[10px] font-bold text-gray-500 mb-1 block">Phone Number <span className="text-red-500">*</span></label>
                  <input required type="tel" placeholder="+880 1XXX-XXXXXX" className="w-full px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm focus:ring-1 focus:ring-orange-500 outline-none" />
                </div>
                <div>
                  <label className="text-[10px] font-bold text-gray-500 mb-1 block">Address <span className="text-red-500">*</span></label>
                  <input required type="text" placeholder="Dhaka, Bangladesh" className="w-full px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm focus:ring-1 focus:ring-orange-500 outline-none" />
                </div>
              </div>

              {/* Passwords */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-[10px] font-bold text-gray-500 mb-1 block">Password <span className="text-red-500">*</span></label>
                  <input required type="password" placeholder="******" className="w-full px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm focus:ring-1 focus:ring-orange-500 outline-none" />
                </div>
                <div>
                  <label className="text-[10px] font-bold text-gray-500 mb-1 block">Confirm Password <span className="text-red-500">*</span></label>
                  <input required type="password" placeholder="******" className="w-full px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm focus:ring-1 focus:ring-orange-500 outline-none" />
                </div>
              </div>

              {/* Submit Button */}
              <button type="submit" className="w-full bg-[#f27d21] text-white font-black py-3 rounded-xl shadow-lg shadow-orange-100 hover:bg-orange-600 transition-all mt-4 text-xs uppercase tracking-widest">
                Create Account
              </button>
            </form>

            {/* Social Divider */}
            <div className="relative flex items-center justify-center my-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-100"></div>
              </div>
              <span className="relative px-4 bg-white text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                Or Register With
              </span>
            </div>

            {/* Social Buttons */}
            <div className="flex flex-col gap-3">
              <button type="button" className="flex items-center justify-center gap-2 px-3 py-2 w-full border border-orange-600 rounded-md text-[11px] font-medium text-gray-600 hover:bg-orange-50 transition-all">
                <FaGoogle className="text-red-500 text-sm" /> Google
              </button>
            </div>

            <p className="mt-8 text-center text-[11px] text-gray-400 font-bold">
              Already have an account? <span className="text-orange-500 cursor-pointer hover:underline uppercase">Login</span>
            </p>

          </div>
        </div>
      </div>
    </div>
  );
}