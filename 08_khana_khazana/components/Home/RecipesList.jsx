import { getAllRecipes } from "@/app/DB/queries";
import Recipes from "./Recipes";

async function RecipesList() {
  const recipes = await getAllRecipes();
  // console.log(recipes);

  return (
    <div className="col-span-12 md:col-span-9">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-8 justify-items-center">
        {recipes.map((recipe) => (
          <Recipes key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
}

export default RecipesList;
