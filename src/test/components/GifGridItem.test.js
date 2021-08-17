import { shallow } from "enzyme";
import GifGridItem from "../../components/GifGridItem";

describe("Test <GifGridItem/>", () => {
  const title = "Titulo";
  const url = "http://";
  const wrapper = shallow(<GifGridItem title={title} url={url} />);
  test("should render component", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("should has par with title", () => {
    const p = wrapper.find("p");
    expect(p.text().trim()).toBe(title);
  });

  test("should has img equals url and alt props", () => {
    const img = wrapper.find("img");
    const src = img.prop("src");
    const alt = img.prop("alt");
    expect(src).toBe(url);
    expect(alt).toBe(title);
  });

  test("should has border-2 border-gray-100 rounded-lg flex flex-col justify-between classes", () => {
    const li = wrapper.find("li");
    const className = li.prop("className");
    expect(
      className.includes(
        "border-2 border-gray-100 rounded-lg flex flex-col justify-between"
      )
    ).toBe(true);
  });
});
