import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Categories from './components/Categories';
import ProductSection from './components/ProductSection';
import MarketingBanner from './components/MarketingBanner';

function App() {
  return (
    <div className="min-h-screen bg-[#faf6f1]">
      <Navbar />
      <main className="pt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Hero />
        <MarketingBanner />
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
      </main>
    </div>
  );
}

export default App;