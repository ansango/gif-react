import PropTypes from "prop-types";

const GifGridItem = ({ url, title }) => {
  return (
    <li className="border-2 border-gray-100 rounded-lg flex flex-col justify-between">
      <img
        src={url}
        alt={title}
        className="object-fill h-48 w-full rounded-lg"
      />
    </li>
  );
};

GifGridItem.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default GifGridItem;
