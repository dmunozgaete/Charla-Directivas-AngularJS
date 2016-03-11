angular.module("app.controllers")

.controller("Demo3Controller", function(
    $scope,
    $timeout,
    $finalLoadingDialog
)
{

    //-----------------
    $scope.model = {};


})

.config(function($stateProvider)
{
    $stateProvider
        .state('demo3',
        {
            url: "/home/demos/demo-3",
            templateUrl: "views/demos/demo-3/demo-3.html",
            controller: "Demo3Controller"
        });
})
