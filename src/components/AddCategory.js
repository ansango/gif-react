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
    <div className="py-12 mt-8 max-w-md">
      <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6">
        <label className="block">
          <span>Search a GIF</span>
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </label>
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
};

export default AddCategory;
