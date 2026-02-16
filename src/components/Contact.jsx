import { motion } from 'framer-motion';

const Contact = () => {
    return (
        <section className="py-16 md:py-32 bg-white relative" id="contact">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-premium-gold font-bold uppercase tracking-widest text-sm mb-4">Contact Us</h2>
                        <h3 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold text-premium-text mb-6 md:mb-8">
                            Let's Discuss Your <br /> Next Project
                        </h3>
                        <p className="text-gray-600 text-lg mb-12 leading-relaxed max-w-md">
                            Fill out the form to schedule a consultation with our senior specialists. We aim to respond within 2 hours.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-[1px] bg-premium-gold mt-3"></div>
                                <div>
                                    <h4 className="text-premium-text font-bold uppercase tracking-wider mb-2">Headquarters</h4>
                                    <p className="text-gray-600">123 Luxury Lane, Suite 100<br />Beverly Hills, CA 90210</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-[1px] bg-premium-gold mt-3"></div>
                                <div>
                                    <h4 className="text-premium-text font-bold uppercase tracking-wider mb-2">Direct Line</h4>
                                    <p className="text-gray-600">+1 (310) 555-0199</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="bg-white p-10 rounded-3xl border border-gray-200 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] hover:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.15)] transition-shadow duration-300"
                    >
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-wider text-neutral-500">First Name</label>
                                    <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded-lg p-4 text-neutral-900 font-medium placeholder:text-neutral-400 focus:bg-white focus:border-premium-gold focus:ring-1 focus:ring-premium-gold focus:outline-none transition-all shadow-sm" placeholder="John" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-wider text-neutral-500">Last Name</label>
                                    <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded-lg p-4 text-neutral-900 font-medium placeholder:text-neutral-400 focus:bg-white focus:border-premium-gold focus:ring-1 focus:ring-premium-gold focus:outline-none transition-all shadow-sm" placeholder="Doe" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-wider text-neutral-500">Email Address</label>
                                <input type="email" className="w-full bg-gray-50 border border-gray-200 rounded-lg p-4 text-neutral-900 font-medium placeholder:text-neutral-400 focus:bg-white focus:border-premium-gold focus:ring-1 focus:ring-premium-gold focus:outline-none transition-all shadow-sm" placeholder="john@example.com" />
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-wider text-neutral-500">Message</label>
                                <textarea rows="4" className="w-full bg-gray-50 border border-gray-200 rounded-lg p-4 text-neutral-900 font-medium placeholder:text-neutral-400 focus:bg-white focus:border-premium-gold focus:ring-1 focus:ring-premium-gold focus:outline-none transition-all shadow-sm" placeholder="Tell us about your project..."></textarea>
                            </div>

                            <button className="w-full py-4 bg-premium-text text-white font-bold uppercase tracking-wider hover:bg-premium-gold transition-all duration-300 rounded-lg mt-4 shadow-lg">
                                Send Message
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
