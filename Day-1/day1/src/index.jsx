import React from "react";
import ReactDOM from "react-dom/client";

import "../src/style.css";

function Greeting() {
  return <BookList />;
}

const firstBook = {
  author: "James Goslin",
  Title: "Java By Sun Microsystems",
  image:
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP._Lm_T3scKhVEVFC54gcRxwHaE8%26pid%3DApi&f=1&ipt=323ba6272803ddc7e33acf50d121151da117661dd332ed83835d4177daa97a81&ipo=images",
};
const secBook = {
  author: "Bjarne Stroustrop",
  Title: "C++ by Bell Labs",
  image:
    "https://tse3.mm.bing.net/th?id=OIP.gtfHQt5ixgnP-xzJHMesRAHaHa&pid=Api&P=0&h=220",
};

const BookList = () => {
  return (
    <section className="booklist">
      <Book
        author={firstBook.author}
        Title={firstBook.Title}
        image={firstBook.image}
      >
        <p>Java Good Book</p>
        <button>Order Now</button>
      </Book>
      <Book
        author={secBook.author}
        Title={secBook.Title}
        image={secBook.image}
      />
    </section>
  );
};

const Book = (props) => {
  const { image, Title, author, children } = props;
  return (
    <article className="book">
      <img src={image} alt="" />
      <h2>{Title}</h2>
      <p>{author} </p>

      <p>{children}</p>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Greeting />);
