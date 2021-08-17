import AddCategory from "../../components/AddCategory";
const { shallow } = require("enzyme");

describe("Test <AddCategory/>", () => {
  const setCategories = () => {};

  test("should render component", () => {
    const wrapper = shallow(<AddCategory setCategories={setCategories} />);
    expect(wrapper).toMatchSnapshot();
  });
});
