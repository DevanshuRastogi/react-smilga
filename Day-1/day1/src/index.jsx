import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "../src/style.css";

function Greeting() {
  return <BookList />;
}

const bookListing = [
  {
    id: 0,
    author: "James Gosling",
    title: "Java By Sun Microsystems",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP._Lm_T3scKhVEVFC54gcRxwHaE8%26pid%3DApi&f=1&ipt=323ba6272803ddc7e33acf50d121151da117661dd332ed83835d4177daa97a81&ipo=images",
  },
  {
    id: 1,
    author: "Bjarne Stroustrup",
    title: "C++ by Bell Labs",
    image:
      "https://tse3.mm.bing.net/th?id=OIP.gtfHQt5ixgnP-xzJHMesRAHaHa&pid=Api&P=0&h=220",
  },
];

const BookList = () => {
  const [searchId, setSearchId] = useState("");

  const handleFindBookById = () => {
    const book = bookListing.find((book) => book.id === parseInt(searchId));
    console.log(book || "Book not found");
  };

  return (
    <section className="booklist">
      {bookListing.map((book) => (
        <Book key={book.id} {...book} />
      ))}

      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="number"
          placeholder="Enter book ID"
          value={searchId}
          onChange={(e) => setSearchId(e.target.value)}
        />
        <button type="button" onClick={handleFindBookById}>
          Find
        </button>
      </form>
    </section>
  );
};

const Book = ({ image, title, author } = book) => {
  return (
    <article className="book">
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>{author}</p>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Greeting />);
