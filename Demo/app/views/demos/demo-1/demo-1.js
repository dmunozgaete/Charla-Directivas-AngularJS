angular.module("app.controllers")

.controller("Demo1Controller", function(
    $scope,
    $window,
    $log
)
{

    //-----------------
    $scope.model = {};

})

.config(function($stateProvider)
{
    $stateProvider
        .state('demo1',
        {
            url: "/home/demos/demo-1",
            templateUrl: "views/demos/demo-1/demo-1.html",
            controller: "Demo1Controller"
        });
})
