import { useEffect, useState } from "react";
import GifGridItem from "./GifGridItem";

const getGifs = async () => {
  const url =
    "https://api.giphy.com/v1/gifs/search?q=Rick+and+Morty&limit=10&api_key=n3ZTO5rAaSPYT4HFQWMywRXJho7z27WU";
  const resp = await fetch(url);
  const { data } = await resp.json();
  const gifs = data.map((img) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images?.downsized_medium.url,
    };
  });
  return gifs;
};

const GifGrid = ({ category }) => {
  const [images, setImages] = useState([]);
  useEffect(() => {
    getGifs().then((imgs) => setImages(imgs));
  }, []);

  return (
    <>
      <h3>{category}</h3>
      <ul className="grid grid-cols-1 gap-2 px-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl mx-auto">
        {images.map((img) => (
          <GifGridItem key={img.id} {...img} />
        ))}
      </ul>
    </>
  );
};
export default GifGrid;
