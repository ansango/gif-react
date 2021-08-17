import { useState } from "react";
import PropTypes from "prop-types";

const AddCategory = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (event) => setInputValue(event.target.value);
  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim().length > 0) {
      setCategories((cats) => [inputValue, ...cats]);
      setInputValue("");
    }
  };
  return (
    <div className="py-5 max-w-xl mx-auto">
      <form onSubmit={handleSubmit} className="md:flex items-center">
        <label className="md:w-2/3">
          <input
            type="text"
            placeholder="Search a GIF"
            value={inputValue}
            onChange={handleInputChange}
            className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 p-3"
          />
        </label>
        <div className="md:w-1/3 md:pl-5">
          <button
            className="bg-blue-400 text-white p-3 rounded-lg w-full my-3"
            type="submit"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
};

export default AddCategory;
