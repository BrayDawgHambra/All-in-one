"use client"

import { useState } from "react"
import SeasonCard from "@/components/SeasonCard"

const regions = [
  {
    region: "Kanto",
    description: "The original journey that started it all.",
    seasons: [
      { seasonNumber: 1, seasonName: "Indigo League", episodes: 80, slug: "indigo-league" },
      { seasonNumber: 2, seasonName: "Adventures in the Orange Islands", episodes: 36, slug: "orange-islands" },
      { seasonNumber: 3, seasonName: "The Johto Journeys", episodes: 41, slug: "johto-journeys" }
    ]
  },
  {
    region: "Johto",
    description: "New badges, old rivals, and the Silver Conference.",
    seasons: [
      { seasonNumber: 4, seasonName: "Johto League Champions", episodes: 52, slug: "johto-league-champions" },
      { seasonNumber: 5, seasonName: "Master Quest", episodes: 64, slug: "master-quest" }
    ]
  },
  {
    region: "Hoenn",
    description: "A fresh start with new Pokémon and intense battles.",
    seasons: [
      { seasonNumber: 6, seasonName: "Advanced", episodes: 40, slug: "advanced" },
      { seasonNumber: 7, seasonName: "Advanced Challenge", episodes: 52, slug: "advanced-challenge" },
      { seasonNumber: 8, seasonName: "Advanced Battle", episodes: 52, slug: "advanced-battle" },
      { seasonNumber: 9, seasonName: "Battle Frontier", episodes: 47, slug: "battle-frontier" }
    ]
  },
  {
    region: "Sinnoh",
    description: "Strategy, rivals, and the ultimate league challenge.",
    seasons: [
      { seasonNumber: 10, seasonName: "Diamond and Pearl", episodes: 51, slug: "diamond-and-pearl" },
      { seasonNumber: 11, seasonName: "DP: Battle Dimension", episodes: 52, slug: "battle-dimension" },
      { seasonNumber: 12, seasonName: "DP: Galactic Battles", episodes: 52, slug: "galactic-battles" },
      { seasonNumber: 13, seasonName: "DP: Sinnoh League Victors", episodes: 34, slug: "sinnoh-league-victors" }
    ]
  },
  {
    region: "Unova",
    description: "A rebooted journey with all-new Pokémon.",
    seasons: [
      { seasonNumber: 14, seasonName: "Black & White", episodes: 48, slug: "black-and-white" },
      { seasonNumber: 15, seasonName: "BW: Rival Destinies", episodes: 49, slug: "rival-destinies" },
      { seasonNumber: 16, seasonName: "BW: Adventures in Unova and Beyond", episodes: 45, slug: "adventures-in-unova" }
    ]
  },
  {
    region: "Kalos",
    description: "Mega Evolutions and one of the most cinematic arcs.",
    seasons: [
      { seasonNumber: 17, seasonName: "XY", episodes: 48, slug: "xy" },
      { seasonNumber: 18, seasonName: "XY: Kalos Quest", episodes: 45, slug: "kalos-quest" },
      { seasonNumber: 19, seasonName: "XYZ", episodes: 48, slug: "xyz" }
    ]
  },
  {
    region: "Alola",
    description: "Island trials, school life, and a new anime style.",
    seasons: [
      { seasonNumber: 20, seasonName: "Sun & Moon", episodes: 43, slug: "sun-and-moon" },
      { seasonNumber: 21, seasonName: "SM: Ultra Adventures", episodes: 48, slug: "ultra-adventures" },
      { seasonNumber: 22, seasonName: "SM: Ultra Legends", episodes: 54, slug: "ultra-legends" }
    ]
  },
  {
    region: "Journeys",
    description: "Ash's final saga and the World Coronation Series.",
    seasons: [
      { seasonNumber: 23, seasonName: "Journeys", episodes: 48, slug: "journeys" },
      { seasonNumber: 24, seasonName: "Master Journeys", episodes: 42, slug: "master-journeys" },
      { seasonNumber: 25, seasonName: "Ultimate Journeys", episodes: 54, slug: "ultimate-journeys" }
    ]
  },
  {
    region: "Paldea",
    description: "A brand-new era with new heroes and mysteries.",
    seasons: [
      { seasonNumber: 26, seasonName: "Pokémon Horizons: The Series", subtitle: "The Beginning", episodes: 45, slug: "horizons-beginning" },
      { seasonNumber: 27, seasonName: "Pokémon Horizons: The Series", subtitle: "The Search for Laqua", episodes: 50, slug: "horizons-laqua" }
    ]
  }
]

