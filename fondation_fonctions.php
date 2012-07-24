<?php

function balise_GLOBALS($p) {
  $nom = interprete_argument_balise (1, $p);
  $p->code = 'calculer_balise_GLOBALS(' . $nom . ')';
  return $p;
  }


function calculer_balise_GLOBALS($nom) {
  return $GLOBALS[$nom];
}

?>