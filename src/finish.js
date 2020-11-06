import { Game } from "./classes/Game";
import {Cookie} from "./classes/Cookie";


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

    //winner
    console.log(game.winner)
    document.getElementById('winner').innerHTML = game.winner;
    //get only the names of the players losers:
    document.getElementById('losers').innerHTML = game.players.filter(player => player.name != game.winner).map(player => player.name);
    document.getElementById('superhero').innerHTML = "SUPERHERO: " + game.word.toUpperCase();
}