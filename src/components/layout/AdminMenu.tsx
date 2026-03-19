"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard, Users, Utensils, ShoppingBag,
  Truck, CreditCard, BarChart3, Megaphone,
  Star, MessageSquare, Bell, Settings,
  ShieldCheck, ChevronLeft, ChevronRight,
  LogOut
} from 'lucide-react';

interface MenuItem {
  name: string;
  icon: React.ReactNode;
  path: string;
}

const AdminMenu: React.FC = () => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);
  const pathname = usePathname();

  const menuItems: MenuItem[] = [
    { name: 'Dashboard', icon: <LayoutDashboard size={18} />, path: '/dashboard/admin' },
    { name: 'Users', icon: <Users size={18} />, path: '/dashboard/admin/users' },
    { name: 'Restaurants', icon: <Utensils size={18} />, path: '/dashboard/admin/restaurants' },
    { name: 'Orders', icon: <ShoppingBag size={18} />, path: '/dashboard/admin/orders' },
    { name: 'Drivers', icon: <Truck size={18} />, path: '/dashboard/admin/delivery' },
    { name: 'Payments', icon: <CreditCard size={18} />, path: '/dashboard/admin/payments' },
    { name: 'Analytics', icon: <BarChart3 size={18} />, path: '/dashboard/admin/analytics' },
    { name: 'Notifications', icon: <Bell size={18} />, path: '/dashboard/admin/notifications' },
    { name: 'Settings', icon: <Settings size={18} />, path: '/dashboard/admin/settings' },
  ];

  return (
    <aside
      className={`flex flex-col h-screen bg-white border-r border-slate-200 transition-all duration-300 ease-in-out ${isCollapsed ? 'w-20' : 'w-64'
        }`}
    >
      {/* --- Logo Section --- */}
      <div className="flex items-center justify-between px-6 h-20">
        {!isCollapsed && (
          <h1 className="text-xl font-bold tracking-tight text-slate-800">
            Food<span className="text-orange-500">Dash</span>
          </h1>
        )}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="p-1.5 rounded-md hover:bg-slate-100 text-slate-500 border border-slate-200"
        >
          {isCollapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
        </button>
      </div>

      {/* --- Navigation --- */}
      <nav className="flex-1 overflow-y-auto px-4 py-2 custom-scrollbar">
        <ul className="space-y-1">
          {menuItems.map((item) => {
            const isActive = pathname === item.path;
            return (
              <li key={item.name}>
                <Link
                  href={item.path}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium transition-colors ${isActive
                      ? 'bg-orange-50 text-orange-600 border-r-2 border-orange-500'
                      : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                    }`}
                >
                  <span className={`${isActive ? 'text-orange-600' : 'text-slate-400'}`}>
                    {item.icon}
                  </span>
                  {!isCollapsed && <span className="truncate">{item.name}</span>}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* --- Profile / Logout --- */}
      <div className="p-4 border-t border-slate-100">
        <div className={`flex items-center gap-3 p-2 ${isCollapsed ? 'justify-center' : ''}`}>
          <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-white text-xs shrink-0 font-bold">
            AD
          </div>
          {!isCollapsed && (
            <div className="flex-1 min-w-0">
              <p className="text-xs font-semibold text-slate-800 truncate">Admin User</p>
              <button className="text-[10px] text-slate-400 hover:text-red-500 flex items-center gap-1 transition-colors">
                <LogOut size={10} /> Sign out
              </button>
            </div>
          )}
        </div>
      </div>

    
    </aside>
  );
};

export default AdminMenu;