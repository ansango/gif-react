import { getGifs } from "../../helpers/getGifs";

describe("Test getGifs Fetch", () => {
  test("should return 12 elements", async () => {
    const gifs = await getGifs();

    expect(gifs.length).toBe(12);
  });
});
