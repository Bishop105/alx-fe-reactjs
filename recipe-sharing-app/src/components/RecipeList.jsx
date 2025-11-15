import { useRecipeStore } from './recipeStore';
import RecipeCard from './RecipeCard'; 
import SearchBar from './SearchBar';

const RecipeList = () => {
  const filteredRecipes = useRecipeStore(state => state.filteredRecipes);
  const recipes = useRecipeStore(state => state.recipes);

  return (
    <div>
      <SearchBar />
      <div className="recipe-list">
        {(filteredRecipes.length > 0 ? filteredRecipes : recipes).map(recipe => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default RecipeList;
