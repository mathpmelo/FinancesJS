app.factory('BillsService', function ($http, $q, DataManagement) {

  //TRANSLATED AND REFACTORED

  function callGetMethod() {
    var q = $q.defer();
    DataManagement.getData("conta").then(response => {

      q.resolve(response.data);
    }, () => {
      console.log("Aconteceu um Erro");
    })
    return q.promise
  }

  function callPostMethod(data, url) {

    return DataManagement.postData(data, url)
  }

  function callDeleteMethod(data, url) {

    return DataManagement.deleteData(data, url)
  }

  function callPutMethod(data, url) {

    return DataManagement.editData(data, url)
  }


  return {

    callGetMethod: callGetMethod,
    callPostMethod: callPostMethod,
    callDeleteMethod: callDeleteMethod,
    callPutMethod: callPutMethod
  };
});
