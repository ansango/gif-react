import { useState } from "react";
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrif";

const GifApp = () => {
  const [categories, setCategories] = useState(["One"]);

  return (
    <>
      <h2>Gif App React</h2>
      <AddCategory setCategories={setCategories} />
      <hr />

      <ol>
        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </ol>
    </>
  );
};

export default GifApp;
