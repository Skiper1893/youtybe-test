export default class HomeController {

    constructor(AlbumsService) {
        this._albumsSrvs = AlbumsService;
        this.albums = [];
        this.console = console;
    }

    $onInit() {
        this.getAlbums();
    }

    getAlbums() {
        this._albumsSrvs.getAlbums().then(res => {
            this.albums = res.data;
        });
    }   
}

HomeController.$inject = ['AlbumsService'];