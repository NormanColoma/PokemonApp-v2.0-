(function () {

    angular
        .module('app',['ui.router']).config(function($stateProvider, $urlRouterProvider) {

                $urlRouterProvider.otherwise('/home');

                $stateProvider.state('home', {
                    url: '/home',
                    template: '<app-component></app-component>'
                });

                $stateProvider.state('pokemon', {
                    url: '/pokemon/:id',
                    template: '<pokemon-detail id="$resolve.id"></pokemon-detail>',
                    resolve: {
                        id: function ($stateParams) {
                            return $stateParams.id;
                        }
                    }
               });

               $stateProvider.state('new-pokemon', {
                    url: '/pokemons/new',
                    template: '<pokemon-add-form></pokemon-add-form>'
              });

              $stateProvider.state('edit-pokemon', {
                    url: '/pokemons/:id/edit',
                    template: '<pokemon-edit-form pokemon="$resolve.pokemon"></pokemon-edit-form>',
                    resolve: {
                        pokemon: function ($stateParams,pokemonListService) {
                            return pokemonListService.getPokemon($stateParams.id).then(function(response){
                                return response;
                            })
                        }
                    }
              });
        });
    
})();