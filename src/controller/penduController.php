<?php


    function getDictionnaire() {
        $test = rand(0, 10);     // returns a random integer from 0 to 9
     $chemin =  file_get_contents("../dictionnaire.json");
     $chemin = json_encode($chemin);
     $items = (string)$test; 
     $data = $chemin;

  

    return  $chemin;
    }

?>