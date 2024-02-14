import { useContext } from "react";
import { categoryContext } from "../../context";

function Category() {
  const { category, setCategory } = useContext(categoryContext);
  const handleCategory = (value) => {
    setCategory({ ...category, type: "filter", value: value });
  };
  return (
    <div className="container mx-auto mt-6">
      <ul className="flex flex-wrap items-center justify-center gap-5 text-xs font-semibold lg:text-base">
        <li>
          <a onClick={() => handleCategory("general")} href="#">
            General
          </a>
        </li>
        <li>
          <a onClick={() => handleCategory("business")} href="#">
            Business
          </a>
        </li>
        <li>
          <a onClick={() => handleCategory("entertainment")} href="#">
            Entertainment
          </a>
        </li>
        <li>
          <a onClick={() => handleCategory("health")} href="#">
            Health
          </a>
        </li>
        <li>
          <a onClick={() => handleCategory("science")} href="#">
            Science
          </a>
        </li>
        <li>
          <a onClick={() => handleCategory("sports")} href="#">
            Sports
          </a>
        </li>
        <li>
          <a onClick={() => handleCategory("technology")} href="#">
            Technology
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Category;
