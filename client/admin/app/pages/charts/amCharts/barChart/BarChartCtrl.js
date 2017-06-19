(function () {
  'use strict';

  angular.module('BlurAdmin.pages.charts.amCharts')
      .controller('BarChartCtrl', BarChartCtrl);

  /** @ngInject */
  function BarChartCtrl($scope, baConfig, $element, layoutPaths, Centro, Grupo) {

    $scope.datos = [];
    $scope.centro = {
      Centro:"",
      Grupos:0,
      color:""
    }

  $scope.centros = [];

  function getCentros() {   
    Centro
      .find({
        filter: {
          include: "cursosescolares"
        }
      })
      .$promise
      .then(function(results) {
          $scope.centros = $scope.centros.concat(results);
          cargarDatos();
      });
    }

    getCentros();

  function dibujaGrafico (datos){

    var layoutColors = baConfig.colors;

    var id = $element[0].getAttribute('id');
    var barChart = AmCharts.makeChart(id, {
      type: 'serial',
      theme: 'blur',
      color: layoutColors.defaultText,


      dataProvider: datos,

      valueAxes: [
        {
          axisAlpha: 0,
          position: 'left',
          title: 'Grupos por centro',
          gridAlpha: 0.5,
          gridColor: layoutColors.border,
        }
      ],
      startDuration: 1,
      graphs: [
        {
          balloonText: '<b>[[category]]: [[value]]</b>',
          fillColorsField: 'color',
          fillAlphas: 0.7,
          lineAlpha: 1,
          type: 'column',
          valueField: 'Grupos'
        }
      ],
      chartCursor: {
        categoryBalloonEnabled: false,
        cursorAlpha: 0,
        zoomable: false
      },
      categoryField: 'Centro',
      categoryAxis: {
        gridPosition: 'start',
        labelRotation: 45,
        gridAlpha: 0.5,
        gridColor: layoutColors.border,
      },
      export: {
        enabled: true
      },
      creditsPosition: 'top-right',
      pathToImages: layoutPaths.images.amChart
    });

  }


function cargarDatos() {
  var cont=0;
  var layoutColors = baConfig.colors;

  angular.forEach($scope.centros, function(value, key) {
    
 if (value.cursosescolares.length > 0){

  var nombre = value.nombre;
         Grupo
           .count ({
            where: {
            anyoescolar: value.cursosescolares[0].id
          }
        })
      .$promise
      .then(function(total){

      if (cont%3==0) {
        $scope.centro = {
          Centro:value.nombre,
          Grupos:total.count,
          color:layoutColors.primary
        }
      } else {
        if (cont%2==0){
          $scope.centro = {
            Centro:value.nombre,
            Grupos:total.count,
            color:layoutColors.danger
          }
        }
        else {
          $scope.centro = {
            Centro:value.nombre,
            Grupos:total.count,
            color:layoutColors.warning
          }
        }
      }

        $scope.datos[cont] = ($scope.centro);
        cont++;

      dibujaGrafico($scope.datos);
        
      });

  }
  });

}


}

})();
