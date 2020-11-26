<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
<!-- CSS -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">


    <title>Jeu du pendu </title>
  
</head>
<body>


<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <h1 class="navbar-brand text-center" >Le pendu</h1>
  <ul class="navbar-nav mr-auto">
      
    </ul>
  <span class="navbar-text">
      Echec : <span id="error">0</span>/10
    </span>
</nav>

<div style="display:flex;justify-content:center"> 

<div class="jumbotron" style="width:75%">



    <div id="contenu">
        <?= $contenu; ?>
    </div>


<!-- jQuery and JS bundle w/ Popper.js -->
<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx" crossorigin="anonymous"></script>

<script src="asset/js/script.js"></script>

</body>

</html>