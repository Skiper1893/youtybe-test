import angular from 'angular';

class AlbumsService {
    constructor($http) {
        this.$http = $http
    }
    getAlbums() {
        return this.$http.get('data/local.json');
    }
}

export default angular.module('services.albums-service', [])
    .service('AlbumsService', AlbumsService)
    .name;