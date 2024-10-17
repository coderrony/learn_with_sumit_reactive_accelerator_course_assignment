"use client";
import CustomLink from "@/components/CustomLink";
import products from "@/data/data";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

function ProductDetails({ params: { id } }) {
  const foundProduct = products.find((product) => product.id.toString() === id);

  if (!foundProduct) {
    redirect("/");
  }
  const {
    title,
    description,
    price,
    discountPercentage,
    rating,
    stock,
    brand,
    category,
    thumbnail,
    images,
  } = foundProduct;

  return (
    <main className="h-screen">
      <section className="bg-[#fafaf2] h-full py-20">
        <div className="w-11/12 lg:w-8/12 max-w-7xl mx-auto flex flex-col gap-12 lg:flex-row items-center justify-between">
          <div className="w-full lg:w-7/12 border border-slate-500/20 p-4">
            <img
              src={thumbnail}
              className="w-[400px] h-[500px] mx-auto object-cover"
              alt={title}
            />

            <div className="flex gap-4 mt-4">
              {images.length > 0 &&
                images.map((image, index) => (
                  <img
                    key={image}
                    src={image}
                    className="w-[100px] h-[100px] mx-auto border object-cover"
                    alt={`${title} image ${index}`}
                  />
                ))}
            </div>
          </div>
          <div className="w-full lg:w-5/12">
            <h1 className="italic text-xl lg:text-3xl font-serif font-semibold">
              {title}
            </h1>
            <span className="text-[#919090] my-3 cursor-pointer">
              <CustomLink path={`/category/${category}`}>
                {" "}
                {category}
              </CustomLink>
            </span>
            <div className="mt-3 flex items-center justify-start gap-1">
              {[...Array(Math.floor(rating))].map((_, index) => (
                <img
                  key={index}
                  src="/svg/star.svg"
                  className="w-[20px]"
                  alt={`icon`}
                />
              ))}
            </div>
            <hr className="my-5 bg-black" />
            <div>
              <p className="my-3">
                <span className="text-rose-600 opacity-60 line-through">
                  ${discountPercentage}
                </span>
                <span className="font-bold text-2xl">${price}</span>
              </p>
            </div>
            <div>
              <p className="leading-7">{description}</p>

              <button className="w-full bg-[#1a1a1a] hover:bg-[#3a3a3a] text-center py-3 mt-5 text-white rounded-full">
                Add To Cart - ${price}
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default ProductDetails;
