class Game {
    constructor() {

    }

    static startGame(gameToken, players) {
        fetch('./api/new-game',
            {
                method: 'post',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    id: gameToken,
                    players: players,
                    winner: "",
                    word: "",
                    turn: players[0].id,
                    step: 0,
                    letters_accepted: [

                    ],
                    letters_failed: [

                    ]
                })
            })
            .then(function (response) {
                return response.json();
            }).then(function(data) {
            if (!data.hasOwnProperty('error')) {
                window.location.href = 'game';
            }
            else {
                console.log(data.error)
            }

        })
            .catch(function (error) {
                console.error(error);
            });
    }

    static async getGame(gameToken) {
         let result = await fetch('./api/get-game',
            {
                method: 'post',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    id: gameToken,
                })
            })
            .then(await function (response) {
                return response.json();
            }).then(await function(data) {
            if (!data.hasOwnProperty('error')) {

                return data;
            }
            else {
                return data.error;
                console.log(data.error)
            }

        })
            .catch(await function (error) {
                console.error(error);
            });
         return result
    }

    static setGame(game) {
        fetch('./api/set-game',
            {
                method: 'post',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(game)
            })
            .then(function (response) {
                return response.json();
            }).then(function(data) {
            if (!data.hasOwnProperty('error')) {
                console.log(data)
            }
            else {
                console.log(data.error)
            }

        })
            .catch(function (error) {
                console.error(error);
            });
    }
}

export { Game };