/*
    gale-material:          
        ANGULAR-GALE & ANGULAR-GALE-MATERIAL LIBRARY 
        (http://angular-gale.azurewebsites.net/#/demo/gettingStarted/introduction)
    app:                    
        CUSTOM PROJECT LIBRARY
    material-icons:         
        CUSTOM PROJECT BUNDLES (ADD SVG ICON'S)
*/
angular.module('App', [
        'gale-material',
        'app',
        'material-icons'
    ])
    .run(function($location)
    {
        $location.url("home");
    })
    .config(function($mdThemingProvider)
    {
        $mdThemingProvider.theme('default')
            .primaryPalette('indigo')
            .accentPalette('pink')
            .warnPalette('red');
    });
