'use client';

import { useState } from 'react';
import Image from 'next/image';
import LocalizedLink from "@/components/ui/LocalizedLink";
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';

// Mock cart data (same as in cart page)
const cartItems = [
  {
    id: 1,
    name: 'Silk Wrap Dress',
    price: 189.99,
    image: 'https://images.unsplash.com/photo-1539008835657-9e8e9680c956?q=80&w=1000&auto=format&fit=crop',
    color: 'Burgundy',
    size: 'M',
    quantity: 1,
  },
  {
    id: 2,
    name: 'Leather Tote Bag',
    price: 149.99,
    image: 'https://images.unsplash.com/photo-1591561954557-26941169b49e?q=80&w=1000&auto=format&fit=crop',
    color: 'Black',
    size: 'One Size',
    quantity: 1,
  },
];

// Mock user addresses
const userAddresses = [
  {
    id: 1,
    type: 'Shipping',
    name: 'Jane Doe',
    street: '123 Fashion Avenue',
    city: 'New York',
    state: 'NY',
    zipCode: '10001',
    country: 'United States',
    isDefault: true,
  },
  {
    id: 2,
    type: 'Billing',
    name: 'Jane Doe',
    street: '456 Style Street',
    city: 'Los Angeles',
    state: 'CA',
    zipCode: '90001',
    country: 'United States',
    isDefault: true,
  },
];

// Shipping methods
const shippingMethods = [
  {
    id: 'standard',
    name: 'Standard Shipping',
    description: 'Delivery in 3-5 business days',
    price: 0,
  },
  {
    id: 'express',
    name: 'Express Shipping',
    description: 'Delivery in 1-2 business days',
    price: 12.99,
  },
  {
    id: 'overnight',
    name: 'Overnight Shipping',
    description: 'Next day delivery',
    price: 24.99,
  },
];

