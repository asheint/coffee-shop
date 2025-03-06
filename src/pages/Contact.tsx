import React from 'react';

const Contact = () => {
    return (
        <div className="py-16 bg-[url('https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=2000')] bg-fixed bg-cover bg-center">
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/50"></div>
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Animated Decorative Elements */}
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/924/924514.png"
                        alt="Coffee Bean"
                        className="w-16 h-16 opacity-20"
                    />
                </div>

                {/* Main Content with Animation */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold text-white mb-4">Contact Us</h1>
                    <p className="text-gray-200">We'd love to hear from you</p>
                </div>

                {/* Contact Information with Modern Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    <div className="bg-white/90 backdrop-blur-sm rounded-lg shadow-lg p-8 transform hover:scale-[1.02] transition-all duration-300">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                            <span className="w-8 h-1 bg-emerald-600 mr-3"></span>
                            Visit Us
                        </h2>
                        <div className="space-y-6">
                            <div className="flex items-start group">
                                <div className="relative w-12 h-12 mr-4">
                                    <img
                                        src="https://cdn-icons-png.flaticon.com/512/924/924514.png"
                                        alt="Location"
                                        className="w-full h-full opacity-50 group-hover:opacity-100 transition-opacity duration-300"
                                    />
                                    <div className="absolute inset-0 bg-emerald-600/10 rounded-full transform group-hover:scale-110 transition-transform duration-300"></div>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900">Address</h3>
                                    <p className="text-gray-600">No. 115B D.S. Senanayake Street</p>
                                    <p className="text-gray-600">Inside Pushpadana Complex</p>
                                    <p className="text-gray-600">Kandy, Sri Lanka</p>
                                </div>
                            </div>
                            <div className="flex items-start group">
                                <div className="relative w-12 h-12 mr-4">
                                    <img
                                        src="https://cdn-icons-png.flaticon.com/512/924/924514.png"
                                        alt="Phone"
                                        className="w-full h-full opacity-50 group-hover:opacity-100 transition-opacity duration-300"
                                    />
                                    <div className="absolute inset-0 bg-emerald-600/10 rounded-full transform group-hover:scale-110 transition-transform duration-300"></div>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900">Phone</h3>
                                    <p className="text-gray-600">+94 81 234 5678</p>
                                </div>
                            </div>
                            <div className="flex items-start group">
                                <div className="relative w-12 h-12 mr-4">
                                    <img
                                        src="https://cdn-icons-png.flaticon.com/512/924/924514.png"
                                        alt="Email"
                                        className="w-full h-full opacity-50 group-hover:opacity-100 transition-opacity duration-300"
                                    />
                                    <div className="absolute inset-0 bg-emerald-600/10 rounded-full transform group-hover:scale-110 transition-transform duration-300"></div>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900">Email</h3>
                                    <p className="text-gray-600">info@cafekoi.com</p>
                                </div>
                            </div>
                            <div className="flex items-start group">
                                <div className="relative w-12 h-12 mr-4">
                                    <img
                                        src="https://cdn-icons-png.flaticon.com/512/924/924514.png"
                                        alt="Hours"
                                        className="w-full h-full opacity-50 group-hover:opacity-100 transition-opacity duration-300"
                                    />
                                    <div className="absolute inset-0 bg-emerald-600/10 rounded-full transform group-hover:scale-110 transition-transform duration-300"></div>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900">Opening Hours</h3>
                                    <p className="text-gray-600">Monday - Friday: 8:00 AM - 8:00 PM</p>
                                    <p className="text-gray-600">Saturday - Sunday: 9:00 AM - 9:00 PM</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form with Modern Design */}
                    <div className="bg-white/90 backdrop-blur-sm rounded-lg shadow-lg p-8 transform hover:scale-[1.02] transition-all duration-300">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                            <span className="w-8 h-1 bg-emerald-600 mr-3"></span>
                            Send us a Message
                        </h2>
                        <form className="space-y-6">
                            <div className="group">
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full px-4 py-2 rounded-md border border-gray-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500 focus:ring-opacity-50 transition-all duration-300"
                                    placeholder="Your name"
                                />
                            </div>
                            <div className="group">
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full px-4 py-2 rounded-md border border-gray-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500 focus:ring-opacity-50 transition-all duration-300"
                                    placeholder="your@email.com"
                                />
                            </div>
                            <div className="group">
                                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                                <input
                                    type="text"
                                    id="subject"
                                    className="w-full px-4 py-2 rounded-md border border-gray-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500 focus:ring-opacity-50 transition-all duration-300"
                                    placeholder="How can we help?"
                                />
                            </div>
                            <div className="group">
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    className="w-full px-4 py-2 rounded-md border border-gray-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500 focus:ring-opacity-50 transition-all duration-300"
                                    placeholder="Your message..."
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-emerald-600 text-white py-3 px-6 rounded-md hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 transform hover:scale-105 transition-all duration-300"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>

                {/* Map Section with Modern Design */}
                <div className="bg-white/90 backdrop-blur-sm rounded-lg shadow-lg p-8 transform hover:scale-[1.02] transition-all duration-300">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                        <span className="w-8 h-1 bg-emerald-600 mr-3"></span>
                        Find Us
                    </h2>
                    <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.515986549979!2d80.63510487500005!3d7.295775592711772!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae3675067cda89b%3A0x188aa9753f1d5091!2sCafe%20koi!5e0!3m2!1sen!2slk!4v1741290447757!5m2!1sen!2slk"
                            width="100%"
                            height="450"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="rounded-lg"
                        ></iframe>
                    </div>
                </div>

                {/* Bottom Decorative Element */}
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/924/924514.png"
                        alt="Coffee Bean"
                        className="w-16 h-16 opacity-20"
                    />
                </div>
            </div>
        </div>
    );
};

export default Contact; 