import { shallow } from "enzyme";
import GifApp from "../GifApp";
describe("Test <GifApp/>", () => {
  test("should render", () => {
    const wrapper = shallow(<GifApp />);
    expect(wrapper).toMatchSnapshot();
  });

  test("should render a categories list", () => {
    const categories = ["One Punch", "Dragon Ball"];
    const wrapper = shallow(<GifApp defaultCategories={categories} />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find("GifGrid").length).toBe(categories.length);
  });
});
