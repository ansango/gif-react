import { useState } from "react";
import AddCategory from "./components/AddCategory";

const GifApp = () => {
  const [categories, setCategories] = useState(["One", "Two", "Three"]);

  return (
    <>
      <h2>Gif App React</h2>
      <AddCategory setCategories={setCategories} />
      <hr />

      <ol>
        {categories.map((category, index) => (
          <li key={index}>{category}</li>
        ))}
      </ol>
    </>
  );
};

export default GifApp;
