import React from 'react';

const popularItems = [
    {
        name: "Classic Espresso",
        price: "£3.50",
        image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=80&w=400",
        description: "Rich and bold single shot espresso"
    },
    {
        name: "Vanilla Latte",
        price: "£4.50",
        image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=400",
        description: "Espresso with vanilla syrup and steamed milk"
    },
    {
        name: "Caramel Macchiato",
        price: "£4.75",
        image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&q=80&w=400",
        description: "Vanilla syrup, milk, espresso, and caramel drizzle"
    },
    {
        name: "Iced Coffee",
        price: "£4.25",
        image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&q=80&w=400",
        description: "Cold brewed coffee with ice"
    }
];

const menuCategories = [
    {
        title: "Hot Coffee",
        items: [
            { name: "Espresso", price: "£3.50" },
            { name: "Americano", price: "£3.75" },
            { name: "Cappuccino", price: "£4.25" },
            { name: "Latte", price: "£4.50" },
            { name: "Mocha", price: "£4.75" },
            { name: "Flat White", price: "£4.25" }
        ]
    },
    {
        title: "Cold Coffee",
        items: [
            { name: "Iced Americano", price: "£4.25" },
            { name: "Iced Latte", price: "£4.75" },
            { name: "Cold Brew", price: "£4.50" },
            { name: "Frappuccino", price: "£5.25" },
            { name: "Iced Mocha", price: "£5.00" }
        ]
    },
    {
        title: "Specialty Drinks",
        items: [
            { name: "Vanilla Latte", price: "£4.50" },
            { name: "Caramel Macchiato", price: "£4.75" },
            { name: "Hazelnut Latte", price: "£4.75" },
            { name: "Pumpkin Spice Latte", price: "£5.00" },
            { name: "White Chocolate Mocha", price: "£5.00" }
        ]
    },
    {
        title: "Pastries",
        items: [
            { name: "Croissant", price: "£3.50" },
            { name: "Chocolate Croissant", price: "£3.75" },
            { name: "Almond Croissant", price: "£3.75" },
            { name: "Danish Pastry", price: "£3.50" },
            { name: "Muffin", price: "£3.25" }
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
                    <p className="text-gray-200">Discover our selection of delicious drinks and treats</p>
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
                                        className="w-6 h-6 mr-2 opacity-50 animate-bounce"
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