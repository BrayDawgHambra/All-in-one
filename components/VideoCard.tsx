interface Video {
  title: string
  channel: string
  description: string
}

interface VideoCardProps {
  video: Video
}

export default function VideoCard({ video }: VideoCardProps) {
  return (
    <div className="bg-gradient-to-r from-red-500 to-pink-500 rounded-2xl p-6 transform hover:scale-105 transition-all shadow-xl hover:shadow-2xl">
      <div className="bg-white rounded-xl p-4 h-full">
        <h3 className="text-lg font-bold text-gray-800 mb-2">{video.title}</h3>
        <p className="text-red-600 font-bold mb-2">by {video.channel}</p>
        <p className="text-gray-600 text-sm">{video.description}</p>
        <div className="mt-4 text-center">
          <button className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-4 py-2 rounded-lg font-bold hover:shadow-lg transition-all">
            Watch on YouTube ▶️
          </button>
        </div>
      </div>
    </div>
  )
}
