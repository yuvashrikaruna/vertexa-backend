import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function Solutions() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen px-6 py-20 bg-black text-white overflow-hidden">

      
      <div className="absolute -top-40 -right-40 w-[400px] h-[400px] bg-purple-600 rounded-full blur-[140px] opacity-20 z-0 pointer-events-none"></div>

      <div className="relative z-10">

       
        <section className="text-center mb-20">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Intelligent AI Voice Solutions
          </motion.h1>

          <p className="text-gray-400 max-w-2xl mx-auto">
            Powerful automation tools designed to transform sales,
            support, and enterprise communication with human-like AI.
          </p>
        </section>

        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-24"
        >
          {[
            {
              title: "AI Sales Agents",
              desc: "Automatically qualify leads, book meetings, and follow up with prospects 24/7.",
              border: "hover:border-purple-500",
              items: ["Lead Qualification", "Appointment Scheduling", "CRM Integration"]
            },
            {
              title: "AI Support Agents",
              desc: "Deliver instant customer assistance and reduce support workload.",
              border: "hover:border-pink-500",
              items: ["24/7 Availability", "Smart Issue Routing", "Multi-language Support"]
            },
            {
              title: "Enterprise Automation",
              desc: "Fully customized AI voice systems tailored to your workflows.",
              border: "hover:border-purple-500",
              items: ["Custom Integrations", "Scalable Infrastructure", "Dedicated Support"]
            }
          ].map((card, index) => (
            <div
              key={index}
              className={`p-8 bg-gray-900 rounded-2xl border border-gray-800 ${card.border} hover:scale-105 transition duration-300`}
            >
              <h2 className="text-2xl font-semibold mb-4">{card.title}</h2>
              <p className="text-gray-400 mb-6">{card.desc}</p>
              <ul className="text-sm text-gray-500 space-y-2">
                {card.items.map((item, i) => (
                  <li key={i}>✔ {item}</li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>

        
        <section className="max-w-5xl mx-auto text-center mb-24">
          <h2 className="text-3xl font-bold mb-12">How It Works</h2>

          <div className="grid md:grid-cols-3 gap-8 text-gray-400">
            <div>
              <h3 className="text-xl font-semibold text-white mb-3">1. Train</h3>
              <p>Train the AI using your business data, scripts, and workflows.</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-3">2. Deploy</h3>
              <p>Deploy voice agents across calls, support lines, or CRM systems.</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-3">3. Scale</h3>
              <p>Monitor performance and scale conversations effortlessly.</p>
            </div>
          </div>
        </section>

        
        <section className="text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>

          <button
  onClick={() => navigate("/demo")}
  className="bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-3 rounded-xl"
>
  Request Demo
</button>
        </section>

      </div>
    </div>
  );
}

export default Solutions;