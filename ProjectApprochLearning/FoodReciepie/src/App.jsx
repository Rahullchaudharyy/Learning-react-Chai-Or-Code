import React, { useEffect, useState } from 'react';
import RecipeCard from './Components/RecipeCard';
import './App.css'

function App() {
  const [recipes, setRecipes] = useState([]);
  const [loading,setLoading] = useState(true)

  const SearchFood = async (foodName) => {
    try {
      const Results = await fetch(
        `https://api.edamam.com/search?q=${foodName}&app_id=cc1f1e70&app_key=27d0a4d5f8d7427c4e51492a2ad50f77`
      );
      const Data = await Results.json();
      const Recipes = Data.hits.map((hit) => hit.recipe);
      
      setRecipes(Recipes); 
      setLoading(false)
      
      Recipes.forEach((recipe) => {
        console.log(`Title: ${recipe.label}`);
        console.log(`Image: ${recipe.image}`);
        console.log(`Source: ${recipe.source}`);
        console.log(`Ingredients: ${recipe.ingredients.join(', ')}`);
      });
      console.log(recipes)
    } catch (error) {
console.log("Can't fetch the data",error)
    }
  };

  useEffect(() => {
    SearchFood('Tea'); 
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <header className="bg-white shadow p-4">
        <h1 className="text-2xl font-bold text-center">Recipe Finder</h1>
      </header>

      <main className="p-4">
        <div className="max-w-lg mx-auto">
          <input
            type="text"
            placeholder="Search for recipes..."
            className="w-full p-2 border rounded-lg"
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                SearchFood(e.target.value);
              }
            }}
          />
        </div>

        <div>
          {loading?  <div className="flex justify-center items-center min-h-screen">
      <div className="loader"></div>
    </div>:null}
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {recipes.map((recipe, index) => (
            <RecipeCard
              key={index}
              title={recipe.label}
              image={recipe.image}
              onClick={() => alert(`Viewing ${recipe.label}`)}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
