'use client'

import { motion } from 'framer-motion'

export default function CopySection() {
  return (
    <section className="py-24 bg-stone-950 text-white">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Does your company require a specific "look"?
        </motion.h2>
        <motion.p 
          className="text-2xl md:text-3xl mb-16 text-center text-blue-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          We can 100% match an existing company style and keep things consistent!
        </motion.p>
        
        <motion.h3 
          className="text-3xl md:text-4xl font-bold mb-8 text-center text-yellow-400"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Leave it to the pros
        </motion.h3>
        <motion.p 
          className="text-xl mb-8 text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          We're a photography studio for people who hate being photographed.
        </motion.p>
        
        <div className="mb-12">
          <motion.h4 
            className="text-2xl font-semibold mb-4 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            Does this sound like you?
          </motion.h4>
          <motion.div 
            className="text-center italic text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <p>"But I hate being photographed."</p>
            <p>"I never look good in photos."</p>
          </motion.div>
        </div>
        
        <motion.p 
          className="text-lg mb-8 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
        >
          We hear this all the time, and we get it—being in front of the camera can be…uncomfortable. Our response: "Leave it to the pros." We'll help make the experience comfortable, and fun! We specialize in posing and smile coaching—everything from coaching you on the perfect angles, expression and positioning, to details like wardrobe and hair.
        </motion.p>
        
        <motion.p 
          className="text-2xl font-semibold text-center text-blue-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.4 }}
        >
          We love making you look good!
        </motion.p>
      </div>
    </section>
  )
}