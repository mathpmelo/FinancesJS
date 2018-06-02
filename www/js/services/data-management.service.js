app.factory('DataManagement', function ($http, $q) {
 //TRANSLATED AND REFACTORED
 
  var baseURL = "http://192.168.100.6:8085/";

  function getData(type) {
    return $http.get(baseURL + type)

  }

  function postData(data, type) {
    q = $q.defer();
    $http.post(baseURL + type, JSON.stringify(data)).then(function () {
      q.resolve();
    }, function () {
      q.reject("An error occured when POSTing data");
    })

    return q.promise
  }

  function deleteData(data, type) {
    q = $q.defer();
    //create the requistion
    var req = {
      url: baseURL + type,
      method: 'DELETE',
      data: JSON.stringify(data)
      };
    $http(req).then(() => {
      q.resolve();
    }, () =>{
      q.reject("Error at delete");
    }) 
    return q.promise
  }
  
  function editData(data, type) {
    q = $q.defer();
    //create the requistion
    var req = {
      url: baseURL + type,
      method: 'PUT',
      data: JSON.stringify(data)
      };
    $http(req).then(() => {
      q.resolve();
    }, () => {
      q.reject("Error at editing");
    }) 
    return q.promise
  }

  return {
    getData: getData,
    postData: postData,
    deleteData: deleteData,
    editData: editData
  };
});
