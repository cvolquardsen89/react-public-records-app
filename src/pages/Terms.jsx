import React, { useState } from 'react';

function Terms() {
  const [agreed, setAgreed] = useState(false);

  return (
    <div className="max-w-3xl mx-auto py-10">
      <h2 className="text-2xl font-bold mb-4">Terms of Service</h2>
      <p>Please read and agree to the terms before proceeding.</p>
      <textarea
        readOnly
        value="Terms and conditions go here..."
        className="w-full border p-2 mb-4"
      />
      <label className="flex items-center">
        <input
          type="checkbox"
          checked={agreed}
          onChange={() => setAgreed(!agreed)}
          className="mr-2"
        />
        I agree to the terms and conditions.
      </label>
      <button
        disabled={!agreed}
        className={`mt-4 px-4 py-2 rounded ${agreed ? 'bg-blue-600 text-white' : 'bg-gray-400 text-gray-700'}`}
      >
        Proceed
      </button>
    </div>
  );
}

export default Terms;