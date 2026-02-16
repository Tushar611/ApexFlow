import { Star, CheckCircle } from 'lucide-react';

const reviews = [
    {
        name: "Sarah Jenkins",
        location: "Beverly Hills",
        text: "Absolutely the gold standard. They arrived within 45 minutes of my call for a burst pipe. Clean, professional, and the work was impeccable.",
        stars: 5,
        date: "2 days ago"
    },
    {
        name: "Michael Ross",
        location: "Santa Monica",
        text: "I was hesitant about the pricing at first, but the level of service is unmatched. They even fixed a pressure issue I didn't know I had. Worth every penny.",
        stars: 5,
        date: "1 week ago"
    },
    {
        name: "Eleanor Vance",
        location: "Pacific Palisades",
        text: "Finally, a plumber that respects your home. They wore shoe covers, used drop cloths, and left my bathroom cleaner than they found it.",
        stars: 5,
        date: "3 weeks ago"
    }
];

const Testimonials = () => {
    return (
        <section id="testimonials" className="py-24 bg-gray-50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 bg-white border border-gray-200 px-4 py-2 rounded-full shadow-sm mb-6">
                        <svg className="w-5 h-5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.84z" fill="#FBBC05" />
                            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                        </svg>
                        <span className="font-bold text-neutral-800 text-sm">4.9 Star Rating</span>
                        <div className="flex">
                            {[1, 2, 3, 4, 5].map(i => <Star key={i} size={12} className="fill-yellow-400 text-yellow-400" />)}
                        </div>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-display font-bold text-neutral-900 mb-6">What Our Clients Say</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {reviews.map((review, index) => (
                        <div key={index} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)] hover:shadow-lg transition-shadow">
                            <div className="flex gap-1 mb-4">
                                {[...Array(review.stars)].map((_, i) => (
                                    <Star key={i} size={16} className="fill-premium-gold text-premium-gold" />
                                ))}
                            </div>
                            <p className="text-neutral-600 mb-6 leading-relaxed italic">"{review.text}"</p>

                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center font-bold text-gray-500">
                                    {review.name.charAt(0)}
                                </div>
                                <div>
                                    <h4 className="font-bold text-neutral-900 text-sm">{review.name}</h4>
                                    <p className="text-xs text-gray-400">{review.location}</p>
                                </div>
                                <div className="ml-auto flex items-center gap-1 text-xs text-green-600 font-bold bg-green-50 px-2 py-1 rounded-full">
                                    <CheckCircle size={10} />
                                    Verified
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
