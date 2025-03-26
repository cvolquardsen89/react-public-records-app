import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function HelpPage() {
  return (
    <div>
      <Navbar />
      <div className="max-w-3xl mx-auto py-10">
        <h1 className="text-3xl font-bold mb-8">Help & AI Chatbot Assistance</h1>

        {/* Searchable FAQ Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Searchable FAQs</h2>
          <input
            type="text"
            placeholder="Search FAQs"
            className="w-full border p-2 mb-2"
          />
          <ul>
            <li>What is a public record?</li>
            <li>How do I request a public record?</li>
            <li>What if my request is denied?</li>
          </ul>
        </div>

        {/* Legal Term Definitions */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Legal Term Definitions</h2>
          <ul>
            <li>Public Record</li>
            <li>FOIA</li>
            <li>Redaction</li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default HelpPage;
