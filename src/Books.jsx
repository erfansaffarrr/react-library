import { NavLink, Outlet, useSearchParams , useLocation } from "react-router-dom";
import { getBooks } from "./data/data";
import "./index.css"; 

const Books = () => {
  let books = getBooks();
  let [searchParams, setSearchParams] = useSearchParams();
  let location = useLocation();

  return (
    <div className="books-container">
      {/*  جستجو */}
      <input 
        className="search-input"
        type="text"
        placeholder="جستجوی کتاب..."
        value={searchParams.get("filter") || ""}
        onChange={(event) => {
          let filter = event.target.value;
          setSearchParams(filter ? { filter } : {});
        }}
      />

      {/* چارت کتاب‌ها */}
      <ul className="book-list">
        {books
          .filter((book) => {
            let filter = searchParams.get("filter");
            if (!filter) return true;
            return book.name.toLowerCase().startsWith(filter.toLowerCase()); 
          })

          .map((book) => (
            <li key={book.id} className="book-item">

              <NavLink to={`${book.id}${location.search}`} className="book-link">
                {book.name}
              </NavLink>

            </li>
          ))}
      </ul>

      <Outlet />
    </div>
  );
};

export default Books;

