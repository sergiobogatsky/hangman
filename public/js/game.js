(()=>{"use strict";class e{constructor(){}static setCookie(e,t,n){var o=new Date;o.setTime(o.getTime()+24*n*60*60*1e3);var r="expires="+o.toUTCString();document.cookie=e+"="+t+";"+r+";path=/"}static setRandomCookieValue(e){let t=Math.ceil(e/13);return new Array(t).fill((function(){return Math.random().toString(16).substring(2,15)})).reduce(((e,t)=>e+t()),"").substring(0,e)}static getCookie(e){for(var t=e+"=",n=document.cookie.split(";"),o=0;o<n.length;o++){for(var r=n[o];" "==r.charAt(0);)r=r.substring(1);if(0==r.indexOf(t))return r.substring(t.length,r.length)}return""}static checkTokenValue(e,t){""==this.getCookie(e)&&this.setCookie(e,t,7)}}class t{constructor(){}static startGame(e,t){fetch("./api/new-game",{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({id:e,players:t,winner:"",word:"",turn:t[0].id,step:0,letters_accepted:[],letters_failed:[]})}).then((function(e){return e.json()})).then((function(e){e.hasOwnProperty("error")?console.log(e.error):window.location.href="game"})).catch((function(e){console.error(e)}))}static async getGame(e){return await fetch("./api/get-game",{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({id:e})}).then(await(function(e){return e.json()})).then(await(function(e){return e.hasOwnProperty("error")?e.error:e})).catch(await(function(e){console.error(e)}))}static setGame(e){fetch("./api/set-game",{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.json()})).then((function(e){e.hasOwnProperty("error")?console.log(e.error):console.log(e)})).catch((function(e){console.error(e)}))}static async getNewSuperhero(){return await fetch("./api/new-hero",{method:"get"}).then(await(function(e){return e.text()})).catch(await(function(e){return console.error(e),e}))}}const n=["images/monster/monster0.jpg","images/monster/monster1.jpg","images/monster/monster2.jpg","images/monster/monster3.jpg","images/monster/monster4.jpg","images/monster/monster5.jpg"];function o(e,t){console.log(e);let n=e.split(""),o="";for(const e of n)" "==e?o+="&nbsp;&nbsp;":-1!=t.indexOf(e.toUpperCase())?o=o+e+" ":o+="_ ";return o}function r(e){let t=Array.from(new Set(e.letters_accepted)),n=e.word.replace(/ /g,""),o=Array.from(new Set(n.split("")));return JSON.stringify(t.sort())==JSON.stringify(o.sort())}window.onload=async function(){e.checkTokenValue("hangmanGameToken",e.setRandomCookieValue(15)),e.checkTokenValue("letter","black"),e.checkTokenValue("background","white"),document.body.style.background=e.getCookie("background");for(const t of document.getElementsByTagName("*"))t.style.color=e.getCookie("letter");const a=await t.getGame(e.getCookie("hangmanGameToken"));a.word=a.word.toUpperCase(),console.log(a);let i=function(e,t){for(let n of e)if(n.id==t)return n;return console.log("no player found"),null}(a.players,a.turn);console.log(i),document.getElementById("step").setAttribute("src",n[a.step]),document.getElementById("letters_failed").setAttribute("value",a.letters_failed),document.getElementById("word").innerHTML=o(a.word,a.letters_accepted),document.getElementById("player_name").innerHTML="Player: "+i.name,document.addEventListener("keydown",(function(e){if(1==(s=e.key).length&&"number"!=typeof s&&" "!=s){let s=function(e,t){if(e.word.includes(t.toUpperCase())){if(-1==e.letters_accepted.indexOf(t.toUpperCase()))return e.letters_accepted.push(t.toUpperCase()),"accepted"}else if(-1==e.letters_failed.indexOf(t.toUpperCase()))return e.letters_failed.push(t.toUpperCase()),"failed";return null}(a,e.key);if(null!=s&&"failed"==s){let e=a.players.indexOf(i);i=function(e,t){return t+1>=e.players.length?(document.getElementById("player_name").innerHTML="Player: "+e.players[0].name,e.players[0]):(document.getElementById("player_name").innerHTML="Player: "+e.players[t+1].name,e.players[t+1])}(a,e),a.step=a.step+1,document.getElementById("step").setAttribute("src",n[a.step])}document.getElementById("word").innerHTML=o(a.word,a.letters_accepted),document.getElementById("letters_failed").setAttribute("value",a.letters_failed),r(a)&&(console.log("winner"),a.winner=i.name),t.setGame(a),function(e){e.step>=5&&(window.location.href="finish"),r(e)&&(window.location.href="finish")}(a)}var s})),(navigator.userAgent.match(/Android/i)||navigator.userAgent.match(/webOS/i)||navigator.userAgent.match(/iPhone/i)||navigator.userAgent.match(/iPad/i)||navigator.userAgent.match(/iPod/i))&&(document.getElementById("keyboard").hidden=!1,document.getElementById("keyboard").addEventListener("click",(function(){this.style.display="none"})))}})();