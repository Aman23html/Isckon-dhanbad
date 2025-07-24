import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const DonationPaymentPage = () => {
  const { seva, amount } = useParams();
  const navigate = useNavigate();
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('donationCart')) || [];

    // Check if seva with same amount exists, if yes increase quantity
    const existingItemIndex = storedCart.findIndex(
      (item) => item.seva === seva && item.amount === parseInt(amount)
    );

    if (existingItemIndex !== -1) {
      storedCart[existingItemIndex].quantity += 1;
    } else {
      storedCart.push({
        seva,
        amount: parseInt(amount),
        quantity: 1,
        image: `/Donation/donation1.png`, // Ideally pass image based on seva
      });
    }

    setCart(storedCart);
    localStorage.setItem('donationCart', JSON.stringify(storedCart));
  }, [seva, amount]);

  const handleQuantityChange = (index, newQty) => {
    const updatedCart = [...cart];
    updatedCart[index].quantity = parseInt(newQty);
    setCart(updatedCart);
    localStorage.setItem('donationCart', JSON.stringify(updatedCart));
  };

  const handleRemove = (index) => {
    const updatedCart = cart.filter((_, i) => i !== index);
    setCart(updatedCart);
    localStorage.setItem('donationCart', JSON.stringify(updatedCart));
  };

  const getTotal = () =>
    cart.reduce((total, item) => total + item.amount * item.quantity, 0);

  const goToCheckout = () => {
    navigate('/');
  };

  return (
    <div className="p-6 max-w-5xl mx-auto bg-white rounded-lg shadow-lg">
      <div className="mb-4 bg-green-100 border border-green-300 text-sm p-3 rounded">
        “Donation for <strong>{seva}</strong>” of ₹{amount} added to your cart. 😊
        <button
          onClick={() => navigate('/donate')}
          className="ml-4 text-blue-500 underline"
        >
          Continue Seva
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Cart Items */}
        <div className="md:col-span-2">
          <div className="border rounded overflow-hidden">
            <div className="bg-gray-100 px-4 py-2 font-bold grid grid-cols-5">
              <span className="col-span-2">Seva</span>
              <span>Qty</span>
              <span>Subtotal</span>
              <span>Edit</span>
            </div>
            {cart.map((item, index) => (
              <div key={index} className="flex items-center px-4 py-4 border-t">
                <img src={item.image} alt="Donation" className="w-16 h-16 rounded" />
                <div className="flex-1 ml-4">
                  <div className="font-semibold">{item.seva}</div>
                  <div className="text-sm text-gray-600">₹{item.amount}</div>
                </div>
                <div className="w-20 text-center">
                  <input
                    type="number"
                    value={item.quantity}
                    onChange={(e) => handleQuantityChange(index, e.target.value)}
                    min={1}
                    className="w-16 border rounded text-center"
                  />
                </div>
                <div className="w-24 text-center font-semibold text-amber-700">
                  ₹{item.amount * item.quantity}
                </div>
                <div className="w-20 text-center">
                  <button
                    onClick={() => handleRemove(index)}
                    className="text-red-600 hover:underline"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Summary */}
        <div className="border rounded p-4 bg-gray-50 shadow">
          <h3 className="text-lg font-semibold mb-3">Cart Totals</h3>
          <div className="flex justify-between mb-2">
            <span>Subtotal</span>
            <span>₹{getTotal().toLocaleString()}</span>
          </div>
          <div className="flex justify-between font-semibold border-t pt-2">
            <span>Total</span>
            <span>₹{getTotal().toLocaleString()}</span>
          </div>
          <button
            onClick={goToCheckout}
            className="w-full mt-4 bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            Proceed to Payment
          </button>
        </div>
      </div>
    </div>
  );
};

export default DonationPaymentPage;
