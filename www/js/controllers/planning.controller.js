app.controller("PlanningCtrl", function ($scope, $rootScope, $http, PlanningService) {
    $scope.$on("$ionicView.beforeEnter", function() {
        $rootScope.title = "Planning"
    } );
    $scope.actualMonthPlanning = [];
  
    var carregarPlanejamento = function () {
        
        PlanningService.loadBillsAndIncomes().then(function (response) {
            $scope.actualMonthPlanning = response.actual;
            $scope.nextMonths = response.next
            
        });

    };

    
    carregarPlanejamento();
});