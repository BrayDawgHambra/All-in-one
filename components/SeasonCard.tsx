"use client"

interface Season {
  seasonNumber: number
  seasonName: string
  episodes: number
  slug: string
  subtitle?: string
}

interface SeasonCardProps {
  season: Season
  isNewEra?: boolean
}

export default function SeasonCard({ season, isNewEra = false }: SeasonCardProps) {
  const handleClick = () => {
    window.open(`http://www.pokeflix.tv/?q=${season.slug}`, '_blank')
  }

  return (
    <div 
      onClick={handleClick}
      className="bg-offwhite rounded-2xl p-6 border-4 border-navy hover:border-green-500 hover:shadow-green-500/50 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all cursor-pointer group relative overflow-hidden"
      style={{ 
        backgroundColor: '#F5F5F5', 
        borderColor: '#081A3A',
        '--tw-shadow-color': isNewEra ? '#31D27C' : '#FF8A2B'
      } as React.CSSProperties}
    >
      {/* New Era Badge */}
      {isNewEra && (
        <div className="absolute top-2 right-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-1 rounded-full text-xs font-bold animate-pulse">
          NEW ERA ✨
        </div>
      )}

      {/* Thumbnail Placeholder */}
      <div className="w-full h-32 bg-gradient-to-br from-orange-400 to-red-500 rounded-xl mb-4 flex items-center justify-center relative overflow-hidden group-hover:from-green-400 group-hover:to-emerald-500 transition-all">
        <div className="text-6xl animate-pulse">⚡</div>
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="text-white text-4xl animate-bounce">▶️</div>
        </div>
      </div>

      {/* Season Info */}
      <div className="text-center">
        <h3 className="text-lg font-bold text-gray-800 mb-2 line-clamp-2">{season.seasonName}</h3>
        {season.subtitle && (
          <p className="text-sm text-gray-600 mb-2">{season.subtitle}</p>
        )}
        <div className="flex justify-between items-center text-sm text-gray-600">
          <span>Season {season.seasonNumber}</span>
          <span>{season.episodes} episodes</span>
        </div>
      </div>

      {/* Hover Effect Border */}
      <div className="absolute inset-0 border-4 border-transparent group-hover:border-green-500 rounded-2xl pointer-events-none transition-all duration-300"></div>
    </div>
  )
}
