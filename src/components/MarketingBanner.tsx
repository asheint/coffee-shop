import React from 'react';
import { Coffee } from 'lucide-react';

const MarketingBanner = () => {
  return (
    <div className="bg-gray-900 text-white py-3">
      <div className="flex justify-center items-center space-x-12">
        <div className="flex items-center">
          <Coffee className="h-5 w-5 mr-2" />
          <span>Get 10% Off Your First Order</span>
        </div>
        <div className="flex items-center">
          <Coffee className="h-5 w-5 mr-2" />
          <span>Free Delivery in The UK</span>
        </div>
        <div className="flex items-center">
          <Coffee className="h-5 w-5 mr-2" />
          <span>Taste For Everyone</span>
        </div>
      </div>
    </div>
  );
}

export default MarketingBanner;