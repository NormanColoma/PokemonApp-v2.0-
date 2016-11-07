(function () {

    var PokemonList = {
        bindings: {
            pokemons: '<',
            selectedPokemon: '=?bind',
        },
        controller: 'PokemonListController',
        templateUrl: 'app/pokemon-list/pokemon-list.html'
    };

    angular
        .module('app')
        .component('pokemonList', PokemonList);
    
})();