import CustomLink from "./CustomLink";

function Sidebar({ products }) {
  const uniqueValues = new Set(products.map((v) => v.category));
  const uniqueCategoryArr = Array.from(uniqueValues);

  return (
    <>
      <button className="hover:border-b border-black block h-6 box-border mt-4">
        <CustomLink path={`/category/All`}>All</CustomLink>
      </button>
      {uniqueCategoryArr.map((product) => (
        <button
          key={product}
          className="hover:border-b border-black block h-6 box-border mt-4"
        >
          <CustomLink path={`/category/${product}`}>{product}</CustomLink>
        </button>
      ))}
    </>
  );
}

export default Sidebar;
