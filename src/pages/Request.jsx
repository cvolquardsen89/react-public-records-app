import React from 'react';

function Request() {
  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Request Your Records</h1>
      <div className="bg-white rounded-lg shadow-md p-6">
        <form className="space-y-4">
          <div>
            <label className="block text-gray-700 mb-2">Record Type</label>
            <select className="w-full border rounded-lg p-2">
              <option>Police Report</option>
              <option>Court Records</option>
              <option>Property Records</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Description</label>
            <textarea 
              className="w-full border rounded-lg p-2" 
              rows="4"
              placeholder="Please describe the records you're requesting..."
            ></textarea>
          </div>
          <button 
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Submit Request
          </button>
        </form>
      </div>
    </div>
  );
}

export default Request;