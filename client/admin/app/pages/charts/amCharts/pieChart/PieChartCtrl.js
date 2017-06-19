/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.charts.amCharts')
      .controller('PieChartCtrl', PieChartCtrl);

  /** @ngInject */
  function PieChartCtrl($scope, $element, layoutPaths, baConfig, Centro, Grupo) {

    $scope.datos = [];
    $scope.centro = {
      Centro:"",
      Grupos:0,
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

    
function dibujarGrafico (datos,maximo,minimo,margen) {
    var layoutColors = baConfig.colors;
    var id = $element[0].getAttribute('id');
    var pieChart = AmCharts.makeChart(id, {
      type: 'pie',
      startDuration: 0,
      theme: 'blur',
      addClassNames: true,
      color: layoutColors.defaultText,
      labelTickColor: layoutColors.borderDark,
      legend: {
        position: 'right',
        marginRight: 100,
        autoMargins: false,
      },
      innerRadius: '40%',
      defs: {
        filter: [
          {
            id: 'shadow',
            width: '200%',
            height: '200%',
            feOffset: {
              result: 'offOut',
              in: 'SourceAlpha',
              dx: 0,
              dy: 0
            },
            feGaussianBlur: {
              result: 'blurOut',
              in: 'offOut',
              stdDeviation: 5
            },
            feBlend: {
              in: 'SourceGraphic',
              in2: 'blurOut',
              mode: 'normal'
            }
          }
        ]
      },
      dataProvider: datos,
      valueField: 'Grupos',
      titleField: 'Centros',
      export: {
        enabled: true
      },
      creditsPosition: 'bottom-left',

      autoMargins: false,
      marginTop: 10,
      alpha: 0.8,
      marginBottom: 0,
      marginLeft: 0,
      marginRight: 0,
      pullOutRadius: 0,
      pathToImages: layoutPaths.images.amChart,
      responsive: {
        enabled: true,
        rules: [
          // at 900px wide, we hide legend
          {
            maxWidth: maximo,
            overrides: {
              legend: {
                enabled: false
              }
            }
          },

          // at 200 px we hide value axis labels altogether
          {
            maxWidth: minimo,
            overrides: {
              valueAxes: {
                labelsEnabled: false
              },
              marginTop: margen,
              marginBottom: margen,
              marginLeft: margen,
              marginRight: margen
            }
          }
        ]
      }
    });

    pieChart.addListener('init', handleInit);

    pieChart.addListener('rollOverSlice', function (e) {
      handleRollOver(e);
    });

    function handleInit() {
      pieChart.legend.addListener('rollOverItem', handleRollOver);
    }

    function handleRollOver(e) {
      var wedge = e.dataItem.wedge.node;
      wedge.parentNode.appendChild(wedge);
    }
}


function cargarDatos() {
  var cont=0;

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
      $scope.centro = {
        Centro:value.nombre,
        Grupos:total.count
      }
        $scope.datos[cont] = ($scope.centro);
        cont++;

      dibujarGrafico($scope.datos,900,200,30);
        
      });

  }
  });

}

  }

})();
