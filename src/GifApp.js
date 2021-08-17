import { useState } from "react";
import AddCategory from "./components/AddCategory";
import { Container, ContainerTitle } from "./components/Container";
import GifGrid from "./components/GifGrif";
import GifTitle from "./components/GigTitle";

const GifApp = () => {
  const [categories, setCategories] = useState(["Simpson"]);

  return (
    <Container>
      <ContainerTitle>
        <GifTitle title={"GIPHY React App"} />
      </ContainerTitle>
      <AddCategory setCategories={setCategories} />
      <hr />

      <ol>
        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </ol>
    </Container>
  );
};

export default GifApp;
