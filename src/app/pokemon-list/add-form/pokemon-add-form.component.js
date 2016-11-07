(function () {

    var PokemonAddForm = {
        bindings: {
            types: '<',
        },
        controller: 'PokemonAddFormController',
        templateUrl: 'app/pokemon-list/add-form/pokemon-add-form.html'
    };

    angular
        .module('app')
        .component('pokemonAddForm', PokemonAddForm);
    
})();