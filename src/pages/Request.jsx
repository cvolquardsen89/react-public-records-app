import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Request() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    recordType: '',
    caseNumber: '',
    incidentDate: '',
    location: '',
    supportingDocuments: [],
    paymentMethod: '',
    email: '',
  });

  const handleNext = () => setStep(step + 1);
  const handleBack = () => setStep(step - 1);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    // Implement submission logic here
    setStep(7); // Move to post-submission step
    alert('Form Submitted');
  };

  return (
    <div>
      <Navbar />
      <div className="max-w-3xl mx-auto py-10">
        <h1 className="text-3xl font-bold mb-8">Request Public Records</h1>

        {/* Step 1: Select Record Type */}
        {step === 1 && (
          <div>
            <h2 className="text-2xl font-bold mb-4">Step 1: Select Record Type</h2>
            <select
              name="recordType"
              value={formData.recordType}
              onChange={handleChange}
              className="w-full border p-2 mb-4"
            >
              <option value="">Select Record Type</option>
              <option value="courtRecords">Court Records</option>
              <option value="policeReports">Police Reports</option>
              <option value="dashcamFootage">Dashcam/Bodycam Footage</option>
              <option value="dispatchAudio">911 Dispatch Audio</option>
              <option value="other">Other (Custom Entry)</option>
            </select>
            <button onClick={() => alert('AI Helper: Court Records - Records related to court proceedings.')} className="bg-gray-300 text-gray-700 px-4 py-2 rounded mb-4">
              AI Helper
            </button>
            <div className="flex justify-between">
              <button onClick={handleBack} className="bg-gray-600 text-white px-4 py-2 rounded" disabled>
                Back
              </button>
              <button onClick={handleNext} className="bg-blue-600 text-white px-4 py-2 rounded">
                Next
              </button>
            </div>
          </div>
        )}

        {/* Step 2: Provide Record Details */}
        {step === 2 && (
          <div>
            <h2 className="text-2xl font-bold mb-4">Step 2: Provide Record Details</h2>
            {formData.recordType === 'courtRecords' && (
              <>
                <input
                  type="text"
                  name="caseNumber"
                  placeholder="Case Number"
                  value={formData.caseNumber}
                  onChange={handleChange}
                  className="w-full border p-2 mb-4"
                />
              </>
            )}
            {formData.recordType === 'policeReports' && (
              <>
                <input
                  type="text"
                  name="incidentDate"
                  placeholder="Incident Date"
                  value={formData.incidentDate}
                  onChange={handleChange}
                  className="w-full border p-2 mb-4"
                />
                <input
                  type="text"
                  name="location"
                  placeholder="Location"
                  value={formData.location}
                  onChange={handleChange}
                  className="w-full border p-2 mb-4"
                />
              </>
            )}
            {/* Add more fields based on record type */}
            <p className="text-gray-500 mb-4">
              AI Assistant Pop-Up for guidance if needed.
            </p>
            <div className="flex justify-between">
              <button onClick={handleBack} className="bg-gray-600 text-white px-4 py-2 rounded">
                Back
              </button>
              <button onClick={handleNext} className="bg-blue-600 text-white px-4 py-2 rounded">
                Next
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Upload Supporting Documents */}
        {step === 3 && (
          <div>
            <h2 className="text-2xl font-bold mb-4">Step 3: Upload Supporting Documents (Optional)</h2>
            <input
              type="file"
              multiple
              className="mb-4"
              onChange={(e) => setFormData({ ...formData, supportingDocuments: e.target.files })}
            />
            <div className="flex justify-between">
              <button onClick={handleBack} className="bg-gray-600 text-white px-4 py-2 rounded">
                Back
              </button>
              <button onClick={handleNext} className="bg-blue-600 text-white px-4 py-2 rounded">
                Next
              </button>
            </div>
          </div>
        )}

        {/* Step 4: Confirm Requirements & Extra Steps */}
        {step === 4 && (
          <div>
            <h2 className="text-2xl font-bold mb-4">Step 4: Confirm Requirements & Extra Steps</h2>
            <p className="mb-4">
              This request requires notarization. You can use Notarize.com for online notarization.
            </p>
            <button onClick={() => alert('AI Assistant: Provides guidance for filling out record details.')} className="bg-gray-300 text-gray-700 px-4 py-2 rounded mb-4">
              AI Assistant
            </button>
            <div className="flex justify-between">
              <button onClick={handleBack} className="bg-gray-600 text-white px-4 py-2 rounded">
                Back
              </button>
              <button onClick={handleNext} className="bg-blue-600 text-white px-4 py-2 rounded">
                Next
              </button>
            </div>
          </div>
        )}

        {/* Step 5: Payment Section */}
        {step === 5 && (
          <div>
            <h2 className="text-2xl font-bold mb-4">Step 5: Payment Section</h2>
            <p className="mb-4">Service fee breakdown.</p>
            <select
              name="paymentMethod"
              value={formData.paymentMethod}
              onChange={handleChange}
              className="w-full border p-2 mb-4"
            >
              <option value="">Select Payment Method</option>
              <option value="creditCard">Credit/Debit Card</option>
              <option value="paypal">PayPal</option>
              <option value="googlePay">Google Pay</option>
              <option value="applePay">Apple Pay</option>
            </select>
            <input
              type="email"
              name="email"
              placeholder="Enter your email for verification"
              value={formData.email}
              onChange={handleChange}
              className="w-full border p-2 mb-4"
            />
            <div className="flex justify-between">
              <button onClick={handleBack} className="bg-gray-600 text-white px-4 py-2 rounded">
                Back
              </button>
              <button onClick={handleNext} className="bg-blue-600 text-white px-4 py-2 rounded">
                Next
              </button>
            </div>
            <p className="text-gray-500 mt-4">
              Note: Email verification will be implemented for fraud prevention.
            </p>
          </div>
        )}

        {/* Step 6: Submit Request */}
        {step === 6 && (
          <div>
            <h2 className="text-2xl font-bold mb-4">Step 6: Submit Request</h2>
            <p className="mb-4">Confirmation summary before submission.</p>
            <div className="flex justify-between">
              <button onClick={handleBack} className="bg-gray-600 text-white px-4 py-2 rounded">
                Back
              </button>
              <button onClick={handleSubmit} className="bg-green-600 text-white px-4 py-2 rounded">
                Submit Request
              </button>
            </div>
            <p className="mt-4">Estimated processing time: 7-10 business days.</p>
          </div>
        )}

        {/* Post-Submission */}
        {step === 7 && (
          <div>
            <h2 className="text-2xl font-bold mb-4">Your request has been successfully submitted!</h2>
            <p className="mb-4">Automated email receipt + confirmation with tracking info.</p>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default Request;