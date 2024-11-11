import { useState, useRef } from 'react'
import { PlayCircle, Maximize2, Minimize2, Volume2, VolumeX, RefreshCcw } from 'lucide-react'
import VIDEO from '../assets/video_presentacion.mp4'

export default function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [volume, setVolume] = useState(1)
  const [progress, setProgress] = useState(0)
  const videoRef = useRef(null)
  const containerRef = useRef(null)

  const togglePlay = () => {
    if (videoRef.current.paused) {
      videoRef.current.play()
      setIsPlaying(true)
    } else {
      videoRef.current.pause()
      setIsPlaying(false)
    }
  }

  const toggleFullscreen = () => {
    if (!isFullscreen) {
      if (containerRef.current.requestFullscreen) {
        containerRef.current.requestFullscreen()
      } else if (containerRef.current.webkitRequestFullscreen) {
        containerRef.current.webkitRequestFullscreen()
      } else if (containerRef.current.msRequestFullscreen) {
        containerRef.current.msRequestFullscreen()
      }
      setIsFullscreen(true)
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen()
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen()
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen()
      }
      setIsFullscreen(false)
    }
  }

  const handleVolumeClick = () => {
    if (volume === 0) {
      setVolume(1)
      videoRef.current.volume = 1
    } else {
      setVolume(0)
      videoRef.current.volume = 0
    }
  }

  const handleProgressChange = (e) => {
    const time = (e.target.value / 100) * videoRef.current.duration
    videoRef.current.currentTime = time
    setProgress(e.target.value)
  }

  const updateProgress = () => {
    const current = (videoRef.current.currentTime / videoRef.current.duration) * 100
    setProgress(current)
  }

  const restartVideo = () => {
    videoRef.current.currentTime = 0
    setProgress(0)
  }

  return (
    <section id="quienes-somos" className="py-20 bg-gradient-to-b from-white to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold text-[#b63a24] sm:text-5xl mb-12 text-center">
          Descubre Urbacar
        </h2>
        <div ref={containerRef} className="relative aspect-video rounded-xl overflow-hidden shadow-2xl">
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            poster="https://i.postimg.cc/mDjPFzSC/LOGO-CANAVERAL.webp"
            onClick={togglePlay}
            onTimeUpdate={updateProgress}
          >
            <source src={VIDEO} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {!isPlaying && (
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center space-y-4 transition-opacity duration-300">
              <button
                onClick={togglePlay}
                className="text-white hover:text-[#b63a24] transition-colors duration-300"
                aria-label="Play video"
              >
                <PlayCircle size={64} />
              </button>
            </div>
          )}

          {/* Barra de progreso y controles inferiores */}
          {!isPlaying && (
            <div className="absolute bottom-4 left-0 right-0 flex items-center justify-center space-x-3 px-4">
              <input
                type="range"
                min="0"
                max="100"
                value={progress}
                onChange={handleProgressChange}
                className="w-3/4 h-2 bg-gray-300 rounded-lg appearance-none overflow-hidden"
              />
              <button
                onClick={restartVideo}
                className="text-white hover:text-[#b63a24] transition-colors duration-300"
                aria-label="Restart video"
              >
                <RefreshCcw size={24} />
              </button>
              <div className="relative">
                <button
                  onClick={handleVolumeClick}
                  className="text-white hover:text-[#b63a24] transition-colors duration-300"
                  aria-label="Mute/Unmute"
                >
                  {volume === 0 ? (
                    <VolumeX size={24} />
                  ) : (
                    <Volume2 size={24} />
                  )}
                </button>
              </div>
              <button
                onClick={toggleFullscreen}
                className="text-white hover:text-[#b63a24] transition-colors duration-300"
                aria-label={isFullscreen ? "Exit full screen" : "Enter full screen"}
              >
                {isFullscreen ? <Minimize2 size={24} /> : <Maximize2 size={24} />}
              </button>
            </div>
          )}
        </div>
        <div className="mt-8 text-center">
          <p className="text-xl text-gray-700">
            Explora nuestros proyectos y descubre cómo Urbacar está transformando el paisaje urbano,
            creando comunidades vibrantes y espacios de vida excepcionales.
          </p>
        </div>
      </div>
    </section>
  )
}