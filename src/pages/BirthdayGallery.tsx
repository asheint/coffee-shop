import React, { useState } from 'react';

const cakeGallery = [
    {
        id: 'cake1',
        image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&q=80&w=800',
        title: 'Classic Vanilla'
    },
    {
        id: 'cake2',
        image: 'https://images.unsplash.com/photo-1571115177098-24ec42ed204d?auto=format&fit=crop&q=80&w=800',
        title: 'Chocolate Dream'
    },
    {
        id: 'cake3',
        image: 'https://images.unsplash.com/photo-1534620808146-d33bb39128c2?auto=format&fit=crop&q=80&w=800',
        title: 'Fruit Delight'
    },
    {
        id: 'cake4',
        image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&q=80&w=800',
        title: 'Rainbow Celebration'
    },
    {
        id: 'cake5',
        image: 'https://images.unsplash.com/photo-1586788680434-30f324e2d33b?auto=format&fit=crop&q=80&w=800',
        title: 'Red Velvet Special'
    },
    {
        id: 'cake6',
        image: 'https://images.unsplash.com/photo-1594054129384-24b6fdad5d9b?auto=format&fit=crop&q=80&w=800',
        title: 'Carrot Celebration'
    },
    {
        id: 'cake7',
        image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&q=80&w=800',
        title: 'Berry Bliss'
    },
    {
        id: 'cake8',
        image: 'https://images.unsplash.com/photo-1571115177098-24ec42ed204d?auto=format&fit=crop&q=80&w=800',
        title: 'Mocha Delight'
    },
    {
        id: 'cake9',
        image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&q=80&w=800',
        title: 'Tropical Paradise'
    },
    {
        id: 'cake10',
        image: 'https://images.unsplash.com/photo-1534620808146-d33bb39128c2?auto=format&fit=crop&q=80&w=800',
        title: 'Lemon Zest'
    },
    {
        id: 'cake11',
        image: 'https://images.unsplash.com/photo-1586788680434-30f324e2d33b?auto=format&fit=crop&q=80&w=800',
        title: 'Pistachio Dream'
    },
    {
        id: 'cake12',
        image: 'https://images.unsplash.com/photo-1594054129384-24b6fdad5d9b?auto=format&fit=crop&q=80&w=800',
        title: 'Coconut Fantasy'
    }
];

const cakeTypes = [
    {
        id: 'single',
        name: 'Single Layer',
        description: 'Perfect for small gatherings',
        basePrice: 35
    },
    {
        id: 'double',
        name: 'Double Layer',
        description: 'Ideal for medium-sized celebrations',
        basePrice: 45
    },
    {
        id: 'triple',
        name: 'Triple Layer',
        description: 'Show-stopping centerpiece for large events',
        basePrice: 60
    },
    {
        id: 'custom',
        name: 'Custom Design',
        description: 'Tailored to your specific requirements',
        basePrice: 75
    }
];

const BirthdayGallery = () => {
    const [selectedType, setSelectedType] = useState<string | null>(null);

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
                    <h1 className="text-4xl font-bold text-white mb-4">Birthday Cakes</h1>
                    <p className="text-gray-200">Explore our collection of beautiful birthday cakes</p>
                </div>

                {/* Cake Gallery Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {cakeGallery.map((cake) => (
                        <div
                            key={cake.id}
                            className="relative overflow-hidden rounded-lg shadow-lg"
                        >
                            <div className="aspect-w-4 aspect-h-3">
                                <img
                                    src={cake.image}
                                    alt={cake.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    ))}
                </div>

                {/* Order Form Section */}
                <div className="bg-white/90 backdrop-blur-sm rounded-lg shadow-xl p-8 mb-16">
                    <h2 className="text-3xl font-semibold text-gray-900 mb-8 text-center">Order Your Birthday Cake</h2>
                    <form className="space-y-6 max-w-2xl mx-auto">
                        {/* Cake Type Selection */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-3">Select Cake Type</label>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {cakeTypes.map((type) => (
                                    <div
                                        key={type.id}
                                        className={`relative rounded-lg border-2 p-4 cursor-pointer transition-all duration-300 ${selectedType === type.id
                                            ? 'border-coffee-500 bg-coffee-50'
                                            : 'border-gray-200 hover:border-coffee-300'
                                            }`}
                                        onClick={() => setSelectedType(type.id)}
                                    >
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <h3 className="font-semibold text-gray-900">{type.name}</h3>
                                                <p className="text-sm text-gray-600">{type.description}</p>
                                            </div>
                                            <span className="text-lg font-bold text-coffee-600">£{type.basePrice}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Personal Information */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="group">
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full px-4 py-2 rounded-md border border-gray-300 focus:border-coffee-500 focus:ring-2 focus:ring-coffee-500 focus:ring-opacity-50 transition-all duration-300"
                                    placeholder="Your name"
                                />
                            </div>
                            <div className="group">
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full px-4 py-2 rounded-md border border-gray-300 focus:border-coffee-500 focus:ring-2 focus:ring-coffee-500 focus:ring-opacity-50 transition-all duration-300"
                                    placeholder="your@email.com"
                                />
                            </div>
                        </div>

                        <div className="group">
                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                            <input
                                type="tel"
                                id="phone"
                                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:border-coffee-500 focus:ring-2 focus:ring-coffee-500 focus:ring-opacity-50 transition-all duration-300"
                                placeholder="Your phone number"
                            />
                        </div>

                        <div className="group">
                            <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">Pickup Date</label>
                            <input
                                type="date"
                                id="date"
                                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:border-coffee-500 focus:ring-2 focus:ring-coffee-500 focus:ring-opacity-50 transition-all duration-300"
                            />
                        </div>

                        <div className="group">
                            <label htmlFor="guests" className="block text-sm font-medium text-gray-700 mb-1">Number of Guests</label>
                            <input
                                type="number"
                                id="guests"
                                min="1"
                                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:border-coffee-500 focus:ring-2 focus:ring-coffee-500 focus:ring-opacity-50 transition-all duration-300"
                                placeholder="How many people?"
                            />
                        </div>

                        <div className="group">
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Special Instructions</label>
                            <textarea
                                id="message"
                                rows={4}
                                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:border-coffee-500 focus:ring-2 focus:ring-coffee-500 focus:ring-opacity-50 transition-all duration-300"
                                placeholder="Any special requests, dietary requirements, or customizations..."
                            ></textarea>
                        </div>

                        <div className="flex justify-center">
                            <button
                                type="submit"
                                className="px-8 py-3 bg-coffee-600 text-white rounded-md hover:bg-coffee-700 transition-colors duration-300 text-lg font-semibold"
                            >
                                Place Order
                            </button>
                        </div>
                    </form>
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

export default BirthdayGallery; 