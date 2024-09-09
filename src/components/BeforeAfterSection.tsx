'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

type BeforeAfterItem = {
  beforeImage: string
  afterImage: string
  name: string
  quote: string
}

const beforeAfterItems: BeforeAfterItem[] = [
  {
    beforeImage: "/images/megan-before.jpg",
    afterImage: "/images/megan-headshot.jpg",
    name: "Megan",
    quote: "It was such a fun and easy experience! Nathan really put me at ease and brought out the best."
  },
  {
    beforeImage: "/images/levi-before.jpg",
    afterImage: "/images/levi-headshot.jpg",
    name: "Levi",
    quote: "My headshot is important because it conveys professionalism to my clientele. The process was simple and took less time than I had anticipated."
  }
]

export default function BeforeAfterSection() {
  return (
    <section className="py-24 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-5xl font-bold text-center mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Before & After
        </motion.h2>
        <motion.p 
          className="text-xl text-center mb-16 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          With business interactions almost entirely on screens, first impressions matter.
          How do you want to represent yourself to your customers & colleagues?
        </motion.p>
        <div className="grid md:grid-cols-2 gap-16">
          {beforeAfterItems.map((item, index) => (
            <motion.div 
              key={index}
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 * (index + 1) }}
            >
              <div className="relative mb-8">
                <Image
                  src={item.afterImage}
                  alt={`After Headshot of ${item.name}`}
                  width={480}
                  height={600}
                  className="rounded-lg shadow-2xl"
                />
                <div className="absolute -top-10 -left-10 rotate-[-8deg]">
                  <Image
                    src={item.beforeImage}
                    alt={`Before Selfie of ${item.name}`}
                    width={150}
                    height={150}
                    className="rounded-md border-4 border-white shadow-lg"
                  />
                </div>
              </div>
              <blockquote className="text-center italic mb-4">
                "{item.quote}"
              </blockquote>
              <p className="font-semibold">— {item.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}