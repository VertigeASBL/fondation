Fondation
=========

Un plugin qui jète de bonnes bases pour commencer un site spip ! Nécessite le plugin [Z](http://www.spip-contrib.net/Zpip).

Le Framework Foundation
-----------------------

Ce plugin inclus le framework Foundation, qui inclut un reset CSS, une grille css reponsive, le js nécessaire pour faire passer le HTML5 dans IE, et plein d'autres choses utiles qui permettent d'accélerer le développement (tabs, tooltips, menus déroulants etc). La doc se trouve sur [http://foundation.zurb.com/docs/](http://foundation.zurb.com/docs/).

Des modèles pour la charte typographique
----------------------------------------

Avec les modèles &lt;charte\_typo|&gt; et &lt;charte\_form|&gt;, on peut très rapidement insérer du contenu qui résume tout ce que spip peut générer. L'idée est qu'une fois que la feuille de style fonctionne bien sur ces modèles, elle fonctionnera sur tous les contenus qui seront encodés par la suite. 

La balise `#GLOBALS`
--------------------

La balise `#GLOBALS` permet de récupérer le contenu du tableau `$GLOBALS` dans les squelettes. On peut alors définir des variables dans `config/mes_options.php` et s'en servir partout dans les squelettes. Par exemple, au lieu d'utiliser un obscur `id_rubrique=123`, on préférera `id_rubrique=#GLOBALS{id_rubrique_membre}` avec `$GLOBALS['id_rubrique_membre'] = 123;` dans `config/mes_options.php`. L'intérêt est que les changements se font à un seul endroit, mais surtout que les squelettes sont beaucoup plus compréhensibles lorsqu'on doit les modifier quelques mois plus tard.
