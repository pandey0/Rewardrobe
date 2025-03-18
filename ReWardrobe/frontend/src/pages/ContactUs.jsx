import React, { useState } from 'react';

const ContactUsPage = () => {
  // State to handle form input values
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // Handle form input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Normally here you would handle the form submission, such as sending it to an API or email
    alert('Your message has been sent!');
    setFormData({ name: '', email: '', message: '' }); // Reset the form
  };

  return (
    <div className="min-h-screen font-poppins">
      {/* Hero Section */}
      <section className="relative p-10">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl text-gray-800">Contact Us</h1>
          <p className="text-xl text-gray-600 mt-2">We’d love to hear from you! Whether you have a question, feedback, or need assistance, we’re here to help.</p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-12 px-6">
        <div className="max-w-3xl mx-auto bg-white p-8 shadow-lg">
          <h2 className="text-3xl text-gray-800 text-center">Get in Touch</h2>
          <form onSubmit={handleSubmit} className="mt-8 space-y-6">
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-gray-700">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 mt-2 border border-gray-300"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 mt-2 border border-gray-300"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 mt-2 border border-gray-300"
                  rows="6"
                  required
                ></textarea>
              </div>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="bg-green-600 text-white px-8 py-3 hover:bg-green-700"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-12 bg-gray-50 text-center">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl text-gray-800">Our Contact Information</h2>
          <p className="text-lg text-gray-600 mt-4">Have a question? Get in touch with us!</p>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-16">
            <div>
              <h3 className="text-2xl text-gray-800">Email</h3>
              <p className="text-gray-600 mt-2">support@rewardrobe.com</p>
            </div>
            <div>
              <h3 className="text-2xl text-gray-800">Phone</h3>
              <p className="text-gray-600 mt-2">+1 800 123 4567</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUsPage;
