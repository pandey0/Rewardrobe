import React, { useState } from 'react';

const Orders = () => {
  const [orderId, setOrderId] = useState('');
  const [orderDetails, setOrderDetails] = useState(null);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [error, setError] = useState('');

  // Dummy order data. In a real app, you'd fetch this from an API.
  const mockOrders = [
    {
      id: '123',
      status: 'Shipped',
      date: '2025-01-01',
      items: [
        { name: 'Red T-shirt', quantity: 2, price: 15 },
        { name: 'Blue Jeans', quantity: 1, price: 40 }
      ],
      address: {
        street: '123 Fashion St.',
        city: 'New York',
        state: 'NY',
        zip: '10001'
      },
      totalPrice: 70,
      trackingNumber: 'XYZ12345'
    },
    {
      id: '456',
      status: 'Delivered',
      date: '2024-12-25',
      items: [
        { name: 'Black Hoodie', quantity: 1, price: 30 },
        { name: 'Sneakers', quantity: 1, price: 50 }
      ],
      address: {
        street: '456 Style Ave.',
        city: 'Los Angeles',
        state: 'CA',
        zip: '90001'
      },
      totalPrice: 80,
      trackingNumber: 'ABC45678'
    },
    {
      id: '789',
      status: 'Pending',
      date: '2025-01-02',
      items: [
        { name: 'White Shirt', quantity: 1, price: 20 }
      ],
      address: {
        street: '789 Trend Blvd.',
        city: 'San Francisco',
        state: 'CA',
        zip: '94101'
      },
      totalPrice: 20,
      trackingNumber: 'DEF78901'
    },
  ];

  const handleTrackOrder = () => {
    const order = mockOrders.find(o => o.id === orderId);

    if (order) {
      setOrderDetails(order);
      setError('');
    } else {
      setError('Order not found. Please check the order ID.');
      setOrderDetails(null);
    }
  };

  const toggleOrderDetails = (orderId) => {
    if (selectedOrder?.id === orderId) {
      setSelectedOrder(null); // Close if the same order is clicked again
    } else {
      const order = mockOrders.find(o => o.id === orderId);
      setSelectedOrder(order); // Show the details of the selected order
    }
  };

  return (
    <div className="container mx-auto py-6 font-poppins">
      <h1 className="text-2xl font-semibold mb-4">My Orders</h1>

      {/* Display Selected Order Details */}
      {selectedOrder && (
        <div className="mt-8 p-4 border border-gray-300 rounded-md">
          <h3 className="text-xl font-semibold">Order Details</h3>
          <div className="mt-4">
            <div className="flex justify-between">
              <span><strong>Order ID:</strong> {selectedOrder.id}</span>
              <span><strong>Status:</strong> {selectedOrder.status}</span>
            </div>
            <div className="flex justify-between mt-2">
              <span><strong>Order Date:</strong> {selectedOrder.date}</span>
              <span><strong>Total Price:</strong> ${selectedOrder.totalPrice}</span>
            </div>
            <div className="mt-4">
              <h4 className="font-medium">Shipping Address:</h4>
              <p>{selectedOrder.address.street}</p>
              <p>{selectedOrder.address.city}, {selectedOrder.address.state} {selectedOrder.address.zip}</p>
            </div>
            <div className="mt-4">
              <h4 className="font-medium">Tracking Number:</h4>
              <p>{selectedOrder.trackingNumber}</p>
            </div>
            <div className="mt-4">
              <h4 className="font-medium">Order Contents:</h4>
              <table className="min-w-full border-collapse mt-2">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border p-2 text-left">Item</th>
                    <th className="border p-2 text-left">Quantity</th>
                    <th className="border p-2 text-left">Price</th>
                    <th className="border p-2 text-left">Total</th>
                  </tr>
                </thead>
                <tbody>
                  {selectedOrder.items.map((item, index) => (
                    <tr key={index}>
                      <td className="border p-2">{item.name}</td>
                      <td className="border p-2">{item.quantity}</td>
                      <td className="border p-2">${item.price}</td>
                      <td className="border p-2">${item.quantity * item.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* Display List of Previous Orders */}
      <div className="mt-8">
        <h2 className="text-lg font-medium">Previous Orders</h2>
        <ul className="mt-4 space-y-4">
          {mockOrders.map((order) => (
            <li key={order.id} className="p-4 border border-gray-200 rounded-md cursor-pointer" onClick={() => toggleOrderDetails(order.id)}>
              <div className="flex justify-between">
                <span><strong>Order ID:</strong> {order.id}</span>
                <span><strong>Status:</strong> {order.status}</span>
              </div>
              <div className="flex justify-between mt-2">
                <span><strong>Order Date:</strong> {order.date}</span>
                <span><strong>Total Price:</strong> ${order.totalPrice}</span>
              </div>
              <div className="mt-2">
                <span><strong>Items:</strong> {order.items.length} item(s)</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Orders;
