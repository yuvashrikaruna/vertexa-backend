import React from "react";

const Demo = () => {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-20">
      
      
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">
          Transform Your Business with AI
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          See how Vertexa AI automates conversations, improves efficiency,
          and scales your customer support using intelligent voice agents.
        </p>
      </div>

      
      <div className="flex justify-center mb-16">
        <div className="w-full max-w-4xl aspect-video">
          <iframe
            className="w-full h-full rounded-xl"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="AI Business Demo"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto text-center">
        <div className="bg-gray-900 p-6 rounded-xl">
          <h3 className="text-xl font-semibold mb-3">AI Voice Automation</h3>
          <p className="text-gray-400">
            Automate customer calls, bookings, and inquiries with intelligent
            voice agents trained on your business data.
          </p>
        </div>

        <div className="bg-gray-900 p-6 rounded-xl">
          <h3 className="text-xl font-semibold mb-3">CRM Integration</h3>
          <p className="text-gray-400">
            Seamlessly integrate with your CRM systems and manage customer
            interactions efficiently.
          </p>
        </div>

        <div className="bg-gray-900 p-6 rounded-xl">
          <h3 className="text-xl font-semibold mb-3">Scale Effortlessly</h3>
          <p className="text-gray-400">
            Handle thousands of conversations simultaneously without increasing
            manpower.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Demo;