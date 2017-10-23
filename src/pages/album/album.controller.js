export default class AlbumController {

    constructor(VideoService, $stateParams, $sce) {
        this.album = $stateParams.name;
        this.stored = localStorage.getItem(this.album) ? JSON.parse(localStorage.getItem(this.album)) : this.setVideos();
        this.sce = $sce;
        this.console = console;
        this.videos = [];
        this.showModal = false;
        this.title = $stateParams.name.charAt(0).toUpperCase() + $stateParams.name.slice(1);
        this.url = '';
        this._videoSrvs = VideoService;
        this.console = console;
    }

    $onInit() {
        this.stored = localStorage.getItem(this.album) ? JSON.parse(localStorage.getItem(this.album)) : this.setVideos();
        this.getVideos();
    }

    getVideos() {
        this.videos = this.stored.map(video => {
            return `https://www.youtube.com/embed/${video}`;
        });
    }

    setVideos() {
        localStorage.setItem('pop', JSON.stringify(['4fLDMIfweEY', '3tmd-ClpJxA']));
        localStorage.setItem('trailers', JSON.stringify(['oHLU3T-e2t4', 'wnRwX0lwxAQ']));
        this.stored = JSON.parse(localStorage.getItem(this.album));
    }

    modalPopup() {
        this.showModal = !this.showModal;
    }

    addVideo() {
        let regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
        let match = this.url ? this.url.match(regExp): 'test';
        if (match && match[2].length == 11) {            
            this._videoSrvs.postVideo(this.album, match[2]);
            this.showModal = !this.showModal;
            this.stored = localStorage.getItem(this.album) ? JSON.parse(localStorage.getItem(this.album)) : this.setVideos();
            this.getVideos();
        } else {
            this.showModal = !this.showModal;
        }
    }

    trustThis(src) {
        return this.sce.trustAsResourceUrl(src);
    }
}