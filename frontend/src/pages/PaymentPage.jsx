import React from "react";
import Navbar from "../components/Navbar";
import Button from "../components/Button";

const PaymentPage = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <div className="px-6 md:px-12 py-16 flex justify-center">
        <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
            <h1 className="text-3xl font-bold mb-4">Complete Your Payment</h1>
            <p className="text-slate-400 mb-8">
              Secure your subscription and unlock premium interview features.
            </p>

            <form className="space-y-5">
              <div>
                <label className="block mb-2 text-sm text-slate-300">Cardholder Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-3 outline-none"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm text-slate-300">Card Number</label>
                <input
                  type="text"
                  placeholder="1234 5678 9012 3456"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-3 outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-5">
                <div>
                  <label className="block mb-2 text-sm text-slate-300">Expiry Date</label>
                  <input
                    type="text"
                    placeholder="MM/YY"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-3 outline-none"
                  />
                </div>

                <div>
                  <label className="block mb-2 text-sm text-slate-300">CVV</label>
                  <input
                    type="password"
                    placeholder="123"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-3 outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block mb-2 text-sm text-slate-300">Billing Email</label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-3 outline-none"
                />
              </div>

              <Button text="Pay Now" className="w-full mt-4 bg-emerald-600 hover:bg-emerald-700" />
            </form>
          </div>

          <div className="space-y-6">
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
              <h2 className="text-2xl font-bold mb-5">Order Summary</h2>

              <div className="space-y-4 text-slate-300">
                <div className="flex justify-between">
                  <span>Plan</span>
                  <span className="font-semibold">Pro Monthly</span>
                </div>
                <div className="flex justify-between">
                  <span>Price</span>
                  <span>₹499</span>
                </div>
                <div className="flex justify-between">
                  <span>GST</span>
                  <span>₹89</span>
                </div>
                <div className="border-t border-white/10 pt-4 flex justify-between text-lg font-bold">
                  <span>Total</span>
                  <span className="text-blue-400">₹588</span>
                </div>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
              <h2 className="text-xl font-semibold mb-4">What You’ll Unlock</h2>
              <div className="space-y-3 text-slate-300">
                <p>• Unlimited AI mock interviews</p>
                <p>• Advanced performance analytics</p>
                <p>• Resume-based interview generation</p>
                <p>• Personalized improvement suggestions</p>
                <p>• Priority support</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;