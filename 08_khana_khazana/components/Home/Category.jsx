import { getAllRecipes } from "@/app/DB/queries";
import { clearString } from "@/utils/clearString";
import { getUniqueCategory } from "@/utils/unique-category";
import Link from "next/link";

async function Category() {
  const recipes = await getAllRecipes();

  const uniqueCategory = getUniqueCategory(recipes);

  return (
    <div className="col-span-12 md:col-span-3">
      <h3 className="font-bold text-xl">Recipes</h3>
      <ul className="pl-2 my-6 space-y-4 text-gray-500 text-sm">
        {uniqueCategory.map((category) => (
          <li key={category?.id}>
            <Link href={`/categorized/${clearString(category?.category)}`}>
              {category?.category}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Category;
