import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-neutral-900 text-white pt-20 pb-10">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                    {/* Brand Column */}
                    <div>
                        <a href="#" className="text-2xl font-display font-bold text-white tracking-widest block mb-6">
                            APEX<span className="text-blue-600">FLOW</span>
                        </a>
                        <p className="text-neutral-300 mb-6 leading-relaxed">
                            Setting the gold standard in residential and commercial plumbing. Precision, integrity, and 24/7 reliability for discerning clients.
                        </p>
                        <div className="flex gap-4">
                            {[
                                { Icon: Facebook, href: '#' },
                                { Icon: Twitter, href: '#' },
                                { Icon: Instagram, href: '#' }
                            ].map(({ Icon, href }, i) => (
                                <a key={i} href={href} className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-premium-gold hover:text-white transition-all hover:-translate-y-1">
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-bold text-lg mb-6 uppercase tracking-wider text-white">Services</h4>
                        <ul className="space-y-4 text-neutral-300">
                            {['Emergency Repairs', 'Leak Detection', 'Luxury Installations', 'Drain Cleaning', 'Water Heaters'].map(link => (
                                <li key={link}><a href="#" className="hover:text-premium-gold transition-colors">{link}</a></li>
                            ))}
                        </ul>
                    </div>

                    {/* Service Areas */}
                    <div>
                        <h4 className="font-bold text-lg mb-6 uppercase tracking-wider text-white">Service Areas</h4>
                        <ul className="space-y-4 text-neutral-300">
                            {['Beverly Hills', 'Santa Monica', 'Pacific Palisades', 'Malibu', 'West Hollywood'].map(area => (
                                <li key={area} className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-premium-gold"></span>
                                    {area}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h4 className="font-bold text-lg mb-6 uppercase tracking-wider text-white">Maintenance Tips</h4>
                        <p className="text-neutral-300 mb-4 text-sm">
                            Get our exclusive "Seasonal Maintenance Checklist" PDF.
                        </p>
                        <form className="space-y-3">
                            <input
                                type="email"
                                placeholder="Email Address"
                                className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-sm focus:border-premium-gold focus:outline-none transition-colors text-white"
                            />
                            <button className="w-full py-3 bg-premium-gold text-neutral-900 font-bold uppercase text-sm tracking-wider hover:bg-white transition-colors rounded-lg">
                                Get Checklist
                            </button>
                        </form>
                    </div>

                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-neutral-300 text-sm">
                    <p>&copy; {new Date().getFullYear()} ApexFlow Plumbing Solutions. All rights reserved.</p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <span>Lic #987654321</span>
                        <a href="#" className="hover:text-white">Privacy</a>
                        <a href="#" className="hover:text-white">Terms</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
