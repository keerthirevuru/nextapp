"use client";
import { useState, useEffect } from 'react';

const GSTcalculator = () => {
  const [amount, setAmount] = useState('');
  const [gstRate, setGstRate] = useState('5');
  const [taxType, setTaxType] = useState('exclusive');
  const [gstAmount, setGstAmount] = useState('0.00');
  const [totalAmount, setTotalAmount] = useState('0.00');
  const [actualAmount, setActualAmount] = useState('');

  useEffect(() => {
    calculateGST();
  }, [amount, gstRate, taxType]);

  const calculateGST = () => {
    const amt = parseFloat(amount);
    const rate = parseFloat(gstRate) / 100;

    if (!isNaN(amt) && !isNaN(rate)) {
      let gstAmt, totalAmt, actAmt;

      if (taxType === 'exclusive') {
        gstAmt = amt * rate;
        totalAmt = amt + gstAmt;
        actAmt = amt;
      } else {
        gstAmt = (amt * rate) / (1 + rate);
        totalAmt = amt;
        actAmt = amt - gstAmt;
      }

      setGstAmount(gstAmt.toFixed(2));
      setTotalAmount(totalAmt.toFixed(2));
      setActualAmount(actAmt.toFixed(2));
    } else {
      resetAmounts();
    }
  };

  const resetAmounts = () => {
    setGstAmount('0.00');
    setTotalAmount('0.00');
    setActualAmount('');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-lightgreen w-full h-1/2 flex flex-col items-center justify-center">
        <h1 className="text-blue-600 text-4xl font-bold">GST Calculator</h1>
        <p className="text-black text-2xl text-center px-4">
          Rekonsys introduces a free GST calculator made just for small businesses !! with this tool, you will be able to calculate GST in minutes without any complex math
        </p>
      </div>
      <div className="bg-gray-700 mt-10 p-6 rounded-lg shadow-lg w-11/12 max-w-xl">
        <div className="mb-4">
          <label className="text-white block mb-2 text-lg">Enter Amount:</label>
          <input
            type="number"
            className="w-full p-2 border rounded-md"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="text-white block mb-2 text-lg">Select GST Rate (%):</label>
          <select
            className="w-full p-2 border rounded-md"
            value={gstRate}
            onChange={(e) => setGstRate(e.target.value)}
          >
            <option value="2">2%</option>
            <option value="5">5%</option>
            <option value="8">8%</option>
            <option value="12">12%</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="text-white block mb-2 text-lg">Tax Type:</label>
          <select
            className="w-full p-2 border rounded-md"
            value={taxType}
            onChange={(e) => setTaxType(e.target.value)}
          >
            <option value="exclusive">Exclusive</option>
            <option value="inclusive">Inclusive</option>
          </select>
        </div>
      </div>
      <div className="bg-white mt-8 p-6 rounded-lg shadow-lg w-11/12 max-w-xl">
        <div className="flex justify-around items-center">
          <div className="text-center">
            <p className="text-2xl font-bold">₹ {taxType === 'exclusive' ? amount : actualAmount}</p>
            <p className="text-lg">Actual Amount</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold">+</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold">₹ {gstAmount}</p>
            <p className="text-lg">GST Amount</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold">=</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold">₹ {totalAmount}</p>
            <p className="text-lg">Total Amount</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GSTcalculator;
