
    function randNum(){
        return Math.floor(Math.random()*3);
    }

function numberToChoice(number){
    return['rock','paper','scissors'][number]}


function play(yourChoice){
var humanChoice,botChoice;
botChoice=numberToChoice(randNum());

var humanChoice=yourChoice.id;
results=decidedWinner(humanChoice,botChoice);


message=finalMessage(results);

myDisplay=frontEnd(humanChoice,botChoice,message);

}


function decidedWinner(myChoice,compChoice){
    var GameDatabase={
        'rock':{'rock':0.5,'paper':0,'scissors':1},
        'paper':{'rock':1,'paper':0.5,'scissors':0},
        'scissors':{'rock':0,'paper':1,'scissors':0.5},
    };
    var yourScore=GameDatabase[myChoice][compChoice];
    var compScore=GameDatabase[compChoice][myChoice];
    return [yourScore,compScore]

  
}

function finalMessage([yourScore,compScore]){
if(yourScore===0){
    return{'message':'you lost!', 'color':'red'}
}
else if(yourScore===0.5){
    return{'message':'you tied!', 'color':'yellow'}
}else{
    return {'message':'you won!', 'color':'green'}
}
}
function frontEnd(humanImgChoice,botImghoice,finalMsg){
    var imgDatabase={
        'rock':document.getElementById('rock').src,
        'paper':document.getElementById('paper').src,
        'scissors':document.getElementById('scissors').src,
    };
    document.getElementById("rock").remove();
    document.getElementById("paper").remove();
    document.getElementById("scissors").remove();
var humanDiv=document.createElement('div');
var messageDiv=document.createElement('div');
var botDiv=document.createElement('div');

humanDiv.innerHTML="<img src='"+imgDatabase[humanImgChoice]+"'height=150 width=150>"
document.getElementById('imgElement').appendChild(humanDiv);

messageDiv.innerHTML="<h1 style='color:"+finalMsg['color']+"; font-size:60px; padding:30px;'>"+finalMsg['message']+"</h1>";
document.getElementById('imgElement').appendChild(messageDiv);

botDiv.innerHTML="<img src='"+imgDatabase[botImghoice]+"'height=150 width=150>"
document.getElementById('imgElement').appendChild(botDiv);


}