'use client'

import { motion } from 'framer-motion'

const processSteps = [
  {
    title: "Book Your Session",
    content: [
      "Click Book Now from either the Headshot or Portrait page. Customize your session with makeup & other add-ons. Schedule your session, and then you're booked!",
      "You'll receive an email confirmation with information on how to reach us, reschedule if needed, and even cancel should you have to. Rescheduling & canceling is hassle-free! We can even set up a phone call to go over your goals with you prior to your session."
    ]
  },
  {
    title: "Photo Session",
    content: [
      "Once you arrive at the studio, we'll work our magic. We specialize in posing & expression coaching—and will guide you thought out the session to ensure we capture your best smiles and best poses on camera.",
      "Check out your photos on the spot—we'll take as many as you'd like until you're happy with your photos. Unlimited photos and no time limit on your session. We'll help you select your favorite photos, which will be delivered just 24-48 hours later."
    ]
  },
  {
    title: "Post-Processing",
    content: [
      "Our in-house professional retouchers will clean up the images and we'll send you a digital download link directly to your inbox.",
      "Within 48 hours, you'll be able to download, save and review the images, and of course, use them for social media, web, promotion, marketing, print, and more! EXPLORE COMMON QUESTIONS"
    ]
  }
]

export default function OurProcessSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our process
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          {processSteps.map((step, index) => (
            <motion.div 
              key={index}
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <h3 className="text-2xl font-semibold mb-4">{step.title}</h3>
              {step.content.map((paragraph, pIndex) => (
                <p key={pIndex} className="text-gray-600 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}