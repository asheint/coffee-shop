import { Star } from 'lucide-react';

const testimonials = [
    {
        name: "Sarah Johnson",
        role: "Coffee Enthusiast",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400",
        content: "The best coffee shop in town! Their vanilla latte is absolutely divine.",
        rating: 5
    },
    {
        name: "Mike Chen",
        role: "Regular Customer",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400",
        content: "Love the cozy atmosphere and friendly staff. The pastries are fresh daily!",
        rating: 5
    },
    {
        name: "Emma Davis",
        role: "Food Blogger",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=400",
        content: "Their seasonal specials are always a treat. The pumpkin spice latte is my favorite!",
        rating: 5
    }
];

const Testimonials = () => {
    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
                    <p className="text-gray-600">Join our community of coffee lovers</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex items-center mb-4">
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="w-12 h-12 rounded-full object-cover"
                                />
                                <div className="ml-4">
                                    <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                                </div>
                            </div>
                            <div className="flex mb-4">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                                ))}
                            </div>
                            <p className="text-gray-700 italic">"{testimonial.content}"</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials; 