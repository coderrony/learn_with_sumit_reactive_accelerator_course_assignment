import { getRecipeById } from "@/app/DB/queries";
import RecipesDetails from "@/components/Details/RecipesDetails";
import Steps from "@/components/Details/Steps";

export async function generateMetadata({ params: { id } }) {
  const recipe = await getRecipeById(id);

  return {
    title: `Recipe - ${recipe?.name}`,
    description: recipe?.description,
    openGraph: {
      images: [recipe?.image],
    },
  };
}

async function DetailsPage({ params: { id } }) {
  const recipe = await getRecipeById(id);

  return (
    <main>
      <RecipesDetails recipe={recipe} />
      <Steps steps={recipe?.steps} />
    </main>
  );
}

export default DetailsPage;
