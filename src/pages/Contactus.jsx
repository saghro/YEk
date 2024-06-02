import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

const Contactus = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-black'}>
      <div className={theme === 'dark' ? 'bg-gray-700 py-16 px-4 sm:px-6 lg:px-8' : 'bg-gray-200 py-16 px-4 sm:px-6 lg:px-8'}>
        <div className="max-w-lg mx-auto text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">CONTACT</h2>
          <p className="mt-4 text-gray-500">PLEASE CONTACT US SO WE CAN HELP YOU</p>
        </div>
      </div>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <p className="text-lg font-semibold">VOUS POUVEZ NOUS CONTACTER À TOUT MOMENT.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <div className="text-center">
            <BuildingIcon className="mx-auto h-12 w-12 text-gray-400" />
            <h3 className="mt-2 text-xl font-bold">AZ HOLDING</h3>
            <p className="mt-1 text-gray-500">
              43 Rue de Auñalny,
              <br />
              95500 Gonesse, France
            </p>
          </div>
          <div className="text-center">
            <PhoneIcon className="mx-auto h-12 w-12 text-gray-400" />
            <h3 className="mt-2 text-xl font-bold">Numéro de téléphone</h3>
            <p className="mt-1 text-gray-500">+33 1 39 85 91 68</p>
          </div>
          <div className="text-center">
            <InboxIcon className="mx-auto h-12 w-12 text-gray-400" />
            <h3 className="mt-2 text-xl font-bold">E-mail</h3>
            <p className="mt-1 text-gray-500">contact@azholding.fr</p>
          </div>
        </div>
        <form className="mt-12 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
          <input
            type="text"
            placeholder="Votre Nom*"
            className="border border-gray-300 p-2 rounded sm:col-span-1"
          />
          <input
            type="text"
            placeholder="Société"
            className="border border-gray-300 p-2 rounded sm:col-span-1"
          />
          <input
            type="email"
            placeholder="Email*"
            className="border border-gray-300 p-2 rounded sm:col-span-1"
          />
          <input
            type="text"
            placeholder="Sujet*"
            className="border border-gray-300 p-2 rounded sm:col-span-1"
          />
          <textarea
            placeholder="Votre Message*"
            className="border border-gray-300 p-2 rounded sm:col-span-2 min-h-[120px]"
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded sm:col-span-2 hover:bg-blue-600 transition"
          >
            ENVOYER
          </button>
        </form>
      </div>
    </div>
  );
}

function BuildingIcon(props) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="16" height="20" x="4" y="2" rx="2" ry="2" />
      <path d="M9 22v-4h6v4" />
      <path d="M8 6h.01" />
      <path d="M16 6h.01" />
      <path d="M12 6h.01" />
      <path d="M12 10h.01" />
      <path d="M12 14h.01" />
      <path d="M16 10h.01" />
      <path d="M16 14h.01" />
      <path d="M8 10h.01" />
      <path d="M8 14h.01" />
    </svg>
  );
}

function InboxIcon(props) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="22 12 16 12 14 15 10 15 8 12 2 12" />
      <path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" />
    </svg>
  );
}

function PhoneIcon(props) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

export default Contactus;
