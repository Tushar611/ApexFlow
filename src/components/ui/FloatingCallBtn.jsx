import { Phone } from 'lucide-react';
import { motion } from 'framer-motion';

const FloatingCallBtn = () => {
    return (
        <motion.a
            href="tel:+13105550199"
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            transition={{ delay: 1, type: "spring" }}
            className="fixed bottom-6 right-6 md:hidden z-50 flex items-center gap-3 bg-red-600 text-white px-6 py-4 rounded-full shadow-2xl hover:bg-red-700 transition-colors"
            style={{ boxShadow: "0 10px 25px -5px rgba(220, 38, 38, 0.5)" }}
        >
            <div className="relative">
                <Phone size={24} className="relative z-10" />
                <span className="absolute inset-0 rounded-full bg-white/30 animate-ping"></span>
            </div>
            <span className="font-bold uppercase tracking-wider text-sm">Call Now</span>
        </motion.a>
    );
};

export default FloatingCallBtn;
