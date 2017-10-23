import angular from 'angular';

class VideoService {
    constructor() {
        this.console = console;
    }

    postVideo(album, video) {
        let stored = JSON.parse(localStorage.getItem(album));
        
        stored.push(video);
        localStorage.setItem(album, JSON.stringify(stored));
    }
}

export default angular.module('services.video-service', [])
    .service('VideoService', VideoService)
    .name;