angular.module("app.controllers")

.controller("HomeController", function($scope)
{

    //-----------------
    // Model Declaration
    $scope.model = {

        menu: [
        {
            picture: "angular-logo.png",
            label: "Loading",
            url: "demo1"
        },
        {
            picture: "angular-logo.png",
            label: "Loading Dialog",
            url: "demo2"
        },
        {
            picture: "angular-logo.png",
            label: "Back Button",
            url: "demo3"
        }]

    };

})

.config(function($stateProvider)
{
    $stateProvider
        .state('home',
        {
            url: "/home",
            templateUrl: "views/home/home.html",
            controller: "HomeController"
        });
})
