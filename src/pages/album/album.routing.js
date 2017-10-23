routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
    $stateProvider
        .state('album', {
            url: '/album/{name}',
            template: require('./album.html'),
            controller: 'AlbumController',
            controllerAs: 'album'
        });
}