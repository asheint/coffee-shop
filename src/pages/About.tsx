import React from 'react';

const About = () => {
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
                    <h1 className="text-4xl font-bold text-white mb-4">About Us</h1>
                    <p className="text-gray-200">A journey of passion and dedication to perfect coffee</p>
                </div>

                {/* Story Section with Hover Effect */}
                <div className="bg-white/90 backdrop-blur-sm rounded-lg shadow-lg p-8 mb-12 transform hover:scale-[1.02] transition-all duration-300">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        <div className="relative group">
                            <img
                                src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=800"
                                alt="Our Cafe"
                                className="rounded-lg shadow-md transform group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-coffee-600/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                        <div>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                                <span className="w-8 h-1 bg-coffee-600 mr-3"></span>
                                Our Beginning
                            </h2>
                            <p className="text-gray-600 mb-4 leading-relaxed">
                                Founded in 2020, Cafe Koi emerged from a simple idea: to create a space where coffee lovers could experience the perfect cup of coffee in a welcoming atmosphere.
                            </p>
                            <p className="text-gray-600 leading-relaxed">
                                Our journey began with a small team of passionate baristas and has grown into a beloved community hub where people gather to enjoy exceptional coffee and create lasting memories.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Values Section with Modern Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    <div className="bg-white/90 backdrop-blur-sm rounded-lg shadow-lg p-6 text-center transform hover:scale-105 transition-all duration-300 group">
                        <div className="relative w-16 h-16 mx-auto mb-4">
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/924/924514.png"
                                alt="Quality"
                                className="w-full h-full opacity-50 group-hover:opacity-100 transition-opacity duration-300"
                            />
                            <div className="absolute inset-0 bg-coffee-600/10 rounded-full transform group-hover:scale-110 transition-transform duration-300"></div>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Quality</h3>
                        <p className="text-gray-600">We source the finest coffee beans and maintain the highest standards in every cup we serve.</p>
                    </div>
                    <div className="bg-white/90 backdrop-blur-sm rounded-lg shadow-lg p-6 text-center transform hover:scale-105 transition-all duration-300 group">
                        <div className="relative w-16 h-16 mx-auto mb-4">
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/924/924514.png"
                                alt="Community"
                                className="w-full h-full opacity-50 group-hover:opacity-100 transition-opacity duration-300"
                            />
                            <div className="absolute inset-0 bg-coffee-600/10 rounded-full transform group-hover:scale-110 transition-transform duration-300"></div>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Community</h3>
                        <p className="text-gray-600">We believe in creating a welcoming space where everyone feels at home.</p>
                    </div>
                    <div className="bg-white/90 backdrop-blur-sm rounded-lg shadow-lg p-6 text-center transform hover:scale-105 transition-all duration-300 group">
                        <div className="relative w-16 h-16 mx-auto mb-4">
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/924/924514.png"
                                alt="Sustainability"
                                className="w-full h-full opacity-50 group-hover:opacity-100 transition-opacity duration-300"
                            />
                            <div className="absolute inset-0 bg-coffee-600/10 rounded-full transform group-hover:scale-110 transition-transform duration-300"></div>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Sustainability</h3>
                        <p className="text-gray-600">We're committed to sustainable practices and supporting local suppliers.</p>
                    </div>
                </div>

                {/* Team Section with Modern Cards */}
                <div className="bg-white/90 backdrop-blur-sm rounded-lg shadow-lg p-8">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center flex items-center justify-center">
                        <span className="w-16 h-1 bg-coffee-600 mr-3"></span>
                        Meet Our Team
                        <span className="w-16 h-1 bg-coffee-600 ml-3"></span>
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center group">
                            <div className="relative w-32 h-32 mx-auto mb-4">
                                <img
                                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400"
                                    alt="Team Member"
                                    className="w-full h-full rounded-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                                />
                                <div className="absolute inset-0 bg-coffee-600/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900">John Doe</h3>
                            <p className="text-gray-600">Head Barista</p>
                        </div>
                        <div className="text-center group">
                            <div className="relative w-32 h-32 mx-auto mb-4">
                                <img
                                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400"
                                    alt="Team Member"
                                    className="w-full h-full rounded-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                                />
                                <div className="absolute inset-0 bg-coffee-600/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900">Jane Smith</h3>
                            <p className="text-gray-600">Pastry Chef</p>
                        </div>
                        <div className="text-center group">
                            <div className="relative w-32 h-32 mx-auto mb-4">
                                <img
                                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400"
                                    alt="Team Member"
                                    className="w-full h-full rounded-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                                />
                                <div className="absolute inset-0 bg-coffee-600/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900">Mike Johnson</h3>
                            <p className="text-gray-600">Manager</p>
                        </div>
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

export default About; 