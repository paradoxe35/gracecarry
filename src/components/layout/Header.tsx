'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isAccountMenuOpen, setIsAccountMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleSearch = () => setIsSearchOpen(!isSearchOpen);
  const toggleAccountMenu = () => setIsAccountMenuOpen(!isAccountMenuOpen);

  const categories = [
    { name: 'New Arrivals', href: '/category/new-arrivals' },
    { name: 'Clothing', href: '/category/clothing' },
    { name: 'Footwear', href: '/category/footwear' },
    { name: 'Accessories', href: '/category/accessories' },
    { name: 'Beauty', href: '/category/beauty' },
    { name: 'Lifestyle', href: '/category/lifestyle' },
  ];

  return (
    <header className="bg-white shadow-soft">
      {/* Top bar with free shipping message */}
      <div className="bg-primary text-white text-center py-2 text-sm">
        Free shipping on all orders over $100
      </div>
      
      {/* Main header */}
      <div className="g-container">
        <div className="flex items-center justify-between py-4">
          {/* Mobile menu button */}
          <button 
            className="lg:hidden p-2"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <h1 className="text-2xl font-serif font-medium text-primary">Grace & Carry</h1>
            </Link>
          </div>
          
          {/* Desktop navigation */}
          <nav className="hidden lg:flex space-x-8">
            {categories.map((category) => (
              <Link 
                key={category.name} 
                href={category.href}
                className="text-neutral-800 hover:text-primary transition-colors duration-300"
              >
                {category.name}
              </Link>
            ))}
          </nav>
          
          {/* Right side icons */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <button 
              onClick={toggleSearch}
              className="p-2 text-neutral-800 hover:text-primary transition-colors duration-300"
              aria-label="Search"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            
            {/* Account */}
            <div className="relative">
              <button 
                onClick={toggleAccountMenu}
                className="p-2 text-neutral-800 hover:text-primary transition-colors duration-300"
                aria-label="Account"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </button>
              
              {/* Account dropdown */}
              {isAccountMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-medium z-10">
                  <div className="py-1">
                    <Link href="/account" className="block px-4 py-2 text-sm text-neutral-800 hover:bg-neutral-100">My Account</Link>
                    <Link href="/account/orders" className="block px-4 py-2 text-sm text-neutral-800 hover:bg-neutral-100">Orders</Link>
                    <Link href="/account/wishlist" className="block px-4 py-2 text-sm text-neutral-800 hover:bg-neutral-100">Wishlist</Link>
                    <Link href="/auth/login" className="block px-4 py-2 text-sm text-neutral-800 hover:bg-neutral-100">Sign In</Link>
                  </div>
                </div>
              )}
            </div>
            
            {/* Cart */}
            <Link 
              href="/cart"
              className="p-2 text-neutral-800 hover:text-primary transition-colors duration-300 relative"
              aria-label="Cart"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              <span className="absolute -top-1 -right-1 bg-primary text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">0</span>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-neutral-200">
          <div className="g-container py-4">
            <nav className="flex flex-col space-y-4">
              {categories.map((category) => (
                <Link 
                  key={category.name} 
                  href={category.href}
                  className="text-neutral-800 hover:text-primary transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {category.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
      
      {/* Search overlay */}
      {isSearchOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-start justify-center pt-20">
          <div className="bg-white p-6 rounded-md shadow-strong w-full max-w-2xl mx-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-medium">Search</h2>
              <button 
                onClick={toggleSearch}
                className="text-neutral-500 hover:text-neutral-800"
                aria-label="Close search"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="relative">
              <input 
                type="text" 
                placeholder="Search for products..." 
                className="g-input pr-10"
                autoFocus
              />
              <button 
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-neutral-500 hover:text-primary"
                aria-label="Submit search"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;