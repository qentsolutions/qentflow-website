"use client"

import { useRef, useState, useEffect } from "react"
import { motion } from "framer-motion"
import { PaintSplash } from "./paint-splash"

interface VideoContainerProps {
    src: string
    className?: string
}

export function VideoContainer({ src, className }: VideoContainerProps) {
    const videoRef = useRef<HTMLVideoElement>(null)
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        const video = videoRef.current
        if (video) {
            video.addEventListener("loadeddata", () => setIsLoaded(true))
            return () => {
                video.removeEventListener("loadeddata", () => setIsLoaded(true))
            }
        }
    }, [])

    return (
        <div className={`relative rounded-xl overflow-hidden ${className}`}>
            {/* Fond avec effet de peinture */}
            <PaintSplash />

            {/* Overlay avec effet de brillance */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 to-transparent z-10 pointer-events-none" />

            {/* Bordure brillante */}
            <div className="absolute inset-0 rounded-xl border border-white/10 z-20 pointer-events-none" />

            {/* Conteneur vidéo avec effet d'ombre */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative z-10 rounded-xl overflow-hidden shadow-2xl"
                style={{
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 40px 5px rgba(65, 104, 235, 0.2)",
                }}
            >
                {/* Overlay de chargement */}
                {!isLoaded && (
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-800">
                        <div className="w-12 h-12 rounded-full border-4 border-blue-600 border-t-transparent animate-spin" />
                    </div>
                )}

                {/* Vidéo */}
                <video
                    ref={videoRef}
                    src={src}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-auto object-cover rounded-lg"
                    style={{ opacity: isLoaded ? 1 : 0 }}
                />

                {/* Effet de reflet */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/5 pointer-events-none" />
            </motion.div>

            {/* Points décoratifs */}
            <div className="absolute top-4 left-4 w-2 h-2 rounded-full bg-blue-500/50 animate-pulse z-30" />
            <div className="absolute bottom-4 right-4 w-2 h-2 rounded-full bg-blue-500/50 animate-pulse z-30" />
            <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-yellow-500/50 animate-pulse z-30" />
            <div className="absolute bottom-4 left-4 w-2 h-2 rounded-full bg-yellow-500/50 animate-pulse z-30" />
        </div>
    )
}

