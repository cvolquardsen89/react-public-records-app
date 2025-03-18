import React from 'react';

function Payment() {
  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Payment</h1>
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Processing Fees</h2>
          <p className="text-gray-600">Standard processing fee: $25</p>
        </div>
        <form className="space-y-4">
          <div>
            <label className="block text-gray-700 mb-2">Card Number</label>
            <input 
              type="text" 
              className="w-full border rounded-lg p-2"
              placeholder="**** **** **** ****"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 mb-2">Expiry Date</label>
              <input 
                type="text" 
                className="w-full border rounded-lg p-2"
                placeholder="MM/YY"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">CVV</label>
              <input 
                type="text" 
                className="w-full border rounded-lg p-2"
                placeholder="***"
              />
            </div>
          </div>
          <button 
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Process Payment
          </button>
        </form>
      </div>
    </div>
  );
}

export default Payment;