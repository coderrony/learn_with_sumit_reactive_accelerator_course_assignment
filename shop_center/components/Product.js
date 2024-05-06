import CustomLink from "./CustomLink";

function Product({ product }) {
  return (
    <div>
      <div
        className={` delay-150 w-180px lg:w-[270px] h-[205px] lg:h-[310px] bg-[#f8f8f8] bg-cover bg-center transition-all duration-3000 ease-in-out transform`}
        style={{
          backgroundImage: `url(${product?.thumbnail})`,
        }}
      ></div>
      <h2 className="text-sm lg:text-base mt-2">
        <CustomLink
          path={`/products/${product.id}`}
          className="text-base font-bold"
        >
          {product?.title}
        </CustomLink>
        <span className="text-[#919090]">
          <CustomLink path={`/category/${product.category}`}>
            (${product.category})
          </CustomLink>
        </span>
      </h2>
      <p className="text-[#919090] text-sm">{product?.description}</p>

      <p className="text-rose-600 text-sm mt-4">
        <span className="text-[#919090] line-through">$${product.price}</span>{" "}
        $${product.discountPercentage}
      </p>
    </div>
  );
}

export default Product;
