"use client"

import { useState } from "react"

interface AIIdea {
  name: string
  description: string
  examplePrompts: string[]
  category: string
}

export default function AICreator() {
  const [prompt, setPrompt] = useState("")
  const [generatedAI, setGeneratedAI] = useState<AIIdea | null>(null)
  const [isGenerating, setIsGenerating] = useState(false)

  const aiCategories = [
    "Creative", "Educational", "Gaming", "Sports", "Pokemon", "Entertainment", 
    "Productivity", "Social", "Art", "Music", "Writing", "Fitness"
  ]

  const generateAI = async () => {
    if (!prompt.trim()) return
    
    setIsGenerating(true)
    
    // Simulate AI generation with creative responses
    setTimeout(() => {
      const category = aiCategories[Math.floor(Math.random() * aiCategories.length)]
      const ideas = {
        name: generateName(prompt, category),
        description: generateDescription(prompt, category),
        examplePrompts: generateExamplePrompts(category),
        category
      }
      
      setGeneratedAI(ideas)
      setIsGenerating(false)
    }, 2000)
  }

  const generateName = (prompt: string, category: string): string => {
    const names = [
      `${category}Genius AI`, `Super ${category} Assistant`, `${category}Master Pro`,
      `Ultra ${category} Creator`, `${category}Wizard`, `Mega ${category} Helper`,
      `${category}Genie`, `Power ${category} AI`, `${category}Champion Bot`
    ]
    return names[Math.floor(Math.random() * names.length)]
  }

  const generateDescription = (prompt: string, category: string): string => {
    const descriptions = [
      `An AI that helps you ${prompt.toLowerCase()} with amazing creativity and speed!`,
      `Your personal ${category.toLowerCase()} assistant that can ${prompt.toLowerCase()} better than anyone else!`,
      `The ultimate AI tool for ${prompt.toLowerCase()} - faster, smarter, and more fun than ever!`,
      `Transform your ${category.toLowerCase()} experience with this incredible AI that ${prompt.toLowerCase()}!`,
      `Meet your new best friend - an AI that specializes in ${prompt.toLowerCase()}!`
    ]
    return descriptions[Math.floor(Math.random() * descriptions.length)]
  }

  const generateExamplePrompts = (category: string): string[] => {
    const promptsByCategory = {
      Pokemon: [
        "Create a new Pokemon with fire and dragon types",
        "Design a Pokemon gym leader for a water-type gym",
        "Make a Pokemon move that's super effective against everything"
      ],
      Sports: [
        "Create a new sport that combines soccer and basketball",
        "Design the ultimate sports stadium",
        "Invent a new training method for athletes"
      ],
      Gaming: [
        "Create a new video game character with special powers",
        "Design a game level that's impossible to beat",
        "Make a new gaming console with crazy features"
      ],
      Creative: [
        "Design a new type of art that nobody has seen before",
        "Create a musical instrument that plays colors",
        "Invent a new dance move that goes viral"
      ]
    }

    return promptsByCategory[category as keyof typeof promptsByCategory] || [
      "Create something amazing and unique",
      "Design the next big thing",
      "Make something that will blow everyone's mind"
    ]
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border-2 border-white/20 mb-8">
        <div className="mb-6">
          <label className="block text-white font-bold mb-4 text-xl">
            What kind of AI do you want to create? 🎨
          </label>
          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="e.g., Make an AI that helps me design Pokémon cards, or Create an AI that comes up with new sports moves..."
            className="w-full p-4 rounded-2xl bg-white/20 text-white placeholder-white/60 border-2 border-white/30 focus:border-purple-500 focus:outline-none resize-none h-32 text-lg"
          />
        </div>

        <div className="text-center">
          <button
            onClick={generateAI}
            disabled={isGenerating || !prompt.trim()}
            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-12 py-4 rounded-2xl font-bold text-xl transform hover:scale-110 transition-all hover:shadow-2xl disabled:opacity-50 disabled:scale-100"
          >
            {isGenerating ? (
              <span className="flex items-center gap-3">
                <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
                Creating AI...
              </span>
            ) : (
              "🚀 Generate AI Concept!"
            )}
          </button>
        </div>
      </div>

      {generatedAI && (
        <div className="bg-gradient-to-r from-green-400 to-blue-500 rounded-3xl p-8 animate-pulse">
          <div className="text-center mb-6">
            <div className="text-4xl mb-4">🎉</div>
            <h2 className="text-3xl font-bold text-white mb-2">Your AI is Ready!</h2>
            <span className="bg-white/20 px-4 py-2 rounded-full text-white font-bold">
              {generatedAI.category}
            </span>
          </div>

          <div className="bg-white/90 rounded-2xl p-6 mb-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-3">{generatedAI.name}</h3>
            <p className="text-gray-700 text-lg">{generatedAI.description}</p>
          </div>

          <div className="bg-white/90 rounded-2xl p-6">
            <h4 className="text-xl font-bold text-gray-800 mb-4">Try these example prompts:</h4>
            <div className="space-y-3">
              {generatedAI.examplePrompts.map((examplePrompt, index) => (
                <div key={index} className="bg-gray-100 rounded-xl p-3 text-gray-700 font-medium">
                  "{examplePrompt}"
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-6">
            <button
              onClick={() => setGeneratedAI(null)}
              className="bg-white/20 text-white px-6 py-3 rounded-xl font-bold hover:bg-white/30 transition-colors"
            >
              🔄 Create Another AI
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
