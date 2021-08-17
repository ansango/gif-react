import { renderHook } from "@testing-library/react-hooks";
import useFetchGifs from "../../hooks/useFetchGifs";

describe("test useFetchGigs", () => {
  test("should return initial state", () => {
    const category = " simpsons";
    const { result } = renderHook(() => useFetchGifs(category));
    const { data, loading } = result.current;
    expect(data).toEqual([]);
    expect(loading).toBe(true);
  });
});
