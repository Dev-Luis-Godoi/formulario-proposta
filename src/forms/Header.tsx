import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 w-full h-20 bg-white shadow-md z-50">
      <nav className="container mx-auto flex items-center justify-center h-full">
        <div className="text-xl font-bold text-blue-600 m-4">
          <a href="/">
            <img src="src\assets\favicon-32x32.png" alt="Logo" className="h-15 w-15" />
          </a>
        </div>
        <div className="hidden md:flex space-x-6 text-gray-700  ">
          <p className="flex justify-center items-center h-full w-full text-lg font-black">
            {' '}
            Transporte+ Proposta
          </p>
        </div>
      </nav>
    </header>
  );
};

export default Header;
