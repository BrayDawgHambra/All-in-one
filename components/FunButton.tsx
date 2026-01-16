"use client"

import Link from "next/link"

interface FunButtonProps {
  title: string
  description: string
  href: string
  color: string
  emoji: string
}

export default function FunButton({ title, description, href, color, emoji }: FunButtonProps) {
  return (
    <Link href={href} className="group">
      <div className={`bg-gradient-to-r ${color} rounded-3xl p-8 transform hover:scale-110 hover:rotate-2 transition-all duration-300 shadow-2xl hover:shadow-3xl border-4 border-white/20`}>
        <div className="text-6xl mb-4 text-center group-hover:animate-bounce">
          {emoji}
        </div>
        <h3 className="text-2xl font-bold text-white mb-3 text-center font-bangers">
          {title}
        </h3>
        <p className="text-white/90 text-center text-sm leading-relaxed">
          {description}
        </p>
        <div className="mt-6 text-center">
          <span className="inline-block bg-white/20 rounded-full px-6 py-2 text-white font-bold hover:bg-white/30 transition-colors">
            Click Me 👀
          </span>
        </div>
      </div>
    </Link>
  )
}
