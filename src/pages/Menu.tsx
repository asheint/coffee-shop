import React from 'react';

const popularItems = [
    {
        name: "Specialty Latte",
        price: "Rs. 850",
        image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=80&w=400",
        description: "Our signature specialty coffee blend"
    },
    {
        name: "Homemade Brownie",
        price: "Rs. 750",
        image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=400",
        description: "Freshly baked rich chocolate brownie"
    },
    {
        name: "Custom Cake",
        price: "From Rs. 2,500",
        image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&q=80&w=400",
        description: "Tailored to your special occasions"
    },
    {
        name: "Dark Knight Latte",
        price: "Rs. 900",
        image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&q=80&w=400",
        description: "Our signature dark chocolate specialty"
    }
];

const menuCategories = [
    {
        title: "Hot Coffee",
        items: [
            { name: "Espresso", price: "Rs. 450" },
            { name: "Cappuccino", price: "Rs. 650" },
            { name: "Latte", price: "Rs. 750" },
            { name: "Flat White", price: "Rs. 700" },
            { name: "Mocha", price: "Rs. 800" }
        ]
    },
    {
        title: "Specialty Lattes",
        items: [
            { name: "Caramel Latte", price: "Rs. 850" },
            { name: "Hazelnut Latte", price: "Rs. 850" },
            { name: "Spiced Latte", price: "Rs. 850" },
            { name: "Cinnamon Roll Latte", price: "Rs. 900" },
            { name: "Red Velvet Latte", price: "Rs. 900" },
            { name: "Dark Knight Latte", price: "Rs. 900" }
        ]
    },
    {
        title: "Other Beverages",
        items: [
            { name: "Tea", price: "Rs. 450" },
            { name: "Flavored Tea", price: "Rs. 550" },
            { name: "Hot Chocolate", price: "Rs. 700" },
            { name: "Milkshake", price: "Rs. 750" }
        ]
    },
    {
        title: "Desserts",
        items: [
            { name: "Homemade Brownie", price: "Rs. 750" },
            { name: "Custom Cake", price: "From Rs. 2,500" },
            { name: "Pastries", price: "Rs. 650" }
        ]
    }
];

const Menu = () => {
    return (
        <div className="py-16 bg-[url('https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=2000')] bg-fixed bg-cover bg-center">
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Decorative Elements */}
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/924/924514.png"
                        alt="Coffee Bean"
                        className="w-16 h-16 opacity-20 animate-bounce"
                    />
                </div>

                {/* Popular Items Section */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold text-white mb-4">Our Menu</h1>
                    <p className="text-gray-200">Discover our selection of specialty coffees and homemade treats</p>
                </div>

                <div className="mb-16">
                    <h2 className="text-2xl font-semibold text-white mb-8">Most Popular</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {popularItems.map((item, index) => (
                            <div key={index} className="bg-white/90 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                                <div className="relative">
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-full h-48 object-cover"
                                    />
                                </div>
                                <div className="p-4">
                                    <h3 className="text-lg font-semibold text-gray-900 mb-1">{item.name}</h3>
                                    <p className="text-gray-600 text-sm mb-2">{item.description}</p>
                                    <span className="text-lg font-bold text-gray-900">{item.price}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Full Menu Section */}
                <div>
                    <h2 className="text-2xl font-semibold text-white mb-8">Full Menu</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {menuCategories.map((category, index) => (
                            <div key={index} className="bg-white/90 backdrop-blur-sm rounded-lg shadow-lg p-6">
                                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                                    <img
                                        src="https://cdn-icons-png.flaticon.com/512/924/924514.png"
                                        alt="Coffee Bean"
                                        className="w-6 h-6 mr-2 opacity-50"
                                    />
                                    {category.title}
                                </h3>
                                <div className="space-y-3">
                                    {category.items.map((item, itemIndex) => (
                                        <div key={itemIndex} className="flex items-center">
                                            <span className="text-gray-700">{item.name}</span>
                                            <div className="flex-1 mx-2 border-b border-dotted border-gray-300"></div>
                                            <span className="text-gray-900 font-medium">{item.price}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Menu Section Divider */}
                <div className="mt-16 text-center">
                    <div className="inline-flex items-center">
                        <div className="w-16 h-1 bg-coffee-600/30"></div>
                        <div className="w-16 h-1 bg-coffee-600/30"></div>
                    </div>
                    <p className="mt-4 text-gray-200 text-lg">All our drinks are made with premium ingredients and served with care</p>
                </div>

                {/* Location and Social Media Section */}
                <div className="mt-16 bg-white/90 backdrop-blur-sm rounded-lg shadow-lg p-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Location */}
                        <div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">Visit Us</h3>
                            <div className="space-y-2">
                                <p className="text-gray-700">No. 115B D.S. Senanayake Street</p>
                                <p className="text-gray-700">Inside Pushpadana Complex</p>
                                <p className="text-gray-700">Kandy, Sri Lanka</p>
                            </div>
                        </div>

                        {/* Social Media */}
                        <div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">Connect With Us</h3>
                            <div className="flex space-x-4">
                                <a
                                    href="https://www.facebook.com/Caf%C3%A9-KOI-7"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-700 hover:text-blue-600 transition-colors"
                                >
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                                    </svg>
                                </a>
                                <a
                                    href="https://www.instagram.com/cafe_koi"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-700 hover:text-pink-600 transition-colors"
                                >
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.09 1.064.077 1.791.232 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.233.636.388 1.363.465 2.427.077 1.067.09 1.407.09 4.123v.08c0 2.643-.012 2.987-.09 4.043-.077 1.064-.232 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.233-1.363.388-2.427.465-1.067.077-1.407.09-4.123.09h-.08c-2.643 0-2.987-.012-4.043-.09-1.064-.077-1.791-.232-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.233-.636-.388-1.363-.465-2.427-.077-1.024-.09-1.379-.09-3.808v-.63c0-2.43.013-2.784.09-3.808.077-1.064.232-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.233 1.363-.388 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                                    </svg>
                                </a>
                                <a
                                    href="https://www.tiktok.com/@cafe_koi"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-700 hover:text-black transition-colors"
                                >
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 015.2-2.32V9.39a8.16 8.16 0 005.52 2.09V8.16a6.26 6.26 0 01-3.77-1.47z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Decorative Element */}
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/924/924514.png"
                        alt="Coffee Bean"
                        className="w-16 h-16 opacity-20 animate-bounce"
                    />
                </div>
            </div>
        </div>
    );
};

export default Menu; 