import React from 'react';

function Refund() {
  return (
    <div className="max-w-3xl mx-auto py-10">
      <h2 className="text-2xl font-bold mb-4">Request a Refund</h2>
      <form>
        <input
          type="text"
          name="transactionId"
          placeholder="Transaction ID"
          className="w-full border p-2 mb-4"
        />
        <textarea
          name="reason"
          placeholder="Reason for Refund"
          className="w-full border p-2 mb-4"
        />
        <button className="bg-blue-600 text-white px-4 py-2 rounded">Submit</button>
      </form>
    </div>
  );
}

export default Refund;
