import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="max-w-3xl mx-auto text-center py-10">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">Welcome to Public Records Request App</h1>
      <p className="text-lg text-gray-600 mb-8">
        Easily request public records in just a few steps. We handle the paperwork, so you don’t have to.
      </p>
      <div className="space-y-4">
        <Link 
          to="/request" 
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Start Your Request
        </Link>
        <div className="flex justify-center space-x-4">
          <Link to="/help" className="text-blue-600 hover:underline">Help</Link>
          <Link to="/contact" className="text-blue-600 hover:underline">Contact</Link>
        </div>
      </div>
    </div>
  );
}

export default Home;