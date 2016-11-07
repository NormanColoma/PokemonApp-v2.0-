(function () {

    angular
        .module('app')
        .controller('AppController',  AppController);
    
    function AppController(){

        var vm = this;

        vm.$onInit = function() {
                this.name = 'Pokedex App';
        };
    }
    
})();