'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const headshots = [
  { src: 'https://images.squarespace-cdn.com/content/v1/5fc3bd57322bbc4f9be1898c/3856373c-e34b-4e81-b8c3-af08b3d888f6/styled+headshots+photographer+in+dc+moshe+zusman-1.JPG?format=500w', alt: 'Professional headshot 1' },
  { src: 'https://images.squarespace-cdn.com/content/v1/5fc3bd57322bbc4f9be1898c/36c0c1bb-e51d-45be-9053-8771c5409bc3/styled+headshots+photographer+in+dc+moshe+zusman-2.JPG?format=500w', alt: 'Professional headshot 2' },
  { src: 'https://images.squarespace-cdn.com/content/v1/5fc3bd57322bbc4f9be1898c/f616ed71-a791-4069-b359-ffb5fc39d31f/styled+headshots+photographer+in+dc+moshe+zusman-3.JPG?format=500w', alt: 'Professional headshot 3' },
  { src: 'https://images.squarespace-cdn.com/content/v1/5fc3bd57322bbc4f9be1898c/d2473703-27a1-427a-a56a-f17f46a9b72c/styled+headshots+photographer+in+dc+moshe+zusman-4.JPG?format=500w', alt: 'Professional headshot 4' },
  { src: 'https://images.squarespace-cdn.com/content/v1/5fc3bd57322bbc4f9be1898c/c87e765e-5d02-41a2-a232-716a5111be8f/styled+headshots+photographer+in+dc+moshe+zusman-5.JPG?format=500w', alt: 'Professional headshot 5' },
  { src: 'https://images.squarespace-cdn.com/content/v1/5fc3bd57322bbc4f9be1898c/44be0ea6-253e-466c-95ef-dbcd37f33572/styled+headshots+photographer+in+dc+moshe+zusman-6.JPG?format=500w', alt: 'Professional headshot 6' },
  { src: 'https://images.squarespace-cdn.com/content/v1/5fc3bd57322bbc4f9be1898c/f788a88a-b521-42b3-9df3-b007aa7d781a/styled+headshots+photographer+in+dc+moshe+zusman-8.JPG?format=500w', alt: 'Professional headshot 7' },
  { src: 'https://images.squarespace-cdn.com/content/v1/5fc3bd57322bbc4f9be1898c/224d7beb-8c26-4875-a42a-ea11aed7233a/styled+headshots+photographer+in+dc+moshe+zusman-7.JPG?format=500w', alt: 'Professional headshot 8' },
  { src: 'https://images.squarespace-cdn.com/content/v1/5fc3bd57322bbc4f9be1898c/f47bbe49-5e43-494c-8c14-a3806d8edac6/styled+headshots+photographer+in+dc+moshe+zusman-10.JPG?format=500w', alt: 'Professional headshot 9' },
  { src: 'https://images.squarespace-cdn.com/content/v1/5fc3bd57322bbc4f9be1898c/62a08a5b-2b8e-4c56-874e-0f478657d453/styled+headshots+photographer+in+dc+moshe+zusman-9.JPG?format=500w', alt: 'Professional headshot 10' },
  { src: 'https://images.squarespace-cdn.com/content/v1/5fc3bd57322bbc4f9be1898c/62ecfd8f-c85c-4cb9-81d1-76ffd0c4450a/styled+headshots+photographer+in+dc+moshe+zusman-12.JPG?format=500w', alt: 'Professional headshot 11' },
  { src: 'https://images.squarespace-cdn.com/content/v1/5fc3bd57322bbc4f9be1898c/df811198-6a80-4142-bbc5-32516c248ace/styled+headshots+photographer+in+dc+moshe+zusman-11.JPG?format=500w', alt: 'Professional headshot 12' },
]

export default function HeadshotGrid() {
  return (
    <section className="bg-gray-100 w-full">
      <div className="w-full">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-1">
          {headshots.map((headshot, index) => (
            <motion.div
              key={index}
              className="aspect-square overflow-hidden"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <Image
                src={headshot.src}
                alt={headshot.alt}
                width={400}
                height={400}
                className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}