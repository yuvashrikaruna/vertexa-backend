import { motion } from "framer-motion";

function About() {
  return (
    <div className="relative min-h-screen px-6 py-20 bg-black text-white overflow-hidden">

      
      <div className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-purple-600 rounded-full blur-[140px] opacity-20 z-0 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-pink-600 rounded-full blur-[140px] opacity-20 z-0 pointer-events-none"></div>

      <div className="relative z-10">

        
        <section className="text-center mb-24">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Building the Future of AI Conversations
          </motion.h1>

          <p className="text-gray-400 max-w-3xl mx-auto text-lg">
            At Vertexa, we believe conversations are the backbone of every business.
            Our mission is to empower companies with intelligent AI voice agents
            that scale communication without sacrificing quality.
          </p>
        </section>

        
        <section className="max-w-5xl mx-auto mb-24 grid md:grid-cols-2 gap-12 items-center">
          
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-gray-400 mb-4">
              Modern businesses struggle to keep up with growing customer demand.
              Hiring more teams increases cost and complexity.
            </p>
            <p className="text-gray-400">
              Vertexa was created to solve this problem — using advanced AI
              to automate voice interactions that feel natural, responsive,
              and scalable.
            </p>
          </div>

          <div className="p-8 bg-gray-900 rounded-2xl border border-gray-800">
            <h3 className="text-xl font-semibold mb-4">Why We Exist</h3>
            <ul className="text-gray-400 space-y-3">
              <li>✔ Reduce operational costs</li>
              <li>✔ Increase customer satisfaction</li>
              <li>✔ Scale conversations instantly</li>
              <li>✔ Deliver human-like AI experiences</li>
            </ul>
          </div>

        </section>

        
        <section className="max-w-6xl mx-auto mb-24 text-center">
          <h2 className="text-3xl font-bold mb-12">Our Core Values</h2>

          <div className="grid md:grid-cols-3 gap-8">

            {[
              {
                title: "Innovation",
                desc: "We constantly push AI technology forward to deliver smarter automation.",
                border: "hover:border-purple-500"
              },
              {
                title: "Simplicity",
                desc: "Complex AI made simple, intuitive, and easy to deploy.",
                border: "hover:border-pink-500"
              },
              {
                title: "Performance",
                desc: "Reliable, scalable systems built for enterprise-level demands.",
                border: "hover:border-purple-500"
              }
            ].map((item, index) => (
              <div
                key={index}
                className={`p-8 bg-gray-900 rounded-2xl border border-gray-800 ${item.border} hover:scale-105 transition duration-300`}
              >
                <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </div>
            ))}

          </div>
        </section>

        
        <section className="max-w-5xl mx-auto mb-24 text-center">
          <h2 className="text-3xl font-bold mb-12">By The Numbers</h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div>
              <h3 className="text-4xl font-bold text-purple-500 mb-2">99.9%</h3>
              <p className="text-gray-400">Uptime Reliability</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-pink-500 mb-2">+250%</h3>
              <p className="text-gray-400">Lead Conversion Increase</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-purple-500 mb-2">24/7</h3>
              <p className="text-gray-400">AI Availability</p>
            </div>

          </div>
        </section>

        
        <section className="text-center">
          <h2 className="text-3xl font-bold mb-6">
            Join the AI Automation Revolution
          </h2>

          <button
            onClick={() => console.log("Get Started Today clicked")}
            className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl font-semibold hover:opacity-90 active:scale-95 transition"
          >
            Get Started Today
          </button>
        </section>

      </div>
    </div>
  );
}

export default About;