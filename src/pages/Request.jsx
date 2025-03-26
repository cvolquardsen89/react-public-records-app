import React, { useState } from 'react';

function Request() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    recordType: '',
    caseNumber: '',
    location: '',
    date: '',
    personalInfo: '',
  });

  const handleNext = () => setStep(step + 1);
  const handleBack = () => setStep(step - 1);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="max-w-3xl mx-auto py-10">
      {step === 1 && (
        <div>
          <h2 className="text-2xl font-bold mb-4">Step 1: Record Details</h2>
          <input
            type="text"
            name="recordType"
            placeholder="Type of Record"
            value={formData.recordType}
            onChange={handleChange}
            className="w-full border p-2 mb-4"
          />
          <button onClick={handleNext} className="bg-blue-600 text-white px-4 py-2 rounded">
            Next
          </button>
        </div>
      )}
      {step === 2 && (
        <div>
          <h2 className="text-2xl font-bold mb-4">Step 2: Additional Details</h2>
          <input
            type="text"
            name="caseNumber"
            placeholder="Case Number"
            value={formData.caseNumber}
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
          <input
            type="date"
            name="date"
            value={formData.date}
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
        </div>
      )}
      {step === 3 && (
        <div>
          <h2 className="text-2xl font-bold mb-4">Step 3: Personal Information</h2>
          <input
            type="text"
            name="personalInfo"
            placeholder="Your Name and Contact Info"
            value={formData.personalInfo}
            onChange={handleChange}
            className="w-full border p-2 mb-4"
          />
          <div className="flex justify-between">
            <button onClick={handleBack} className="bg-gray-600 text-white px-4 py-2 rounded">
              Back
            </button>
            <button onClick={() => alert('Form Submitted')} className="bg-green-600 text-white px-4 py-2 rounded">
              Submit
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Request;