import React from 'react';

interface Product {
  name: string;
  price: string;
  image: string;
}

interface ProductSectionProps {
  title: string;
  products: Product[];
}

const ProductSection: React.FC<ProductSectionProps> = ({ title, products }) => {
  return (
    <section className="py-12">
      <h2 className="text-2xl font-semibold mb-8">{title}</h2>
      <div className="grid grid-cols-4 gap-6">
        {products.map((product, index) => (
          <div key={index} className="group cursor-pointer">
            <div className="aspect-square rounded-lg overflow-hidden mb-4">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-full object-cover transition-transform group-hover:scale-105"
              />
            </div>
            <h3 className="font-medium">{product.name}</h3>
            <p className="text-gray-600">{product.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProductSection;