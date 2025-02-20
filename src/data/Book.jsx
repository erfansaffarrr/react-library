import { useParams , useNavigate , useLocation } from "react-router-dom";
import { deletebook, getBook } from "./data";
const Book = () => {
  let params = useParams();
  const book = getBook(params.bookId);
  let navigate = useNavigate();
  let location = useLocation();
  
  if (book) {
    return (
      <ul className="Book-info">
        <li>
          <img src={book.img} alt="" width="200px" />
        </li>
        <li>{book.name}</li>
        <li>{book.price}</li>
        <li>{book.author}</li>
        <li>{book.description}</li>

        <button onClick={()=>{
          deletebook(book.id);
          navigate("/books" + location.search)
         }} className="delete-book">حذف کتاب </button>
         
        <button className="delete-book" onClick={()=> navigate(-1)}>بازگشت</button>

      </ul>
      
    );
  } else {
    return <div className="found-book">آیتم درخواست شده یافت نشد </div>;
  }
};
export default Book;
