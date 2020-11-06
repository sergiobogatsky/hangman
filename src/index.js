import { Game } from "./classes/Game";
import {Cookie} from "./classes/Cookie";

const names = document.getElementById('names');

window.onload = function(){

    //check cookies:
    Cookie.checkTokenValue('hangmanGameToken', Cookie.setRandomCookieValue(15));
    Cookie.checkTokenValue('letter', 'black');
    Cookie.checkTokenValue('background', 'white');
    document.body.style.background = Cookie.getCookie('background');
    for (const text of document.getElementsByTagName('*')) {
        text.style.color = Cookie.getCookie('letter');
    }

    //listeners:
    document.getElementById('number_of_players').addEventListener('input', function () {
        //in case of 0 and negative values:
        if (this.value <= 0) {
            return;
        }
        //getting number of names in the list:
        let namesNumber = names.childElementCount;

        //calculating the difference between number of names and desired quantity:
        let namesDifference = this.value - namesNumber;

        if (namesDifference > 0) {
            addNewNames(namesDifference);
        }
        else {
            deleteOldNames(namesDifference);
        }
    });

    document.getElementById('start_game').addEventListener('click', function () {
        if (checkNames()) {
            Game.startGame(Cookie.getCookie('hangmanGameToken'), getPlayers())
        }
        else {
            showNotice()
        }
    })
}



function addNewNames(counter) {
    for (let i = counter; i > 0; i--) {

        let div = document.createElement('div');
        div.setAttribute('class', 'input-field col s12');

        let input = document.createElement('input');
        input.setAttribute('name', i);
        input.setAttribute('class', 'validate flow-text names');
        input.setAttribute('type', 'text');

        let label = document.createElement('label');
        label.innerHTML = "PLAYER NAME";

        div.appendChild(input);
        div.appendChild(label);

        names.appendChild(div);
    }
}

function deleteOldNames(counter) {
    counter = -counter;
    for (let i = counter; i > 0; i--) {
        names.removeChild(names.lastElementChild);
    }
}

function getPlayers () {
    let players = [];
    let classNames = document.getElementsByClassName('names');
    for (const name of classNames) {
        players.push({
            "id": name.name,
            "name": name.value,
            "step": 0,
            "wins": 0,
            "losses": 0,
        });
    }
    return players;
}

function checkNames() {
    let classNames = document.getElementsByClassName('names');
    for (const name of classNames) {
        if (name.value == '') {
            return false
        }
    }
    return true
}

function showNotice() {
    let div = document.createElement('div');
    div.setAttribute('class', 'chip')
    div.innerHTML = 'Please put all the names of the players <i class="close material-icons">close</i>'
    document.getElementById('numbers').appendChild(div);
}

