import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import recipesData from '../data.json'; // Import the recipe data

const RecipeDetail = () => {
  const { id } = useParams(); // Get the recipe ID from the URL
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    // Fetch the recipe details based on the ID
    const foundRecipe = recipesData.find(r => r.id === parseInt(id));
    setRecipe(foundRecipe);
  }, [id]);

  if (!recipe) {
    return <div>Loading...</div>; // Show a loading state while fetching data
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 text-white">{recipe.title}</h1> {/* Set text color to black */}
      <img src={recipe.image} alt={recipe.title} className="w-full h-64 object-cover mb-4" />
      <div className="bg-white shadow-md rounded-lg p-4 mb-4">
        <h2 className="text-2xl font-semibold text-black">Ingredients</h2> {/* Set text color to black */}
        <ul className="list-disc pl-5 text-black"> {/* Set text color to black */}
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
      </div>
      <div className="bg-white shadow-md rounded-lg p-4">
        <h2 className="text-2xl font-semibold text-black">Cooking Instructions</h2> {/* Set text color to black */}
        <ol className="list-decimal pl-5 text-black"> {/* Set text color to black */}
          {recipe.instructions.map((instruction, index) => (
            <li key={index}>{instruction}</li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default RecipeDetail;
