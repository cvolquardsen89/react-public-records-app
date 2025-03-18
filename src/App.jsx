import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Request from './pages/Request';
import Payment from './pages/Payment';
import Support from './pages/Support';
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
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;