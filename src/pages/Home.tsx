import Hero from '../components/Hero';
import Categories from '../components/Categories';
import ProductSection from '../components/ProductSection';
import Testimonials from '../components/Testimonials';
import InstagramFeed from '../components/InstagramFeed';
import Newsletter from '../components/Newsletter';

const Home = () => {
    return (
        <>
            <Hero />
            <div className="bg-gray-900 text-white py-4">
                <div className="flex justify-center items-center space-x-12">
                    <span className="text-lg">Get 10% Off Your First Order</span>
                    <span className="text-lg">Free Delivery in The UK</span>
                    <span className="text-lg">Taste For Everyone</span>
                </div>
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <Categories />
                <ProductSection
                    title="Tang-Tastic Coffee"
                    products={[
                        {
                            name: "Vanilla Croissant",
                            price: "£10.00",
                            image: "https://images.unsplash.com/photo-1578661931973-ceb89af98370?auto=format&fit=crop&q=80&w=400"
                        },
                        {
                            name: "Croissant Pistachio",
                            price: "£10.00",
                            image: "https://images.unsplash.com/photo-1592663527359-cf6642f54cff?auto=format&fit=crop&q=80&w=400"
                        },
                        {
                            name: "Croissant Chocolate",
                            price: "£10.00",
                            image: "https://images.unsplash.com/photo-1608198093002-ad4e005484ec?auto=format&fit=crop&q=80&w=400"
                        },
                        {
                            name: "Croissant Strawberry",
                            price: "£10.00",
                            image: "https://images.unsplash.com/photo-1623334044303-241021148842?auto=format&fit=crop&q=80&w=400"
                        }
                    ]}
                />
                <ProductSection
                    title="To Go With Coffee"
                    products={[
                        {
                            name: "Vanilla Croissant",
                            price: "£10.00",
                            image: "https://images.unsplash.com/photo-1623334044303-241021148842?auto=format&fit=crop&q=80&w=400"
                        },
                        {
                            name: "Croissant Pistachio",
                            price: "£10.00",
                            image: "https://images.unsplash.com/photo-1608198093002-ad4e005484ec?auto=format&fit=crop&q=80&w=400"
                        },
                        {
                            name: "Croissant Chocolate",
                            price: "£10.00",
                            image: "https://images.unsplash.com/photo-1592663527359-cf6642f54cff?auto=format&fit=crop&q=80&w=400"
                        },
                        {
                            name: "Croissant Strawberry",
                            price: "£10.00",
                            image: "https://images.unsplash.com/photo-1578661931973-ceb89af98370?auto=format&fit=crop&q=80&w=400"
                        }
                    ]}
                />
            </div>
            <Testimonials />
            <InstagramFeed />
            <Newsletter />
        </>
    );
};

export default Home; 