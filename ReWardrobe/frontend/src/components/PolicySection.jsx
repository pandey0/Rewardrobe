import React from 'react';
import { FaRecycle, FaShieldAlt, FaExchangeAlt, FaPeopleCarry, FaLock, FaHandHoldingHeart } from 'react-icons/fa';

const PolicySection = () => {
  return (
    <section className="py-8 font-poppins">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Sustainability Policy */}
          <div className="policy-card bg-white shadow-lg hover:shadow-xl p-6 text-center rounded-lg transition-all duration-300">
            <FaRecycle className="text-3xl text-green-600 mb-3 mx-auto transition-transform transform hover:scale-125" />
            <h3 className="text-lg text-gray-800 mb-2">Sustainability</h3>
            <p className="text-sm text-gray-600">
              At ReWardrobe, we promote sustainable fashion by reusing quality clothing and minimizing waste.
            </p>
          </div>

          {/* Quality Assurance */}
          <div className="policy-card bg-white shadow-lg hover:shadow-xl p-6 text-center rounded-lg transition-all duration-300">
            <FaShieldAlt className="text-3xl text-blue-600 mb-3 mx-auto transition-transform transform hover:scale-125" />
            <h3 className="text-lg text-gray-800 mb-2">Quality Assurance</h3>
            <p className="text-sm text-gray-600">
              Each item is rigorously checked to ensure it meets our high standards before reaching your wardrobe.
            </p>
          </div>

          {/* Refund and Exchange Policy */}
          <div className="policy-card bg-white shadow-lg hover:shadow-xl p-6 text-center rounded-lg transition-all duration-300">
            <FaExchangeAlt className="text-3xl text-yellow-600 mb-3 mx-auto transition-transform transform hover:scale-125" />
            <h3 className="text-lg text-gray-800 mb-2">Refund & Exchange</h3>
            <p className="text-sm text-gray-600">
              Enjoy hassle-free returns and exchanges within 14 days for eligible items.
            </p>
          </div>

          {/* Transparency in Selling */}
          <div className="policy-card bg-white shadow-lg hover:shadow-xl p-6 text-center rounded-lg transition-all duration-300">
            <FaPeopleCarry className="text-3xl text-orange-600 mb-3 mx-auto transition-transform transform hover:scale-125" />
            <h3 className="text-lg text-gray-800 mb-2">Selling Transparency</h3>
            <p className="text-sm text-gray-600">
              Sell with ease, get fair pricing, and quick payouts with no hidden fees.
            </p>
          </div>

          {/* Community & Ethical Practices */}
          <div className="policy-card bg-white shadow-lg hover:shadow-xl p-6 text-center rounded-lg transition-all duration-300">
            <FaHandHoldingHeart className="text-3xl text-pink-600 mb-3 mx-auto transition-transform transform hover:scale-125" />
            <h3 className="text-lg text-gray-800 mb-2">Community & Ethics</h3>
            <p className="text-sm text-gray-600">
              Join our community supporting conscious fashion choices and ethical practices.
            </p>
          </div>

          {/* Privacy & Security */}
          <div className="policy-card bg-white shadow-lg hover:shadow-xl p-6 text-center rounded-lg transition-all duration-300">
            <FaLock className="text-3xl text-purple-600 mb-3 mx-auto transition-transform transform hover:scale-125" />
            <h3 className="text-lg text-gray-800 mb-2">Privacy & Security</h3>
            <p className="text-sm text-gray-600">
              We prioritize your trust with secure transactions and advanced data encryption.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PolicySection;
