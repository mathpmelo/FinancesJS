app.controller("BillsCtrl", function ($scope, $rootScope, $http, DataManagement, BillsService, $q, $timeout, $state) {

  //TRANSLATED AND REFACTORED

  //change header tittle and load all bills before loading view
  $scope.$on("$ionicView.beforeEnter", () => {
    $rootScope.title = "Bills"
    loadBills();
  });

  $scope.bills = [];

  var loadBills = function () {
    BillsService.callGetMethod().then(response => {
      $scope.bills = response;
      //debugger;
    });

  };

  $scope.addNewBill = function (bill) {
    BillsService.callPostMethod(bill, "conta").then(() => {
      loadBills();
      console.log("Added with success")
    })
  };

  $scope.deleteSelectedBill = function (bill) {
    BillsService.callDeleteMethod(bill, "conta").then(() => {
      loadBills();
      console.log("Deleted with succes");
    })

  };
  $scope.openEditForm = function (bill) {
    //Go to Forms view to edit the bill
    $state.go('editForm', {
      product: bill.produto,
      value: bill.valor,
      installments: bill.parcelas,
      date: bill.data
    })
  };

  //TODO: Implement orderBy using this function, translate before use
  $scope.ordenarPor = function (campo) {
    $scope.criterioDeOrdenacao = campo;
    $scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
  };


});
