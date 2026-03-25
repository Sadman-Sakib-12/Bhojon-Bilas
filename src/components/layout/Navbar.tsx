"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  ShoppingCart, User, Search, Menu, Bell, X, 
  Sun, Moon, ClipboardList, Wallet, Settings, 
  LogOut, LayoutDashboard 
} from 'lucide-react';

const Navbar = () => {
  const pathname = usePathname();

  // States
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  
  // Auth Logic (এটিকে false করলে Login/Register বাটন দেখাবে, true করলে Profile দেখাবে)
  const isLoggedIn = true; 
  const cartCount = 3;

  // --- All Navigation Links ---
  const navLinks = [
    { name: 'Browse Food', href: '/restaurants' },
    { name: 'Flash Sales', href: '/offers' },
    { name: 'Orders', href: '/orders' },
    { name: 'Support', href: '/contact' },
  ];

  if (pathname.startsWith('/dashboard')) {
    return null;
  }

  return (
    <>
      <nav className="navbar bg-base-100 shadow-md px-2 md:px-8 sticky top-0 z-50 border-b dark:border-gray-800">
        
        {/* --- LEFT: LOGO & MOBILE MENU TOGGLE --- */}
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <Menu size={24} />
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 border">
              {navLinks.map(link => (
                <li key={link.href}><Link href={link.href}>{link.name}</Link></li>
              ))}
              {!isLoggedIn && (
                <>
                  <div className="divider my-1"></div>
                  <li><Link href="/login" className="font-bold text-orange-600">Login</Link></li>
                  <li><Link href="/register" className="font-bold">Register</Link></li>
                </>
              )}
            </ul>
          </div>
          <Link href="/" className="btn btn-ghost text-xl font-black tracking-tighter text-orange-600">
            BhojonBilash
          </Link>
        </div>

        {/* --- CENTER: DESKTOP LINKS & SEARCH --- */}
        <div className="navbar-center hidden lg:flex items-center gap-4">
          <ul className="menu menu-horizontal px-1 font-bold text-gray-600 dark:text-gray-300">
            {navLinks.map(link => (
              <li key={link.href}><Link href={link.href}>{link.name}</Link></li>
            ))}
          </ul>
          
          {/* Search Bar in Navbar */}
          <div className="relative w-64 ml-4">
            <input 
              type="text" 
              placeholder="Search for food..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="input input-bordered w-full pl-10 h-10 bg-gray-50 focus:bg-white transition-all rounded-xl border-gray-200 focus:outline-orange-500"
            />
            <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
          </div>
        </div>

        {/* --- RIGHT: ACTIONS (DARK MODE, CART, PROFILE/AUTH) --- */}
        <div className="navbar-end gap-1 sm:gap-2">
          
          {/* Dark Mode Toggle */}
          <button 
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="btn btn-ghost btn-circle text-gray-600 dark:text-gray-400"
          >
            {isDarkMode ? <Sun size={22} /> : <Moon size={22} />}
          </button>

          {isLoggedIn ? (
            <>
              {/* Notification Bell */}
              <button className="btn btn-ghost btn-circle hidden sm:flex">
                <div className="indicator">
                  <Bell size={22} />
                  <span className="badge badge-xs badge-primary indicator-item"></span>
                </div>
              </button>

              {/* Shopping Cart */}
              <Link href="/cart" className="btn btn-ghost btn-circle">
                <div className="indicator">
                  <ShoppingCart size={22} />
                  <span className="badge badge-sm bg-orange-600 border-none text-white indicator-item">{cartCount}</span>
                </div>
              </Link>

              {/* Profile Avatar & Dropdown */}
              <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar border-2 border-orange-500 ml-2">
                  <div className="w-10 rounded-full">
                    <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Juma" alt="User" />
                  </div>
                </div>
                <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow-2xl menu menu-sm dropdown-content bg-base-100 rounded-box w-60 border border-gray-100 dark:border-gray-700">
                  <div className="px-4 py-3 mb-2 bg-orange-50 dark:bg-gray-800 rounded-lg">
                    <p className="font-bold text-gray-900 dark:text-white">Juma Islam</p>
                    <p className="text-[10px] text-orange-600 font-bold uppercase tracking-wider">Premium Member</p>
                  </div>
                  
                  {/* Dashboard Option */}
                  <li>
                    <Link href="/dashboard" className="py-2.5 text-orange-600 font-bold flex items-center gap-2">
                      <LayoutDashboard size={18}/> Dashboard
                    </Link>
                  </li>
                  
                  <li><Link href="/profile" className="py-2.5"><User size={18}/> Profile</Link></li>
                  <li><Link href="/orders" className="py-2.5"><ClipboardList size={18}/> My Orders</Link></li>
                  <li><Link href="/wallet" className="py-2.5"><Wallet size={18}/> Wallet (৳450)</Link></li>
                  <li><Link href="/settings" className="py-2.5"><Settings size={18}/> Settings</Link></li>
                  
                  <div className="divider my-1 opacity-50"></div>
                  <li>
                    <button className="text-red-500 font-bold py-2.5 hover:bg-red-50 dark:hover:bg-red-950/30">
                      <LogOut size={18}/> Sign Out
                    </button>
                  </li>
                </ul>
              </div>
            </>
          ) : (
            /* Login & Register Buttons (Shown when logged out) */
            <div className="flex items-center gap-2 ml-2">
              <Link href="/login" className="btn btn-ghost btn-sm hidden md:flex">Login</Link>
              <Link href="/register" className="btn btn-sm bg-orange-600 hover:bg-orange-700 border-none text-white rounded-lg px-5">Join Now</Link>
            </div>
          )}

          {/* Mobile Menu Icon */}
          <button onClick={() => setIsMobileMenuOpen(true)} className="lg:hidden btn btn-ghost btn-circle ml-1">
            <Menu size={26} />
          </button>
        </div>
      </nav>

      {/* --- MOBILE SIDEBAR (DRAWER) --- */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[110] lg:hidden">
           <div className="w-[280px] h-full bg-white dark:bg-gray-900 p-8 flex flex-col animate-in slide-in-from-right duration-300 ml-auto shadow-2xl">
              <div className="flex justify-between items-center mb-10">
                 <span className="font-black text-orange-600 text-xl tracking-tighter">BhojonBilash</span>
                 <button onClick={() => setIsMobileMenuOpen(false)} className="btn btn-sm btn-circle btn-ghost dark:text-white"><X/></button>
              </div>
              
              <div className="flex flex-col gap-5">
                 {/* Mobile Search Input */}
                 <div className="relative">
                    <input 
                      type="text" 
                      placeholder="Search food..." 
                      className="input input-bordered w-full pr-10 rounded-xl bg-gray-50 dark:bg-gray-800" 
                    />
                    <Search className="absolute right-3 top-3 text-gray-400" size={18} />
                 </div>

                 {navLinks.map((link) => (
                    <Link key={link.name} href={link.href} onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-bold text-gray-700 dark:text-gray-200 hover:text-orange-600 transition-colors">
                       {link.name}
                    </Link>
                 ))}

                 {isLoggedIn && (
                   <Link href="/dashboard" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-bold text-orange-600 flex items-center gap-3 mt-2">
                      <LayoutDashboard size={20}/> Dashboard
                   </Link>
                 )}
              </div>

              {/* Bottom Auth Actions for Mobile */}
              <div className="mt-auto">
                {!isLoggedIn ? (
                  <div className="flex flex-col gap-3">
                     <Link href="/login" onClick={() => setIsMobileMenuOpen(false)} className="btn btn-outline btn-block border-gray-300">Login</Link>
                     <Link href="/register" onClick={() => setIsMobileMenuOpen(false)} className="btn btn-block bg-orange-600 border-none text-white">Register</Link>
                  </div>
                ) : (
                  <button className="btn btn-error btn-outline btn-block gap-2">
                    <LogOut size={18}/> Logout
                  </button>
                )}
              </div>
           </div>
        </div>
      )}
    </>
  );
};

export default Navbar;