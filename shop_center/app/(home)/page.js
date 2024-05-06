import Product from "@/components/Product";
import products from "@/data/data";
function Home() {
  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:grid-cols-4 my-4 lg:my-10">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </>
  );
}

export default Home;
