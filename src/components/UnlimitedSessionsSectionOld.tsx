'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"

const headshots = [
  { src: "/images/why-unlimited/image 7.png", alt: "Professional headshot of a black man in a dark shirt", className: "col-start-1 col-end-2 row-start-1 row-end-2" },
  { src: "/images/why-unlimited/image 8.png", alt: "Professional headshot of a smiling man with short hair and beard in a suit", className: "col-start-1 col-end-2 row-start-2 row-end-3" },
  { src: "/images/why-unlimited/image 17.png", alt: "Professional headshot of a young woman with long dark hair wearing a black blazer", className: "col-start-1 col-end-2 row-start-3 row-end-4" },
  { src: "/images/why-unlimited/image 10.png", alt: "Professional headshot of a woman with short dark hair wearing a green cardigan", className: "col-start-2 col-end-3 row-start-1 row-end-3" },
  { src: "/images/why-unlimited/image 11.png", alt: "Professional headshot of an Asian man with short hair in a light shirt, arms crossed", className: "col-start-2 col-end-3 row-start-3 row-end-5" },
  { src: "/images/why-unlimited/image 12.png", alt: "Professional headshot of a smiling blonde woman in a black top", className: "col-start-3 col-end-4 row-start-1 row-end-3" },
  { src: "/images/why-unlimited/image 13.png", alt: "Professional headshot of a smiling man with longer hair and a full beard wearing a dark suit and tie", className: "col-start-3 col-end-4 row-start-3 row-end-5" },
  { src: "/images/why-unlimited/image 16.png", alt: "Professional headshot of an older man with a bald head and beard wearing a dark suit and tie", className: "col-start-4 col-end-5 row-start-1 row-end-3" },
  { src: "/images/why-unlimited/image 18.png", alt: "Professional headshot of a young man with short hair and a beard wearing a black top", className: "col-start-4 col-end-5 row-start-3 row-end-5" },
]

export default function UnlimitedSessionsSection() {
  return (
    <section className="py-24 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl md:text-4xl font-light text-center mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          UNLIMITED SESSIONS
        </motion.h2>
        <motion.h3 
          className="text-4xl md:text-5xl font-bold text-center mb-6 text-blue-400"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Why unlimited?
        </motion.h3>
        <motion.p 
          className="text-xl md:text-2xl text-center mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Because we want you to be <span className="underline">yourself</span>.
        </motion.p>
        <motion.p 
          className="text-center mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          Unlimited sessions mean we capture all your expressions, outfits & moods. It's all
          included! Capture photos for different purposes. Get it all done in one visit.
        </motion.p>
        
        <div className="grid grid-cols-4 grid-rows-4 gap-4 mb-12 h-[800px]">
          {headshots.map((headshot, index) => (
            <motion.div
              key={index}
              className={`relative overflow-hidden rounded-lg ${headshot.className}`}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Image
                src={headshot.src}
                alt={headshot.alt}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 hover:scale-110"
              />
            </motion.div>
          ))}
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center mb-4 md:mb-0">
            <Image
              src="/images/google-logo.png"
              alt="Google logo"
              width={40}
              height={40}
              className="mr-2"
            />
            <div>
              <p className="font-semibold">Google Rating</p>
              <div className="flex items-center">
                <span className="text-yellow-400 mr-1">4.8</span>
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>
          <div className="space-x-4">
            <Button variant="outline" className="bg-transparent text-white border-white hover:bg-white hover:text-gray-900">
              GET A FREE QUOTE
            </Button>
            <Button className="bg-blue-500 text-white hover:bg-blue-600">
              BOOK NOW
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}