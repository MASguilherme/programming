function FootballTeam(club, tittles, wins){

    this.club = club;
    this.tittles = tittles;
    this.wins = wins;
    this.loses = function Loses(){
        return 10;
    }
}

var teamOne = new FootballTeam("Real Madrid", 20, 200);

console.log(`${teamOne.club} have ${teamOne.wins} winnings, ${teamOne.loses()} loses and won ${teamOne.tittles} tittles.`)