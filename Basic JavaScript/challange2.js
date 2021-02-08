/*
John & Mile both play basketball in different teams.In the latest 3 games,John's team 
scored 89,120,103 points,while Mike's team scored 116,94 and 123 points.

1.Calculate the avg. score for each team
2.Decide which teams wins in avg.(highest avg. score),and print the winner to the
console.Also include the avg. score in the output.
3.Then change the scores to show difference winners.Don't forget to take into account
there might be a draw(the same avg. score)
4.Extra:Mary also plays basketball,and her team scored 97,134,105 points.Like before,
log the avg. winner to the console.Hint:you'll need the && operator to take the decision.
5.Like before,change the scores to generate different winners,keeping in mind there might
be draws.
*/
function calculateAvgScores(TeamScores){
    var avgScore=0;
    for(var i=0;i<TeamScores.length;i++){
        avgScore+=TeamScores[i];
    }
    avgScore/=TeamScores.length;
    return avgScore;
}
function whoWins(johnTeamScores,mikeTeamScores){
    var avgScoreJohn=calculateAvgScores(johnTeamScores);
    var avgScoreMike=calculateAvgScores(mikeTeamScores);
    var scoreDiff=avgScoreJohn-avgScoreMike;
    if(scoreDiff>0)
        console.log('John wins by ',scoreDiff,' and his avg. score:',avgScoreJohn);
    else if(scoreDiff<0)
        console.log('Mike wins by ',-scoreDiff,' and his avg. score:',avgScoreMike);
    else
        console.log('It\'s a draw!');
}
function whoWinsAmong3(johnTeamScores,mikeTeamScores,maryTeamScores){
    var avgScoreJohn=calculateAvgScores(johnTeamScores);
    var avgScoreMike=calculateAvgScores(mikeTeamScores);
    var avgScoreMary=calculateAvgScores(maryTeamScores);
    if(avgScoreJohn>avgScoreMary && avgScoreJohn>avgScoreMike)
        console.log('John wins with ',avgScoreJohn,' points');
    else if(avgScoreMike>avgScoreJohn && avgScoreMike>avgScoreMary)
        console.log('Mike wins with ',avgScoreMike,' points');
    else if(avgScoreMary>avgScoreJohn && avgScoreMary>avgScoreMike)
        console.log('Mary wins with ',avgScoreMary,' points');
    else
        console.log('It\'s a draw!');
}
whoWins([89,120,103],[116,94,123]);
whoWins([200,120,103],[116,94,123]);
whoWinsAmong3([89,120,103],[116,94,123],[97,134,105]);