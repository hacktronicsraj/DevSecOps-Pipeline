import React from 'react';
import { Trophy } from 'lucide-react';
import { motion } from 'framer-motion';
import { Tab } from '@headlessui/react';

const drivers = [
  { position: 1, name: "Max Verstappen", points: 393, team: "Red Bull Racing" },
  { position: 2, name: "Lando Norris", points: 331, team: "Mclaren F1" },
  { position: 3, name: "Charles Leclrec", points: 307, team: "Ferrari Racing" },
  { position: 4, name: "Oscar Piastri", points: 282, team: "Mclaren F1" },
];

const constructors = [
  { position: 1, name: "Red Bull Racing", points: 860 },
  { position: 2, name: "Mercedes", points: 409 },
  { position: 3, name: "Ferrari", points: 406 },
  { position: 4, name: "McLaren", points: 302 },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

const Standings = () => {
  return (
    <section id="standings" className="py-24 bg-white">
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
            <Trophy className="w-16 h-16 text-red-600 mx-auto mb-6" />
          </motion.div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Championship Standings</h2>
          <p className="text-xl text-gray-600">Current standings for the 2024 season</p>
        </div>

        <Tab.Group>
          <Tab.List className="flex space-x-4 rounded-xl bg-gray-100 p-1 max-w-md mx-auto mb-12">
            <Tab
              className={({ selected }) =>
                classNames(
                  'w-full rounded-lg py-3 text-sm font-medium leading-5',
                  'ring-white ring-opacity-60 ring-offset-2 ring-offset-red-400 focus:outline-none focus:ring-2',
                  selected
                    ? 'bg-white shadow text-red-600'
                    : 'text-gray-600 hover:bg-white/[0.12] hover:text-red-600'
                )
              }
            >
              Drivers
            </Tab>
            <Tab
              className={({ selected }) =>
                classNames(
                  'w-full rounded-lg py-3 text-sm font-medium leading-5',
                  'ring-white ring-opacity-60 ring-offset-2 ring-offset-red-400 focus:outline-none focus:ring-2',
                  selected
                    ? 'bg-white shadow text-red-600'
                    : 'text-gray-600 hover:bg-white/[0.12] hover:text-red-600'
                )
              }
            >
              Constructors
            </Tab>
          </Tab.List>
          <Tab.Panels>
            <Tab.Panel>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white shadow-lg rounded-2xl overflow-hidden"
              >
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Position</th>
                      <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Driver</th>
                      <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Team</th>
                      <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Points</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {drivers.map((driver) => (
                      <motion.tr
                        key={driver.position}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: driver.position * 0.1 }}
                        className="hover:bg-gray-50"
                      >
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={classNames(
                            'inline-flex items-center justify-center w-8 h-8 rounded-full text-sm font-bold',
                            driver.position === 1 ? 'bg-yellow-100 text-yellow-800' :
                            driver.position === 2 ? 'bg-gray-100 text-gray-800' :
                            driver.position === 3 ? 'bg-orange-100 text-orange-800' :
                            'bg-gray-100 text-gray-800'
                          )}>
                            {driver.position}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{driver.name}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{driver.team}</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-red-100 text-red-800">
                            {driver.points} pts
                          </span>
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </motion.div>
            </Tab.Panel>
            <Tab.Panel>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white shadow-lg rounded-2xl overflow-hidden"
              >
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Position</th>
                      <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Constructor</th>
                      <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Points</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {constructors.map((constructor) => (
                      <motion.tr
                        key={constructor.position}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: constructor.position * 0.1 }}
                        className="hover:bg-gray-50"
                      >
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={classNames(
                            'inline-flex items-center justify-center w-8 h-8 rounded-full text-sm font-bold',
                            constructor.position === 1 ? 'bg-yellow-100 text-yellow-800' :
                            constructor.position === 2 ? 'bg-gray-100 text-gray-800' :
                            constructor.position === 3 ? 'bg-orange-100 text-orange-800' :
                            'bg-gray-100 text-gray-800'
                          )}>
                            {constructor.position}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{constructor.name}</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-red-100 text-red-800">
                            {constructor.points} pts
                          </span>
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </motion.div>
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </motion.div>
    </section>
  );
};

export default Standings;