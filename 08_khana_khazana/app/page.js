import Category from "@/components/Home/Category";
import Header from "@/components/Home/Header";
import RecipesList from "@/components/Home/RecipesList";
import Loading from "@/components/Loading";
import { Suspense } from "react";

function HomePage() {
  return (
    <>
      <Header />
      <section className="container py-8">
        <div className="grid grid-cols-12 py-4">
          <Suspense
            key={Math.floor(Math.random() * 100)}
            fallback={<Loading />}
          >
            <Category />
          </Suspense>
          <Suspense
            key={Math.floor(Math.random() * 100)}
            fallback={<Loading />}
          >
            <RecipesList />
          </Suspense>
        </div>
      </section>
    </>
  );
}

export default HomePage;
