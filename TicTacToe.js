//VARIABLES
var playerO = false;
var playerX = false;

var roundCounterPlayerO = 0;
var roundCounterPlayerX =0;

var l1 = [1,1,1]
var l2 = [1,1,1]
var l3 = [1,1,1]
var gameArrayMatrix =[l1,l2,l3,]

// Random start
var randomPlayerStart = [ 1 , 2 ];
var randomPlayerChoice = Math.floor(Math.random() * randomPlayerStart.length);
var randomPlayerChoiceOutput = randomPlayerStart[randomPlayerChoice];

if (randomPlayerChoiceOutput == 1){
    playerO = true;
    playerX = false;
    document.getElementById("turnStart").innerHTML = "Le joueur O commence";


} else if(randomPlayerChoiceOutput == 2){
    playerX = true;
    playerO = false;
    document.getElementById("turnStart").innerHTML = "Le joueur X commence";
    ;
};

// GAME LOGIC
// defines what are the winning games
function winnigGame(game,player)
{
    for (let i = 0; i < 3; i++)
    {
        if (game[i][0] == game[i][1] && game[i][0] == game[i][2] && game[i][0] != 1) { return game[i][0]; } // test line

        if (game[0][i] == game[1][i] && game[0][i] == game[2][i] && game[0][i] != 1) { return game[0][i]; } // test column
    }

    if (game[0][0] == game[1][1] && game[0][0] == game[2][2] && game[0][0] != 1) { return game[0][0]; }
    if (game[2][0] == game[1][1] && game[2][0] == game[0][2] && game[2][0] != 1) { return game[0][0]; }

    return null;
}

//Put the Game into a 2D array
function playersGame(buttonId,player){
    switch(buttonId){
        // First lign of buttons
        case "b1":
            l1.splice(0, 1, player);
            break;
        case "b2":
            l1.splice(1, 1, player);
            break;
        case "b3":
            l1.splice(2, 1, player);
            break;
        // Second lign of buttons
        case "b4":
            l2.splice(0, 1, player);
            break;
        case "b5":
            l2.splice(1, 1, player);
            break;
        case "b6":
            l2.splice(2, 1, player);
            break;
        // Third lign of buttons
        case "b7":
            l3.splice(0, 1, player);
            break;
        case "b8":
            l3.splice(1, 1, player);
            break;
        case "b9":
            l3.splice(2, 1, player);
            break;
        default:
            break;
    };
};

$('.game button').click(function(){
    
    // verifiying if the case as already been clicked on
    if ($(this).data('clicked') == true){

        $(this).off("click");

        console.log("Already clicked");
        document.getElementById("turn").innerHTML = "Veuillez choisir une autre case";
    // if not
    } else{
            // Turns for the players
            if(playerO == true && playerX == false){
                //when the player click on a button to play th game
                $(this).text("O").data('clicked',true).css("background-color","purple");

                $(this).click(playersGame($(this).attr("id"),"O"))
                // Switching player
                playerO = false;
                playerX = true;

                // Displaying the players turns
                document.getElementById("turn").innerHTML = "C'est au tour du joueur X"}
                else if (playerX == true && playerO == false){
                    $(this).text("X").data('clicked',true).css("background-color","pink");

                    $(this).click(playersGame($(this).attr("id"),"X"))
                    playerO = true;
                    playerX = false;
                    document.getElementById("turn").innerHTML = "C'est au tour du joueur O";
            };
        };
});
document.getElementById("turn").winnigGame(gameArrayMatrix,playerO).innerHTML = "Joueur O gagne"
document.getElementById("turn").winnigGame(gameArrayMatrix,playerX).innerHTML = "Joueur X gagne"

console.log(gameArrayMatrix)

// WIN AND FAIL SYSTEM WITH 2D ARRAYS

// limited amouts of way of winnig so definnig each way of winnig in variables and comparing them with the buttons
// As the player click on the buttons we assign to it a number 0 or 1 in an array and when all the buttons are clicked we compare the end array with all the winnign arrays


