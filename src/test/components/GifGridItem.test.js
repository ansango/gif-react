import { shallow } from "enzyme";
import GifGridItem from "../../components/GifGridItem";

describe("Test <GifGridItem/>", () => {
  const title = "Titulo";
  const url = "http://";

  test("should render component", () => {
    const wrapper = shallow(<GifGridItem title={title} url={url} />);
    expect(wrapper).toMatchSnapshot();
  });
});
