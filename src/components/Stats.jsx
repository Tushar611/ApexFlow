import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

const Counter = ({ from, to, duration, decimals = 0 }) => {
    const nodeRef = useRef();
    const inView = useInView(nodeRef, { once: true });
    const [count, setCount] = useState(from);

    useEffect(() => {
        if (inView) {
            let start = from;
            const end = to;
            const incrementTime = (duration / ((end - start) * (decimals === 0 ? 1 : 10))) * 1000;

            let timer = setInterval(() => {
                start += decimals === 0 ? 1 : 0.1;
                setCount(Number(start.toFixed(decimals)));
                if (start >= end) {
                    setCount(end); // Ensure we hit the exact target
                    clearInterval(timer);
                }
            }, incrementTime);

            return () => clearInterval(timer);
        }
    }, [inView, from, to, duration, decimals]);

    return <span ref={nodeRef}>{count}</span>;
};

const Stats = () => {
    const brands = [
        "HomeAdvisor", "Angi", "BBB", "Yelp", "Google"
    ];

    return (
        <section className="py-20 bg-premium-text text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:16px_16px]"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 border-b border-white/10 pb-16">
                    <div className="text-center">
                        <div className="text-4xl md:text-5xl font-bold text-premium-gold mb-2 font-display">
                            <Counter from={0} to={15} duration={1.5} />+
                        </div>
                        <div className="text-sm uppercase tracking-widest text-gray-400">Years Experience</div>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl md:text-5xl font-bold text-premium-gold mb-2 font-display">
                            <Counter from={0} to={10} duration={1.5} />k+
                        </div>
                        <div className="text-sm uppercase tracking-widest text-gray-400">Jobs Completed</div>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl md:text-5xl font-bold text-premium-gold mb-2 font-display">
                            <Counter from={0} to={98} duration={1.5} />%
                        </div>
                        <div className="text-sm uppercase tracking-widest text-gray-400">Same-Day Fix</div>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl md:text-5xl font-bold text-premium-gold mb-2 font-display">
                            <Counter from={0} to={4.9} duration={1.5} decimals={1} />
                        </div>
                        <div className="text-sm uppercase tracking-widest text-gray-400">Average Rating</div>
                    </div>
                </div>

                <div className="text-center">
                    <p className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-8">Trusted by Residents in Distinguished Homes for</p>
                    <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                        {brands.map((brand, i) => (
                            <span key={i} className="text-xl md:text-2xl font-bold font-display">{brand}</span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Stats;
