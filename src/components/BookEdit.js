import { useState } from "react";

import useBooksContext from "../hooks/use-books-context";

function BookEdit({ book, onSubmit }) {
  const [title, setTitle] = useState(book.title);
  const { editBookById } = useBooksContext();
  const handleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit();
    editBookById(book.id, title);
  };
  return (
    <form action="" className="book-edit" onSubmit={handleSubmit}>
      <label htmlFor="">Title</label>
      <input
        type="text"
        className="input"
        value={title}
        onChange={handleChange}
      />
      <button className="button is-primary">Save</button>
    </form>
  );
}

export default BookEdit;
