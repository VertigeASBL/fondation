<?php

function fondation_jquery_plugins ($scripts) {

  // virer le jquery de spip, qu'on remplace par celui de Foundation, qui est plus
  // récent et minifié.
  $jquery_location = find_in_path('javascripts/jquery.min.js');
  $jquery_location = preg_replace('#^../#', '', $jquery_location);
  $scripts[0] = $jquery_location;

  return $scripts;
}

function fondation_insert_head ($flux) {

  return recuperer_fond('inclure/insert_head', array()) . $flux;
}

?>