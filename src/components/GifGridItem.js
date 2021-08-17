const GifGridItem = ({ url, title, id }) => {
  return (
    <li key={id}>
      <h4>{title}</h4>
      <img src={url} alt={title} />
    </li>
  );
};
export default GifGridItem;
