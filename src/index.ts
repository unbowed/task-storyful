import { gameScore } from "./score";

const arg = process.argv.slice(2);

/**
 * Expected input:
 *  node cli.js scoreA scoreB // short version
 *  node cli.js playerA scoreA playerB scoreB // Long version
 */

const isLongVersion = arg.length > 3;

const playerA = {
  name: isLongVersion ? arg[0] : "A",
  points: isLongVersion ? parseInt(arg[1]) : parseInt(arg[0]),
};

const playerB = {
  name: isLongVersion ? arg[2] : "B",
  points: isLongVersion ? parseInt(arg[3]) : parseInt(arg[1]),
};

console.log(gameScore(playerA, playerB));
