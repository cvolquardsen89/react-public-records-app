import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Request from './pages/Request';
import Payment from './pages/Payment';
import Support from './pages/Support';
import Terms from './pages/Terms';
import Confirmation from './pages/Confirmation';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-6 py-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/request" element={<Request />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/support" element={<Support />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/confirmation" element={<Confirmation />} />
        </Routes>
      </main>
      <Footer />
      {/* Floating AI Chatbot Button */}
      <button
        className="fixed bottom-6 right-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full shadow-lg"
        onClick={() => alert('AI Chatbot')}
      >
        AI Chatbot
      </button>
    </div>
  );
}

export default App;