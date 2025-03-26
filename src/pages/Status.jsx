import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Status() {
  const [requestId, setRequestId] = useState('');
  const [status, setStatus] = useState('');
  const [records, setRecords] = useState([]);

  const handleSearch = () => {
    // Implement search logic here (API call)
    // For now, let's simulate a status update based on the request ID
    if (requestId === '12345') {
      setStatus('Completed');
      setRecords(['record1.pdf', 'record2.mp4']);
    } else if (requestId === '54321') {
      setStatus('Denied');
      setRecords([]);
    } else if (requestId === '98765') {
      setStatus('Additional Steps Required');
      setRecords([]);
    } else {
      setStatus('Pending');
      setRecords([]);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="max-w-3xl mx-auto py-10">
        <h1 className="text-3xl font-bold mb-8">Request Status & Records Retrieval</h1>

        {/* Request Tracking Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Track Your Request</h2>
          <input
            type="text"
            placeholder="Enter Request ID"
            value={requestId}
            onChange={(e) => setRequestId(e.target.value)}
            className="w-full border p-2 mb-2"
          />
          <button onClick={handleSearch} className="bg-blue-600 text-white px-4 py-2 rounded">
            Search
          </button>
          {/* Add Login option later */}
        </div>

        {/* Request Status Display */}
        {status && (
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Request Status</h2>
            {status === 'Pending' && (
              <p>Status: <span className="text-yellow-600">Pending – Request is being processed.</span></p>
            )}
            {status === 'Additional Steps Required' && (
              <p>Status: <span className="text-orange-600">Additional Steps Required – Notarization, identity verification, etc.</span></p>
            )}
            {status === 'Completed' && (
              <p>Status: <span className="text-green-600">Completed – Records Available – Download link provided.</span></p>
            )}
            {status === 'Denied' && (
              <p>Status: <span className="text-red-600">Denied / Unable to Retrieve – Explanation & suggested next steps.</span></p>
            )}
          </div>
        )}

        {/* Automated AI Responses */}
        {status === 'Denied' && (
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">AI Explanation & Next Steps</h2>
            <p>AI-generated explanation and suggested next steps for the denied request.</p>
          </div>
        )}
        {status === 'Denied' && (
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">AI Explanation & Next Steps</h2>
            <p>AI: Your request was denied because the records are not publicly available.</p>
            <p>Next Steps: You can appeal the decision or contact the agency for more information.</p>
          </div>
        )}
        {status === 'Additional Steps Required' && (
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">AI Suggestions</h2>
            <p>AI: This request requires notarization. Please use Notarize.com for online notarization.</p>
            <p>Next Steps: Upload the notarized documents to complete your request.</p>
          </div>
        )}

        {/* Download Section */}
        {status === 'Completed' && (
          <div>
            <h2 className="text-2xl font-bold mb-4">Download Records</h2>
            <ul>
              {records.map((record, index) => (
                <li key={index}>
                  <a href="#" className="text-blue-600 hover:underline">
                    {record}
                  </a>
                </li>
              ))}
            </ul>
            <p>Email Notification sent automatically when records are ready.</p>
          </div>
        )}

        {/* Refund Request Option */}
        {/* Add logic to check if refund is applicable */}
        {status === 'Denied' && (
          <div className="mt-8">
            <p>If records do not exist, you can request a refund via support email.</p>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default Status;
