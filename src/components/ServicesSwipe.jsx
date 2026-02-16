import { useState } from 'react';
import { motion, useMotionValue, useTransform, AnimatePresence } from 'framer-motion';
import { Wrench, Shield, Zap, Droplets } from 'lucide-react';

import luxuryImage from '../assets/LUXURY.png';

const services = [
    {
        id: 1,
        title: "Emergency Repairs",
        description: "24/7 rapid response for bursts, leaks, and critical failures. We restore specialized systems with surgical precision.",
        icon: Wrench,
        color: "#fff1f2",
        accent: "#e11d48",
        image: "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?q=80&w=2532&auto=format&fit=crop" // Reliable Industrial Pipes
    },
    {
        id: 2,
        title: "Luxury Installations",
        description: "Bespoke bathroom and kitchen fittings for high-end properties. Gold-standard craftsmanship guaranteed.",
        icon: Shield,
        color: "#fffbeb",
        accent: "#d97706",
        image: luxuryImage // Specific user-requested image
    },
    {
        id: 3,
        title: "Smart Water Systems",
        description: "IoT-enabled leak detection and water quality monitoring. Integration with leading smart home ecosystems.",
        icon: Zap,
        color: "#eff6ff",
        accent: "#2563eb",
        image: "https://images.unsplash.com/photo-1517646287270-a5a9ca602e5c?auto=format&fit=crop&w=1920&q=80" // Technology/Smart Home
    },
    {
        id: 4,
        title: "Eco-Friendly Solutions",
        description: "Sustainable plumbing architectures that conserve water without compromising on pressure or performance.",
        icon: Droplets,
        color: "#ecfdf5",
        accent: "#059669",
        image: "https://images.unsplash.com/photo-1542013936693-884638332954?auto=format&fit=crop&w=1920&q=80" // Clear water pouring
    }
];

const Card = ({ data, index, dragConstraints, onSwipe }) => {
    const x = useMotionValue(0);
    const rotate = useTransform(x, [-200, 200], [-30, 30]);
    const opacity = useTransform(x, [-200, -100, 0, 100, 200], [0, 1, 1, 1, 0]);

    const handleDragEnd = (event, info) => {
        if (Math.abs(info.offset.x) > 100) {
            onSwipe();
        }
    };

    return (
        <motion.div
            style={{
                x,
                rotate,
                opacity,
                zIndex: 10 - index,
                scale: 1 - index * 0.05,
                y: index * 20
            }}
            drag="x"
            dragConstraints={{ left: -100, right: 100 }}
            dragSnapToOrigin={true}
            onDragEnd={handleDragEnd}
            className={`absolute top-0 w-full max-w-md bg-white border border-gray-200 p-10 rounded-3xl overflow-hidden cursor-grab active:cursor-grabbing shadow-2xl flex flex-col justify-center min-h-[400px]`}
        >
            <div className="absolute top-0 right-0 p-8 opacity-5">
                <data.icon size={180} color={data.accent} />
            </div>

            <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-sm" style={{ backgroundColor: `${data.accent}15` }}>
                    <data.icon size={32} color={data.accent} />
                </div>

                <h3 className="text-3xl font-display font-bold text-neutral-900 mb-6">{data.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-10 text-lg">{data.description}</p>

                <button
                    className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider transition-colors hover:opacity-80"
                    style={{ color: data.accent }}
                >
                    Learn More
                </button>
            </div>

            {/* Progress Bar Decoration */}
            <div className="absolute bottom-0 left-0 w-full h-1.5 bg-gray-100/50">
                <div className="h-full w-1/3" style={{ backgroundColor: data.accent }}></div>
            </div>
        </motion.div>
    );
};

const ServicesSwipe = () => {
    const [activeCards, setActiveCards] = useState(services);

    // The active card determines the background
    const activeService = activeCards[0];

    const handleNext = () => {
        setActiveCards((prev) => {
            const newCards = [...prev];
            const first = newCards.shift();
            newCards.push(first);
            return newCards;
        });
    };

    const handlePrev = () => {
        setActiveCards((prev) => {
            const newCards = [...prev];
            const last = newCards.pop();
            newCards.unshift(last);
            return newCards;
        });
    };

    return (
        <section id="services" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">

            {/* Dynamic Background Image */}
            <AnimatePresence mode="popLayout">
                <motion.div
                    key={activeService.id}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8 }}
                    className="absolute inset-0 z-0"
                >
                    <div className="absolute inset-0 bg-neutral-900/60 z-10 backdrop-blur-[2px]" />
                    {/* Added darker overlay for text readability on top of images */}
                    <img
                        src={activeService.image}
                        alt={activeService.title}
                        className="w-full h-full object-cover"
                    />
                </motion.div>
            </AnimatePresence>

            <div className="container mx-auto px-6 z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center h-full py-10 md:py-20">

                <div className="text-left text-white">
                    <motion.span
                        key={activeService.id + "-tag"}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="inline-block py-1.5 px-4 rounded-full bg-white/10 backdrop-blur-md text-xs font-bold uppercase tracking-widest text-white mb-6 border border-white/20"
                    >
                        Our Expertise
                    </motion.span>

                    <motion.h2
                        key={activeService.id + "-title"}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6 md:mb-8 leading-tight"
                    >
                        {activeService.title}
                    </motion.h2>

                    <motion.p
                        key={activeService.id + "-desc"}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-gray-200 max-w-xl leading-relaxed mb-12 font-light"
                    >
                        Swipe cards to explore our premium plumbing services tailored for modern living.
                    </motion.p>
                </div>

                <div className="relative w-full h-[500px] flex items-center justify-center perspective-1000">

                    {/* Left Button */}
                    <button
                        onClick={handlePrev}
                        className="absolute left-2 lg:-left-12 z-50 w-12 h-12 rounded-full border border-neutral-200 lg:border-white/30 flex items-center justify-center text-white bg-neutral-900 lg:bg-white/10 backdrop-blur-sm lg:hover:bg-white lg:hover:text-black transition-all cursor-pointer shadow-lg active:scale-95"
                    >
                        ←
                    </button>

                    <AnimatePresence>
                        {activeCards.map((service, index) => (
                            index < 3 && (
                                <Card
                                    key={service.id}
                                    data={service}
                                    index={index}
                                    onSwipe={handleNext}
                                />
                            )
                        )).reverse()}
                    </AnimatePresence>

                    {/* Right Button */}
                    <button
                        onClick={handleNext}
                        className="absolute right-2 lg:-right-12 z-50 w-12 h-12 rounded-full border border-neutral-200 lg:border-white/30 flex items-center justify-center text-white bg-neutral-900 lg:bg-white/10 backdrop-blur-sm lg:hover:bg-white lg:hover:text-black transition-all cursor-pointer shadow-lg active:scale-95"
                    >
                        →
                    </button>

                    {/* Drag Instruction */}
                    <div className="absolute -bottom-8 lg:bottom-4 text-white/50 text-xs font-bold uppercase tracking-widest pointer-events-none z-0">
                        Drag to Swipe
                    </div>
                </div>

            </div>
        </section>
    );
};

export default ServicesSwipe;
