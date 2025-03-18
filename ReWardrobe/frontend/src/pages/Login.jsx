import React, { useState, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext'; // Import ShopContext

const Login = () => {
  const [currentState, setCurrentState] = useState('Login');
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });
  const { setIsloggedin } = useContext(ShopContext); // Use context to access setIsloggedin
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let response;
      if (currentState === 'SignUp') {
        response = await axios.post("http://localhost:4000/api/Userauth/signup", formData);
        console.log(response);
        if (response.status === 200) {
          console.log('Sign up successful');
          navigate(0); // Redirect after successful sign-up
        }
      } else {
        response = await axios.post("http://localhost:4000/api/Userauth/signin", formData,{ withCredentials: true });
        if (response.status === 200) {
          console.log('Sign in successful');
          setIsloggedin(true); // Set isLoggedIn to true in context
          navigate('/'); // Redirect to home page after successful login
        }
      }
    } catch (e) {
      console.log(e.response?.data?.message || "An error occurred");
    }
  };

  const toggleState = () => {
    setCurrentState(currentState === 'SignUp' ? 'Login' : 'SignUp');
    setFormData({ username: '', email: '', password: '' }); // Clear form on toggle
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center w-[90%] sm:max-w-[400px] m-auto mt-14 gap-4 text-gray-600 font-poppins">
      <div className="inline-flex items-center gap-2 mb-2 mt-10">
        <p className="prata-regular text-3xl">{currentState}</p>
        <hr className="border-none h-[1.5px] w-8 bg-gray-600" />
      </div>

      {currentState === 'SignUp' && (
        <input
          className="w-full h-12 px-4 py-2 border border-gray-300  focus:outline-none focus:ring-2 focus:ring-violet-900"
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          placeholder="Username"
        />
      )}

      <input
        className="w-full h-12 px-4 py-2 border border-gray-300  focus:outline-none focus:ring-2 focus:ring-violet-900"
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
      />

      <input
        className="w-full h-12 px-4 py-2 border border-gray-300  focus:outline-none focus:ring-2 focus:ring-violet-900"
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="Password"
      />

      <button
        className="w-full h-12 px-4 py-2 border border-gray-300  focus:outline-none focus:ring-2 focus:ring-violet-900"
        type="submit"
      >
        {currentState}
      </button>

      <button
        type="button"
        className="text-violet-900 mt-4"
        onClick={toggleState}
      >
        {currentState === 'SignUp'
          ? 'Already have an account? Log in'
          : "Don't have an account? Sign up"}
      </button>
    </form>
  );
};

export default Login;
