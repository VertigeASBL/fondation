<?php

function fondation_jquery_plugins ($scripts) {

  // virer le jquery de spip, on s'en occupe dans inclure/insert_head.html
  array_shift($scripts);

  return $scripts;
}

function fondation_insert_head ($flux) {

  return recuperer_fond('inclure/insert_head', array()) . $flux;
}

?>