import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
    const [isMobile, setIsMobile] = useState(false);

    // Detect mobile
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    return (
        <section className="relative h-screen">
            <div className="absolute inset-0 z-0">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                >
                    <source src="/video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                {/* Overlay for readability - Adjust opacity as needed */}
                <div className="absolute inset-0 bg-white/60 z-10" />
            </div>

            {/* Content */}
            <div className="relative z-20 h-full flex items-center justify-center">
                <div className="text-center px-6 max-w-5xl mx-auto mt-12">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="mb-8 inline-flex items-center gap-2 bg-red-600/10 border border-red-600/20 px-4 py-2 rounded-full backdrop-blur-sm"
                    >
                        <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse"></span>
                        <span className="text-red-600 text-xs font-bold uppercase tracking-widest">Available 24/7 for Emergencies</span>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <h2 className="text-premium-gold uppercase tracking-[0.3em] text-sm md:text-base mb-6 font-extrabold">
                            Gold Standard Service
                        </h2>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-extrabold text-neutral-900 mb-8 tracking-tight leading-tight drop-shadow-sm">
                            Apex<span className="text-blue-600">Flow</span> <br />
                            <span className="text-neutral-900">
                                Plumbing Solutions
                            </span>
                        </h1>
                        <p className="text-neutral-900 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-medium leading-relaxed">
                            Experience the pinnacle of craftsmanship. 24/7 emergency response, luxury installations, and uncompromising quality for distinguished properties.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        className="flex flex-col md:flex-row gap-6 justify-center items-center"
                    >
                        <div className="flex flex-col gap-2">
                            <button
                                onClick={() => {
                                    const contactSection = document.getElementById('contact');
                                    if (contactSection) {
                                        contactSection.scrollIntoView({ behavior: 'smooth' });
                                    }
                                }}
                                className="px-10 py-4 bg-premium-gold text-white font-bold uppercase tracking-wider rounded-full hover:bg-premium-gold/90 transition-all duration-300 shadow-xl hover:shadow-[0_0_30px_rgba(180,83,9,0.6)] transform hover:scale-105 relative overflow-hidden group"
                            >
                                <span className="relative z-10">Book Service Now</span>
                                <div className="absolute inset-0 h-full w-full scale-0 rounded-full transition-all duration-300 group-hover:scale-100 group-hover:bg-premium-gold/20"></div>
                            </button>
                            <span className="text-xs text-neutral-500 uppercase tracking-widest font-bold">Fast 60-Min Response</span>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator - Hide on mobile if no scroll effect */}
            {!isMobile && (
                <motion.div
                    className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                >
                    <ArrowDown className="text-neutral-400 opacity-80" size={32} />
                </motion.div>
            )}
        </section>
    );
};

export default Hero;
