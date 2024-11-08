import React, { useState } from 'react';
import { Trophy, Calendar, Users2, Car, ChevronRight, Menu, X } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import RaceCalendar from './components/RaceCalendar';
import Teams from './components/Teams';
import Standings from './components/Standings';
import Footer from './components/Footer';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <div className="fixed inset-0 bg-[url('https://www.amalgamcollection.com/cdn/shop/files/M6245-RedBullRB181-4scale-MarketingPhotoinBlack_15_EDIT_grande.jpg?v=1705578909?auto=format&fit=crop&q=80')] bg-cover bg-center bg-no-repeat opacity-20"></div>
      <div className="relative">
        <Navbar mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
        <main>
          <Hero />
          <RaceCalendar />
          <Teams />
          <Standings />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;