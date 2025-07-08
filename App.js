import React, { useState } from 'react';

// Define the clothing categories and their items with placeholder images
const categories = [
  {
    name: "Doll Base", // New category for doll base images
    items: [
      { id: "doll-base-1", name: "Doll 1", image: "https://placehold.co/200x400/E0BBE4/FFFFFF?text=Doll+1" },
      { id: "doll-base-2", name: "Doll 2", image: "https://placehold.co/200x400/C2DFFF/000000?text=Doll+2" },
      { id: "doll-base-3", name: "Doll 3", image: "https://placehold.co/200x400/D4EDDA/000000?text=Doll+3" },
    ],
  },
  {
    name: "Hair",
    items: [
      { id: "hair-none", name: "None", image: "" },
      { id: "hair-brown-bob", name: "Brown Bob", image: "https://placehold.co/120x120/A0522D/FFFFFF?text=Brown+Hair" },
      { id: "hair-blonde-ponytail", name: "Blonde Ponytail", image: "https://placehold.co/120x120/FFD700/000000?text=Blonde+Hair" },
      { id: "hair-black-long", name: "Black Long", image: "https://placehold.co/120x120/000000/FFFFFF?text=Black+Hair" },
      { id: "hair-white-long", name: "white Long", image: "https://placehold.co/120x120/000000/FFFFFF?text=white+Hair" },
    ],
  },
  {
    name: "Tops",
    items: [
      { id: "top-none", name: "None", image: "" },
      { id: "top-red-tshirt", name: "Red T-Shirt", image: "https://placehold.co/150x100/FF0000/FFFFFF?text=Red+Top" },
      { id: "top-blue-sweater", name: "Blue Sweater", image: "https://placehold.co/150x100/0000FF/FFFFFF?text=Blue+Top" },
      { id: "top-green-blouse", name: "Green Blouse", image: "https://placehold.co/150x100/008000/FFFFFF?text=Green+Top" },
    ],
  },
  {
    name: "Bottoms",
    items: [
      { id: "bottom-none", name: "None", image: "" },
      { id: "bottom-blue-jeans", name: "Blue Jeans", image: "https://placehold.co/150x100/4682B4/FFFFFF?text=Blue+Bottom" },
      { id: "bottom-black-skirt", name: "Black Skirt", image: "https://placehold.co/150x100/000000/FFFFFF?text=Black+Bottom" },
      { id: "bottom-khaki-shorts", name: "Khaki Shorts", image: "https://placehold.co/150x100/F0E68C/000000?text=Khaki+Bottom" },
    ],
  },
  {
    name: "Shoes",
    items: [
      { id: "shoe-none", name: "None", image: "" },
      { id: "shoe-white-sneakers", name: "White Sneakers", image: "https://placehold.co/100x50/FFFFFF/000000?text=Shoes" },
      { id: "shoe-brown-boots", name: "Brown Boots", image: "https://placehold.co/100x50/A52A2A/FFFFFF?text=Boots" },
      { id: "shoe-pink-sandals", name: "Pink Sandals", image: "https://placehold.co/100x50/FFC0CB/000000?text=Sandals" },
    ],
  },
];

function App() {
  // State to keep track of the selected item for each category, including the doll base
  const [selectedItems, setSelectedItems] = useState({
    "Doll Base": categories[0].items[0], // Initialize with the first doll base
    Hair: null,
    Tops: null,
    Bottoms: null,
    Shoes: null,
  });

  // State to manage the currently active category for display
  const [activeCategory, setActiveCategory] = useState(categories[0].name);

  // Function to handle item selection
  const handleItemSelect = (categoryName, item) => {
    setSelectedItems((prev) => ({
      ...prev,
      [categoryName]: item,
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-pink-100 flex flex-col items-center justify-center p-4 font-inter">
      {/* App Title */}
      <h1 className="text-5xl font-extrabold text-purple-800 mb-8 drop-shadow-lg text-center">
        Doll Dresser
      </h1>

      <div className="flex flex-col lg:flex-row items-center lg:items-start lg:space-x-8 w-full max-w-6xl bg-white rounded-3xl shadow-xl p-6 md:p-10">
        {/* Doll Display Area */}
        <div className="relative w-64 h-96 md:w-80 md:h-[400px] bg-gray-100 rounded-2xl shadow-inner flex items-center justify-center overflow-hidden mb-8 lg:mb-0 transform transition-transform duration-300 hover:scale-105">
          {/* Base Doll Image */}
          {selectedItems["Doll Base"] && selectedItems["Doll Base"].image && (
            <img
              src={selectedItems["Doll Base"].image}
              alt={selectedItems["Doll Base"].name}
              className="w-full h-full object-contain rounded-2xl"
              onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/200x400/CCCCCC/000000?text=Error"; }}
            />
          )}

          {/* Dynamically rendered clothing items based on selection */}
          {selectedItems.Hair && selectedItems.Hair.image && (
            <img
              src={selectedItems.Hair.image}
              alt={selectedItems.Hair.name}
              className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-[30%] object-contain"
              onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/120x120/CCCCCC/000000?text=Error"; }}
            />
          )}
          {selectedItems.Tops && selectedItems.Tops.image && (
            <img
              src={selectedItems.Tops.image}
              alt={selectedItems.Tops.name}
              className="absolute top-[30%] left-1/2 -translate-x-1/2 w-[75%] h-[25%] object-contain"
              onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/150x100/CCCCCC/000000?text=Error"; }}
            />
          )}
          {selectedItems.Bottoms && selectedItems.Bottoms.image && (
            <img
              src={selectedItems.Bottoms.image}
              alt={selectedItems.Bottoms.name}
              className="absolute top-[50%] left-1/2 -translate-x-1/2 w-[70%] h-[30%] object-contain"
              onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/150x100/CCCCCC/000000?text=Error"; }}
            />
          )}
          {selectedItems.Shoes && selectedItems.Shoes.image && (
            <img
              src={selectedItems.Shoes.image}
              alt={selectedItems.Shoes.name}
              className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[50%] h-[15%] object-contain"
              onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/100x50/CCCCCC/000000?text=Error"; }}
            />
          )}
        </div>

        {/* Controls Area */}
        <div className="flex-1 w-full">
          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            {categories.map((category) => (
              <button
                key={category.name}
                onClick={() => setActiveCategory(category.name)}
                className={`px-6 py-3 rounded-full text-lg font-semibold transition-all duration-300 shadow-md
                  ${activeCategory === category.name
                    ? 'bg-purple-600 text-white transform scale-105 shadow-lg'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300 hover:text-gray-800'
                  }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Clothing Items for Active Category */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 bg-purple-50 rounded-2xl shadow-inner">
            {categories.find((cat) => cat.name === activeCategory)?.items.map((item) => (
              <div
                key={item.id}
                onClick={() => handleItemSelect(activeCategory, item)}
                className={`flex flex-col items-center justify-center p-3 rounded-xl cursor-pointer transition-all duration-200 border-2
                  ${selectedItems[activeCategory]?.id === item.id
                    ? 'border-purple-500 bg-purple-200 shadow-lg transform scale-105'
                    : 'border-gray-200 bg-white hover:bg-gray-50 hover:shadow-md'
                  }`}
              >
                {item.image ? (
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-contain mb-2 rounded-lg"
                    onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/80x80/CCCCCC/000000?text=Error"; }}
                  />
                ) : (
                  <div className="w-20 h-20 flex items-center justify-center text-gray-500 text-sm border border-dashed border-gray-300 rounded-lg mb-2">
                    No Item
                  </div>
                )}
                <span className="text-sm font-medium text-center text-gray-800">{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