export default function CheckoutPage() {
  const [activeStep, setActiveStep] = useState(1);
  const [shippingAddress, setShippingAddress] = useState(userAddresses[0]);
  const [billingAddress, setBillingAddress] = useState(userAddresses[1]);
  const [sameAsShipping, setSameAsShipping] = useState(false);
  const [selectedShippingMethod, setSelectedShippingMethod] = useState(shippingMethods[0].id);
  const [paymentMethod, setPaymentMethod] = useState('credit-card');
  const [isProcessing, setIsProcessing] = useState(false);
  
  // Form data for payment
  const [paymentData, setPaymentData] = useState({
    cardNumber: '',
    cardName: '',
    expiryDate: '',
    cvv: '',
  });
  
  // Calculate order summary
  const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  const shipping = shippingMethods.find(method => method.id === selectedShippingMethod)?.price || 0;
  const tax = subtotal * 0.08; // 8% tax rate
  const total = subtotal + shipping + tax;
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPaymentData({
      ...paymentData,
      [name]: value,
    });
  };
  
  const handleShippingMethodChange = (methodId: string) => {
    setSelectedShippingMethod(methodId);
  };
  
  const handlePaymentMethodChange = (method: string) => {
    setPaymentMethod(method);
  };
  
  const handleSameAsShippingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSameAsShipping(e.target.checked);
    if (e.target.checked) {
      setBillingAddress(shippingAddress);
    } else {
      setBillingAddress(userAddresses[1]);
    }
  };
  
  const handleContinue = () => {
    setActiveStep(activeStep + 1);
    window.scrollTo(0, 0);
  };
  
  const handleBack = () => {
    setActiveStep(activeStep - 1);
    window.scrollTo(0, 0);
  };
  
  const handlePlaceOrder = async () => {
    setIsProcessing(true);
    
    // Simulate API call
    try {
      // In a real app, this would submit the order to the backend
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Redirect to order confirmation page
      window.location.href = '/checkout/confirmation';
    } catch (error) {
      console.error('Error placing order:', error);
      setIsProcessing(false);
    }
  };
  
  return (
    <div className="g-container py-12">
      <h1 className="g-heading text-3xl mb-8">Checkout</h1>
      
      {/* Checkout steps */}
      <div className="mb-8">
        <div className="flex items-center justify-between max-w-2xl mx-auto">
          <div className={`flex flex-col items-center ${activeStep >= 1 ? 'text-primary' : 'text-neutral-400'}`}>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center mb-2 ${
              activeStep >= 1 ? 'bg-primary text-white' : 'bg-neutral-200 text-neutral-600'
            }`}>
              1
            </div>
            <span className="text-sm">Shipping</span>
          </div>
          
          <div className={`flex-grow border-t ${activeStep >= 2 ? 'border-primary' : 'border-neutral-200'}`}></div>
          
          <div className={`flex flex-col items-center ${activeStep >= 2 ? 'text-primary' : 'text-neutral-400'}`}>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center mb-2 ${
              activeStep >= 2 ? 'bg-primary text-white' : 'bg-neutral-200 text-neutral-600'
            }`}>
              2
            </div>
            <span className="text-sm">Payment</span>
          </div>
          
          <div className={`flex-grow border-t ${activeStep >= 3 ? 'border-primary' : 'border-neutral-200'}`}></div>
          
          <div className={`flex flex-col items-center ${activeStep >= 3 ? 'text-primary' : 'text-neutral-400'}`}>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center mb-2 ${
              activeStep >= 3 ? 'bg-primary text-white' : 'bg-neutral-200 text-neutral-600'
            }`}>
              3
            </div>
            <span className="text-sm">Review</span>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main checkout form */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-md shadow-soft p-6">
            {/* Step 1: Shipping */}
            {activeStep === 1 && (
              <div>
                <h2 className="text-xl font-medium mb-6">Shipping Information</h2>
                
                <div className="mb-8">
                  <h3 className="font-medium mb-4">Shipping Address</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    {userAddresses.map((address) => (
                      <div 
                        key={address.id}
                        className={`border rounded-md p-4 cursor-pointer ${
                          shippingAddress.id === address.id ? 'border-primary bg-primary/5' : 'border-neutral-200'
                        }`}
                        onClick={() => setShippingAddress(address)}
                      >
                        <div className="flex justify-between items-start mb-2">
                          <div className="flex items-center">
                            <input
                              type="radio"
                              checked={shippingAddress.id === address.id}
                              onChange={() => setShippingAddress(address)}
                              className="text-primary focus:ring-primary mr-2"
                            />
                            <h4 className="font-medium">{address.type}</h4>
                          </div>
                          {address.isDefault && (
                            <span className="text-xs bg-primary/20 text-primary px-2 py-0.5 rounded-full">
                              Default
                            </span>
                          )}
                        </div>
                        
                        <div className="text-neutral-700 pl-5">
                          <p>{address.name}</p>
                          <p>{address.street}</p>
                          <p>{address.city}, {address.state} {address.zipCode}</p>
                          <p>{address.country}</p>
                        </div>
                      </div>
                    ))}
                    
                    <div className="border border-dashed border-neutral-300 rounded-md p-4 flex flex-col items-center justify-center text-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-neutral-400 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      </svg>
                      <h4 className="font-medium mb-1">Add New Address</h4>
                      <p className="text-sm text-neutral-600">Add a new shipping address</p>
                    </div>
                  </div>
                </div>
                
                <div className="mb-8">
                  <h3 className="font-medium mb-4">Shipping Method</h3>
                  
                  <div className="space-y-4">
                    {shippingMethods.map((method) => (
                      <div 
                        key={method.id}
                        className={`border rounded-md p-4 cursor-pointer ${
                          selectedShippingMethod === method.id ? 'border-primary bg-primary/5' : 'border-neutral-200'
                        }`}
                        onClick={() => handleShippingMethodChange(method.id)}
                      >
                        <div className="flex justify-between items-center">
                          <div className="flex items-center">
                            <input
                              type="radio"
                              checked={selectedShippingMethod === method.id}
                              onChange={() => handleShippingMethodChange(method.id)}
                              className="text-primary focus:ring-primary mr-3"
                            />
                            <div>
                              <h4 className="font-medium">{method.name}</h4>
                              <p className="text-sm text-neutral-600">{method.description}</p>
                            </div>
                          </div>
                          <div className="font-medium">
                            {method.price === 0 ? 'Free' : `$${method.price.toFixed(2)}`}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="flex justify-between mt-8">
                  <Button variant="secondary" href="/cart">
                    Back to Cart
                  </Button>
                  <Button variant="primary" onClick={handleContinue}>
                    Continue to Payment
                  </Button>
                </div>
              </div>
            )}
            
            {/* Step 2: Payment */}
            {activeStep === 2 && (
              <div>
                <h2 className="text-xl font-medium mb-6">Payment Information</h2>
                
                <div className="mb-8">
                  <h3 className="font-medium mb-4">Billing Address</h3>
                  
                  <div className="mb-4">
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        checked={sameAsShipping}
                        onChange={handleSameAsShippingChange}
                        className="rounded text-primary focus:ring-primary mr-2"
                      />
                      <span className="text-neutral-700">Same as shipping address</span>
                    </label>
                  </div>
                  
                  {!sameAsShipping && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      {userAddresses.map((address) => (
                        <div 
                          key={address.id}
                          className={`border rounded-md p-4 cursor-pointer ${
                            billingAddress.id === address.id ? 'border-primary bg-primary/5' : 'border-neutral-200'
                          }`}
                          onClick={() => setBillingAddress(address)}
                        >
                          <div className="flex justify-between items-start mb-2">
                            <div className="flex items-center">
                              <input
                                type="radio"
                                checked={billingAddress.id === address.id}
                                onChange={() => setBillingAddress(address)}
                                className="text-primary focus:ring-primary mr-2"
                              />
                              <h4 className="font-medium">{address.type}</h4>
                            </div>
                            {address.isDefault && (
                              <span className="text-xs bg-primary/20 text-primary px-2 py-0.5 rounded-full">
                                Default
                              </span>
                            )}
                          </div>
                          
                          <div className="text-neutral-700 pl-5">
                            <p>{address.name}</p>
                            <p>{address.street}</p>
                            <p>{address.city}, {address.state} {address.zipCode}</p>
                            <p>{address.country}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                
                <div className="mb-8">
                  <h3 className="font-medium mb-4">Payment Method</h3>
                  
                  <div className="space-y-4 mb-6">
                    <div 
                      className={`border rounded-md p-4 cursor-pointer ${
                        paymentMethod === 'credit-card' ? 'border-primary bg-primary/5' : 'border-neutral-200'
                      }`}
                      onClick={() => handlePaymentMethodChange('credit-card')}
                    >
                      <div className="flex items-center mb-4">
                        <input
                          type="radio"
                          checked={paymentMethod === 'credit-card'}
                          onChange={() => handlePaymentMethodChange('credit-card')}
                          className="text-primary focus:ring-primary mr-3"
                        />
                        <h4 className="font-medium">Credit / Debit Card</h4>
                      </div>
                      
                      {paymentMethod === 'credit-card' && (
                        <div className="pl-6">
                          <div className="flex space-x-2 mb-4">
                            <div className="w-10 h-6 bg-neutral-200 rounded"></div>
                            <div className="w-10 h-6 bg-neutral-200 rounded"></div>
                            <div className="w-10 h-6 bg-neutral-200 rounded"></div>
                            <div className="w-10 h-6 bg-neutral-200 rounded"></div>
                          </div>
                          
                          <div className="space-y-4">
                            <Input
                              label="Card Number"
                              name="cardNumber"
                              type="text"
                              placeholder="1234 5678 9012 3456"
                              value={paymentData.cardNumber}
                              onChange={handleInputChange}
                              required
                            />
                            
                            <Input
                              label="Cardholder Name"
                              name="cardName"
                              type="text"
                              placeholder="John Doe"
                              value={paymentData.cardName}
                              onChange={handleInputChange}
                              required
                            />
                            
                            <div className="grid grid-cols-2 gap-4">
                              <Input
                                label="Expiry Date"
                                name="expiryDate"
                                type="text"
                                placeholder="MM/YY"
                                value={paymentData.expiryDate}
                                onChange={handleInputChange}
                                required
                              />
                              
                              <Input
                                label="CVV"
                                name="cvv"
                                type="text"
                                placeholder="123"
                                value={paymentData.cvv}
                                onChange={handleInputChange}
                                required
                              />
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                    
                    <div 
                      className={`border rounded-md p-4 cursor-pointer ${
                        paymentMethod === 'paypal' ? 'border-primary bg-primary/5' : 'border-neutral-200'
                      }`}
                      onClick={() => handlePaymentMethodChange('paypal')}
                    >
                      <div className="flex items-center">
                        <input
                          type="radio"
                          checked={paymentMethod === 'paypal'}
                          onChange={() => handlePaymentMethodChange('paypal')}
                          className="text-primary focus:ring-primary mr-3"
                        />
                        <h4 className="font-medium">PayPal</h4>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-between mt-8">
                  <Button variant="secondary" onClick={handleBack}>
                    Back to Shipping
                  </Button>
                  <Button variant="primary" onClick={handleContinue}>
                    Review Order
                  </Button>
                </div>
              </div>
            )}
            
            {/* Step 3: Review */}
            {activeStep === 3 && (
              <div>
                <h2 className="text-xl font-medium mb-6">Review Your Order</h2>
                
                <div className="mb-8">
                  <h3 className="font-medium mb-4">Items</h3>
                  
                  <div className="space-y-4">
                    {cartItems.map((item) => (
                      <div key={item.id} className="flex items-center">
                        <div className="relative w-16 h-16 flex-shrink-0">
                          <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            style={{ objectFit: "cover" }}
                            className="rounded-md"
                          />
                        </div>
                        <div className="ml-4 flex-grow">
                          <h4 className="font-medium">{item.name}</h4>
                          <div className="text-sm text-neutral-600">
                            <p>Color: {item.color} | Size: {item.size}</p>
                            <p>Qty: {item.quantity}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-medium">${item.price.toFixed(2)}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="font-medium mb-4">Shipping Information</h3>
                    <div className="border border-neutral-200 rounded-md p-4">
                      <h4 className="font-medium mb-2">Shipping Address</h4>
                      <div className="text-neutral-700">
                        <p>{shippingAddress.name}</p>
                        <p>{shippingAddress.street}</p>
                        <p>{shippingAddress.city}, {shippingAddress.state} {shippingAddress.zipCode}</p>
                        <p>{shippingAddress.country}</p>
                      </div>
                      
                      <div className="border-t border-neutral-200 mt-4 pt-4">
                        <h4 className="font-medium mb-2">Shipping Method</h4>
                        <p className="text-neutral-700">
                          {shippingMethods.find(method => method.id === selectedShippingMethod)?.name}
                        </p>
                        <p className="text-sm text-neutral-600">
                          {shippingMethods.find(method => method.id === selectedShippingMethod)?.description}
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-medium mb-4">Payment Information</h3>
                    <div className="border border-neutral-200 rounded-md p-4">
                      <h4 className="font-medium mb-2">Billing Address</h4>
                      <div className="text-neutral-700">
                        <p>{billingAddress.name}</p>
                        <p>{billingAddress.street}</p>
                        <p>{billingAddress.city}, {billingAddress.state} {billingAddress.zipCode}</p>
                        <p>{billingAddress.country}</p>
                      </div>
                      
                      <div className="border-t border-neutral-200 mt-4 pt-4">
                        <h4 className="font-medium mb-2">Payment Method</h4>
                        <p className="text-neutral-700">
                          {paymentMethod === 'credit-card' ? 'Credit / Debit Card' : 'PayPal'}
                        </p>
                        {paymentMethod === 'credit-card' && (
                          <p className="text-sm text-neutral-600">
                            Card ending in {paymentData.cardNumber.slice(-4)}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-between mt-8">
                  <Button variant="secondary" onClick={handleBack}>
                    Back to Payment
                  </Button>
                  <Button 
                    variant="primary" 
                    onClick={handlePlaceOrder}
                    disabled={isProcessing}
                  >
                    {isProcessing ? 'Processing...' : 'Place Order'}
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
        
        {/* Order summary */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-md shadow-soft p-6 sticky top-6">
            <h2 className="font-medium text-xl mb-4">Order Summary</h2>
            
            <div className="space-y-3 mb-6">
              <div className="flex justify-between">
                <span className="text-neutral-600">Subtotal ({cartItems.reduce((total, item) => total + item.quantity, 0)} items)</span>
                <span className="font-medium">${subtotal.toFixed(2)}</span>
              </div>
              
              <div className="flex justify-between">
                <span className="text-neutral-600">Shipping</span>
                <span className="font-medium">
                  {shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}
                </span>
              </div>
              
              <div className="flex justify-between">
                <span className="text-neutral-600">Tax</span>
                <span className="font-medium">${tax.toFixed(2)}</span>
              </div>
              
              <div className="border-t border-neutral-200 pt-3 mt-3">
                <div className="flex justify-between">
                  <span className="font-medium">Total</span>
                  <span className="font-medium text-lg">${total.toFixed(2)}</span>
                </div>
              </div>
            </div>
            
            <div className="border-t border-neutral-200 pt-4">
              <h3 className="font-medium mb-2">Order Details</h3>
              <div className="space-y-2 text-sm">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex justify-between">
                    <span className="text-neutral-600">
                      {item.name} x {item.quantity}
                    </span>
                    <span className="font-medium">${(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}