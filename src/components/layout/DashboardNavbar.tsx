"use client";

import React, { useState } from 'react';
import { Bell, Search, User, Sun, Moon, Command, ChevronDown, Menu, X } from 'lucide-react';
import Link from 'next/link';

const DashboardNavbar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    // এখানে bg-white এবং border-slate-100 ফিক্সড করে দেওয়া হয়েছে
    <nav className="h-16 bg-white border-b border-slate-100 flex items-center justify-between px-4 md:px-6 lg:px-10 sticky top-0 z-30 w-full transition-all">
      
      {/* --- Mobile Search Overlay --- */}
      {isSearchOpen && (
        <div className="absolute inset-0 bg-white z-50 flex items-center px-4 animate-in fade-in slide-in-from-top-2 sm:hidden">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input
              autoFocus
              type="text"
              placeholder="Search..."
              className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2.5 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/20 text-slate-900"
            />
          </div>
          <button 
            onClick={() => setIsSearchOpen(false)}
            className="ml-3 p-2 text-slate-500 hover:bg-slate-100 rounded-full"
          >
            <X size={20} />
          </button>
        </div>
      )}

      {/* --- Left Side: Search --- */}
      <div className="flex items-center gap-3 flex-1">
        <div className="relative group w-full max-w-[320px] hidden sm:block">
          <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
            <Search className="text-slate-400 group-focus-within:text-orange-500 transition-colors" size={16} />
          </div>
          <input
            type="text"
            placeholder="Search..."
            className="w-full bg-slate-50 border border-transparent rounded-xl py-2 pl-10 pr-4 text-sm focus:outline-none focus:bg-white focus:border-slate-200 focus:ring-4 focus:ring-slate-50 transition-all placeholder:text-slate-400 text-slate-900"
          />
          <div className="absolute inset-y-0 right-2 hidden lg:flex items-center pointer-events-none">
            <kbd className="inline-flex items-center gap-1 px-1.5 py-0.5 text-[10px] font-medium text-slate-400 bg-white border border-slate-200 rounded shadow-sm">
              <Command size={10} /> K
            </kbd>
          </div>
        </div>

        <button 
          onClick={() => setIsSearchOpen(true)}
          className="sm:hidden p-2 text-slate-500 hover:bg-slate-50 rounded-full shrink-0"
        >
          <Search size={20} />
        </button>
      </div>

      {/* --- Right Side: Actions --- */}
      <div className="flex items-center gap-1 sm:gap-4">
        
        {/* Theme Toggle Button (এখন এটি শুধু আইকন হিসেবে কাজ করবে, ব্যাকগ্রাউন্ড চেঞ্জ করবে না) */}
        <button className="p-2 text-slate-500 hover:bg-slate-50 rounded-full transition-all">
          <Sun size={20} />
        </button>

        {/* Notifications */}
        <button className="relative p-2 text-slate-500 hover:text-slate-900 hover:bg-slate-50 rounded-full transition-all shrink-0">
          <Bell size={20} />
          <span className="absolute top-2 right-2 w-2 h-2 bg-orange-500 rounded-full ring-2 ring-white"></span>
        </button>

        <div className="h-6 w-[1px] bg-slate-200 hidden md:block mx-1"></div>

        {/* User Profile */}
        <div className="dropdown dropdown-end">
          <div 
            tabIndex={0} 
            role="button" 
            className="flex items-center gap-2 md:gap-3 p-1 rounded-xl hover:bg-slate-50 transition-all group border border-transparent hover:border-slate-100"
          >
            <div className="h-9 w-9 rounded-lg bg-orange-50 flex items-center justify-center text-orange-600 border border-orange-100 overflow-hidden shadow-sm shrink-0 font-bold">
              SA
            </div>
            
            <div className="text-left hidden md:block">
              <h4 className="text-[13px] font-bold text-slate-800 leading-none">Sakib Hasan</h4>
              <p className="text-[10px] text-slate-400 font-bold mt-1 flex items-center gap-1 uppercase tracking-wider">
                Admin <ChevronDown size={10} className="text-slate-300" />
              </p>
            </div>
          </div>

          <ul tabIndex={0} className="dropdown-content z-[40] menu p-2 shadow-2xl bg-white border border-slate-100 rounded-2xl w-56 mt-4 animate-in fade-in slide-in-from-top-2 text-slate-700">
            <div className="px-4 py-3 border-b border-slate-50 mb-1 md:hidden">
               <p className="text-xs font-bold text-slate-800">Sakib Hasan</p>
               <p className="text-[10px] text-slate-400">sakib@fooddash.com</p>
            </div>
            <li><Link href="#" className="text-xs font-medium py-2.5 rounded-lg hover:bg-slate-50">Account Settings</Link></li>
            <li><Link href="#" className="text-xs font-medium py-2.5 rounded-lg hover:bg-slate-50">Team Support</Link></li>
            <div className="divider my-1 opacity-50 before:bg-slate-100 after:bg-slate-100"></div>
            <li><button className="text-xs font-bold py-2.5 rounded-lg text-rose-500 hover:bg-rose-50 w-full text-left font-sans">Log Out</button></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default DashboardNavbar;