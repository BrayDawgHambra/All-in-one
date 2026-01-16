"use client"

import { useState } from "react"

const websiteCategories = {
  "pokemon-streaming": {
    title: "Pokémon Streaming 🎮",
    websites: [
      { name: "Pokeflix.tv", url: "http://www.pokeflix.tv", description: "Watch all Pokémon episodes and movies for free!", emoji: "⚡" },
      { name: "B's PokeStream", url: "/b-pokestream", description: "Anime-style Pokémon streaming hub by BrayDawg!", emoji: "🌟" }
    ]
  },
  "shopping": {
    title: "Shopping for Jerseys 🛍️",
    websites: [
      { name: "AnimeApe.com", url: "https://animeape.com", description: "Cool anime and gaming merchandise!", emoji: "🦍" },
      { name: "JerseySmall.me", url: "https://jerseysmall.me", description: "Sports jerseys and athletic wear!", emoji: "🏃‍♂️" }
    ]
  },
  "surprise": {
    title: "Surprise Me! 🎲",
    websites: [
      { name: "Little Alchemy 2", url: "https://littlealchemy2.com", description: "Combine elements to create new things!", emoji: "🧪" },
      { name: "GeoGuessr", url: "https://geoguessr.com", description: "Guess locations around the world!", emoji: "🌍" },
      { name: "A Dark Room", url: "https://adarkroom.doublespeakgames.com", description: "Mysterious text-based adventure!", emoji: "🕯️" },
      { name: "The Useless Web", url: "https://theuselessweb.com", description: "Takes you to random weird websites!", emoji: "🌀" }
    ]
  }
}

export default function WebsiteRecs() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-cyan-900 to-teal-900 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent font-bangers">
            🌐 Website Recommender
          </h1>
          <p className="text-xl text-cyan-300">Discover cool websites! 🚀</p>
        </div>

        {!selectedCategory ? (
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            {Object.entries(websiteCategories).map(([key, category]) => (
              <div
                key={key}
                onClick={() => setSelectedCategory(key)}
                className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-3xl p-8 transform hover:scale-110 transition-all cursor-pointer shadow-2xl hover:shadow-3xl border-4 border-white/20"
              >
                <h3 className="text-2xl font-bold text-white mb-4 text-center font-bangers">
                  {category.title}
                </h3>
                <div className="text-center">
                  <span className="inline-block bg-white/20 rounded-full px-6 py-3 text-white font-bold hover:bg-white/30 transition-colors">
                    Explore Sites! 👀
                  </span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div>
            <div className="text-center mb-8">
              <button
                onClick={() => setSelectedCategory(null)}
                className="bg-white/20 text-white px-6 py-3 rounded-xl font-bold hover:bg-white/30 transition-colors mb-6"
              >
                ← Back to Categories
              </button>
              <h2 className="text-3xl font-bold text-white font-bangers">
                {websiteCategories[selectedCategory as keyof typeof websiteCategories].title}
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {websiteCategories[selectedCategory as keyof typeof websiteCategories].websites.map((website, index) => (
                <a
                  key={index}
                  href={website.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-blue-500 to-teal-500 rounded-2xl p-6 transform hover:scale-105 transition-all shadow-xl hover:shadow-2xl block"
                >
                  <div className="bg-white rounded-xl p-4 h-full text-center">
                    <div className="text-4xl mb-3">{website.emoji}</div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{website.name}</h3>
                    <p className="text-gray-600 text-sm">{website.description}</p>
                    <div className="mt-4">
                      <span className="bg-gradient-to-r from-blue-500 to-teal-500 text-white px-4 py-2 rounded-lg font-bold">
                        Visit Site 🚀
                      </span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
