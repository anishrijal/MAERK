'use strict';

class NavbarController {
  //start-non-standard
  menu = [{
    'title': 'Home',
    'state': 'main'
  }];

  isCollapsed = true;
  //end-non-standard

  constructor(Auth, $mdSidenav) {
    this.$mdSidenav = $mdSidenav;
    this.isLoggedIn = Auth.isLoggedIn;
    this.isAdmin = Auth.isAdmin;
    this.getCurrentUser = Auth.getCurrentUser;

  }

  openLeftSidenav(){
    this.$mdSidenav('left').toggle();
  }

}

angular.module('maerkApp')
  .controller('NavbarController', NavbarController);
