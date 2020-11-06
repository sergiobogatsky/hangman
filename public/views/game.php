<!DOCTYPE html>
<?php include 'head.php'; ?>
<body>
<?php include 'header.php'; ?>
<main>
    <div class="container">
        <div class="col s12 m7">
            <h5 id="player_name" class="header"></h5>
            <div class="card horizontal">
                <div class="card-image">
                    <img id="step">
                </div>
                <div class="card-stacked">
                    <div class="card-content">
                        <div class="row">
                            <div class="col s12">
                                Letters failed:
                                <div class="input-field inline">
                                    <input id="letters_failed" type="text" disabled class="validate">
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="input-field col s12">
                                <h1 class="flow-text" id="word"></h1>
                                <label for="word">SUPERHERO:</label>
                            </div>
                        </div>
                        <div class="row">
                            <div class="input-field col s12">
                                <input id="keyboard" hidden value="click here to see the keyboard" class="flow-text">
                                <p  class="flow-text">Just type a letter!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</main>
<?php include 'footer.php'; ?>
<script type="text/javascript" src="js/game.js"></script>
</body>
</html>