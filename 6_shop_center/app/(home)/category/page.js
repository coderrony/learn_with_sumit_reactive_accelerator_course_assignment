import { redirect } from "next/navigation";

function CategoryPage() {
  return <>{redirect("/category/All")}</>;
}

export default CategoryPage;
