import React from 'react';
import { Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

const races = [
  { round: 1, name: "Bahrain Grand Prix", date: "March 2, 2024", circuit: "Bahrain International Circuit" },
  { round: 2, name: "Saudi Arabian Grand Prix", date: "March 9, 2024", circuit: "Jeddah Corniche Circuit" },
  { round: 3, name: "Australian Grand Prix", date: "March 24, 2024", circuit: "Albert Park Circuit" },
  { round: 4, name: "Japanese Grand Prix", date: "April 7, 2024", circuit: "Suzuka International Racing Course" },
];

const RaceCalendar = () => {
  return (
    <section id="calendar" className="py-24 bg-[#0a0a0a] relative overflow-hidden">
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative"
      >
        <div className="text-center mb-16">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100 }}
          >
            <Calendar className="w-16 h-16 text-indigo-500 mx-auto mb-6" />
          </motion.div>
          <h2 className="text-4xl font-bold text-white mb-4">2024 Race Calendar</h2>
          <p className="text-xl text-gray-400">Upcoming Formula 1 races around the world</p>
        </div>
        <div className="grid gap-8 lg:grid-cols-2">
          {races.map((race, index) => (
            <motion.div
              key={race.round}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="glass-effect rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/10"
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">{race.name}</h3>
                  <p className="text-gray-400 mb-2">{race.circuit}</p>
                  <p className="text-indigo-400 font-semibold">{race.date}</p>
                </div>
                <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-bold racing-gradient text-white">
                  Round {race.round}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default RaceCalendar;