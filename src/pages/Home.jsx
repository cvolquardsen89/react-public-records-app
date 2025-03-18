import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="max-w-3xl mx-auto text-center">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">Welcome to Public Records Request App</h1>
      <p className="text-lg text-gray-600 mb-8">
        Access and request public records easily and securely.
      </p>
      <Link 
        to="/request" 
        className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
      >
        Start Your Request
      </Link>
    </div>
  );
}

export default Home;