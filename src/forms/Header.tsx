import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 w-full h-20 bg-white shadow-md z-50">
      <nav className="flex items-center h-full pl-12">
        <div className="text-xl font-bold text-blue-600 ">
          <a href="/">
            <img src="src\assets\Logo.png" alt="Logo" className="h-full w-full" />
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
