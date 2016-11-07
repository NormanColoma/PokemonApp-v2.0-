(function () {


    angular
        .module('app')
        .controller('PokemonDetailController', PokemonDetailController);


    PokemonDetailController.$inject = ['pokemonListService','detailService'];

    function PokemonDetailController(pokemonListService,detailService){

        var vm = this;
        vm.getPokemon = getPokemon;
        vm.removed = false;
        vm.removePokemon = removePokemon;
        

        vm.$onInit = function() {   
            vm.getPokemon(vm.id);
        };

        function getPokemon(id){
            pokemonListService.getPokemon(id).then(function(response){
                vm.pokemon = response;
            });
        }

        function removePokemon(url){
            detailService.deletePokemon(url).then(function(response){
                vm.removed = true;
            });
        }
    }
    
})();