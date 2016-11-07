(function () {


    angular
        .module('app')
        .controller('PokemonAddFormController', PokemonAddFormController);


    PokemonAddFormController.$inject = ['pokemonListService', '$timeout'];

    function PokemonAddFormController(pokemonListService, $timeout){

        var vm = this;

         vm.$onInit = function() { 
            getTypes();
        };

        vm.added = false;
        vm.getTypes = getTypes;
        vm.hideMessage = hideMessage;
        vm.resetForm = resetForm;
        vm.savePokemon = savePokemon;

        function getTypes(){
            pokemonListService.getTypes().then(function(response){
                vm.types = response;
            });
        }
        
        function hideMessage(){
            vm.added = false;
        }

        function resetForm(form){
            if(form) {
                vm.pokemon = {};
                vm.type1 = "";
                vm.type2 = "";
                form.$setPristine();
                form.$setUntouched();
            }
        }

        function savePokemon(pokemon,form){
            pokemon.types = [];
            pokemon.types.push(vm.type1);
            pokemon.types.push(vm.type2);
            pokemonListService.addPokemon(pokemon).then(function(response){
                vm.added = true;
                vm.resetForm(form);
            });
        }
    }
    
})();