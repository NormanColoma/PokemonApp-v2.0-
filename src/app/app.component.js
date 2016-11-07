(function () {

    var AppComponent = {
        bindings: {
            name: '@',
        },
        controller: 'AppController',
        template: `
            <p>Lista de pokemons<\p>
            <pokemon-list></pokemon-list>
        `
    };

    angular
        .module('app')
        .component('appComponent', AppComponent);

})();