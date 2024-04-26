import { Link } from "react-router-dom";
import { blogPath } from "../../utils";

// take content and split them into 50 world
function truncateText(text) {
  // Split the text into an array of words
  const words = text.split(/\s+/);

  // If the text has less than or equal to 500 words, return the original text
  if (words.length <= 50) {
    return text;
  } else {
    // If the text has more than 500 words, slice the array to get the first 500 words
    const truncatedWords = words.slice(0, 50);

    // Join the first 500 words back into a string
    const truncatedText = truncatedWords.join(" ");

    // Return the truncated text
    return truncatedText;
  }
}

function SearchCard({ blog, onClose }) {
  return (
    <Link to={`blogDetails/${blog?.id}`} onClick={onClose}>
      <div className="flex gap-6 py-2">
        <img
          className="h-28 object-contain"
          src={`${blogPath}/${blog?.thumbnail}`}
          alt="thumbnail"
        />
        <div className="mt-2">
          <h3 className="text-slate-300 text-xl font-bold">{blog?.title}</h3>

          <p className="mb-6 text-sm text-slate-500 mt-1">
            {truncateText(blog?.content)}
          </p>
        </div>
      </div>
    </Link>
  );
}

export default SearchCard;
