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
    const value = "Hola Mundo";
    const input = wrapper.find("input");

    input.simulate("change", { target: { value } });
  });

  test("shouldn't submit value", () => {
    wrapper.find("form").simulate("submit", {
      preventDefault() {},
    });
    expect(setCategories).not.toHaveBeenCalled();
  });

  test("should call setCategories and clean text box", () => {
    const value = "Hola Mundo";

    // simulate input change event
    wrapper.find("input").simulate("change", { target: { value } });

    // simulate form submit event
    wrapper.find("form").simulate("submit", { preventDefault() {} });

    // setCategories called, times, and called with function as param
    expect(setCategories).toHaveBeenCalled();
    expect(setCategories).toHaveBeenCalledTimes(1);
    expect(setCategories).toHaveBeenCalledWith(expect.any(Function));

    // input value is empty
    expect(wrapper.find("input").prop("value")).toBe("");
  });
});
