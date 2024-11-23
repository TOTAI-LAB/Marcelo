import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Terminal from './components/Terminal';
import SocialLinks from './components/SocialLinks';
import { Brain } from 'lucide-react';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen cosmic-background flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center"
        >
          <Brain className="w-16 h-16 text-[#00ff00] mx-auto mb-4" />
          <h1 className="text-[#00ff00] font-mono text-2xl">
            Initializing Mercal...
          </h1>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen cosmic-background">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 py-12"
      >
        <div className="text-center mb-12">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl font-bold mb-4 text-[#00ff00] font-mono"
          >
            MERCAL AI
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-[#00ff00] font-mono opacity-80"
          >
            Your gateway to cosmic cryptocurrency wisdom
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6 }}
        >
          <Terminal />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <SocialLinks />
        </motion.div>
      </motion.div>
    </div>
  );
}

export default App;