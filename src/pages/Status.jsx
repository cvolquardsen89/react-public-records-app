import React from 'react';

function Status() {
  return (
    <div className="max-w-3xl mx-auto py-10">
      <h2 className="text-2xl font-bold mb-4">Request Status</h2>
      <p>Your request ID is: <strong>#12345</strong></p>
      <p>Status: <span className="text-green-600">Processing</span></p>
    </div>
  );
}

export default Status;
