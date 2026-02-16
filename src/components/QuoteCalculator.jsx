import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calculator, CheckCircle, ArrowRight } from 'lucide-react';

const QuoteCalculator = () => {
    const [step, setStep] = useState(1);
    const [serviceType, setServiceType] = useState(null);
    const [urgency, setUrgency] = useState(null);

    const services = [
        { id: 'leak', label: 'Leak Repair', range: '$150 - $350' },
        { id: 'drain', label: 'Clogged Drain', range: '$120 - $250' },
        { id: 'heater', label: 'Water Heater', range: '$300 - $800+' },
        { id: 'install', label: 'Installation', range: '$200 - $600' }
    ];

    const urgencies = [
        { id: 'emergency', label: 'Emergency (Now)', multiplier: 1.5 },
        { id: 'today', label: 'Same Day', multiplier: 1.2 },
        { id: 'flexible', label: 'Flexible', multiplier: 1.0 }
    ];

    const handleServiceSelect = (service) => {
        setServiceType(service);
        setStep(2);
    };

    const handleUrgencySelect = (level) => {
        setUrgency(level);
        setStep(3);
    };

    const reset = () => {
        setStep(1);
        setServiceType(null);
        setUrgency(null);
    };

    return (
        <section className="py-24 bg-gray-50 relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute -left-20 top-20 w-96 h-96 bg-premium-gold/5 rounded-full blur-3xl pointer-events-none" />

            <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

                {/* Text Content */}
                <div className="relative z-10">
                    <div className="inline-flex items-center gap-2 text-premium-gold font-bold uppercase tracking-widest text-sm mb-4">
                        <Calculator size={18} />
                        <span>Instant Estimate</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-display font-extrabold text-neutral-900 mb-6 leading-tight">
                        Get a Price Range in <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-premium-gold to-yellow-600">30 Seconds</span>
                    </h2>
                    <p className="text-neutral-600 text-lg mb-8 leading-relaxed">
                        No hidden fees. No surprises. Select your issue and get an immediate estimated range for your project.
                    </p>

                    <ul className="space-y-4 mb-8">
                        {['Free on-site verification', 'Written guarantee', 'No obligation to book'].map((item, i) => (
                            <li key={i} className="flex items-center gap-3 text-neutral-700 font-medium">
                                <CheckCircle size={20} className="text-premium-gold" />
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Calculator Widget */}
                <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] relative">
                    <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-premium-gold to-yellow-500 rounded-t-3xl" />

                    <AnimatePresence mode="wait">
                        {step === 1 && (
                            <motion.div
                                key="step1"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                            >
                                <h3 className="text-2xl font-bold text-neutral-900 mb-6">What do you need help with?</h3>
                                <div className="grid grid-cols-2 gap-4">
                                    {services.map((s) => (
                                        <button
                                            key={s.id}
                                            onClick={() => handleServiceSelect(s)}
                                            className="p-6 rounded-xl border border-gray-200 bg-white shadow-sm hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:border-premium-gold hover:-translate-y-1 transition-all duration-300 text-left group"
                                        >
                                            <span className="font-bold text-neutral-800 group-hover:text-premium-gold transition-colors block mb-1 text-lg">{s.label}</span>
                                            <span className="text-xs text-gray-400 font-medium">Select Service</span>
                                        </button>
                                    ))}
                                </div>
                            </motion.div>
                        )}

                        {step === 2 && (
                            <motion.div
                                key="step2"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                            >
                                <button onClick={() => setStep(1)} className="text-sm text-gray-400 mb-4 hover:text-neutral-900">← Back</button>
                                <h3 className="text-2xl font-bold text-neutral-900 mb-6">How urgent is it?</h3>
                                <div className="space-y-3">
                                    {urgencies.map((u) => (
                                        <button
                                            key={u.id}
                                            onClick={() => handleUrgencySelect(u)}
                                            className="w-full p-5 rounded-xl border border-gray-200 bg-white shadow-sm hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:border-premium-gold hover:-translate-y-1 transition-all duration-300 text-left flex justify-between items-center group"
                                        >
                                            <span className="font-bold text-neutral-800 text-lg group-hover:text-premium-gold transition-colors">{u.label}</span>
                                            <ArrowRight size={20} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all text-premium-gold" />
                                        </button>
                                    ))}
                                </div>
                            </motion.div>
                        )}

                        {step === 3 && (
                            <motion.div
                                key="step3"
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="text-center py-6"
                            >
                                <div className="inline-block p-3 rounded-full bg-green-100 text-green-600 mb-4">
                                    <CheckCircle size={32} />
                                </div>
                                <h3 className="text-xl font-medium text-gray-500 mb-2">Estimated Range</h3>
                                <div className="text-4xl md:text-5xl font-bold text-premium-text mb-2 tracking-tight">
                                    {serviceType.range}
                                </div>
                                <p className="text-sm text-gray-400 mb-8">*Final price confirmed on-site</p>

                                <button
                                    onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                                    className="w-full py-4 bg-premium-gold text-white font-bold uppercase tracking-wider hover:bg-premium-text transition-all duration-300 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 mb-4"
                                >
                                    Book This Rate
                                </button>
                                <button onClick={reset} className="text-sm text-gray-400 hover:text-neutral-900 underline">
                                    Start Over
                                </button>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Progress Dots */}
                    <div className="flex justify-center gap-2 mt-8">
                        {[1, 2, 3].map((i) => (
                            <div
                                key={i}
                                className={`w-2 h-2 rounded-full transition-all duration-300 ${step >= i ? 'bg-premium-gold w-4' : 'bg-gray-200'}`}
                            />
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default QuoteCalculator;
