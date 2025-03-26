import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-blue-600 text-white shadow-lg">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold">
            <Link to="/" className="hover:text-blue-200 transition-colors">Public Records App</Link>
          </div>
          <div className="space-x-6">
            <Link to="/" className="hover:text-blue-200 transition-colors">Home</Link>
            <Link to="/request" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors">Start Request</Link>
            <Link to="/help" className="hover:text-blue-200 transition-colors">Help &amp; Support</Link>
            <Link to="/contact" className="hover:text-blue-200 transition-colors">Contact</Link>
                        
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;