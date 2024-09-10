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
  { src: "/images/why-unlimited/image 12.png", alt: "Professional headshot of a smiling blonde woman in a black top", className: "col-start-3 col-end-4 row-start-1 row-end-3 h-[57%]" },
  { src: "/images/why-unlimited/image 13.png", alt: "Professional headshot of a smiling man with longer hair and a full beard wearing a dark suit and tie", className: "col-start-3 col-end-4 row-start-3 row-end-5" },
  { src: "/images/why-unlimited/image 16.png", alt: "Professional headshot of an older man with a bald head and beard wearing a dark suit and tie", className: "col-start-4 col-end-5 row-start-1 row-end-3" },
  { src: "/images/why-unlimited/image 18.png", alt: "Professional headshot of a young man with short hair and a beard wearing a black top", className: "col-start-4 col-end-5 row-start-3 row-end-5" },
]

export default function UnlimitedSessionsSection() {
  return (
    <section className="relative pt-20 pb-10 bg-[#0e0e0e] text-white">
      <div className="container mx-auto overflow-hidden">
        <motion.h2
          className="text-3xl md:text-4xl text-center mb-4 bodoni-moda !text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          UNLIMITED SESSIONS
        </motion.h2>
        <motion.h3
          className="font-bold text-center mb-6 text-blue-400 bodoni-moda lg:!text-[70px] !text-[40px]"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Why unlimited?
        </motion.h3>
        <motion.p
          className="text-2xl text-center mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Because we want you to be <span className="headline-underline-wave">yourself</span>.
        </motion.p>
        <motion.p
          className="text-center mb-24 mx-auto font-bold text-sm max-w-2xl px-1"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          Unlimited sessions mean we capture all your expressions, outfits & moods. It's all
          included! Capture photos for different purposes. Get it all done in one visit.
        </motion.p>

        {/* Updated Headshots Grid */}
        <div className="grid grid-cols-4 grid-rows-3 gap-4 mb-12 h-[500px] lg:h-[1000px] relative bg-gradient-to-b from-transparent to-black px-2">
          {headshots.map((headshot, index) => (
            <motion.div
              key={index}
              className={`relative overflow-hidden rounded-lg ${headshot.className}`}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            // style={{ height: '100%' }}
            >
              <Image
                src={headshot.src}
                alt={headshot.alt}
                fill
                className="lg:object-contain transition-transform duration-300"
              />
            </motion.div>
          ))}

          {/* Google Rating Section - Overlay */}
          <div className="absolute bottom-0 left-0 right-0 md:flex justify-between items-center bg-gradient-to-t from-black/95 via-black/70 to-transparent p-4 border-b-[6px] border-[#209ccb] rounded-lg mb-[-49px] pt-[350px]">
            <div className="flex items-center justify-center">
              <Image
                src="/images/google-logo.png"
                alt="Google logo"
                width={40}
                height={40}
                className="mr-2"
              />
              <div>
                <p className="font-bold text-2xl lg:text-lg text-white">Google Rating</p>
                <div className="flex items-center font-bold text-lg">
                  <span className="text-yellow-400 mr-1 font-bold text-3xl">4.8</span>
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-x-4 mt-4 grid justify-center lg:block">
              <Button variant="outline" className="mb-4  w-[300px] lg:w-[180px] lg:mr-4 font-bold text-xs text-white bg-[#247ba0] border-[#247ba0] rounded-[20px] px-6">
                GET A FREE QUOTE
              </Button>
              <Button className="!ml-[0] font-bold text-xs text-white bg-[#131313] border-[#247ba0] border-[1px] rounded-[20px] px-6">
                BOOK NOW
              </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}