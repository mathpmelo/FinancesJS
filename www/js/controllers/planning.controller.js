app.controller("PlanningCtrl", function ($scope, $rootScope, $http, PlanningService) {
  $scope.$on("$ionicView.beforeEnter", function () {
    $rootScope.title = "Planning"
    loadPlanning();
    
});
  $scope.actualMonthPlanning = [];

  var loadPlanning = function () {

    PlanningService.loadBillsAndIncomes().then(function (response) {
      $scope.actualMonthPlanning = response.actual;
      $scope.nextMonths = response.next

    });

  };



});
