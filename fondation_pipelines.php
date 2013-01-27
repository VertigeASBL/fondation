<?php

function fondation_jquery_plugins ($scripts) {

  array_push($scripts, "javascripts/foundation/jquery.cookie.js");
  array_push($scripts, "javascripts/foundation/jquery.event.move.js");
  array_push($scripts, "javascripts/foundation/jquery.event.swipe.js");
  array_push($scripts, "javascripts/foundation/jquery.foundation.accordion.js");
  array_push($scripts, "javascripts/foundation/jquery.foundation.alerts.js");
  array_push($scripts, "javascripts/foundation/jquery.foundation.buttons.js");
  array_push($scripts, "javascripts/foundation/jquery.foundation.clearing.js");
  array_push($scripts, "javascripts/foundation/jquery.foundation.forms.js");
  array_push($scripts, "javascripts/foundation/jquery.foundation.joyride.js");
  array_push($scripts, "javascripts/foundation/jquery.foundation.magellan.js");
  array_push($scripts, "javascripts/foundation/jquery.foundation.mediaQueryToggle.js");
  array_push($scripts, "javascripts/foundation/jquery.foundation.navigation.js");
  array_push($scripts, "javascripts/foundation/jquery.foundation.orbit.js");
  array_push($scripts, "javascripts/foundation/jquery.foundation.reveal.js");
  array_push($scripts, "javascripts/foundation/jquery.foundation.tabs.js");
  array_push($scripts, "javascripts/foundation/jquery.foundation.tooltips.js");
  array_push($scripts, "javascripts/foundation/jquery.foundation.topbar.js");
  array_push($scripts, "javascripts/foundation/jquery.placeholder.js");

  return $scripts;
}

function fondation_insert_head ($flux) {

  return $flux . recuperer_fond('inclure/insert_head', array());
}

?>