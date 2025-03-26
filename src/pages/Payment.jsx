import React from 'react';

function Payment() {
  return (
    <div className="max-w-3xl mx-auto py-10">
      <h2 className="text-2xl font-bold mb-4">Payment</h2>
      <p className="mb-4">Please choose a payment method:</p>
      <button className="bg-blue-600 text-white px-4 py-2 rounded mb-4">Pay with Stripe</button>
      <button className="bg-gray-600 text-white px-4 py-2 rounded">Pay with PayPal</button>
    </div>
  );
}

export default Payment;