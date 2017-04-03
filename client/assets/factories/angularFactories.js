//=====USER FACTORY=====//
app.factory('userFactory', ['$http', '$routeParams', '$location', function ($http, $routeParams, $location) {
    let factory = {};
    factory.users = [];
    factory.user = {};
    factory.index = function (callback) {
        $http.get('/store/1').then( function(data) {
            factory.users = data.data;
            return callback(factory.users)
        });
    };
    factory.create = function (newCustomer, callback) {
        $http.post('/store/1', newCustomer).then(function (data) {
            factory.user = data.data;
            return callback(factory.user);
        })
    };
    factory.delete = function (delete_idx) {
        $http.delete('/store/' + delete_idx)
    };
    return factory;
}]);

//=====PRODUCT FACTORY=====//
app.factory('productFactory', ['$http', '$routeParams', '$location', function ($http, $routeParams, $location) {
    let factory = {};
    factory.index = function (callback) {
        $http.get('/store/2').then( function(data) {
            factory.products = data.data;
            return callback(factory.products)
        });
    };
    factory.create = function (newProduct, callback) {
        console.log(newProduct);
        $http.post('/store/2', newProduct).then(function (data) {
            factory.product = data.data;
            return callback(factory.product);
        })
    };
    return factory;
}]);

//=====ORDER FACTORY=====//
app.factory('orderFactory', ['$http', '$routeParams', '$location', function ($http, $routeParams, $location) {
    let factory = {};
    factory.products = [];
    factory.product = {};
    factory.orders = [];
    factory.order = {};
    factory.index = function (callback) {
        $http.get('/store/3').then( function(data) {
            factory.products = data.data;
            return callback(factory.products)
        });
    };
    factory.create = function (orderUser, orderProduct, quantity, callback) {
        let totalOrder = {orderUser, orderProduct, quantity};
        console.log('this is the user', orderUser);
        console.log('this is the product', orderProduct);
        $http.post('/store/3', totalOrder).then(function (data) {
            console.log('this is the data',data.data);
            factory.order = data.data;
            return callback(factory.order);
        })
    };
    return factory;
}]);