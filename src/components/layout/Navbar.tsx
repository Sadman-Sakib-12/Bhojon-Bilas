"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  ShoppingCart, Search, Menu, Bell, Heart, LogOut, Settings, 
  MapPin, ChevronDown, X, User, MessageSquare, Truck, Moon, Sun, 
  Languages, UtensilsCrossed, LayoutDashboard, Store, ClipboardList,
  Star, Wallet, HelpCircle
} from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  // Mock State (এগুলো পরে Context/Redux থেকে আসবে)
  const [userRole, setUserRole] = useState('customer'); // options: 'customer', 'restaurant', 'rider', 'admin'
  const [location, setLocation] = useState("Kishoreganj, Dhaka");
  const [cartCount, setCartCount] = useState(3);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Role Based Menu Helper
  const getRoleLinks = () => {
    switch (userRole) {
      case 'restaurant':
        return [
          { name: 'Dashboard', href: '/restaurant/dashboard', icon: <LayoutDashboard size={18}/> },
          { name: 'My Menu', href: '/restaurant/menu', icon: <UtensilsCrossed size={18}/> },
          { name: 'Orders', href: '/restaurant/orders', icon: <ClipboardList size={18}/> },
        ];
      case 'rider':
        return [
          { name: 'Deliveries', href: '/rider/tasks', icon: <Truck size={18}/> },
          { name: 'Earnings', href: '/rider/earnings', icon: <Wallet size={18}/> },
        ];
      default:
        return [
          { name: 'Restaurants', href: '/restaurants', icon: <Store size={18}/> },
          { name: 'Offers', href: '/offers', icon: <Star size={18}/> },
          { name: 'Orders', href: '/orders', icon: <ClipboardList size={18}/> },
        ];
    }
  };

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] py-2 border-b border-gray-100/50 dark:border-gray-800" 
          : "bg-transparent py-5"
      }`}>
        <div className="max-w-[1440px] mx-auto px-4 md:px-8 flex items-center justify-between">
          
          {/* --- LEFT: LOGO & LOCATION --- */}
          <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-11 h-11 bg-gradient-to-tr from-orange-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg shadow-orange-200 rotate-3 group-hover:rotate-0 transition-all duration-300">
                <UtensilsCrossed className="text-white" size={24} />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-black tracking-tight text-gray-900 dark:text-white leading-none">
                  BHOJON<span className="text-orange-600">BILASH</span>
                </span>
                <span className="text-[9px] font-bold text-gray-400 tracking-[2px] uppercase mt-1">Order • Eat • Enjoy</span>
              </div>
            </Link>

            <div className="hidden xl:flex items-center gap-3 pl-6 border-l border-gray-200 dark:border-gray-700">
              <div className="flex flex-col">
                <div className="flex items-center gap-1 text-orange-600 font-bold text-xs">
                  <MapPin size={12} />
                  <span>Deliver to</span>
                </div>
                <button className="flex items-center gap-1 font-bold text-gray-700 dark:text-gray-300 text-sm hover:text-orange-500 transition-colors">
                  {location} <ChevronDown size={14} />
                </button>
              </div>
            </div>
          </div>

          {/* --- CENTER: DYNAMIC NAV --- */}
          <div className="hidden lg:flex items-center gap-8 font-bold text-[14px] text-gray-600 dark:text-gray-400">
            {getRoleLinks().map((link) => (
              <Link key={link.name} href={link.href} className="hover:text-orange-600 dark:hover:text-orange-500 transition-all flex items-center gap-2">
                {link.name}
              </Link>
            ))}
          </div>

          {/* --- RIGHT: ACTIONS --- */}
          <div className="flex items-center gap-2 sm:gap-4">
            
            {/* Search Pill */}
            <button 
              onClick={() => setIsSearchOpen(true)}
              className="hidden md:flex items-center gap-3 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 px-4 py-2.5 rounded-2xl transition-all group"
            >
              <Search size={18} className="text-gray-500 group-hover:text-orange-500" />
              <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Search "Biryani"...</span>
              <kbd className="hidden lg:inline-block bg-white dark:bg-gray-900 px-1.5 py-0.5 rounded text-[10px] border dark:border-gray-700 shadow-sm text-gray-400">⌘K</kbd>
            </button>

            {/* Icons Group */}
            <div className="flex items-center gap-1 sm:gap-2">
              <button className="p-2.5 text-gray-600 dark:text-gray-400 hover:bg-orange-50 dark:hover:bg-gray-800 rounded-xl relative transition-all group">
                <Bell size={22} className="group-hover:animate-bounce" />
                <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-red-500 rounded-full ring-2 ring-white dark:ring-gray-900"></span>
              </button>
              
              <button 
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="p-2.5 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-xl transition-all"
              >
                {isDarkMode ? <Sun size={22} /> : <Moon size={22} />}
              </button>
            </div>

            {/* Premium Cart */}
            <Link href="/cart" className="relative group bg-gray-900 dark:bg-orange-600 text-white p-2.5 sm:px-5 sm:py-2.5 rounded-2xl flex items-center gap-3 hover:scale-105 active:scale-95 transition-all shadow-xl shadow-gray-200 dark:shadow-orange-900/20">
              <ShoppingCart size={20} />
              <span className="font-bold text-sm hidden sm:block">Cart</span>
              <span className="bg-orange-500 dark:bg-white text-white dark:text-orange-600 text-[11px] font-black w-5 h-5 flex items-center justify-center rounded-lg">
                {cartCount}
              </span>
            </Link>

            {/* Profile Dropdown */}
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="relative group">
                <div className="w-11 h-11 rounded-2xl overflow-hidden ring-2 ring-transparent group-hover:ring-orange-500 transition-all cursor-pointer">
                  <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=Lucky`} alt="User" />
                </div>
              </div>
              <ul tabIndex={0} className="mt-4 p-2 shadow-2xl menu menu-sm dropdown-content bg-white dark:bg-gray-800 rounded-2xl w-64 border border-gray-100 dark:border-gray-700 overflow-hidden">
                <div className="px-4 py-4 mb-2 bg-gray-50 dark:bg-gray-700/50 rounded-xl">
                  <p className="font-bold text-gray-900 dark:text-white leading-none">Juma Islam</p>
                  <p className="text-[11px] mt-1 text-orange-600 font-bold uppercase tracking-wider">Premium Customer</p>
                </div>
                <li><Link href="/profile" className="py-2.5 rounded-lg"><User size={18}/> Profile</Link></li>
                <li><Link href="/orders" className="py-2.5 rounded-lg"><ClipboardList size={18}/> My Orders</Link></li>
                <li><Link href="/wallet" className="py-2.5 rounded-lg"><Wallet size={18}/> Wallet (৳450)</Link></li>
                <li><Link href="/settings" className="py-2.5 rounded-lg"><Settings size={18}/> Settings</Link></li>
                <div className="divider my-1 opacity-50"></div>
                <li><button className="text-red-500 py-2.5 hover:bg-red-50 dark:hover:bg-red-950 font-bold"><LogOut size={18}/> Sign Out</button></li>
              </ul>
            </div>

            {/* Mobile Toggle */}
            <button onClick={() => setIsMobileMenuOpen(true)} className="lg:hidden p-2 text-gray-800 dark:text-white">
              <Menu size={28} />
            </button>
          </div>
        </div>
      </nav>

      {/* --- SEARCH OVERLAY --- */}
      {isSearchOpen && (
        <div className="fixed inset-0 bg-white/95 dark:bg-gray-900/98 backdrop-blur-2xl z-[100] p-6 animate-in fade-in zoom-in duration-300">
           <div className="max-w-3xl mx-auto pt-20 text-center">
              <div className="flex justify-between items-center mb-12">
                 <h2 className="text-3xl font-black text-gray-900 dark:text-white tracking-tighter italic">"Hungry?"</h2>
                 <button onClick={() => setIsSearchOpen(false)} className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full hover:rotate-90 transition-all duration-300">
                   <X size={28} />
                 </button>
              </div>
              <div className="relative group">
                <input 
                  autoFocus
                  placeholder="Search for restaurants or dishes..." 
                  className="w-full text-2xl py-6 px-16 bg-transparent border-b-2 border-gray-200 dark:border-gray-700 focus:border-orange-500 outline-none font-bold transition-all text-gray-800 dark:text-white"
                />
                <Search size={32} className="absolute left-4 top-6 text-orange-500" />
              </div>
              <div className="mt-12 flex flex-wrap justify-center gap-3">
                 {['Kacchi', 'Pizza', 'Burger', 'Coffee', 'Shakes'].map(item => (
                   <span key={item} className="px-6 py-2 bg-gray-50 dark:bg-gray-800 rounded-full text-sm font-bold text-gray-600 dark:text-gray-300 hover:bg-orange-500 hover:text-white cursor-pointer transition-all border border-gray-100 dark:border-gray-700">
                     {item}
                   </span>
                 ))}
              </div>
           </div>
        </div>
      )}

      {/* --- MOBILE SIDEBAR --- */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-md z-[110] lg:hidden">
           <div className="w-[80%] h-full bg-white dark:bg-gray-900 p-8 flex flex-col animate-in slide-in-from-right duration-500 ml-auto shadow-2xl">
              <div className="flex justify-between items-center mb-12">
                 <div className="w-10 h-10 bg-orange-600 rounded-lg flex items-center justify-center">
                    <UtensilsCrossed className="text-white" size={20}/>
                 </div>
                 <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 bg-gray-100 dark:bg-gray-800 rounded-full dark:text-white"><X/></button>
              </div>
              
              <div className="flex flex-col gap-6">
                 {getRoleLinks().map((link) => (
                    <Link key={link.name} href={link.href} onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-black text-gray-800 dark:text-white flex items-center gap-4 hover:text-orange-600 transition-colors">
                       <span className="p-2 bg-gray-50 dark:bg-gray-800 rounded-xl">{link.icon}</span>
                       {link.name}
                    </Link>
                 ))}
                 <Link href="/support" className="text-2xl font-black text-gray-800 dark:text-white flex items-center gap-4">
                    <span className="p-2 bg-gray-50 dark:bg-gray-800 rounded-xl"><HelpCircle size={18}/></span>
                    Support
                 </Link>
              </div>

              <div className="mt-auto">
                 <div className="p-6 bg-gradient-to-br from-orange-500 to-orange-700 rounded-[2rem] text-white">
                    <p className="text-xs font-bold opacity-80 uppercase mb-1">Current Balance</p>
                    <p className="text-3xl font-black">৳ 1,240.50</p>
                 </div>
              </div>
           </div>
        </div>
      )}
    </>
  );
};

export default Navbar;