app.factory('IncomesService', function ($http, $q, DataManagement) {

  //TRANSLATED AND REFACTORED

  function callGetMethod() {
    var q = $q.defer();
    DataManagement.getData("renda").then(response => {

      q.resolve(response.data);
    }, () => {
      console.log("An error occured at GET");
    })
    return q.promise
  }

  function callPostMethod(data, url) {

    return DataManagement.postData(data, url)


  }

  function callDeleteMethod(type) {
    // TODO: Implement this method
  }

  return {

    callGetMethod: callGetMethod,
    callPostMethod: callPostMethod,
    callDeleteMethod: callDeleteMethod
  };
});
