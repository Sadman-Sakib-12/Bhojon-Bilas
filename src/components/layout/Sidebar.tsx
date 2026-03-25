"use client";
import React from 'react';
import AdminMenu from './AdminMenu';

const Sidebar = () => {
  return (
    // এখানে h-screen একবারই ব্যবহার করা হয়েছে
    <aside className="  border-r border-slate-100 sticky top-0 flex flex-col shrink-0  transition-all duration-300">
      <AdminMenu />
    </aside>
  );
};

export default Sidebar;