import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeftRight } from 'lucide-react';

import beforeImage from '../assets/before.jpeg';
import afterImage from '../assets/after.jpeg';

const BeforeAfterSlider = () => {
    const [sliderPosition, setSliderPosition] = useState(50);
    const containerRef = useRef(null);
    const isDragging = useRef(false);

    const handleMove = (event) => {
        if (!isDragging.current || !containerRef.current) return;

        const containerRect = containerRef.current.getBoundingClientRect();
        const x = ('touches' in event ? event.touches[0].clientX : event.clientX) - containerRect.left;
        const percentage = Math.min(Math.max((x / containerRect.width) * 100, 0), 100);

        setSliderPosition(percentage);
    };

    const handleMouseDown = () => isDragging.current = true;
    const handleMouseUp = () => isDragging.current = false;

    useEffect(() => {
        document.addEventListener('mouseup', handleMouseUp);
        document.addEventListener('touchend', handleMouseUp);
        document.addEventListener('mousemove', handleMove);
        document.addEventListener('touchmove', handleMove);

        return () => {
            document.removeEventListener('mouseup', handleMouseUp);
            document.removeEventListener('touchend', handleMouseUp);
            document.removeEventListener('mousemove', handleMove);
            document.removeEventListener('touchmove', handleMove);
        };
    }, []);

    return (
        <section className="py-24 bg-neutral-900 text-white relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-premium-gold font-bold uppercase tracking-widest text-sm mb-4">Real Transformations</h2>
                    <h3 className="text-4xl md:text-5xl font-display font-bold mb-6">See The Difference</h3>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        From chaotic leaks to pristine installations. Drag the slider to see our craftsmanship in action.
                    </p>
                </div>

                <div
                    ref={containerRef}
                    className="relative w-full max-w-5xl mx-auto aspect-[16/9] md:aspect-[21/9] rounded-3xl overflow-hidden cursor-ew-resize select-none shadow-2xl border border-white/10"
                    onMouseDown={handleMouseDown}
                    onTouchStart={handleMouseDown}
                >
                    {/* AFTER Image (Background) */}
                    <div className="absolute inset-0">
                        <img
                            src={afterImage}
                            alt="After Plumbing"
                            className="w-full h-full object-cover"
                            draggable="false"
                        />
                        <span className="absolute top-6 right-6 bg-green-500/90 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider backdrop-blur-sm">After</span>
                    </div>

                    {/* BEFORE Image (Clipped overlay) */}
                    <div
                        className="absolute inset-0 border-r-4 border-white overflow-hidden"
                        style={{ width: `${sliderPosition}%` }}
                    >
                        <img
                            src={beforeImage}
                            alt="Before Plumbing"
                            className="w-full h-full object-cover"
                            style={{ width: '100%', maxWidth: 'unset' }} // Use 100% to avoid scrollbar width issues
                            draggable="false"
                        />
                        <span className="absolute top-6 left-6 bg-red-500/90 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider backdrop-blur-sm">Before</span>
                    </div>

                    {/* Slider Handle */}
                    <div
                        className="absolute top-0 bottom-0 w-10 -ml-5 flex items-center justify-center pointer-events-none"
                        style={{ left: `${sliderPosition}%` }}
                    >
                        <div className="w-10 h-10 rounded-full bg-white shadow-xl flex items-center justify-center text-premium-gold">
                            <ArrowLeftRight size={20} />
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default BeforeAfterSlider;
