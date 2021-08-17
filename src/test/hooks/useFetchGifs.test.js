import { renderHook } from "@testing-library/react-hooks";
import useFetchGifs from "../../hooks/useFetchGifs";

describe("test useFetchGigs", () => {
  const category = " simpsons";

  test("should return initial state", async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchGifs(category)
    );
    const { data, loading } = result.current;
    await waitForNextUpdate();
    expect(data.length).toBe(0);
    expect(loading).toBe(true);
  });

  test("should return arr of imgs and false loading", async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchGifs(category)
    );
    await waitForNextUpdate();
    const { data, loading } = result.current;
    expect(data.length).toBe(12);
    expect(loading).toBe(false);
  });
});
