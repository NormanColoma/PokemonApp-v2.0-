(function() {
    'use strict';

    angular
        .module('app')
        .factory('pokemonListService', pokemonListService);


    pokemonListService.$inject = ['$http'];


    function pokemonListService($http){

        var url = 'https://pokemonrestapi.herokuapp.com/pokemons';

        var service = {
            addPokemon: addPokemon,
            getList: getList,
            getPokemon: getPokemon,
            getTypes: getTypes
        };

        return service;


        function addPokemon(pokemon) {

            return $http({
                method  : 'POST',
                url     : url,
                data    : pokemon

            })
                .then(addPokemonSuccess)
                .catch(addPokemonFailed);

            function addPokemonSuccess(data){
                return data.data;

            }

            function addPokemonFailed(data){
                return false;
            }
        }

        function getList(){
            return $http({
                method  : 'GET',
                url     : url,

            })
                .then(getListSuccess)
                .catch(getLisFailed);

            function getListSuccess(data){
                return data.data._embedded.pokemons;
            }

            function getLisFailed(){
                return false;
            }
        }

        function getPokemon(id){
            var uri = url+"/"+id;
            return $http({
                method  : 'GET',
                url     : uri,

            })
                .then(getPokemonSuccess)
                .catch(getPokemonFailed);

            function getPokemonSuccess(data){
                return data.data;
            }

            function getPokemonFailed(){
                return false;
            }
        }

        function getTypes(){
            return $http({
                method  : 'GET',
                url     : 'https://pokemonrestapi.herokuapp.com/types',

            })
                .then(getTypesSuccess)
                .catch(getTypesFailed);

            function getTypesSuccess(data){
                return data.data._embedded.types;
            }

            function getTypesFailed(){
                return false;
            }
        }


    }

})();