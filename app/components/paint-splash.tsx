"use client"
import { motion } from "framer-motion"

interface PaintSplashProps {
    className?: string
}

export function PaintSplash({ className }: PaintSplashProps) {
    return (
        <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
            {/* Tache principale derrière la vidéo */}
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] z-0"
            >
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                    <path
                        fill="#4168eb"
                        opacity="0.15"
                        d="M40.9,-68.5C52.3,-62.5,60.5,-49.8,67.2,-36.2C73.9,-22.6,79.1,-8.1,77.8,5.8C76.5,19.7,68.7,33,58.8,43.4C48.9,53.8,36.8,61.3,23.4,67.1C10,72.9,-4.7,77,-18.2,74.7C-31.7,72.4,-44,63.7,-53.1,52.4C-62.2,41.1,-68.1,27.2,-71.1,12.5C-74.1,-2.2,-74.2,-17.7,-68.6,-30.5C-63,-43.3,-51.7,-53.3,-39.2,-58.7C-26.7,-64.1,-13.3,-64.8,0.9,-66.3C15.2,-67.8,29.5,-74.5,40.9,-68.5Z"
                        transform="translate(100 100)"
                    />
                </svg>
            </motion.div>

            {/* Taches secondaires */}
            <motion.div
                initial={{ scale: 0.7, opacity: 0, rotate: -10 }}
                animate={{ scale: 1, opacity: 1, rotate: 0 }}
                transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
                className="absolute top-[20%] right-[10%] w-[30%] h-[30%] z-0"
            >
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                    <path
                        fill="#4168eb"
                        opacity="0.1"
                        d="M44.2,-76.3C58.3,-69.2,71.5,-59.3,79.9,-45.8C88.3,-32.3,92,-15.1,90.6,1.4C89.3,17.9,82.9,33.9,73.1,47.2C63.3,60.5,50.1,71.2,35.4,76.9C20.7,82.6,4.6,83.3,-11.9,81.1C-28.4,78.9,-45.3,73.8,-58.7,63.5C-72.1,53.2,-82,37.7,-86.8,20.8C-91.6,3.9,-91.3,-14.4,-85.2,-30.2C-79.1,-46,-67.2,-59.3,-53,-68.4C-38.8,-77.5,-22.2,-82.4,-4.9,-75.3C12.4,-68.2,30.1,-83.4,44.2,-76.3Z"
                        transform="translate(100 100)"
                    />
                </svg>
            </motion.div>

            <motion.div
                initial={{ scale: 0.7, opacity: 0, rotate: 15 }}
                animate={{ scale: 1, opacity: 1, rotate: 0 }}
                transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
                className="absolute bottom-[15%] left-[5%] w-[25%] h-[25%] z-0"
            >
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                    <path
                        fill="#4168eb"
                        opacity="0.1"
                        d="M47.7,-79.9C62.3,-72.2,75.1,-60.8,83.1,-46.5C91.1,-32.2,94.3,-15.1,92.6,1.7C90.9,18.5,84.3,35,74.2,48.8C64.1,62.6,50.5,73.7,35.2,79.9C19.9,86.1,2.9,87.4,-13.7,84.8C-30.3,82.2,-46.5,75.7,-59.9,65C-73.3,54.3,-83.9,39.4,-88.9,22.8C-93.9,6.2,-93.3,-12.1,-87.7,-28.5C-82.1,-44.9,-71.5,-59.3,-57.5,-67.3C-43.5,-75.3,-26.1,-76.9,-9.2,-74.1C7.7,-71.3,33.1,-87.6,47.7,-79.9Z"
                        transform="translate(100 100)"
                    />
                </svg>
            </motion.div>

            <motion.div
                initial={{ scale: 0.7, opacity: 0, rotate: -5 }}
                animate={{ scale: 1, opacity: 1, rotate: 0 }}
                transition={{ duration: 1.5, delay: 0.4, ease: "easeOut" }}
                className="absolute top-[10%] left-[15%] w-[20%] h-[20%] z-0"
            >
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                    <path
                        fill="#FFD700"
                        opacity="0.07"
                        d="M39.5,-65.3C52.9,-59.4,66.8,-52.2,75.1,-40.3C83.5,-28.4,86.3,-11.8,83.9,3.8C81.5,19.5,73.9,34.1,64.1,46.9C54.3,59.7,42.3,70.6,28.3,76.2C14.3,81.8,-1.7,82.1,-17.1,78.3C-32.5,74.6,-47.3,66.8,-58.7,55.2C-70.1,43.6,-78.1,28.2,-81.7,11.5C-85.3,-5.2,-84.5,-23.2,-76.9,-37.7C-69.3,-52.2,-55,-63.2,-40.2,-68.4C-25.4,-73.6,-10.1,-73,1.9,-76.2C13.9,-79.4,26.1,-71.3,39.5,-65.3Z"
                        transform="translate(100 100)"
                    />
                </svg>
            </motion.div>

            <motion.div
                initial={{ scale: 0.7, opacity: 0, rotate: 10 }}
                animate={{ scale: 1, opacity: 1, rotate: 0 }}
                transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                className="absolute bottom-[10%] right-[15%] w-[22%] h-[22%] z-0"
            >
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                    <path
                        fill="#FF6B6B"
                        opacity="0.05"
                        d="M42.8,-73.7C56.9,-67.8,70.8,-59.3,79.4,-46.7C88,-34.1,91.3,-17,89.9,-0.8C88.5,15.4,82.4,30.9,73.4,44.2C64.4,57.6,52.5,68.9,38.5,75.3C24.5,81.7,8.4,83.2,-7.2,81.1C-22.8,79,-37.9,73.3,-50.1,64C-62.3,54.7,-71.6,41.8,-77.2,27.2C-82.8,12.6,-84.7,-3.7,-81.1,-18.8C-77.5,-33.9,-68.4,-47.8,-56.2,-54.7C-44,-61.6,-28.7,-61.5,-14.5,-67.1C-0.3,-72.7,14.8,-84,28.7,-79.6C42.6,-75.3,28.7,-79.6,42.8,-73.7Z"
                        transform="translate(100 100)"
                    />
                </svg>
            </motion.div>

            {/* Petites éclaboussures */}
            {[...Array(8)].map((_, i) => (
                <motion.div
                    key={i}
                    initial={{
                        scale: 0,
                        opacity: 0,
                        x: Math.random() * 200 - 100,
                        y: Math.random() * 200 - 100,
                    }}
                    animate={{
                        scale: 0.5 + Math.random() * 0.5,
                        opacity: 0.05 + Math.random() * 0.1,
                        x: Math.random() * 200 - 100,
                        y: Math.random() * 200 - 100,
                    }}
                    transition={{
                        duration: 2 + Math.random() * 2,
                        delay: 0.5 + Math.random() * 0.5,
                        ease: "easeOut",
                    }}
                    className="absolute rounded-full bg-blue-500"
                    style={{
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                        width: `${10 + Math.random() * 20}px`,
                        height: `${10 + Math.random() * 20}px`,
                    }}
                />
            ))}
        </div>
    )
}

