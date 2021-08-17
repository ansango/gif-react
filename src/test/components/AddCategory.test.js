import AddCategory from "../../components/AddCategory";
const { shallow } = require("enzyme");

describe("Test <AddCategory/>", () => {
  const setCategories = () => {};
  const wrapper = shallow(<AddCategory setCategories={setCategories} />);
  test("should render component", () => {
    expect(wrapper).toMatchSnapshot();
  });
  test("should change text box", () => {
    const input = wrapper.find("input");
    const value = "Hola Mundo";
    input.simulate("change", { target: { value } });
  });
});
