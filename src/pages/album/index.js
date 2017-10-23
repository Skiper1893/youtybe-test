import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './album.routing';
import AlbumController from './album.controller';
import VideoService from '../../services/video.service';

export default angular.module('app.album', [uirouter, VideoService])
    .config(routing)
    .controller('AlbumController', AlbumController)
    .name;