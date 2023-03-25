import React from "react";
import { useOutletContext } from "react-router-dom";
import { useParams } from "react-router-dom";

const Book = () => {
  const { id } = useParams();
  const obj = useOutletContext();
  return (
    <h1>
      Book {id}
      {obj.hello}
    </h1>
  );
};

export default Book;
