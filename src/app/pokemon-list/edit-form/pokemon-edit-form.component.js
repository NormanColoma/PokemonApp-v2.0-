(function () {

    var PokemonEditForm = {
        bindings: {
            pokemon: '=',
            types: '<'
        },
        controller: 'PokemonEditFormController',
        templateUrl: 'app/pokemon-list/edit-form/pokemon-edit-form.html'
    };

    angular
        .module('app')
        .component('pokemonEditForm', PokemonEditForm);
    
})();