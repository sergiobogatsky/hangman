<!DOCTYPE html>
<?php include 'head.php'; ?>
<body>
<?php include 'header.php'; ?>
<main>
    <div class="container">
        <div class="card-panel">
            <div class="row">
                <div class="col s12 m3 offset-m2">
                    <div class="row valign-wrapper">
                        <img class="responsive-img" src="images/PencilThor.png" style="height: 17rem">
                    </div>
                </div>
                <div class="col s12 m7">
                    <div class="row valign-wrapper">
                        <div class="col s12 m7">
                            <h5 class="right">LETTERS COLOR:</h5>
                        </div>
                        <div class="col s12 m5">
                            <div>
                                <p>
                                    <input name="letters" type="radio" id="letter1" value="black" />
                                    <label for="letter1">Black</label>
                                </p>
                                <p>
                                    <input name="letters" type="radio" id="letter2" value="yellow" />
                                    <label for="letter2">Yellow</label>
                                </p>
                                <p>
                                    <input name="letters" type="radio" id="letter3" value="green"  />
                                    <label for="letter3">Green</label>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="row valign-wrapper">
                        <div class="col s12 m7">
                            <h5 class="right">BACKGROUND COLOR: </h5>
                        </div>
                        <div class="col s12 m5">
                            <div>
                                <p>
                                    <input name="backgrounds" type="radio" id="background1" value="white" />
                                    <label for="background1">White</label>
                                </p>
                                <p>
                                    <input name="backgrounds" type="radio" id="background2" value="red" />
                                    <label for="background2">Red</label>
                                </p>
                                <p>
                                    <input name="backgrounds" type="radio" id="background3" value="blue"  />
                                    <label for="background3">Blue</label>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <a id="back" class="waves-effect waves-light deep-purple accent-1 btn-large left">
                <i class="material-icons left">backspace</i>
                BACK
            </a>
        </div>
    </div>
</main>
<?php include 'footer.php'; ?>
<script type="text/javascript" src="js/edit.js"></script>
</body>
</html>