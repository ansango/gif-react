const GifGridItem = ({ url, title, id }) => {
  return (
    <li
      className="border-2 border-gray-100 rounded-lg flex flex-col justify-between"
      id={id}
    >
      <img
        src={url}
        alt={title}
        className="object-fill h-48 w-full rounded-t-lg"
      />

      <p className="p-5">{title}</p>
    </li>
  );
};
export default GifGridItem;
