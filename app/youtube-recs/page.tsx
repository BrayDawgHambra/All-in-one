"use client"

import VideoCard from "@/components/VideoCard"
import { useState } from "react"

const videoCategories = {
  "pokemon-stickers": {
    title: "Things to Watch While Doing Pokémon Sticker Books 📚",
    videos: [
      { title: "Pokémon Drawing & Coloring Tutorial", channel: "ArtForKidsHub", description: "Learn to draw Pikachu step by step!" },
      { title: "Pokémon Pancake Art Challenge", channel: "PancakeArt", description: "Make edible Pokémon pancakes!" },
      { title: "Pokémon TV Show Playlist", channel: "Official Pokémon", description: "Watch classic Pokémon episodes" },
      { title: "Pokéflix.tv - Free Pokémon Streaming", channel: "Pokeflix", description: "Watch all Pokémon seasons for free!" }
    ]
  },
  "baseball-cards": {
    title: "Baseball Card Vids 🃏",
    videos: [
      { title: "Jabs Family - Pack Opening", channel: "Jabs Family", description: "Opening vintage baseball card packs!" },
      { title: "Jabs Family - Card Reviews", channel: "Jabs Family", description: "Reviewing rare baseball cards" },
      { title: "Jabs Family - Collection Tour", channel: "Jabs Family", description: "Tour of amazing card collections" }
    ]
  },
  "brainrot": {
    title: "Steal A Brainrot Vids 🧠",
    videos: [
      { title: "KAYE - Random Fun Content", channel: "KAYE", description: "Wild and crazy entertainment!" },
      { title: "KAYE MOVIES - Film Reviews", channel: "KAYE MOVIES", description: "Funny movie reviews and reactions" },
      { title: "slurpy - Gaming Content", channel: "slurpy", description: "Epic gaming moments and fails" },
      { title: "Karful - Comedy Sketches", channel: "Karful", description: "Hilarious comedy videos" },
      { title: "IANROCKS - Music & More", channel: "IANROCKS", description: "Music and entertainment mix" },
      { title: "Stefan-RBLX - Roblox Content", channel: "Stefan-RBLX", description: "Fun Roblox adventures" }
    ]
  },
  "surprise": {
    title: "Surprise Me! 🎲",
    videos: [
      { title: "Birmingham United - Livestream", channel: "Birmingham United", description: "Live sports action!" },
      { title: "Union Leipzig - Game Highlights", channel: "Union Leipzig", description: "Epic sports moments" },
      { title: "Mason Turner - Popular Videos", channel: "Mason Turner", description: "Trending content" },
      { title: "Lightning Lane - Popular Clips", channel: "Lightning Lane", description: "Viral video compilation" },
      { title: "RespectTheJeff - Gaming Series", channel: "RespectTheJeff", description: "Gaming entertainment" }
    ]
  },
  "pokemon-channels": {
    title: "Pokémon Channels ⚡",
    videos: [
      { title: "Leonhart - Pokémon Card Openings", channel: "Leonhart", description: "Opening rare Pokémon cards!" },
      { title: "DeepPocketMonster - Pokémon Content", channel: "DeepPocketMonster", description: "All things Pokémon" },
      { title: "PokeRev - Pokémon Reviews", channel: "PokeRev", description: "Reviewing Pokémon products" }
    ]
  }
}

export default function YouTubeRecs() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-900 via-orange-900 to-yellow-900 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-red-400 to-orange-500 bg-clip-text text-transparent font-bangers">
            📺 YouTube Recommender
          </h1>
          <p className="text-xl text-orange-300">Find awesome videos to watch! 🎬</p>
        </div>

        {!selectedCategory ? (
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(videoCategories).map(([key, category]) => (
              <div
                key={key}
                onClick={() => setSelectedCategory(key)}
                className="bg-gradient-to-r from-red-500 to-orange-500 rounded-3xl p-8 transform hover:scale-110 transition-all cursor-pointer shadow-2xl hover:shadow-3xl border-4 border-white/20"
              >
                <h3 className="text-2xl font-bold text-white mb-4 text-center font-bangers">
                  {category.title}
                </h3>
                <div className="text-center">
                  <span className="inline-block bg-white/20 rounded-full px-6 py-3 text-white font-bold hover:bg-white/30 transition-colors">
                    Click to Explore! 👀
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
                {videoCategories[selectedCategory as keyof typeof videoCategories].title}
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {videoCategories[selectedCategory as keyof typeof videoCategories].videos.map((video, index) => (
                <VideoCard key={index} video={video} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
