(function () {
  'use strict';

  angular.module('BlurAdmin.pages.maps')
      .controller('GmapPageCtrl', GmapPageCtrl);

  function GmapPageCtrl($window,$timeout, $scope, Centro) {

    function mostrarUno(lat,lng,titulo) {
      var mapCanvas = document.getElementById('google-maps');
      var myLatlng = new google.maps.LatLng(lat,lng);

      var mapOptions = {
        center: myLatlng,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };

      var map = new google.maps.Map(mapCanvas, mapOptions);

      var marker = new google.maps.Marker({
          position: myLatlng,
          label: titulo,
          title: titulo
      });

      marker.setMap(map);
    }

    function getCentros()  {
      $scope.centros = [];
        Centro
          .find()
          .$promise
          .then(function(results) {
            $scope.centros = $scope.centros.concat(results);
            mostrarVarios();
      });
    }
  

    getCentros();

    function mostrarVarios() {

      var mapCanvas = document.getElementById('google-maps');
      var myLatlng = new google.maps.LatLng(38.188546,-1.316986);

      var mapOptions = {
        center: myLatlng,
        zoom: 8,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };

      var map = new google.maps.Map(mapCanvas, mapOptions);

      angular.forEach($scope.centros, function(value, key) {
        console.log(value.nombre);
        if (value.situacion) {
          var LatLng = new google.maps.LatLng(value.situacion.lat,value.situacion.lng);
          var marker = new google.maps.Marker({
            position: LatLng,
            title: value.nombre,
            map: map
          });
        }
        
      });  

    }

    $timeout(function(){
      console.log($window.sessionStorage.lat);
      if ($window.sessionStorage.lat){
        mostrarUno($window.sessionStorage.lat,$window.sessionStorage.lng,$window.sessionStorage.nombre); //37.8275694,-0.7790958000000501,"IES Dos Mares"
      } else {
        getCentros();
      }
    }, 100);

  }

})();


