import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Navbar from "./Navbar.jsx";
import About from "./About.jsx";
import Books from "./Books.jsx";
import Notfound from "./Notfound.jsx";
import Book from "./data/Book.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />} >
          <Route path="/about" element={<About />} />
          <Route path="/books" element={<Books />} />
          <Route path="/Books/:bookId" element={<Book />} />
        </Route>

        <Route path="*" element={<Notfound />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
