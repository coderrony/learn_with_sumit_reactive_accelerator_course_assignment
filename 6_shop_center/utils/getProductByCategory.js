import products from "@/data/data";

const getProductByCategory = (path) => {
  if (path === "All") {
    return products;
  }
  return products.filter((product) => product.category === path);
};

export default getProductByCategory;
