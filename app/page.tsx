"use client"

import FunButton from "@/components/FunButton"
import { useState, useEffect } from "react"

const taglines = [
  "Bored? Click Something.",
  "You're One Click Away From Fun.",
  "Warning: May Destroy Boredom.",
  "You won't regret this",
  "Just trust me",
]

export default function Home() {
  const [currentTagline, setCurrentTagline] = useState(taglines[0])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTagline(taglines[Math.floor(Math.random() * taglines.length)])
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const features = [
    {
      title: "🤖 Boredom AI",
      description: "AI that gives you fun ideas when you're bored!",
      href: "/boredom-ai",
      color: "from-orange-500 to-red-500",
      emoji: "🎯"
    },
    {
      title: "🧠 AI Creator AI",
      description: "Create AI concepts with just a prompt!",
      href: "/ai-creator",
      color: "from-purple-500 to-pink-500",
      emoji: "🚀"
    },
    {
      title: "📺 YouTube Recommender",
      description: "Find awesome videos to watch!",
      href: "/youtube-recs",
      color: "from-red-500 to-orange-500",
      emoji: "🎬"
    },
    {
      title: "🌐 Website Recommender",
      description: "Discover cool websites!",
      href: "/website-recs",
      color: "from-blue-500 to-cyan-500",
      emoji: "🌍"
    },
    {
      title: "🎮 B's PokeStream",
      description: "Anime-style Pokémon streaming hub!",
      href: "/b-pokestream",
      color: "from-green-500 to-emerald-500",
      emoji: "⚡"
    },
    {
      title: "🎲 Random Surprise",
      description: "I don't know, click to find out!",
      href: "/boredom-ai",
      color: "from-yellow-500 to-orange-500",
      emoji: "✨"
    }
  ]

  return (
    <div className="relative overflow-hidden">
      {/* Animated background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900"></div>
        <div className="absolute inset-0 opacity-20">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-white opacity-10 animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 100 + 50}px`,
                height: `${Math.random() * 100 + 50}px`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${Math.random() * 10 + 10}s`
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 bg-clip-text text-transparent animate-pulse font-bangers">
            RandomFun
          </h1>
          <h2 className="text-2xl md:text-4xl font-bold mb-8 text-yellow-300 font-bangers">
            by BrayDawg
          </h2>
          <p className="text-xl md:text-2xl text-cyan-300 mb-8 transition-all duration-500 font-bold">
            {currentTagline}
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <FunButton
              key={index}
              title={feature.title}
              description={feature.description}
              href={feature.href}
              color={feature.color}
              emoji={feature.emoji}
            />
          ))}
        </div>

        {/* Fun Stats */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl p-6 transform hover:scale-105 transition-transform">
              <div className="text-4xl font-bold text-white">5+</div>
              <div className="text-green-100">Fun Features</div>
            </div>
            <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-6 transform hover:scale-105 transition-transform">
              <div className="text-4xl font-bold text-white">∞</div>
              <div className="text-orange-100">Possibilities</div>
            </div>
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-6 transform hover:scale-105 transition-transform">
              <div className="text-4xl font-bold text-white">100%</div>
              <div className="text-purple-100">Fun Guaranteed</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
