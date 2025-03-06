import React from 'react';

const categories = [
  {
    name: "Iced Coffee",
    image: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&q=80&w=400"
  },
  {
    name: "Coffee Cake",
    image: "https://images.unsplash.com/photo-1534766438357-2b270dbd1b40?auto=format&fit=crop&q=80&w=400"
  },
  {
    name: "Croissant",
    image: "https://images.unsplash.com/photo-1623334044303-241021148842?auto=format&fit=crop&q=80&w=400"
  },
  {
    name: "Coffee Beans",
    image: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&q=80&w=400"
  },
  {
    name: "Coffee Shops",
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=400"
  }
];

const Categories = () => {
  return (
    <div className="grid grid-cols-5 gap-4 py-12">
      {categories.map((category, index) => (
        <div key={index} className="text-center">
          <div className="w-full aspect-square rounded-full overflow-hidden mb-4">
            <img 
              src={category.image} 
              alt={category.name}
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="font-medium">{category.name}</h3>
        </div>
      ))}
    </div>
  );
}

export default Categories;