export default function BsPokestream() {
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null)

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900" style={{ backgroundColor: '#081A3A' }}>
      {/* Hero Header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-green-500/20"></div>
        <div className="container mx-auto px-4 py-16 relative z-10">
          <div className="text-center mb-12">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 bg-clip-text text-transparent font-bangers">
              B's PokeStream
            </h1>
            <p className="text-xl md:text-2xl text-green-300 font-bold mb-8">
              Anime-style season hub • Jump straight to Pokéflix
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <button
                onClick={() => document.getElementById('regions')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-8 py-4 rounded-2xl font-bold text-lg transform hover:scale-110 transition-all"
              >
                Browse Regions 🗺️
              </button>
              <a
                href="http://www.pokeflix.tv"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-2xl font-bold text-lg transform hover:scale-110 transition-all"
              >
                Go to Pokéflix ⚡
              </a>
            </div>
          </div>

          {/* Pokémon Collage Banner */}
          <div className="relative h-64 md:h-96 rounded-3xl overflow-hidden border-4 border-orange-500 shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/30 to-green-500/30"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white">
                <div className="text-8xl mb-4 animate-bounce">⚡</div>
                <p className="text-2xl font-bold">Pokémon Streaming Hub</p>
                <p className="text-lg">Click any season to watch on Pokéflix!</p>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute top-4 left-4 text-4xl animate-pulse">🔥</div>
            <div className="absolute top-4 right-4 text-4xl animate-pulse">💧</div>
            <div className="absolute bottom-4 left-4 text-4xl animate-pulse">🌱</div>
            <div className="absolute bottom-4 right-4 text-4xl animate-pulse">⚡</div>
          </div>
        </div>
      </div>

      {/* Regions Section */}
      <div id="regions" className="container mx-auto px-4 py-16">
        <h2 className="text-4xl md:text-6xl font-bold text-center mb-12 text-white font-bangers">
          Explore Pokémon Regions 🗺️
        </h2>

        <div className="space-y-16">
          {regions.map((region) => (
            <div key={region.region} className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border-2 border-orange-500 shadow-2xl">
              <div className="text-center mb-8">
                <h3 className="text-3xl md:text-5xl font-bold text-orange-400 mb-4 font-bangers">
                  {region.region} Region
                </h3>
                <p className="text-green-300 text-lg">{region.description}</p>
                {region.region === "Paldea" && (
                  <span className="inline-block bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-full font-bold mt-3">
                    NEW ERA ✨
                  </span>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {region.seasons.map((season) => (
                  <SeasonCard key={season.seasonNumber} season={season} isNewEra={region.region === "Paldea"} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* About Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-lg rounded-3xl p-8 border-2 border-green-500 text-center">
          <h2 className="text-3xl font-bold text-green-400 mb-6 font-bangers">About B's PokeStream</h2>
          <p className="text-white text-lg leading-relaxed">
            This is a fan-made streaming hub that helps you find and watch Pokémon content easily. 
            All videos are hosted on Pokéflix.tv - we just make it easier to find what you want to watch! 
            Click on any season to jump directly to the episodes on Pokéflix. 
            Not affiliated with Nintendo, Game Freak, or The Pokémon Company.
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black/50 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-white/60">Made with ❤️ by BrayDawg | Fan-made Pokémon streaming hub</p>
        </div>
      </footer>
    </div>
  )
}
