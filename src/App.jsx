import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import TravelGuide from './components/TravelGuide';
import Hotels from './components/Hotels';
import Transport from './components/Transport';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="pt-16">
        <Hero />
        <About />
        <TravelGuide />
        <Hotels />
        <Transport />
      </main>
      <Footer />
    </div>
  );
}

export default App;