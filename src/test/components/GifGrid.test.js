import { shallow } from "enzyme";
import GifGrid from "../../components/GifGrid";
import Loader from "../../components/Loader";

import useFetchGifs from "../../hooks/useFetchGifs";

jest.mock("../../hooks/useFetchGifs");

describe("Test <GifGrid/>", () => {
  const category = "Simpsons";

  test("should be render", () => {
    useFetchGifs.mockReturnValue({
      data: [],
      loading: true,
    });

    const wrapper = shallow(<GifGrid category={category} />);
    expect(wrapper).toMatchSnapshot();
  });

  test("should show items when useFetchGifs", () => {
    const gifs = [
      {
        id: "ABC",
        url: "https://localhost/cualquier/cosa.jpg",
        title: "Cualquier cosa",
      },
      {
        id: "123",
        url: "https://localhost/cualquier/cosa.jpg",
        title: "Cualquier cosa",
      },
    ];

    useFetchGifs.mockReturnValue({
      data: gifs,
      loading: false,
    });

    const wrapper = shallow(<GifGrid category={category} />);
    expect(wrapper.find(Loader).exists()).toBe(false);
    expect(wrapper.find("GifGridItem").length).toBe(gifs.length);
  });

  test("should show Loader when useFetchGifs", () => {
    useFetchGifs.mockReturnValue({
      data: [],
      loading: true,
    });

    const wrapper = shallow(<GifGrid category={category} />);
    expect(wrapper.find(Loader).exists()).toBe(true);
  });
});
