(function () {
    angular
        .module('loc8rApp')
        .controller('loginCtrl', loginCtrl);

    loginCtrl.$inject = ['$location','authentication', '$http'];
    function loginCtrl($location, authentication, $http) {
        var vm = this;
        vm.pageHeader = {
            title: 'Sign in to Loc8r'
        };
        vm.credentials = {
            email : "",
            password : ""
        };
        vm.returnPage = $location.search().page || '/';
        vm.onSubmit = function () {
            vm.formError = "";
            if (!vm.credentials.email || !vm.credentials.password) {
                vm.formError = "All fields required, please try again";
                return false;
            } else {
                vm.doLogin();
            }
        };
        vm.doLogin = function() {
            vm.formError = "";
            authentication
                .login(vm.credentials)
                .then(function errorCallback(err){
                    vm.formError = "User or password is incorrect";
                })
                .then(function(){
                    $location.search('page', null);
                    $location.path('/home');
                });
        };
    }
})();