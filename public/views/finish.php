<!DOCTYPE html>
<?php include 'head.php'; ?>
<body>
<?php include 'header.php'; ?>
<main>
    <div class="container">
        <div class="section">
        </div>
        <div class="row">
            <div class="col s6 center-align">
                <div class="card horizontal">
                    <div class="card-image">
                        <img class="responsive-img" src="images/HappyHulk.png" style="height: 10rem">
                    </div>
                    <div class="card-stacked">
                        <div class="card-content">
                            <p class="flow-text">Winner: </p>
                            <span class="card-title" id="winner"></span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col s6 center-align">
                <div class="card horizontal">
                    <div class="card-image">
                        <img class="responsive-img" src="images/AngryHulk.png" style="height: 10rem">
                    </div>
                    <div class="card-stacked">
                        <div class="card-content">
                            <p class="flow-text">Losers: </p>
                            <span class="card-title" id="losers"></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col s12 m8 offset-m2 l6 offset-l3">
                <h3 id="superhero"></h3>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col s12 m4 l2 offset-l3">
            <a  id="same_game" class="waves-effect waves-light deep-purple accent-1 btn-large right" style="width: 100%;">
                <i class="material-icons left">replay</i>
                PLAY AGAIN
            </a>
        </div>
        <div class="col s12 m4 l2">
            <a href="index" id="start_game" class="waves-effect waves-light deep-purple accent-1 btn-large left" style="width: 100%;">
                <i class="material-icons left">videogame_asset</i>
                NEW GAME
            </a>
        </div>
        <div class="col s12 m4 l2">
            <a href="edit" id="edit_game" class="waves-effect waves-light deep-purple accent-1 btn-large right" style="width: 100%;">
                <i class="material-icons left">brush</i>
                EDIT STYLE
            </a>
        </div>
    </div>
    </div>
</main>
<?php include 'footer.php'; ?>
<script type="text/javascript" src="js/finish.js"></script>
</body>
</html>