import {Cookie} from "./classes/Cookie";
import { Game } from "./classes/Game";

const monsters = [
    'images/monster/monster0.jpg',
    'images/monster/monster1.jpg',
    'images/monster/monster2.jpg',
    'images/monster/monster3.jpg',
    'images/monster/monster4.jpg',
    'images/monster/monster5.jpg',
];

window.onload = async function () {
    //check cookies:
    Cookie.checkTokenValue('hangmanGameToken', Cookie.setRandomCookieValue(15));
    Cookie.checkTokenValue('letter', 'black');
    Cookie.checkTokenValue('background', 'white');
    document.body.style.background = Cookie.getCookie('background');
    for (const text of document.getElementsByTagName('*')) {
        text.style.color = Cookie.getCookie('letter');
    }

    //all game information from database:
    const game = await Game.getGame(Cookie.getCookie('hangmanGameToken'));
    //make the Capitalize Letters for word:
    game.word = game.word.toUpperCase()
    console.log(game)

    let player = getPlayer(game.players, game.turn);
    console.log(player)

    document.getElementById('step').setAttribute('src', monsters[game.step]);
    document.getElementById('letters_failed').setAttribute('value', game.letters_failed);
    document.getElementById('word').innerHTML = makeWord(game.word, game.letters_accepted);
    document.getElementById('player_name').innerHTML= "Player: " + player.name;

    //principal listener for letters:
    document.addEventListener('keydown', function (event) {
        if (checkKey(event.key)) {
            let letterAdded = addLetter(game, event.key);
            if (letterAdded != null && letterAdded == "failed") {
                //modify the player if letter get to failed list:
                let index = game.players.indexOf(player);
                player = modifyPlayer (game, index);
                game.step = game.step + 1;
                document.getElementById('step').setAttribute('src', monsters[game.step]);
            }
            //make word:
            document.getElementById('word').innerHTML = makeWord(game.word, game.letters_accepted);
            //refresh list of failed letters:
            document.getElementById('letters_failed').setAttribute('value', game.letters_failed);

            if (compareWordWithLetters(game)) {
                console.log("winner")
                game.winner = player.name;
            }
            //modify the game and database:
            Game.setGame(game);

            checkFinal(game);

        }
    })

    //keyboard of mobile devices:
    if( navigator.userAgent.match(/Android/i)
        || navigator.userAgent.match(/webOS/i)
        || navigator.userAgent.match(/iPhone/i)
        || navigator.userAgent.match(/iPad/i)
        || navigator.userAgent.match(/iPod/i)) {
        document.getElementById('keyboard').hidden = false
        document.getElementById('keyboard').addEventListener('click', function () {
            this.style.display = "none"
        })
    }
}

function getPlayer(players, turn) {
    for (let player of players) {
        if (player.id == turn) {
            return player;
        }
    }
    console.log("no player found")
    return null;
}

function makeWord (word, letters) {
    console.log(word)
    let wordLetters = word.split("");

    let wordToShow = "";
    for (const wordLetter of wordLetters) {

        if (wordLetter == " ") {
            wordToShow = wordToShow + "&nbsp;&nbsp;";
        }
        else {
            if (letters.indexOf(wordLetter.toUpperCase()) != -1) {
                wordToShow = wordToShow + wordLetter + " ";
            }
            else {
                wordToShow = wordToShow + "_ ";
            }
        }
    }
    return wordToShow;
}


function checkKey(key) {
    return key.length == 1 && typeof key != "number" && key != " "
}


function addLetter(game, letter)  {
    if (game.word.includes(letter.toUpperCase())) {
        if (game.letters_accepted.indexOf(letter.toUpperCase()) == -1) {
            game.letters_accepted.push(letter.toUpperCase());
            return "accepted"
        }
    }
    else {
        if (game.letters_failed.indexOf(letter.toUpperCase()) == -1) {
            game.letters_failed.push(letter.toUpperCase());
            return "failed"
        }
    }
    return null
}

function modifyPlayer (game, index) {
    //circular movement for players:
    if (index+1 >= game.players.length) {
        document.getElementById('player_name').innerHTML= "Player: " + game.players[0].name;
        //changing player for the next:
        return game.players[0];
    }
    else {
        document.getElementById('player_name').innerHTML= "Player: " + game.players[index+1].name;
        //changing player for the next:
        return game.players[index+1];
    }
}

function checkFinal(game) {
    //5 steps to lose:
    if (game.step >= 5) {
        window.location.href = 'finish';
    }
    if (compareWordWithLetters(game)) {
        window.location.href = 'finish';
    }
}

function compareWordWithLetters(game) {
    //comparing the word with the accepted letters:
    let arrayLetters = Array.from(new Set(game.letters_accepted));

    let word = game.word.replace(/ /g, "");
    let arrayWord = Array.from(new Set(word.split("")));

    return JSON.stringify(arrayLetters.sort()) == JSON.stringify(arrayWord.sort())
}