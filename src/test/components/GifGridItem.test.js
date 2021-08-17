import { shallow } from "enzyme";
import GifGridItem from "../../components/GifGridItem";

describe("Test <GifGridItem/>", () => {
  test("should render component", () => {
    const wrapper = shallow(<GifGridItem />);
    expect(wrapper).toMatchSnapshot();
  });
});
