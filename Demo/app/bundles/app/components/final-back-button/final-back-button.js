angular.module('app.components')

.directive('finalBackButton', function()
{
    return {
        restrict: 'E',
        scope:
        {

        },
        templateUrl: 'bundles/app/components/final-back-button/final-back-button.tpl.html',
        controller: function($scope, $element, $window)
        {
            $scope.back = function()
            {
                $window.history.back();
            };
        }
    };
});
