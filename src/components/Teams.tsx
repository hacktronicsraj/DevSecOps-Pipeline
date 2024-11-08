import React from 'react';
import { Users2 } from 'lucide-react';
import { motion } from 'framer-motion';

const teams = [
  {
    name: "Red Bull Racing",
    drivers: "Max Verstappen, Sergio Perez",
    image: "https://cdn-imgix.headout.com/media/images/7c41fd944dc621534a80614c77f44833-Formula%201%20Hungarian%20Grand%20Prix%202.jpg?auto=format&w=1100.16&h=687.6&q=90&fit=crop&ar=16%3A10&crop=faces?auto=format&fit=crop&q=80"
  },
  {
    name: "Ferrari",
    drivers: "Charles Leclerc, Carlos Sainz",
    image: "https://www.formula1.com/content/dam/fom-website/manual/DriverAndTeamImages/2024/2030176836_16by9Centre.jpg?auto=format&fit=crop&q=80"
  },
  {
    name: "Mercedes",
    drivers: "Lewis Hamilton, George Russell",
    image: "https://cdn-8.motorsport.com/images/amp/6D1QKeG0/s1000/george-russell-mercedes-f1-w14.jpg?auto=format&fit=crop&q=80"
  },
  {
    name: "McLaren",
    drivers: "Lando Norris, Oscar Piastri",
    image: "https://www.topgear.com/sites/default/files/news-listicle/image/2022/02/0%20Top%2010%20McLaren%20drivers.jpg?auto=format&fit=crop&q=80"
  }
];

const Teams = () => {
  return (
    <section id="teams" className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="text-center mb-16">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100 }}
          >
            <Users2 className="w-16 h-16 text-red-600 mx-auto mb-6" />
          </motion.div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">F1 Teams</h2>
          <p className="text-xl text-gray-600">The competing teams in the 2024 season</p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {teams.map((team, index) => (
            <motion.div
              key={team.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={team.image}
                  alt={team.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{team.name}</h3>
                <p className="text-gray-600">{team.drivers}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Teams;