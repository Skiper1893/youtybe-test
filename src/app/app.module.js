import angular from 'angular';
import uirouter from 'angular-ui-router';


import routing from './app.config';
import home from '../pages/home';
import album from '../pages/album'
import '../style/app.scss';

const MODULE_NAME = 'app';

angular.module(MODULE_NAME, [uirouter, home, album])
  .config(routing);

export default MODULE_NAME;