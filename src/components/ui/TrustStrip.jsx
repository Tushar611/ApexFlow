import { Star, ShieldCheck, Clock } from 'lucide-react';

const TrustStrip = () => {
    return (
        <div className="bg-premium-gold text-white text-xs md:text-sm font-bold tracking-widest uppercase py-2 w-full z-50 relative">
            <div className="container mx-auto px-6 flex justify-between items-center">
                <div className="flex items-center gap-1">
                    <Star size={14} className="fill-white text-white" />
                    <Star size={14} className="fill-white text-white" />
                    <Star size={14} className="fill-white text-white" />
                    <Star size={14} className="fill-white text-white" />
                    <Star size={14} className="fill-white text-white" />
                    <span className="ml-2 hidden md:inline">4.9/5 Rated on Google</span>
                </div>

                <div className="hidden md:flex items-center gap-6">
                    <div className="flex items-center gap-2">
                        <ShieldCheck size={14} />
                        <span>Licensed & Insured</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Clock size={14} />
                        <span>60-Min Response Time</span>
                    </div>
                </div>

                <div className="md:hidden flex items-center gap-2">
                    <Clock size={14} />
                    <span>24/7 Emergency Service</span>
                </div>


            </div>
        </div>
    );
};

export default TrustStrip;
