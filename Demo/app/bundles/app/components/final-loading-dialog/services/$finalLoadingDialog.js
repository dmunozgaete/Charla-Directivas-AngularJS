// SERVICE
angular.module('app.components')
    .provider('$finalLoadingDialog', function()
    {
        var $ref = this;

        this.$get = function($log, $q, $mdDialog)
        {
            var self = {};

            //ADD NEW FACTORY
            self.show = function(config, ev)
            {
                config = (config ||
                {});
                if (ev)
                {
                    config.targetEvent = ev;
                }

                var deferred = $q.defer();
                $mdDialog.show(
                    {
                        controller: 'FinalLoadingDialogController',
                        templateUrl: 'bundles/app/components/final-loading-dialog/final-loading-dialog.tpl.html',
                        clickOutsideToClose: false,
                        escapeToClose: false,
                        focusOnOpen: false,
                        locals:
                        {
                            config: config
                        }
                    })
                    .then(function(data)
                    {
                        deferred.resolve(data);
                    }, function()
                    {
                        deferred.reject();
                    });

                return deferred.promise;
            };

            self.hide = function()
            {
                $mdDialog.hide();
            };

            return self;
        };
    });
