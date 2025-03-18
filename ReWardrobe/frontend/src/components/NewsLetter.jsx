import React, { useState } from 'react';
import { FaEnvelope } from 'react-icons/fa';
import Title from './Title'; // Import Title component

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic email validation
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!email) {
      setError('Please enter an email address.');
      setSuccess('');
      return;
    }
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address.');
      setSuccess('');
      return;
    }

    // Simulating a successful form submission
    setSuccess('Thank you for subscribing!');
    setError('');

    // Reset email field
    setEmail('');

    // Clear success and error messages after 3 seconds
    setTimeout(() => {
      setSuccess('');
      setError('');
    }, 3000);
  };

  return (
    <section className="py-8 font-poppins">
      <div className="container mx-auto text-center px-4">
        {/* Using Title component for section heading */}
        <Title text1="Stay" text2="Updated" />

        <div className="max-w-lg mx-auto text-center">
          <p className="text-lg text-gray-600 mb-6">Subscribe to our newsletter for the latest updates and offers.</p>

          {/* Newsletter Form */}
          <form onSubmit={handleSubmit} className="flex items-center justify-center space-x-3">
            <div className="flex-1">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email to stay updated"
                className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <button
              type="submit"
              className={`bg-green-600 text-white px-6 py-2 text-xl hover:bg-green-700 transition duration-300 ${!email || !/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(email) ? 'opacity-50 cursor-not-allowed' : ''}`}
              disabled={!email || !/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(email)}
            >
              <FaEnvelope className="inline-block mr-2" />
              Subscribe
            </button>
          </form>

          {/* Error and Success Messages */}
          {error && <p className="text-red-600 mt-3">{error}</p>}
          {success && <p className="text-green-600 mt-3">{success}</p>}
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
