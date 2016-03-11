angular.module("app.controllers")

.controller("Demo2Controller", function(
    $scope,
    $timeout,
    $finalLoadingDialog
)
{

    //-----------------
    $scope.model = {};

    $scope.openDialog = function(seconds)
    {
        var delay = $timeout(function()
        {

            $finalLoadingDialog.hide();

            //ALWAYS DESTROY
            $timeout.cancel(delay);
        }, seconds * 1000);

        $finalLoadingDialog.show();
    };

})

.config(function($stateProvider)
{
    $stateProvider
        .state('demo2',
        {
            url: "/home/demos/demo-2",
            templateUrl: "views/demos/demo-2/demo-2.html",
            controller: "Demo2Controller"
        });
})
