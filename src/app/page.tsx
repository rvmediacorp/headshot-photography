'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import CopySection from '@/components/CopySection'
import OurProcessSection from '@/components/OurProcessSection'
import BeforeAfterSection from '@/components/BeforeAfterSection'
import HeadshotGrid from '@/components/HeadshotGrid'
import UnlimitedSessionsSection from '@/components/UnlimitedSessionsSection'

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Menu Bar */}
      <nav className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="text-2xl font-bold text-blue-600">ProShots</Link>
            <div className="hidden md:flex space-x-8">
              <Link href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">Home</Link>
              <Link href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">Services</Link>
              <Link href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">Portfolio</Link>
              <Link href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">About</Link>
              <Link href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">Contact</Link>
            </div>
            <Button className="hidden md:block bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-300">
              Book Now
            </Button>
            <button 
              className="md:hidden text-gray-600 hover:text-blue-600 transition-colors duration-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white py-4">
            <div className="container mx-auto px-4 flex flex-col space-y-4">
              <Link href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">Home</Link>
              <Link href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">Services</Link>
              <Link href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">Portfolio</Link>
              <Link href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">About</Link>
              <Link href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">Contact</Link>
              <Button className="bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-300 w-full">
                Book Now
              </Button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <video
          src="/videos/background-video.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
        <div className="relative z-10 text-center text-white max-w-3xl px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">Elevate Your Professional Image</h1>
          <p className="text-xl md:text-2xl mb-10 text-gray-200">Capture your essence with our premium headshot photography services</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-300 text-lg px-8 py-3">
              Book Your Session
            </Button>
            <Button variant="outline" className="bg-transparent text-white border-white hover:bg-white hover:text-blue-600 transition-colors duration-300 text-lg px-8 py-3">
              Get Free Quote
            </Button>
          </div>
        </div>
      </section>

      {/* Company Logos Section */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center flex-wrap">
            {['Nike', 'Intel', 'Deloitte', 'Amazon', 'Kittelson & Associates', 'Vestas'].map((company, index) => (
              <Image
                key={index}
                src={`/images/logos/${company}.svg`}
                alt={`${company} Logo`}
                width={120}
                height={40}
                className="mx-4 my-2 filter grayscale hover:grayscale-0 transition-all duration-300"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Headshot Grid Section */}
      <HeadshotGrid />

      {/* Copy Section */}
      <CopySection />

      {/* Our Process Section */}
      <OurProcessSection />

      {/* Before and After Section */}
      <BeforeAfterSection />

      {/* Unlimited Sessions Section */}
      <UnlimitedSessionsSection />

      {/* ... (rest of your sections) ... */}
    </main>
  )
}