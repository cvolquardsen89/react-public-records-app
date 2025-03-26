import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="max-w-3xl mx-auto text-center py-10">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">Easily Request Public Records in Texas</h1>
      <p className="text-lg text-gray-600 mb-8">
        Streamline your request process with AI-powered automation.
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

      {/* How It Works Section */}
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-semibold text-gray-900 text-center mb-8">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Step 1 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-2">Enter Your Request Details</h3>
              <p className="text-gray-600">Provide the necessary information for your public records request.</p>
            </div>
            {/* Step 2 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-2">Secure Payment Processing</h3>
              <p className="text-gray-600">Make a secure payment to process your request.</p>
            </div>
            {/* Step 3 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-2">Automated Submission & Tracking</h3>
              <p className="text-gray-600">We automatically submit and track your request for you.</p>
            </div>
            {/* Step 4 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                4
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-2">Receive Your Records</h3>
              <p className="text-gray-600">Receive your public records once they are processed.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us? Section */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-semibold text-gray-900 text-center mb-8">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Transparency & Security */}
            <div className="text-center">
              <h3 className="text-xl font-medium text-gray-900 mb-2">Transparency & Security</h3>
              <p className="text-gray-600">We ensure a seamless and secure request process.</p>
            </div>
            {/* AI-Powered Assistance */}
            <div className="text-center">
              <h3 className="text-xl font-medium text-gray-900 mb-2">AI-Powered Assistance</h3>
              <p className="text-gray-600">Our AI helps automate and track your requests.</p>
            </div>
            {/* Fast & Efficient */}
            <div className="text-center">
              <h3 className="text-xl font-medium text-gray-900 mb-2">Fast & Efficient</h3>
              <p className="text-gray-600">Save time and hassle when requesting records.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;