import React from 'react';

function RecipeCard({ title, image, onClick }) {
  return (
    <div className="bg-white shadow rounded-lg overflow-hidden">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-lg font-semibold">{title}</h2>
        <button
          onClick={onClick}
          className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg"
        >
          View Recipe
        </button>
      </div>
    </div>
  );
}

export default RecipeCard;
