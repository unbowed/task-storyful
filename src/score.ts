type PlayerScore = {
  name: string;
  points: number;
};

const aliases = ["Love", "Fifteen", "Thirty", "Forty"] as const;

export function gameScore(playerA: PlayerScore, playerB: PlayerScore): string {
  let score: string;

  // Invalid score
  if (
    playerA.points < 0 ||
    playerB.points < 0 ||
    (Math.max(playerA.points, playerB.points) > 4 &&
      Math.abs(playerA.points - playerB.points) > 2)
  ) {
    throw new Error("Unexpected score");
  }

  // Advantage or Deuce
  if (playerA.points >= 3 && playerB.points >= 3) {
    switch (playerA.points - playerB.points) {
      case 1:
        return "Advantage Player " + playerA.name;
      case -1:
        return "Advantage Player " + playerB.name;
      case 0:
        return "Deuce";
    }
  }

  // Win
  if (playerA.points >= 4 && playerA.points - playerB.points >= 2) {
    return `Player ${playerA.name} won`;
  }
  if (playerB.points >= 4 && playerB.points - playerA.points >= 2) {
    return `Player ${playerB.name} won`;
  }

  // Normal
  score = aliases[playerA.points] + " - " + aliases[playerB.points];

  return score;
}
