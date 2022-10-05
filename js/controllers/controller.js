/// <reference path="../typings/angularjs/angular.d.ts" />
/// <reference path="../typings/jquery/jquery.d.ts" />
// 这里的$scope指的是页面中firstCtrl标签包含的部分
//相对的，$rootScope指的是ng-app包住的部分，这意味着在angular中$rootScope是万物之源
angular.module('controller', [])
    .controller('firstCtrl', function ($scope) {
        $scope.data = {
            message: "这是firstCtrl的数据"
        };
    })
    .controller('secondCtrl', function ($scope) {
    })
    .controller('thirdCtrl', function ($scope) {
    })
    .controller('fourCtrl', function ($scope) {
    })
    .controller('fiveCtrl', function ($scope) {
    });

// 如果要在controller中共享数据，最好使用factory
angular.module('controller')
    .factory('shareData', function () {
        return {message: "共享数据"}
    })
    .controller('sixCtrl', function ($scope, shareData) {
        $scope.data = shareData;
    })
    .controller('sevenCtrl', function ($scope, shareData) {
        $scope.data = shareData;

        $scope.reverseMessage = function (message) {
            return message.split("").reverse().join("");
        }
    });
