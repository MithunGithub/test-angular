(function(){

  angular.module('MyTestApp',[])
  .controller('FirstController',function($scope){
    $scope.name="Mithun";
    $scope.test="love";
    $scope.changeMe=function(){
      $scope.test="like";
    };
  })
})();
