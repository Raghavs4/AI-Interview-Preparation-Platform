import React from "react";
import Navbar from "../components/Navbar";
import Button from "../components/Button";
import { Link } from "react-router-dom";

const plans = [
  {
    name: "Free",
    price: "₹0",
    desc: "Basic practice for beginners",
    features: [
      "3 mock interviews",
      "Basic AI feedback",
      "Limited history",
    ],
    popular: false,
  },
  {
    name: "Premium",
    price: "₹999/mo",
    desc: "Complete interview preparation",
    features: [
      "Unlimited mock interviews",
      "Advanced AI feedback",
      "Resume-based questions",
      "Performance analytics",
      "Priority support",
    ],
    popular: true,
  },
];

const SubscriptionPage = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <div className="px-6 md:px-12 py-16">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h1 className="text-4xl md:text-5xl font-bold">Choose Your Plan</h1>
          <p className="text-slate-400 mt-4 text-lg">
            Upgrade your interview preparation with smarter feedback and unlimited practice.
          </p>
        </div>

        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl w-full">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`rounded-3xl p-8 border min-h-[500px] flex flex-col justify-between ${
                  plan.popular
                    ? "border-blue-500 bg-blue-500/10 scale-105 shadow-2xl shadow-blue-500/20"
                    : "border-white/10 bg-white/5"
                } transition`}
              >
                <div>
                  {plan.popular && (
                    <span className="inline-block mb-4 px-4 py-1 rounded-full bg-blue-600 text-sm font-medium">
                      Most Popular
                    </span>
                  )}

                  <h2 className="text-2xl font-bold">{plan.name}</h2>
                  <p className="text-slate-400 mt-2">{plan.desc}</p>
                  <h3 className="text-4xl font-bold mt-6">{plan.price}</h3>

                  <div className="mt-8 space-y-4 text-slate-300">
                    {plan.features.map((feature, i) => (
                      <p key={i}>• {feature}</p>
                    ))}
                  </div>
                </div>

                <div className="mt-10">
                  {plan.name === "Free" ? (
                    <Button
                      text="Current Plan"
                      className="w-full bg-white/10 text-white cursor-not-allowed hover:bg-white/10"
                    />
                  ) : (
                    <Link to={`/payment?plan=${plan.name.toLowerCase()}`}>
                      <Button text="Upgrade to Premium" className="w-full" />
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionPage;