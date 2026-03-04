import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import bgImage from "../assets/ai-bg.jpg";

function Home() {
  const navigate = useNavigate();
  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">

     
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40 z-0 pointer-events-none"
        style={{ backgroundImage: `url(${bgImage})` }}
      />

      
      <div className="absolute inset-0 bg-gradient-to-br from-black via-black/80 to-black z-0 pointer-events-none" />

      
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-purple-600 rounded-full blur-[150px] opacity-20 animate-pulse z-0 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-pink-600 rounded-full blur-[150px] opacity-20 animate-pulse z-0 pointer-events-none" />

      
      <div className="relative z-10">

        <section className="min-h-screen flex flex-col items-center justify-center text-center px-6">
          
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold leading-tight mb-6"
          >
            AI Voice Agents That{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
              Convert Conversations
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-gray-400 max-w-2xl mb-8"
          >
            Automate support, boost sales, and scale operations with intelligent
            AI voice agents built for modern businesses.
          </motion.p>

          <motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.6, duration: 0.8 }}
>
  <button
    onClick={() => navigate("/about")}
    className="px-8 py-3 border border-gray-700 rounded-xl hover:bg-gray-800 transition active:scale-95 font-semibold"
  >
    Learn More
  </button>
</motion.div>
        </section>

       
        <section className="py-24 px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose Vertexa?
          </h2>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
          >
            {[
              {
                title: "Human-like AI",
                desc: "Natural voice agents that understand context and respond intelligently.",
                border: "hover:border-purple-500"
              },
              {
                title: "24/7 Automation",
                desc: "Never miss a customer. AI works around the clock without downtime.",
                border: "hover:border-pink-500"
              },
              {
                title: "Seamless Integration",
                desc: "Easily connect with your CRM, support tools, and workflows.",
                border: "hover:border-purple-500"
              }
            ].map((item, index) => (
              <div
                key={index}
                className={`p-6 rounded-2xl bg-gray-900/80 backdrop-blur border border-gray-800 ${item.border} hover:scale-105 transition duration-300`}
              >
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </div>
            ))}
          </motion.div>
        </section>

        
        <section className="py-24 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-6"
          >
            Ready to Scale With AI?
          </motion.h2>

          <motion.button
           onClick={() => navigate("/free-trial")}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
            className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl font-semibold text-lg hover:opacity-90 transition active:scale-95"
          >
            Start Free Trial
          </motion.button>
        </section>

      </div>
    </div>
  );
}

export default Home;