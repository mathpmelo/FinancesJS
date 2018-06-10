app.controller("AboutCtrl", function ($scope, $rootScope, $state) {

    //TRANSLATED AND REFACTORED
  
    //change header tittle and load all bills before loading view
    $scope.$on("$ionicView.beforeEnter", () => {
      $rootScope.title = "About"
      
    });
    $scope.openGitHubPage = function(){
      window.open("https://github.com/mathpmelo/FinancesJS", "__blank")
      
    }
});
