import { Coffee, ShoppingBasket } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/70 backdrop-blur-md border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Coffee className="h-8 w-8 text-gray-800" />
            <span className="ml-2 text-xl font-semibold">Smokey Brand</span>
          </div>

          <div className="flex space-x-8">
            <a href="#" className="text-gray-900 hover:text-gray-700">Coffee Hub</a>
            <a href="#" className="text-gray-900 hover:text-gray-700">Coffee Products</a>
            <a href="#" className="text-gray-900 hover:text-gray-700">About</a>
          </div>

          <button className="flex items-center px-4 py-2 rounded-full bg-gray-100 hover:bg-gray-200">
            <ShoppingBasket className="h-5 w-5 text-gray-800" />
            <span className="ml-2">Your Basket</span>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;