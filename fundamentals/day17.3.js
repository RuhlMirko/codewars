const rps = (p1, p2) => {
  if (p1 === p2) return "Draw!";
  const wins = { rock: "scissors", scissors: "paper", paper: "rock" };
  return wins[p1] === p2 ? "Player 1 won!" : "Player 2 won!";
};

console.log(rps("scissors", "paper"));
console.log(rps("scissors", "rock"));
console.log(rps("paper", "paper"));
