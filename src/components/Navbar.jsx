import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate(); 

  const handleSearch = () => {
    if (searchQuery.trim()) {
      navigate(`/search?query=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <nav className="bg-secondary text-textPrimary p-4 shadow-md sticky top-0 z-50 dark:bg-primary">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">NextGen Mart</h1>
        
        {/* Search Section */}
        <div className="flex-1 mx-4 max-w-md">
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full p-2 pl-10 border border-gray-700 rounded-lg bg-primary text-textPrimary focus:outline-none"
              placeholder="Search products..."
            />
            <button
              onClick={handleSearch}
              className="absolute inset-y-0 right-0 flex items-center pr-3"
            >
              <svg
                className="w-5 h-5 text-accent"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-4.35-4.35M16.65 12.65a6.5 6.5 0 1 0-9.2-9.2 6.5 6.5 0 0 0 9.2 9.2z"
                />
              </svg>
            </button>
          </div>
        </div>

        <ul className="flex space-x-8">
          <li><a href="/" className="hover:text-accent">Home</a></li>
          <li><a href="/shop" className="hover:text-accent">Shop</a></li>
          <li><a href="/cart" className="hover:text-accent">Cart</a></li>
        </ul>
        <div className="space-x-4">
          <button className="btn-dark">Login</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
