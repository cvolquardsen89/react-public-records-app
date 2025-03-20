import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-blue-600 text-white shadow-lg">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold">Public Records</div>
          <div className="space-x-6">
            <Link to="/" className="hover:text-blue-200 transition-colors">Home</Link>
            <Link to="/request" className="hover:text-blue-200 transition-colors">Request</Link>
            <Link to="/payment" className="hover:text-blue-200 transition-colors">Payment</Link>
            <Link to="/support" className="hover:text-blue-200 transition-colors">Support</Link>
            <Link to="/terms" className="hover:text-blue-200 transition-colors">Terms</Link>
            <Link to="/confirmation" className="hover:text-blue-200 transition-colors">Confirmation</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;