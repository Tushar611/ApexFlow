import { motion } from 'framer-motion';
import { Award, Clock, MapPin, ShieldCheck, Star } from 'lucide-react';

const features = [
    {
        icon: Clock,
        title: "24/7 Availability",
        description: "Round-the-clock emergency response for your peace of mind."
    },
    {
        icon: Award,
        title: "Master Craftsmen",
        description: "Certified experts with decades of experience in luxury plumbing."
    },
    {
        icon: ShieldCheck,
        title: "Lifetime Warranty",
        description: "We stand behind our work with comprehensive guarantees."
    },
    {
        icon: MapPin,
        title: "Local Excellence",
        description: "Serving the most prestigious neighborhoods in the city."
    },
    {
        icon: Star,
        title: "5-Star Ratings",
        description: "Consistently rated top-tier by our distinguished clientele."
    },
    {
        icon: Award, // Reusing icon for demo
        title: "Premium Materials",
        description: "Only the finest fixtures and fittings are installed."
    }
];

const Features = () => {
    return (
        <section className="py-32 bg-premium-gray relative overflow-hidden" id="about">
            {/* Decorative Background Elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-premium-gold font-bold uppercase tracking-widest text-sm mb-4">Why Choose Us</h2>
                    <h3 className="text-4xl md:text-5xl font-display font-bold text-premium-text max-w-2xl mx-auto">
                        Uncompromising Quality for <br />
                        <span className="text-gray-500">Distinguished Homes</span>
                    </h3>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            className="p-8 rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] hover:border-premium-gold/40 hover:-translate-y-1 transition-all duration-300 group"
                        >
                            <div className="w-14 h-14 rounded-full bg-premium-gold/10 flex items-center justify-center mb-6 group-hover:bg-premium-gold group-hover:text-white transition-colors duration-300">
                                <feature.icon size={28} className="text-premium-gold group-hover:text-white transition-colors duration-300" />
                            </div>
                            <h4 className="text-xl font-bold text-premium-text mb-4 font-display">{feature.title}</h4>
                            <p className="text-neutral-600 leading-relaxed font-medium">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
