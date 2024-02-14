import { useContext } from "react";
import { newsContext } from "../../context";

import Cols12 from "./Cols12";
import Cols6 from "./Cols6";
import Cols8 from "./Cols8";
function NewsBoard() {
  const { error, loading, newsData } = useContext(newsContext);

  const splitIndex = Math.ceil((60 / 100) * newsData?.length);
  const firstPart = newsData.slice(0, splitIndex);
  const secondPart = newsData.slice(splitIndex);

  let content = null;

  if (loading.state && !error.state && newsData?.length < 0) {
    content = (
      <div className=" flex justify-center items-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
      </div>
    );
  }
  if (!loading.state && !error.state && newsData?.length === 0) {
    content = (
      <p className="text-3xl text-center text-red-300">
        No Search result found😌
      </p>
    );
  }

  if (error?.state) {
    content = (
      <div
        className="p-4 mb-4 text-lg text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 w-2/3 mx-auto text-center"
        role="alert"
      >
        {error?.message}
      </div>
    );
  }

  if (!loading.state && !error.state && newsData?.length > 0) {
    content = (
      <div className="container mx-auto grid grid-cols-12 gap-8">
        {/* left Side */}
        <div className="col-span-12 grid grid-cols-12 gap-6 self-start xl:col-span-8">
          {firstPart.map((item, index) =>
            index === 0 ? (
              <Cols12 key={item.title} news={item} />
            ) : index === 1 ? (
              <Cols8 key={item.title} news={item} />
            ) : (
              <Cols6 key={item.title} news={item} />
            )
          )}
        </div>

        {/* Right Side */}

        <div className="col-span-12 self-start xl:col-span-4">
          <div className="space-y-6 divide-y-2 divide-[#D5D1C9]">
            {secondPart.map((item) => (
              <Cols6 key={item.publishedAt} news={item} />
            ))}
          </div>
        </div>
      </div>
    );
  }
  return <main className="my-10 lg:my-14">{content}</main>;
}

export default NewsBoard;
