let app = angular.module('app', ['ngRoute', 'yaru22.angular-timeago']);
app.config(function ($routeProvider) {
// Routes to load your new and edit pages with new and edit controllers attached to them!
    $routeProvider
        .when('/', {
            templateUrl: 'partials/main.html',
            controller: 'IndexController',
            controllerAs: 'IC',
        })
        .when('/products',{
            templateUrl: 'partials/products.html',
            controller: 'ProductsController',
            controllerAs: 'PC',
        })
        .when('/orders', {
            templateUrl: 'partials/orders.html',
            controller: 'OrdersController',
            controllerAs: 'OC',
        })
        .when('/customers', {
            templateUrl: 'partials/customers.html',
            controller: 'UsersController',
            controllerAs: 'UC',
        })
        .otherwise({
            redirectTo: '/'
        })
});