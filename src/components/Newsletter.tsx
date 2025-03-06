import { Mail } from 'lucide-react';

const Newsletter = () => {
    return (
        <section className="py-16 bg-emerald-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Join Our Community</h2>
                        <p className="text-gray-600 mb-8">Subscribe to our newsletter for updates on new menu items, special events, and exclusive offers!</p>

                        <form className="flex flex-col md:flex-row gap-4 max-w-md mx-auto">
                            <div className="flex-1 relative">
                                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-emerald-400 w-5 h-5" />
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="w-full pl-10 pr-4 py-3 rounded-full border border-emerald-200 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent"
                                />
                            </div>
                            <button
                                type="submit"
                                className="px-8 py-3 bg-emerald-600 text-white rounded-full hover:bg-emerald-700 transition-colors duration-200"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Newsletter; 