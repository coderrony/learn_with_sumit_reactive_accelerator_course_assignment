import BooksActions from "./BooksActions";
import Book from "./Book";
import bookData from "../../booksDatabase";
import { useState } from "react";

const sortedBookByCharacter = (books, isAsc) => {
  const sortedBookData = [...books].sort((a, b) => {
    const titleA = a.title.charAt(0).toLowerCase();
    const titleB = b.title.charAt(0).toLowerCase();
    if (titleA < titleB) {
      if (isAsc) {
        return -1;
      } else {
        return 1;
      }
    }
    if (titleA > titleB) {
      if (isAsc) {
        return 1;
      } else {
        return -1;
      }
    }
    return 0;
  });
  return sortedBookData;
};
const sortBookByYear = (books, isAsc) => {
  const sortBookData = [...books].sort((a, b) => {
    if (isAsc) {
      return a.releaseDate - b.releaseDate;
    } else {
      return b.releaseDate - a.releaseDate;
    }
  });
  return sortBookData;
};
function BooksBoard() {
  let [books, setBooks] = useState(bookData);
  const [query, setQuery] = useState("");

  const handleFilter = (selected) => {
    if (selected === "name_asc") {
      setBooks(sortedBookByCharacter(books, true));
    }
    if (selected === "name_desc") {
      setBooks(sortedBookByCharacter(books, false));
    }
    if (selected === "year_asc") {
      setBooks(sortBookByYear(books, true));
    }
    if (selected === "year_desc") {
      setBooks(sortBookByYear(books, false));
    }
  };

  const handleFavorite = (bookId) => {
    setBooks(
      books.map((book) => {
        if (book.id === bookId) {
          return { ...book, isFavorite: !book.isFavorite };
        }
        return book;
      })
    );
  };

  if (query !== "") {
    books = books.filter((book) =>
      book.title.toLowerCase().includes(query.toLowerCase())
    );
  }
  return (
    <main className="my-10 lg:my-14">
      <BooksActions onFilter={handleFilter} setQuery={setQuery} />

      <div className="container mx-auto grid grid-cols-1 gap-8 max-w-7xl md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {books.map((book) => (
          <Book key={book.id} book={book} onFavorite={handleFavorite} />
        ))}
      </div>
    </main>
  );
}

export default BooksBoard;
