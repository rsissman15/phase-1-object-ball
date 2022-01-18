function gameObject() {
    return{
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                "Alan Anderson": { "number": 0, "shoe": 16, "points": 22,
                    "rebounds": 12, "assists": 12, "steals": 3, "blocks": 1, 
                    "slamDunks": 1 },
                "Reggie Evans": { "number": 30, "shoe": 14, "points": 12, 
                    "rebounds": 12, "assists": 12, "steals": 12, "blocks": 12, 
                    "slamDunks": 7 },
                "Brook Lopez": { "number": 11, "shoe": 17, "points": 17,
                    "rebounds": 19, "assists": 10, "steals": 3, "blocks": 1,
                    "slamDunks": 15 },
                "Mason Plumlee": { "number": 1, "shoe": 19, "points": 26,
                    "rebounds": 12, "assists": 6, "steals": 3, "blocks": 8,
                    "slamDunks": 5 },
                "Jason Terry": { "number": 31, "shoe": 15, "points": 19,
                    "rebounds": 2, "assists": 2, "steals": 4, "blocks": 11,
                    "slamDunks": 1 }
            }
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {
                "Jeff Adrien": { "number": 4, "shoe": 18, "points": 10,
                    "rebounds": 1, "assists": 1, "steals": 2, "blocks": 7,
                    "slamDunks": 2 },
                "Bismak Biyombo": {  "number": 0, "shoe": 16, "points": 12,
                    "rebounds": 4, "assists": 7, "steals": 7, "blocks": 15,
                    "slamDunks": 10 },
                "DeSagna Diop": { "number": 2, "shoe": 14, "points": 24,
                    "rebounds": 12, "assists": 12, "steals": 4, "blocks": 5,
                    "slamDunks": 5 },
                "Ben Gordon": { "number": 8, "shoe": 15, "points": 33,
                    "rebounds": 3, "assists": 2, "steals": 1, "blocks": 1,
                    "slamDunks": 0 },
                "Brendan Haywood": { "number": 33, "shoe": 15, "points": 6,
                    "rebounds": 12, "assists": 12, "steals": 22, "blocks": 5,
                    "slamDunks": 12 }
            }
        }
    }
}
 function allThePlayers(){
    const object=gameObject();
    return [object.home.players,object.away.players];
 }

 function numPointsScored(playerInput){
     return allThePlayers()[playerInput].points;
 }

 function shoeSize(playerInput){
    return allThePlayers()[playerInput].shoe;
}

 function teamColor(teamInput){
     let gameObj=gameObject();
     for (let team in gameObj){
         let teamObj=gameObj[team];
         if (teamObj.teamName===teamInput){
             return teamObj.colors
         }
     }
 }

 function teamNames(){
    const objectTeam=gameObject();
    return [objectTeam.home,objectTeam.away];
 }

function playersNumbers(inputTeamName){
    let gameKey=gameObject();
    let jerseyNumber=[];
    for (let key in gameKey){
        let teamObj=gameKey[key];
        if(teamObj.teamName===inputTeamName){
            let playerObj=teamObj.players
            for(let playerKey in playerObj){
                jerseyNumber.push(playerObj[playerKey].number);
                
            }
        }
    }
    return jerseyNumber;
}

function playerStats(inputPlayer){
    let gameObj=gameObject();
    for(let gameKey in gameObj){
        let teamObj=gameObj[gameKey];
        for(let teamKey in teamObj){
            let playerObj=teamObj.players;
            let statsArray={};
            for(let playerKey in playerObj){
                if(playerKey===inputPlayer){
                    statsArray.number=playerObj[playerKey].number
                    statsArray.shoe=playerObj[playerKey].shoe
                    statsArray.points=playerObj[playerKey].points
                    statsArray.rebounds=playerObj[playerKey].rebounds
                    statsArray.assists=playerObj[playerKey].assists
                    statsArray.steals=playerObj[playerKey].steals
                    statsArray.blocks=playerObj[playerKey].blocks
                    statsArray.slamDunks=playerObj[playerKey].slamDunks


                }
            }
            return statsArray;
        }

    }
  
}

function bigShoeRebounds(shoeSize){
    let gameObj=gameObject();
    for(let gameKey in gameObj){
        let teamObj=gameObj[gameKey];
        for(let teamKey in teamObj){
            let playerObj=teamObj.players;
            let largestShoe=0;
            let largestShoeRebounds=0;
            for(let playerKey in playerObj){
                if(playerObj[playerKey].shoe>largestShoe){
                    largestShoe=playerObj[playerKey].shoe
                    largestShoeRebounds=playerObj[playerKey].rebounds
                }
            }
            return largestShoeRebounds;
        }
    }
}
