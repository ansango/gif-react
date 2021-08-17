import AddCategory from "../../components/AddCategory";
const { shallow } = require("enzyme");

describe("Test <AddCategory/>", () => {
  const setCategories = jest.fn();
  let wrapper = shallow(<AddCategory setCategories={setCategories} />);

  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow(<AddCategory setCategories={setCategories} />);
  });

  test("should render component", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("should change text box", () => {
    const input = wrapper.find("input");
    const value = "Hola Mundo";

    input.simulate("change", { target: { value } });
  });

  test("shouldn't submit value", () => {
    wrapper.find("form").simulate("submit", {
      preventDefault() {},
    });
    expect(setCategories).not.toHaveBeenCalled();
  });
});
