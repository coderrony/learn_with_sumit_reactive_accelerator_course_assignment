import { categorizedRecipes } from "@/app/DB/queries";
import Recipes from "@/components/Home/Recipes";

async function CategorizedPage({ params: { category } }) {
  const findCategory = await categorizedRecipes(category);

  return (
    <main>
      <section className="container py-8">
        <div>
          <h3 className="font-semibold text-xl">Appetizers & Snacks</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-8 justify-items-center">
            {findCategory?.length > 0 &&
              findCategory.map((item) => (
                <Recipes key={item?.id} recipe={item} />
              ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default CategorizedPage;
