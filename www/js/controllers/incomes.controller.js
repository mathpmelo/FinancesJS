app.controller("IncomesCtrl", function ($scope, $rootScope, $http, DataManagement, IncomesService, $q, $timeout) {
//TRANSLATED AND REFACTORED

  //Change tittle and load data before entering the view
  $scope.$on("$ionicView.beforeEnter", function () {
    $rootScope.title = "Incomes"
    loadIncomes();
  });
  $scope.incomes = [];


  var loadIncomes = function () {
    IncomesService.callGetMethod().then(function (response) {
      $scope.incomes = response;
    });

  };

  $scope.adicionarRenda = function (income) {
    IncomesService.callPostMethod(income, "renda").then(() => {
      loadIncomes();
    })


  };


  //TODO: Implement orderBy using this function, also translate before use
  $scope.ordenarPor = function (campo) {
    $scope.criterioDeOrdenacao = campo;
    $scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
  };
  //TODO: Implement Delete Incomes
  $scope.apagarRenda = function (conta) {



  };


});
