(function () {


    angular
        .module('app')
        .controller('PokemonEditFormController', PokemonEditFormController);


    PokemonEditFormController.$inject = ['pokemonListService','detailService'];

    function PokemonEditFormController(pokemonListService,detailService){

        var vm = this;

        vm.$onInit = function() { 
            getTypes();
            getPokemonTypes(vm.pokemon._links.pokemon.href);
        };
        
        vm.getTypes = getTypes;
        vm.getPokemonTypes = vm.getPokemonTypes;
        vm.hideMessage = hideMessage;
        vm.modified = false;
        vm.updatePokemon = updatePokemon;

        function getTypes(){
            pokemonListService.getTypes().then(function(response){
                vm.types = response;
            });
        }

        function getPokemonTypes(url){
            detailService.getTypes(url).then(function(response){
                vm.pokemon.types = response;
            });
        }

        function hideMessage(){
            vm.modified = false;
        }

        function updatePokemon(pokemon){
            var pokemon_edited = angular.copy(pokemon);
            pokemon_edited.types[0] = pokemon.types[0]._links.type.href;
            pokemon_edited.types[1] = pokemon.types[1]._links.type.href;
            detailService.updatePokemon(pokemon_edited,pokemon._links.pokemon.href).then(function(response){
                vm.modified = true;
            });
        }
        
    }
    
})();