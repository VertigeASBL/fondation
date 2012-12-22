<?php

function balise_GLOBALS($p) {
  $nom = interprete_argument_balise (1, $p);
  $p->code = 'calculer_balise_GLOBALS(' . $nom . ')';
  return $p;
  }


function calculer_balise_GLOBALS($nom) {
  return $GLOBALS[$nom];
}

/*
  Dump proprement n'importe quelle variable dans le fichier tmp/log/debug.log
  Pas testé sur spip 2.1
 */
function dbg($msg) {
  spip_log(var_export($msg, TRUE), 'debug'._LOG_AVERTISSEMENT);
}

?>