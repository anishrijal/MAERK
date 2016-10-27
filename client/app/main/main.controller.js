'use strict';

(function() {

  class MainController {

    constructor($http, $mdSidenav) {

      this.$mdSidenav = $mdSidenav;
      this.$http = $http;
      this.awesomeThings = [];
    }

    $onInit() {
      this.$http.get('/api/things')
        .then(response => {
          this.awesomeThings = response.data;
        });
    }

    addThing() {
      if (this.newThing) {
        this.$http.post('/api/things', {
          name: this.newThing
        });
        this.newThing = '';
      }
    }

    deleteThing(thing) {
      this.$http.delete('/api/things/' + thing._id);
    }

    closeSidenav(){
      this.$mdSidenav('left').close();
    }

    openMenu($mdOpenMenu, ev){
      $mdOpenMenu(ev);
    }

  }

  angular.module('maerkApp')
    .component('main', {
      templateUrl: 'app/main/main.html',
      controller: MainController,
      controllerAs: 'vm'
      });
})();


// this.openMenu = function($mdOpenMenu, ev) {
//      originatorEv = ev;
//      $mdOpenMenu(ev);
//    };
