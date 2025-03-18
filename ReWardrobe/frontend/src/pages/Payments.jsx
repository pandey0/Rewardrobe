import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom"; // For navigation and accessing passed state

const PaymentPage = () => {
  const { state } = useLocation(); // Accessing passed data from PlaceOrder
  const { cart, deliveryInfo, totalcartvalue } = state || {};
  const navigate = useNavigate();

  const [qrCode, setQrCode] = useState(null);
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState(null);
  const [transactionId, setTransactionId] = useState(null);
  const [utrNumber, setUtrNumber] = useState("");
  const [screenshot, setScreenshot] = useState(null);

  // Function to generate the UPI QR code
  const fetchPaymentQrCode = async () => {
    setIsProcessingPayment(true);
    try {
      const response = await fetch("http://localhost:5000/generate_upi_qr", {
        method: "POST",
        body: JSON.stringify({ amount: totalcartvalue }),
        headers: { "Content-Type": "application/json" },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      if (data && data.qrCodeUrl) {
        setQrCode(data.qrCodeUrl);  // Directly set the base64 image URL
        setTransactionId(data.transactionId || "txn1234567890");  // Simulated transaction ID
      } else {
        console.error("Failed to fetch QR code");
      }
    } catch (error) {
      console.error("Error fetching QR code:", error);
      alert("Failed to fetch QR code. Please try again later.");
    } finally {
      setIsProcessingPayment(false);
    }
  };

  // Fetch QR Code when the page loads
  useEffect(() => {
    fetchPaymentQrCode();
  }, []);

  // Function to handle screenshot file change
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setScreenshot(file);
    }
  };

  // Function to verify payment status
  const verifyPayment = async (transactionId) => {
    if (!utrNumber || !screenshot) {
      alert("Please enter the UTR number and upload the screenshot.");
      return;
    }

    // Create FormData object to send both UTR number and screenshot
    const formData = new FormData();
    formData.append("transaction_id", transactionId);
    formData.append("utr_number", utrNumber);
    formData.append("screenshot", screenshot);

    try {
      const response = await fetch("http://localhost:5000/verify_payment", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      if (data.status === "success") {
        setPaymentStatus("Payment Successful!");
        // Redirect to orders page after 3 seconds
        setTimeout(() => {
          navigate("/orders");
        }, 3000);
      } else {
        setPaymentStatus("Payment Failed. Please try again.");
      }
    } catch (error) {
      setPaymentStatus("Error verifying payment.");
    }
  };

  return (
    <div className="container mx-auto py-10 px-4">
      <h2 className="text-2xl font-semibold text-center mb-6">Payment</h2>
      
      {/* QR Code Section */}
      <div className="flex justify-center mt-6 p-4 border rounded-md">
        <div className="text-center">
          <h3 className="font-semibold">Scan the QR Code to Pay</h3>
          {qrCode ? (
            <img
              src={qrCode}
              alt="UPI Payment QR Code"
              className="mt-4 max-w-xs mx-auto" // Adjusting QR code size
            />
          ) : (
            <div>Loading QR Code...</div>
          )}
        </div>
      </div>

      {/* Payment Status */}
      {isProcessingPayment && <p className="mt-4 text-center">Processing payment, please wait...</p>}
      {paymentStatus && <p className="mt-4 text-center">{paymentStatus}</p>}

      {/* UTR Number Input */}
      <div className="mt-6">
        <label className="block mb-2">Enter UTR Number:</label>
        <input
          type="text"
          value={utrNumber}
          onChange={(e) => setUtrNumber(e.target.value)}
          placeholder="Enter UTR Number"
          className="w-full p-3 border rounded-md"
          required
        />
      </div>

      {/* Screenshot Upload Section */}
      <div className="mt-6">
        <label className="block mb-2">Upload Screenshot:</label>
        <input
          type="file"
          onChange={handleFileChange}
          accept="image/*"
          className="w-full p-3 border rounded-md"
          required
        />
      </div>

      {/* Verify Payment Button */}
      <div className="mt-6">
        <button
          onClick={() => verifyPayment(transactionId)}
          className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700"
        >
          Verify Payment (Simulate)
        </button>
      </div>
    </div>
  );
};

export default PaymentPage;
