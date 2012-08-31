// jQuery fondationValiderForm plugin
// Valide des formulaires qui suivent le modèle de Foundation dans un site
// SPIP.
// by Michel Bystranowski @ Vertige.org

/*

Utilisation : 

// init :
$(selector).fondationValiderForm({
    actionSuccesValidation: function () { alert('valide !'); },
    actionEchecValidation: function () { alert('non valide :-('); }
});

// validation
$(selector).fondationValiderForm.validate();

Les champs obligatoires doivent avoir la classe "f-obligatoire".
Les emails doivent avoir la classe "f-email".

*/

(function($) {

    $.fn.fondationValiderForm = function(options) {
        
        return this.each(function () {

            var defaults = {
                erreurObligatoire: "Ce champ est obligatoire",
                erreurEmail: "Veuillez entrer une adresse email valide",
                actionSuccesValidation: function() {},
                actionEchecValidation: function () {}
            };

            var el = $(this);
            var plugin = el.fondationValiderForm;
            
            plugin.settings = {};

            var init = function() {
                plugin.settings = $.extend({}, defaults, options);
            };
            
            plugin.valider = function () {
                var succes = true;

                el.find('.f-obligatoire').each(function () {
                    if ( ! valider_champ($(this), function (valeur) {
                        return (valeur !== '');
                    }, plugin.settings.erreurObligatoire)) { succes = false; }
                });

                el.find('f-email').each(function () {
                    if ( ! valider_champ($(this), function (valeur) {
                        var regex = /[a-zA-z0-9]+@[a-zA-z0-9]+\.[a-zA-z0-9]+/;
                        return (valeur.match(regex).length === 1);
                    }, plugin.settings.erreurEmail)) { succes = false; }
                });

                if (succes) { plugin.settings.actionSuccesValidation(); }
                else        { plugin.settings.actionEchecValidation();  }
            };

            var valider_champ = function (champ, test_func, msg_erreur) {
                var valide;

                if (champ[0].tagName === 'INPUT') {
                    valide = test_func(champ.attr('value'));
                } else if (champ[0].tagName === 'TEXTAREA') {
                    valide = test_func(champ.val());
                }

                if (valide) {
                    marquer_valide(champ, msg_erreur);
                }
                else {
                    marquer_non_valide(champ, msg_erreur);
                }
                
                return valide;
            };

            var marquer_non_valide = function (champ, msg_erreur) {
                var nom = champ.attr('name');
                if ( ! $('label[for=' + nom + ']').hasClass('red')) {
                    if (champ[0].tagName === 'INPUT') {
                        $('label[for=' + nom + ']').addClass('red');
                        champ.after('<small class=error>' + msg_erreur +
                                    '</small>');
                    // cas d'une textarea avec la barre d'outils spip
                    } else if ((champ[0].tagName === 'TEXTAREA') &&
                               (champ.hasClass('inserer_barre_edition'))) {
                        if ( ! $('label[for=' + nom + ']').hasClass('red')) {
                            $('label[for=' + nom + ']').addClass('red');
                            champ.parents('.edition')
                                .after('<small class=error>' + msg_erreur +
                                       '</small>');
                        }
                    }
                }
            };

            var marquer_valide = function (champ) {
                var nom = champ.attr('name');
                if ($('label[for=' + nom + ']').hasClass('red')) {
                    if (champ[0].tagName === 'INPUT') {
                        $('label[for=' + nom + ']').removeClass('red');
                        champ.next().remove();
                    // cas d'une textarea avec la barre d'outils spip
                    } else if ((champ[0].tagName === 'TEXTAREA') &&
                               (champ.hasClass('inserer_barre_edition'))) {
                        $('label[for=' + nom + ']').removeClass('red');
                        champ.parents('.edition').next().remove();
                    }
                }
            };

            init();
        });
    };

})(jQuery);
