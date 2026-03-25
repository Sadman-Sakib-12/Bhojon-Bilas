"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  ShoppingCart, User, Search, Menu, Bell, X, 
  Sun, Moon, ClipboardList, Wallet, Settings, 
  LogOut, LayoutDashboard, MapPin 
} from 'lucide-react';

const Navbar = () => {
  const pathname = usePathname();

  // States
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  
  // Auth Logic
  const isLoggedIn = true; 
  const cartCount = 3;

  const navLinks = [
    { name: 'Browse Food', href: '/restaurants' },
    { name: 'Flash Sales', href: '/offers' },
    { name: 'Orders', href: '/orders' },
    { name: 'Support', href: '/contact' },
  ];

  // ড্যাশবোর্ড পেজে নেভবার হাইড রাখার জন্য
  if (pathname.startsWith('/dashboard')) {
    return null;
  }

  return (
    <>
      <nav className="navbar bg-base-100/95 backdrop-blur-md shadow-sm px-4 md:px-10 sticky top-0 z-50 border-b border-gray-100 dark:border-gray-800 transition-all">
        
        {/* --- LEFT: LOGO & LOCATION ICON --- */}
        <div className="navbar-start gap-3">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-orange-600 rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform shadow-lg shadow-orange-200 dark:shadow-none">
               <UtensilsIcon className="text-white" size={20} />
            </div>
            <span className="text-2xl font-black tracking-tighter text-gray-900 dark:text-white">
              Bhojon<span className="text-orange-600">Bilash</span>
            </span>
          </Link>

          {/* Only Location Icon (Tooltip added for better UX) */}
          <div className="tooltip tooltip-bottom" data-tip="Delivery Location">
            <button className="btn btn-ghost btn-circle btn-sm bg-gray-50 dark:bg-gray-800 hover:text-orange-600 transition-colors">
              <MapPin size={18} />
            </button>
          </div>
        </div>

        {/* --- CENTER: NAV LINKS & SEARCH --- */}
        <div className="navbar-center hidden lg:flex items-center gap-8">
          <ul className="flex items-center gap-6 font-bold text-[13px] text-gray-600 dark:text-gray-300 uppercase tracking-wide">
            {navLinks.map(link => (
              <li key={link.href} className="hover:text-orange-600 transition-colors">
                <Link href={link.href}>{link.name}</Link>
              </li>
            ))}
          </ul>
          
          {/* Advanced Search (Fixed Scrollbar issue with overflow-hidden) */}
          <div className="relative ml-4 overflow-hidden rounded-full">
            <input 
              type="text" 
              placeholder="Search food..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="input input-sm w-44 focus:w-64 h-10 bg-gray-100 dark:bg-gray-800 border-none focus:outline-none transition-all duration-300 pl-10 font-medium"
            />
            <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
          </div>
        </div>

        {/* --- RIGHT: ACTIONS --- */}
        <div className="navbar-end gap-2">
          
          {/* Theme Toggle */}
          <button 
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="btn btn-ghost btn-circle btn-sm"
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          {isLoggedIn ? (
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Notifications */}
              <button className="btn btn-ghost btn-circle btn-sm hidden sm:flex">
                <div className="indicator">
                  <Bell size={20} />
                  <span className="badge badge-xs badge-primary indicator-item ring-1 ring-white"></span>
                </div>
              </button>

              {/* Cart */}
              <Link href="/cart" className="relative p-2 hover:bg-orange-50 dark:hover:bg-gray-800 rounded-full transition-all group">
                <ShoppingCart size={22} className="group-hover:text-orange-600" />
                <span className="absolute -top-1 -right-1 bg-orange-600 text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-white dark:border-gray-900">
                  {cartCount}
                </span>
              </Link>

              {/* Profile Avatar */}
              <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="avatar ml-2 cursor-pointer">
                  <div className="w-10 h-10 rounded-xl ring-2 ring-orange-100 ring-offset-2 overflow-hidden shadow-md">
                    <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Juma" alt="User" />
                  </div>
                </div>
                <ul tabIndex={0} className="mt-4 p-2 shadow-2xl menu menu-sm dropdown-content bg-base-100 rounded-2xl w-60 border border-gray-50 dark:border-gray-800">
                  <div className="px-4 py-3 mb-2 bg-orange-50/50 dark:bg-gray-800 rounded-xl">
                    <p className="font-bold text-gray-900 dark:text-white">Juma Islam</p>
                    <p className="text-[10px] text-orange-600 font-bold uppercase">Premium Member</p>
                  </div>
                  
                  <li><Link href="/dashboard" className="py-2.5 text-orange-600 font-bold bg-orange-50 dark:bg-orange-950/20 mb-1"><LayoutDashboard size={18}/> Dashboard</Link></li>
                  <li><Link href="/profile" className="py-2.5"><User size={18}/> Profile</Link></li>
                  <li><Link href="/orders" className="py-2.5"><ClipboardList size={18}/> My Orders</Link></li>
                  <li><Link href="/wallet" className="py-2.5"><Wallet size={18}/> Wallet (৳450)</Link></li>
                  
                  <div className="divider my-1 opacity-40"></div>
                  <li><button className="text-red-500 font-bold py-2.5"><LogOut size={18}/> Log Out</button></li>
                </ul>
              </div>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <Link href="/login" className="btn btn-ghost btn-sm font-bold hidden md:flex">Sign In</Link>
              <Link href="/register" className="btn btn-sm bg-orange-600 hover:bg-orange-700 border-none text-white rounded-xl px-6 font-bold">Join Now</Link>
            </div>
          )}

          {/* Mobile Menu Icon */}
          <button onClick={() => setIsMobileMenuOpen(true)} className="lg:hidden btn btn-ghost btn-circle btn-sm">
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* --- MOBILE SIDEBAR --- */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[110] lg:hidden">
           <div className="w-[280px] h-full bg-white dark:bg-gray-900 p-8 flex flex-col animate-in slide-in-from-right duration-500 ml-auto shadow-2xl">
              <div className="flex justify-between items-center mb-8 border-b pb-4">
                 <span className="font-black text-orange-600 text-xl tracking-tighter">BhojonBilash</span>
                 <button onClick={() => setIsMobileMenuOpen(false)} className="btn btn-sm btn-circle btn-ghost"><X/></button>
              </div>
              
              <div className="flex flex-col gap-6">
                 {navLinks.map((link) => (
                    <Link key={link.name} href={link.href} onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-bold text-gray-700 dark:text-gray-200">
                       {link.name}
                    </Link>
                 ))}

                 {isLoggedIn && (
                   <Link href="/dashboard" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-black text-orange-600 flex items-center gap-3 p-3 bg-orange-50 rounded-xl">
                      <LayoutDashboard size={22}/> Dashboard
                   </Link>
                 )}
              </div>

              <div className="mt-auto">
                {!isLoggedIn ? (
                  <div className="flex flex-col gap-3">
                     <Link href="/login" onClick={() => setIsMobileMenuOpen(false)} className="btn btn-outline btn-block rounded-xl">Sign In</Link>
                     <Link href="/register" onClick={() => setIsMobileMenuOpen(false)} className="btn btn-block bg-orange-600 border-none text-white rounded-xl">Register</Link>
                  </div>
                ) : (
                  <button className="btn btn-error btn-outline btn-block gap-2 rounded-xl">
                    <LogOut size={18}/> Log Out
                  </button>
                )}
              </div>
           </div>
        </div>
      )}
    </>
  );
};

// একটি ছোট হেল্পার আইকন লোগোর জন্য
const UtensilsIcon = ({ className, size }: { className?: string, size?: number }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size || 24} 
    height={size || 24} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2.5" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" />
    <path d="M7 2v20" />
    <path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" />
  </svg>
);

export default Navbar;