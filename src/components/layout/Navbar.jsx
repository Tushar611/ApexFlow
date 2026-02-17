import { useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';
import TrustStrip from '../ui/TrustStrip';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        const threshold = window.innerHeight - 80; // Trigger just before Stats section
        setIsScrolled(latest > threshold);
    });

    return (
        <div className="fixed top-0 w-full z-50 flex flex-col">
            <TrustStrip />
            <motion.nav
                className={`w-full transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'
                    }`}
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div className="container mx-auto px-6 flex justify-between items-center">
                    <a href="#" className="text-2xl font-display font-bold text-premium-text tracking-widest">
                        APEX<span className="text-blue-600">FLOW</span>
                    </a>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        {['Services', 'About', 'Testimonials', 'Contact'].map((item) => (
                            <a key={item} href={`#${item.toLowerCase()}`} className="text-sm uppercase tracking-wider text-neutral-900 hover:text-premium-gold transition-colors font-bold">
                                {item}
                            </a>
                        ))}
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        className="md:hidden text-premium-text"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white border-t border-gray-100"
                    >
                        <div className="flex flex-col p-6 space-y-4">
                            {['Services', 'About', 'Testimonials', 'Contact'].map((item) => (
                                <a
                                    key={item}
                                    href={`#${item.toLowerCase()}`}
                                    className="text-lg text-neutral-900 hover:text-premium-gold font-medium"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {item}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </motion.nav>
        </div>
    );
};

export default Navbar;
