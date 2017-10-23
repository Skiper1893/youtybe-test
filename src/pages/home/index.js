import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './home.routing';
import HomeController from './home.controller';
import AlbumService from '../../services/albums.service';

export default angular.module('app.home', [uirouter, AlbumService])
    .config(routing)
    .controller('HomeController', HomeController)
    .name;