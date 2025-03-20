"use client";

import { BadgeCheck } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef } from "react";

export default function Testimonials({ dictionary }: { dictionary: Record<string, any> }) {
    const testimonials = dictionary.testimonials;
    const leftColumnRef = useRef<HTMLDivElement>(null);
    const rightColumnRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const leftColumn = leftColumnRef.current;
        const rightColumn = rightColumnRef.current;

        if (!leftColumn || !rightColumn) return;

        // Clone testimonials for seamless looping
        const cloneNodes = () => {
            const leftItems = leftColumn.querySelectorAll(".testimonial-item");
            const rightItems = rightColumn.querySelectorAll(".testimonial-item");

            leftItems.forEach((item) => {
                const clone = item.cloneNode(true) as HTMLElement;
                leftColumn.appendChild(clone);
            });

            rightItems.forEach((item) => {
                const clone = item.cloneNode(true) as HTMLElement;
                rightColumn.appendChild(clone);
            });
        };

        cloneNodes();

        // Set initial positions
        leftColumn.style.transform = "translateY(0)";
        rightColumn.style.transform = "translateY(0)";

        // Animation function
        const animateCarousel = () => {
            const leftHeight = leftColumn.scrollHeight / 2;
            const rightHeight = rightColumn.scrollHeight / 2;

            let leftPosition = 0;
            let rightPosition = 0;

            const scrollSpeed = 0.5; // pixels per frame

            const animate = () => {
                // Move left column down
                leftPosition -= scrollSpeed;
                if (Math.abs(leftPosition) >= leftHeight) {
                    leftPosition = 0;
                }
                leftColumn.style.transform = `translateY(${leftPosition}px)`;

                // Move right column up
                rightPosition += scrollSpeed;
                if (Math.abs(rightPosition) >= rightHeight) {
                    rightPosition = 0;
                }
                rightColumn.style.transform = `translateY(${rightPosition}px)`;

                requestAnimationFrame(animate);
            };

            animate();
        };

        // Start animation after a short delay to ensure clones are in place
        const animationTimeout = setTimeout(animateCarousel, 100);

        return () => {
            clearTimeout(animationTimeout);
        };
    }, []);

    // Split testimonials into two columns
    const leftTestimonials = testimonials.slice(0, Math.ceil(testimonials.length / 2));
    const rightTestimonials = testimonials.slice(Math.ceil(testimonials.length / 2));

    return (
        <section className="relative overflow-hidden py-4">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
                    <div>
                        <h2 className="text-[120px] font-bold leading-[0.95] tracking-tight text-black">
                            {dictionary.title}
                            <br />
                            {dictionary.subtitle}
                        </h2>
                    </div>
                    <div className="relative grid grid-cols-2 gap-6 overflow-hidden">
                        {/* Left column - scrolling down */}
                        <div className="h-[600px] overflow-hidden">
                            <div ref={leftColumnRef} className="transition-transform duration-1000 ease-linear">
                                {leftTestimonials.map((testimonial: any, i: any) => (
                                    <div key={`left-${i}`} className="testimonial-item mb-6">
                                        <div className="rounded-xl bg-white p-6 shadow-[0_2px_12px_rgba(0,0,0,0.08)]">
                                            <div className="flex items-center gap-3">
                                                <Image
                                                    src={testimonial.avatar || "/placeholder.svg"}
                                                    alt={testimonial.name}
                                                    width={40}
                                                    height={40}
                                                    className="rounded-full"
                                                />
                                                <div>
                                                    <div className="flex items-center gap-1">
                                                        <span className="font-semibold text-gray-900">{testimonial.name}</span>
                                                        {testimonial.verified && <BadgeCheck className="h-4 w-4 text-blue-500" />}
                                                    </div>
                                                    <div className="text-sm text-gray-500">{testimonial.handle}</div>
                                                </div>
                                            </div>
                                            <p className="mt-4 text-gray-600">{testimonial.text}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right column - scrolling up */}
                        <div className="h-[600px] overflow-hidden">
                            <div ref={rightColumnRef} className="transition-transform duration-1000 ease-linear">
                                {rightTestimonials.map((testimonial: any, i: any) => (
                                    <div key={`right-${i}`} className="testimonial-item mb-6">
                                        <div className="rounded-xl bg-white p-6 shadow-[0_2px_12px_rgba(0,0,0,0.08)]">
                                            <div className="flex items-center gap-3">
                                                <Image
                                                    src={testimonial.avatar || "/placeholder.svg"}
                                                    alt={testimonial.name}
                                                    width={40}
                                                    height={40}
                                                    className="rounded-full"
                                                />
                                                <div>
                                                    <div className="flex items-center gap-1">
                                                        <span className="font-semibold text-gray-900">{testimonial.name}</span>
                                                        {testimonial.verified && <BadgeCheck className="h-4 w-4 text-blue-500" />}
                                                    </div>
                                                    <div className="text-sm text-gray-500">{testimonial.handle}</div>
                                                </div>
                                            </div>
                                            <p className="mt-4 text-gray-600">{testimonial.text}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
