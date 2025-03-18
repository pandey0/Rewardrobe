const cloudinary = require('cloudinary').v2;

const connectCloudinary = async () => {
  try {
    cloudinary.config({
      cloud_name: "dfv8gbjn8",
      api_key: "323431387639111",
      api_secret: "4JVPlTEHWTcOMFDcIBY0xF_pQS8",
     
    });

    console.log('Connected to Cloudinary successfully!');
  } catch (err) {
    console.error('Error connecting to Cloudinary:', err.message);
    throw new Error('Failed to connect to Cloudinary'); // Throwing an error to handle it where the function is invoked
  }
};

module.exports = connectCloudinary;