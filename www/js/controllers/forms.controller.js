app.controller('FormsCtrl', function ($scope, $rootScope, $http, $q, IncomesService, BillsService, $stateParams) {

  $scope.$on("$ionicView.beforeEnter", function () {
    if ($stateParams.product != null) {
      $rootScope.title = "Edit bill"
      $scope.selectedData = {
        product: "Product:" + $stateParams.product,
        value: "Value: " + $stateParams.value,
        installments: "Installments: " + $stateParams.installments
      }
    }
  //Check what view the user was before to change the fields in the form using ng-show
    if ($rootScope.title == "Bills") {

      $rootScope.title = "Add new bill"
      $scope.isIncomes = false;
      $scope.isBills = true;

    } else if ($rootScope.title == "Incomes") {
      $rootScope.title = "Add new income"
      $scope.isBills = false;
      $scope.isIncomes = true;
    }

  })
  if ($rootScope.title == "Bills") {
    $scope.submitDataToDatabase = function (dataForm) {
      var currentDate = new Date();
      var bills = {
        produto: dataForm.name,
        valor: dataForm.value,
        parcelas: dataForm.installments,
        data: currentDate
      }

      console.log(bills)
      BillsService.callPostMethod(bills, "conta").then(() => {
        console.log("Submitted")
      })
    }
  } else if ($rootScope.title == "Incomes") {
    $scope.submitDataToDatabase = function (dataForm) {
      var incomes = {
        nome: dataForm.name,
        valor: dataForm.value
      }
      console.log(incomes);
      IncomesService.callPostMethod(incomes, "renda").then(() => {
        console.log("Data submitted without errors")
      })
    }
  }

  $scope.submitEditedData = function (dataForm) {
    var bills = {
      produto: dataForm.name,
      valor: dataForm.value,
      parcelas: dataForm.installments
    }

    BillsService.callPutMethod(bills, "conta").then(() => {
      console.log("Edited - Ctrl")
    })
  }


});
