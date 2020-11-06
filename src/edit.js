import {Cookie} from './classes/Cookie';

const letters = document.getElementsByName('letters');
const backgrounds = document.getElementsByName('backgrounds');

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
    for (const letter of letters) {

        //put the selected color from cookie:
        if (letter.value == Cookie.getCookie('letter')) {
            letter.checked = 'true';
        }
        letter.addEventListener('click', function () {
            Cookie.setCookie('letter', this.value, 7);
            let value = this.value
            for (const text of document.getElementsByTagName('*')) {
                text.style.color = this.value
            }
        })
    }

    for (const background of backgrounds) {
        //put the selected color from cookie:
        if (background.value == Cookie.getCookie('background')) {
            background.checked = 'true';
        }
        background.addEventListener('click', function () {
            Cookie.setCookie('background', this.value, 7);
            document.body.style.background = this.value;
        })
    }

    document.getElementById('back').addEventListener('click', function () {
        window.history.go(-1);
    })
}

