import Sidebar from "@/components/Sidebar";
import products from "@/data/data";

function CategoryLayout({ children }) {
  return (
    <section className="w-11/12 lg:w-10/12 max-w-7xl mx-auto py-0 lg:py-10 lg:flex justify-between items-start">
      <div className="w-full flex items-center justify-between lg:block lg:w-2/12 my-10 lg:my-0 lg:mt-4">
        <Sidebar products={products} />
      </div>
      {children}
    </section>
  );
}

export default CategoryLayout;
