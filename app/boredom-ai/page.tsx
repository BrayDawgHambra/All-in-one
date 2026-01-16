"use client"

import { useState } from "react"

interface BoredomLevel {
  level: number
  label: string
  emoji: string
}

const boredomLevels: BoredomLevel[] = [
  { level: 1, label: "Kinda Bored", emoji: "😐" },
  { level: 2, label: "Pretty Bored", emoji: "😕" },
  { level: 3, label: "Super Bored", emoji: "😴" },
  { level: 4, label: "Extremely Bored", emoji: "🥱" },
  { level: 5, label: "DYING OF BOREDOM", emoji: "💀" }
]

const activityIdeas = {
  1: [
    "Draw your favorite Pokémon doing a silly dance 💃",
    "Create a fantasy soccer team with Pokémon players ⚽",
    "Make up a new Pokémon move and describe it 🔥",
    "Design your own sports jersey with Pokémon themes 🏃‍♂️"
  ],
  2: [
    "Build a fort and pretend it's a Pokémon Gym 🏰",
    "Create a treasure hunt around your house 🗺️",
    "Make Pokémon cards out of paper and trade with friends 🃏",
    "Practice your soccer moves while pretending to be different Pokémon ⚽"
  ],
  3: [
    "Start a Pokémon drawing challenge with friends 🎨",
    "Create your own Pokémon region with maps and everything 🗺️",
    "Build a obstacle course and time yourself 🏃‍♂️",
    "Make a Pokémon-themed snack and share it 🍪"
  ],
  4: [
    "Create a whole Pokémon movie with toys or drawings 🎬",
    "Build a giant Pokémon card castle 🏰",
    "Organize a sports tournament with creative rules 🏆",
    "Write a story about Pokémon playing soccer 📚"
  ],
  5: [
    "CREATE AN ENTIRE POKÉMON WORLD IN YOUR ROOM 🌍",
    "BUILD A REAL POKÉMON STADIUM OUT OF CARDBOARD 🏟️",
    "MAKE 100 POKÉMON DRAWINGS AND HANG THEM EVERYWHERE 🎨",
    "START A POKÉMON SPORTS LEAGUE WITH ALL YOUR FRIENDS 🏃‍♂️"
  ]
}

export default function BoredomAI() {
  const [boredomLevel, setBoredomLevel] = useState<number>(3)
  const [setting, setSetting] = useState<string>("")
  const [companions, setCompanions] = useState<string>("")
  const [timeAvailable, setTimeAvailable] = useState<string>("")
  const [suggestions, setSuggestions] = useState<string[]>([])
  const [showSuggestions, setShowSuggestions] = useState(false)

  const generateIdeas = () => {
    let baseIdeas = activityIdeas[boredomLevel as keyof typeof activityIdeas] || []
    let filteredIdeas = [...baseIdeas]

    // Filter based on settings
    if (setting === "indoors") {
      filteredIdeas = filteredIdeas.filter(idea => 
        !idea.toLowerCase().includes("outside") && !idea.toLowerCase().includes("soccer")
      )
    } else if (setting === "outdoors") {
      filteredIdeas = filteredIdeas.filter(idea => 
        idea.toLowerCase().includes("outside") || idea.toLowerCase().includes("soccer")
      )
    }

    if (companions === "alone") {
      filteredIdeas = filteredIdeas.filter(idea => 
        !idea.toLowerCase().includes("friends") && !idea.toLowerCase().includes("trade")
      )
    }

    if (timeAvailable === "short") {
      // Keep all ideas for short time
    } else if (timeAvailable === "long") {
      filteredIdeas = filteredIdeas.filter(idea => 
        idea.includes("CREATE") || idea.includes("BUILD") || idea.includes("movie") || idea.includes("world")
      )
    }

    // Add some random variation
    const shuffled = filteredIdeas.sort(() => 0.5 - Math.random())
    setSuggestions(shuffled.slice(0, 3))
    setShowSuggestions(true)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent font-bangers">
            🤖 Boredom AI
          </h1>
          <p className="text-xl text-cyan-300">Tell me how bored you are and I'll fix it! 🚀</p>
        </div>

        <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-lg rounded-3xl p-8 border-2 border-white/20">
          {/* Boredom Level Slider */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-white mb-4 text-center">How bored are you? {boredomLevels[boredomLevel - 1].emoji}</h3>
            <div className="flex justify-center items-center gap-4 flex-wrap">
              {boredomLevels.map((level) => (
                <button
                  key={level.level}
                  onClick={() => setBoredomLevel(level.level)}
                  className={`px-6 py-3 rounded-2xl font-bold transition-all transform hover:scale-110 ${boredomLevel === level.level 
                    ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white scale-110' 
                    : 'bg-white/20 text-white hover:bg-white/30'}`}
                >
                  <div className="text-2xl mb-1">{level.emoji}</div>
                  <div className="text-sm">{level.label}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Optional Settings */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div>
              <label className="block text-white font-bold mb-3">Where are you? 🏠</label>
              <select 
                value={setting} 
                onChange={(e) => setSetting(e.target.value)}
                className="w-full p-3 rounded-xl bg-white/20 text-white border-2 border-white/30 focus:border-orange-500 focus:outline-none"
              >
                <option value="">Anywhere</option>
                <option value="indoors">Indoors 🏠</option>
                <option value="outdoors">Outdoors 🌳</option>
              </select>
            </div>

            <div>
              <label className="block text-white font-bold mb-3">Who's with you? 👥</label>
              <select 
                value={companions} 
                onChange={(e) => setCompanions(e.target.value)}
                className="w-full p-3 rounded-xl bg-white/20 text-white border-2 border-white/30 focus:border-orange-500 focus:outline-none"
              >
                <option value="">Anyone</option>
                <option value="alone">Alone 🙋‍♂️</option>
                <option value="friends">With Friends 👥</option>
              </select>
            </div>

            <div>
              <label className="block text-white font-bold mb-3">How much time? ⏰</label>
              <select 
                value={timeAvailable} 
                onChange={(e) => setTimeAvailable(e.target.value)}
                className="w-full p-3 rounded-xl bg-white/20 text-white border-2 border-white/30 focus:border-orange-500 focus:outline-none"
              >
                <option value="">Any time</option>
                <option value="short">Short time ⚡</option>
                <option value="long">Long time 🕰️</option>
              </select>
            </div>
          </div>

          {/* Generate Button */}
          <div className="text-center mb-8">
            <button
              onClick={generateIdeas}
              className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-12 py-4 rounded-2xl font-bold text-xl transform hover:scale-110 transition-all hover:shadow-2xl"
            >
              🎲 Generate Fun Ideas!
            </button>
          </div>

          {/* Suggestions */}
          {showSuggestions && (
            <div className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl p-6">
              <h3 className="text-2xl font-bold text-white mb-4 text-center">🎉 Here are your boredom killers!</h3>
              <div className="space-y-4">
                {suggestions.map((suggestion, index) => (
                  <div key={index} className="bg-white/90 rounded-xl p-4 text-gray-800 font-bold text-lg text-center transform hover:scale-105 transition-all">
                    {suggestion}
                  </div>
                ))}
              </div>
              <div className="text-center mt-6">
                <button
                  onClick={generateIdeas}
                  className="bg-white/20 text-white px-6 py-2 rounded-xl font-bold hover:bg-white/30 transition-colors"
                >
                  🔄 Get More Ideas
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
