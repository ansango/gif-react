import useFetchGifs from "../hooks/useFetchGifs";
import { ContainerGrid, ContainerTitle } from "./Container";
import GifGridItem from "./GifGridItem";
import Loader, { CardLoader, TitleLoader } from "./Loader";
import PropTypes from "prop-types";

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
      {!loading && images.length > 0 && (
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
      {!loading && images.length === 0 && (
        <ContainerTitle>
          <h2 className="font-bold text-2xl py-5">{category} not found</h2>
        </ContainerTitle>
      )}
    </>
  );
};

GifGrid.propTypes = {
  category: PropTypes.string.isRequired,
};

export default GifGrid;
