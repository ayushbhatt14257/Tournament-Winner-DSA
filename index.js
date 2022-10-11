// tournament winner 

// there's an algorithms tournament taking place in which teams of programmers compete against each other to solve algorithmic problems as fast as possible. teams compete in a round robin, where each team faces off against all other teams. only two teams compete against each other at a time, and for each competition, one team is designated the home team, while the other team is the away team. in each competition there's always one winner and one loser; there are no ties. a team receives 3 points if it wins and 0 points if it loses. the winner of the tournament is the team that receives the most amount of points. 

// Given an array of pairs representing the teams that have competed against each other and an array containing the results of each competition, write a function that returns the winner of the tournament. the input arrays are named competitions and results, respectively. the competitions array has elements in the form of [home team, away team], where each team is a string of at most 30 charactersrepresenting the name of the team. the results array contains information about the winner of each corresponding competition in the competitions array. specifically, results [i] denotes the winner of competitions[i], where a 1 in the results array means that the home team in the corresponding competition won and a 0 means that the away team won. 

// it's guaranteed that exactly one team will win the tournament and that each team will compete against all other teams exactly once. it's also guaranteed that the tournament will always have at least two teams.

// Sample Input
let competition = [
    ["HTML", "C#"],
    ["C#", "Python"],
    ["Pyton", "Html"],
]
let results = [0, 0, 1];

// Sample Output
// Python 

// O(n) Time | O(k) Space - where n is number of competition and k is number of team

const HOME_TEAM_WON = 1
let currentBestTeam = "";
let score = {
    [currentBestTeam]: 0
};

for (let i = 0; i < competition.length; i++) {
    let result = results[i];
    let [homeTem, awayTeam] = competition[i];

    let winningTeam = result === HOME_TEAM_WON ? homeTem : awayTeam;

    updateScore(winningTeam, 3, score);

    if (score[winningTeam] > score[currentBestTeam]) {
        currentBestTeam = winningTeam;
    }
}
console.log(currentBestTeam);

function updateScore(team, point, score) {
    if (!(team in score)) score[team] = 0;
    score[team] += point;
}