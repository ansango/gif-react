import useFetchGifs from "../hooks/useFetchGifs";
import { ContainerGrid, ContainerTitle } from "./Container";
import GifGridItem from "./GifGridItem";
import Loader, { CardLoader, TitleLoader } from "./Loader";

const GifGrid = ({ category }) => {
  const { data: images, loading } = useFetchGifs(category);

  return (
    <>
      {loading && (
        <>
          <ContainerTitle>
            <Loader Component={TitleLoader} />
          </ContainerTitle>
          <ContainerGrid>
            <Loader amount={12} Component={CardLoader} />
          </ContainerGrid>
        </>
      )}
      {!loading && (
        <>
          <ContainerTitle>
            <h2 className="font-bold text-2xl py-5">{category}</h2>
          </ContainerTitle>
          <ContainerGrid>
            {images.map((img) => (
              <GifGridItem key={img.id} {...img} />
            ))}
          </ContainerGrid>
        </>
      )}
    </>
  );
};
export default GifGrid;
