import { useState } from "react";
import AddCategory from "./components/AddCategory";
import { Container, ContainerTitle } from "./components/Container";
import GifGrid from "./components/GifGrid";
import GifTitle from "./components/GigTitle";

const GifApp = ({ defaultCategories = []}) => {
  const [categories, setCategories] = useState(defaultCategories);

  return (
    <Container>
      <ContainerTitle>
        <GifTitle title={"GIPHY React App"} />
      </ContainerTitle>
      <AddCategory setCategories={setCategories} />
      <hr />
      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
      {categories.length === 0 && (
        <ContainerTitle>
          <h2 className="font-bold text-2xl py-5">
            Enter a value to start a new search
          </h2>
        </ContainerTitle>
      )}
    </Container>
  );
};

export default GifApp;
