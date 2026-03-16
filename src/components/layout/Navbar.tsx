"use client";
import React from 'react';
import Link from 'next/link';
import { ShoppingCart, User, Search, Menu, Bell } from 'lucide-react';

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-md px-2 md:px-8 sticky top-0 z-50">
      {/* Mobile Menu & Logo */}
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <Menu size={24} />
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li><Link href="/restaurants">Restaurants</Link></li>
            <li><Link href="/offers">Offers</Link></li>
            <li><Link href="/orders">Orders</Link></li>
          </ul>
        </div>
        <Link href="/" className="btn btn-ghost text-xl font-bold text-primary">
          FoodExpress
        </Link>
      </div>

      {/* Desktop Menu */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-medium">
          <li><Link href="/restaurants">Browse Food</Link></li>
          <li><Link href="/offers">Flash Sales</Link></li>
          <li><Link href="/contact">Support</Link></li>
        </ul>
      </div>

      {/* Actions (Search, Cart, Profile) */}
      <div className="navbar-end gap-2">
        {/* Search Bar (Hidden on small screens) */}
        <div className="form-control hidden md:block">
          <div className="relative">
            <input 
              type="text" 
              placeholder="Search food..." 
              className="input input-bordered w-24 md:w-auto h-10 pl-10" 
            />
            <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
          </div>
        </div>

        {/* Cart Dropdown */}
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <div className="indicator">
              <ShoppingCart size={22} />
              <span className="badge badge-sm badge-primary indicator-item">3</span>
            </div>
          </div>
          <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
            <div className="card-body">
              <span className="font-bold text-lg">3 Items</span>
              <span className="text-info">Subtotal: $24.50</span>
              <div className="card-actions">
                <Link href="/cart" className="btn btn-primary btn-block btn-sm">View Cart</Link>
              </div>
            </div>
          </div>
        </div>

        {/* User Profile */}
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img alt="User Avatar" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Sakib" />
            </div>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 border">
            <li><Link href="/dashboard" className="justify-between">Dashboard <span className="badge badge-secondary">New</span></Link></li>
            <li><Link href="/profile">Settings</Link></li>
            <li><button className="text-error font-semibold">Logout</button></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;