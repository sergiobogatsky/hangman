<!DOCTYPE html>
<?php include 'head.php'; ?>
<body>
<?php include 'header.php'; ?>
<main>
    <div class="container">
        <div class="section">
        </div>
        <div class="row">
            <div class="col s4 center-align">
                <img class="responsive-img" src="images/superhero1.png" style="height: 10rem">
            </div>
            <div class="col s4 center-align">
                <img class="responsive-img" src="images/superhero2.png" style="height: 10rem">
            </div>
            <div class="col s4 center-align">
                <img class="responsive-img" src="images/superhero3.png" style="height: 10rem">
            </div>
        </div>
        <div class="row">
            <div class="col s12 m8 offset-m2 l6 offset-l3">
                <div class="row" id="numbers">
                    <div class="input-field col s12">
                        <input id="number_of_players" name="number_of_players" type="number" class="validate flow-text" value="1">
                        <label>Nº OF PLAYERS</label>
                    </div>
                </div>
                <div class="row" id="names">
                    <div class="input-field col s12">
                        <input name="0" type="text" class="validate flow-text names">
                        <label>PLAYER NAME</label>
                    </div>
                </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col s12 m4 offset-m2 l3 offset-l3">
                <a id="start_game" class="waves-effect waves-light deep-purple accent-1 btn-large left" style="width: 100%;">
                    <i class="material-icons left">videogame_asset</i>
                    START GAME
                </a>
            </div>
            <div class="col s12 m4 l3">
                <a href="edit" id="edit_game" class="waves-effect waves-light deep-purple accent-1 btn-large right" style="width: 100%;">
                    <i class="material-icons left">brush</i>
                    EDIT STYLE
                </a>
            </div>
        </div>
    </div>
</main>
<?php include 'footer.php'; ?>
<script type="text/javascript" src="js/index.js"></script>
</body>
</html>