import Image from "next/image";
import Link from "next/link";
import RecipeSchemaScript from "../meta/RecipeSchemaScript";

function Recipes({ recipe }) {
  // Ensure the recipe object is plain
  const plainRecipe = {
    id: recipe?.id,
    image: recipe?.image,
    name: recipe?.name,
    rating: recipe?.rating,
    author: recipe?.author,
  };

  return (
    <div className="card cursor-pointer">
      <RecipeSchemaScript recipe={plainRecipe} />
      <Link href={`/details/${plainRecipe.id}`}>
        <Image
          src={plainRecipe.image}
          className="rounded-md"
          alt={plainRecipe.name}
          width={100}
          height={100}
        />
        <h4 className="my-2">{plainRecipe.name}</h4>
        <div className="py-2 flex justify-between text-xs text-gray-500">
          <span>⭐️ {plainRecipe.rating}</span>
          <span>{plainRecipe.author}</span>
        </div>
      </Link>
    </div>
  );
}

export default Recipes;
