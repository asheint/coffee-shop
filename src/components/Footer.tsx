import { Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div>
                        <h3 className="text-xl font-bold mb-4 text-emerald-400">Cafe KOI</h3>
                        <p className="text-gray-400">A cycling-themed coffee house in Kandy, serving specialty coffees, homemade brownies, and custom cakes.</p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><a href="/menu" className="text-gray-400 hover:text-emerald-400 transition-colors">Menu</a></li>
                            <li><a href="/about" className="text-gray-400 hover:text-emerald-400 transition-colors">About Us</a></li>
                            <li><a href="/birthday-gallery" className="text-gray-400 hover:text-emerald-400 transition-colors">Birthday Cakes</a></li>
                            <li><a href="/contact" className="text-gray-400 hover:text-emerald-400 transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Visit Us</h3>
                        <ul className="space-y-2">
                            <li className="flex items-center text-gray-400">
                                <MapPin className="w-4 h-4 mr-2" />
                                No. 115B D.S. Senanayake Street
                            </li>
                            <li className="flex items-center text-gray-400 pl-6">
                                Inside Pushpadana Complex
                            </li>
                            <li className="flex items-center text-gray-400 pl-6">
                                Kandy, Sri Lanka
                            </li>
                        </ul>
                    </div>

                    {/* Social Media */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
                        <div className="flex space-x-4">
                            <a
                                href="https://www.facebook.com/Caf%C3%A9-KOI-7"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-blue-400 transition-colors"
                            >
                                <Facebook className="w-6 h-6" />
                            </a>
                            <a
                                href="https://www.instagram.com/cafe_koi"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-pink-400 transition-colors"
                            >
                                <Instagram className="w-6 h-6" />
                            </a>
                            <a
                                href="https://www.tiktok.com/@cafe_koi"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-white transition-colors"
                            >
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 015.2-2.32V9.39a8.16 8.16 0 005.52 2.09V8.16a6.26 6.26 0 01-3.77-1.47z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
                    <p>&copy; {new Date().getFullYear()} Cafe KOI. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer; 