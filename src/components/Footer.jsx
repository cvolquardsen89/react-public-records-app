import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-auto">
      <div className="container mx-auto px-6 text-center">
        <div className="flex justify-center space-x-4 mb-4">
                  <a href="/terms" className="hover:text-gray-300">Terms of Service</a>
                  <a href="/privacy" className="hover:text-gray-300">Privacy Policy</a>
                  <a href="/refund" className="hover:text-gray-300">Refund Policy</a>
                </div>
                <p className="mb-2">Contact: contact@publicrecordsapp.com</p>
                <p>© 2025 Public Records App</p>
      </div>
    </footer>
  );
}

export default Footer;