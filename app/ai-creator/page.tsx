"use client"

import { useState } from "react"
import AICreator from "@/components/AICreator"

export default function AICreatorPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-pink-900 to-red-900 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent font-bangers">
            🧠 AI Ideas Lab
          </h1>
          <p className="text-xl text-pink-300">Create amazing AI concepts with just a prompt! 🚀</p>
        </div>

        <AICreator />
      </div>
    </div>
  )
}
