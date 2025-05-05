import React from 'react'

const Layout = ({ children }) => {
    return (
      <div className="min-h-screen flex flex-col">
        <header className="bg-blue-600 text-white p-4 text-xl font-bold">
          Telemed
        </header>
        <main className="flex-1 p-4">{children}</main>
        <footer className="bg-gray-800 text-white p-4 text-sm text-center">
          © 2025 Telemed. All rights reserved.
        </footer>
      </div>
    );
  };
  
  export default Layout;
  
