import Product from "@/components/Product";
import getProductByCategory from "@/utils/getProductByCategory";

function Category({ params: { categoryName } }) {
  const products = getProductByCategory(categoryName);
  // console.log(products);

  return (
    <div className="sticky top-0 right-0 w-full lg:w-10/12 grid grid-cols-2 gap-4 lg:grid-cols-3 my-4 lg:my-10">
      {products.length > 0 &&
        products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
   
    </div>
  );
}

export default Category;
