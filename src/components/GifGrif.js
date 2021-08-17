import useFetchGifs from "../hooks/useFetchGifs";

const GifGrid = ({ category }) => {
  const { loading } = useFetchGifs();

  return (
    <>
      <h3>{category}</h3>
      {loading ? <p>Loading...</p> : <p>ready</p>}
      {/* <ul className="grid grid-cols-1 gap-2 px-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl mx-auto">
        {images.map((img) => (
          <GifGridItem key={img.id} {...img} />
        ))}
      </ul> */}
    </>
  );
};
export default GifGrid;
