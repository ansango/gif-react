import useFetchGifs from "../hooks/useFetchGifs";
import GifGridItem from "./GifGridItem";
import Loader, { CardLoader, TitleLoader } from "./Loader";

const GifGrid = ({ category }) => {
  const { data: images, loading } = useFetchGifs(category);

  return (
    <>
      {loading && (
        <>
          <div className="max-w-md mx-auto py-5">
            <Loader Component={TitleLoader} />
          </div>
          <div className="grid grid-cols-1 gap-2 px-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl mx-auto py-5">
            <Loader amount={12} Component={CardLoader} />
          </div>
        </>
      )}
      {!loading && (
        <>
          <div className="max-w-md mx-auto py-5 text-center">
            <h3 className="font-bold text-2xl py-5">{category}</h3>
          </div>
          <ul className="grid grid-cols-1 gap-2 px-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl mx-auto py-5">
            {images.map((img) => (
              <GifGridItem key={img.id} {...img} />
            ))}
          </ul>
        </>
      )}
    </>
  );
};
export default GifGrid;
