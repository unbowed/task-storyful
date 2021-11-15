import { gameScore } from "../src/score";

test("It computes the correct score", () => {
  expect(
    gameScore({ name: "Nadal", points: 2 }, { name: "Federer", points: 1 })
  ).toBe("Thirty - Fifteen");
  expect(
    gameScore({ name: "Nadal", points: 3 }, { name: "Federer", points: 0 })
  ).toBe("Forty - Love");
  expect(
    gameScore({ name: "Nadal", points: 3 }, { name: "Federer", points: 3 })
  ).toBe("Deuce");
  expect(
    gameScore({ name: "Nadal", points: 5 }, { name: "Federer", points: 4 })
  ).toBe("Advantage Player Nadal");
  expect(
    gameScore({ name: "Nadal", points: 6 }, { name: "Federer", points: 4 })
  ).toBe("Player Nadal won");
  expect(() =>
    gameScore({ name: "Nadal", points: 7 }, { name: "Federer", points: 4 })
  ).toThrow("Unexpected score");
  expect(
    gameScore({ name: "Nadal", points: 0 }, { name: "Federer", points: 0 })
  ).toBe("Love - Love");
  expect(
    gameScore({ name: "Nadal", points: 0 }, { name: "Federer", points: 3 })
  ).toBe("Love - Forty");
});
