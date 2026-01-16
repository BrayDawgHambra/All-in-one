"use client"

import Link from "next/link"
import { useState, useEffect } from "react"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/90 backdrop-blur-lg shadow-2xl' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-white hover:text-orange-400 transition-colors font-bangers">
            RandomFun 🎉
          </Link>
          
          <div className="flex gap-6">
            <Link href="/" className="text-white hover:text-orange-400 transition-colors font-bold">
              Home
            </Link>
            <Link href="/boredom-ai" className="text-white hover:text-orange-400 transition-colors font-bold">
              Boredom AI
            </Link>
            <Link href="/ai-creator" className="text-white hover:text-orange-400 transition-colors font-bold">
              AI Creator
            </Link>
            <Link href="/youtube-recs" className="text-white hover:text-orange-400 transition-colors font-bold">
              YouTube
            </Link>
            <Link href="/website-recs" className="text-white hover:text-orange-400 transition-colors font-bold">
              Websites
            </Link>
            <Link href="/b-pokestream" className="text-white hover:text-orange-400 transition-colors font-bold">
              PokéStream
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
