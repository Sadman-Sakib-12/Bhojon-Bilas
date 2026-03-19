// src/app/layout.tsx
import type { Metadata } from 'next';
import React from 'react';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import { ReduxProvider } from '@/redux/Provider';

export const metadata: Metadata = {
  title: 'Food Delivery App',
  description: 'Order food from your favorite restaurants',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ReduxProvider>
          <Navbar />
          {children}
        </ReduxProvider>
      </body>
    </html>
  );
}