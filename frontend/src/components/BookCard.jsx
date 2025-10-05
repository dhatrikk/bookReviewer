import { Link } from "react-router-dom";
import { Suspense } from "react";
import defaultImage from "../assets/book.webp";

const BookCard = ({ book }) => {
  if (!book) return null;

  const image = book.image_url
    ? book.image_url.replace("/upload", "/upload/h_400")
    : book.cover || defaultImage;

  const bookId = book._id || book.id || "0";

  return (
    <Link
      to={`/books/${bookId}`}
      className="w-full sm:w-1/3 md:w-1/4 lg:w-1/6 xl:58 fixed-height overflow-hidden"
    >
      <div className="relative m-2 group rounded-lg aspect-w-3 aspect-h-4">
        <Suspense fallback={<>loading...</>}>
          <img
            src={defaultImage}
            alt={book.title || "Book cover"}
            className="w-full h-full object-cover object-center transition-transform duration-500 rounded-lg shadow-md group-hover:scale-105"
          />
        </Suspense>

        <div className="absolute flex flex-col inset-0 justify-end opacity-0 group-hover:opacity-100 duration-500">
          <div className="absolute group-hover:scale-105 transition-all duration-500 inset-0 rounded-lg bg-gradient-to-t from-gray-900 via-gray-900/10"></div>

          <h3
            className="z-10 mx-2 text-lg leading-[1.2] line-clamp-2 font-bold text-white"
            title={book.title || "Untitled"}
          >
            {book.title || "Untitled"}
          </h3>

          <div className="z-10 mx-2 overflow-hidden text-sm text-gray-300">
            {book.author || "Unknown Author"}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BookCard;
