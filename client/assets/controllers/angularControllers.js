//=====USERS CONTROLLER=====//
app.controller('UsersController', ['userFactory', '$scope', '$routeParams', function (userFactory, $scope, $routeParams) {
    $scope.users = [];
    $scope.user = {};
    let index = function () {
        userFactory.index(function (data) {
            console.log(data);
            $scope.users = data
        });
    };
    index();
    
    $scope.create = function () {
        userFactory.create($scope.user, function (data) {
            $scope.user = null;
            index();
        })
    };
    $scope.delete = function (delete_idx) {
        userFactory.delete(delete_idx);
        index();
    }
}]);

//=====PRODUCTS CONTROLLER=====//
app.controller('ProductsController', ['productFactory', '$scope', '$routeParams', function (productFactory, $scope, $routeParams) {
    $scope.products = [];
    $scope.product = {};
    let index = function () {
        productFactory.index(function (data) {
            $scope.products = data
        });
    };
    index();
    $scope.create = function () {
        productFactory.create($scope.product, function (data) {
            $scope.product = null;
            index()
        })
    }
}]);

//=====ORDERS CONTROLLER=====//
app.controller('OrdersController', ['userFactory', 'productFactory', 'orderFactory', '$scope', '$routeParams', function (userFactory, productFactory, orderFactory,  $scope, $routeParams) {
    let productIndex = function () {
        productFactory.index(function (data) {
            $scope.products = data;
        });
    };
    productIndex();
    let userIndex = function () {
        userFactory.index(function (data) {
            $scope.users = data
        });
    };
    userIndex();
    let orderIndex = function () {
        orderFactory.index(function (data) {
            console.log(data);
            $scope.orders = data
        });
    };
    orderIndex();
    $scope.create = function (user, product, quantity, callback) {
        console.log(quantity);
        orderFactory.create(user, product, quantity, function (data) {
            $scope.group = null;
            $scope.order = data;
            orderIndex()
        })
    }
}]);

//=====INDEX CONTROLLER=====//
app.controller('IndexController', ['userFactory', 'productFactory', 'orderFactory', '$scope', '$routeParams', function (userFactory, productFactory, orderFactory, $scope, $routeParams) {
    let productIndex = function () {
        productFactory.index(function (data) {
            $scope.products = data
        });
    };
    productIndex();
    let userIndex = function () {
        userFactory.index(function (data) {
            $scope.users = data
        });
    };
    userIndex();
    let orderIndex = function () {
        orderFactory.index(function (data) {
            $scope.orders = data
        });
    };
    orderIndex();
}]);