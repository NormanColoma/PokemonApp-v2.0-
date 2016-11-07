(function () {

    var PokemonDetail = {
        bindings: {
            pokemon: '=?bind',
            id: '<'
        },
        controller: 'PokemonDetailController',
        templateUrl: 'app/pokemon-list/detail/pokemon-detail.html'
    };

    angular
        .module('app')
        .component('pokemonDetail', PokemonDetail);
    
})();