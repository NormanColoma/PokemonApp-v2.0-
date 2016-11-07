(function () {


    angular
        .module('app')
        .controller('PokemonListController', PokemonListController);


    PokemonListController.$inject = ['pokemonListService'];

    function PokemonListController(pokemonListService){

        var vm = this;
        vm.extractId = extractId;
        vm.getPokemons = getPokemons;
        vm.selectPokemon = selectPokemon;

        vm.$onInit = function() {   
            getPokemons();
        };

        function extractId(pokemon){
            var id = pokemon._links.pokemon.href.split("https://pokemonrestapi.herokuapp.com/pokemons/");
            return id[1];
        }

        function getPokemons(){
            pokemonListService.getList().then(function(response){
                vm.pokemons = response;
            });
        }

        function selectPokemon(pokemon){
            vm.selectedPokemon = pokemon;
        }
    }
    
})();