import React from 'react';

function Support() {
  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Support</h1>
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold mb-2">Contact Us</h2>
            <p className="text-gray-600">
              Need help with your public records request? Our support team is here to assist you.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Email</h3>
            <p className="text-blue-600">support@publicrecords.example.com</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Phone</h3>
            <p className="text-blue-600">(555) 123-4567</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Hours</h3>
            <p className="text-gray-600">Monday - Friday: 9:00 AM - 5:00 PM EST</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Support;