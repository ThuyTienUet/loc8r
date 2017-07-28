(function(){
    angular
        .module('loc8rApp')
        .controller('locationDetailCtrl',locationDetailCtrl)
    locationDetailCtrl.$inject = ['$routeParams','$location', '$sce',  '$uibModal','loc8rData', 'authentication'];
    function locationDetailCtrl($routeParams,$location, $sce, $uibModal, loc8rData, authentication ){
        var vm = this;
        vm.locationid = $routeParams.locationid;
        vm.isLoggedIn = authentication.isLoggedIn();
        vm.currentPath = $location.path();
        vm.getIframeSrc = function (x1,x2){
            return $sce.trustAsResourceUrl('https://www.google.com/maps/embed/v1/view?zoom=15&center=' + x1 + ',' + x2 + '&key=AIzaSyDp0iMIK8nUHR_1zEhhrlRgBAgvh93vWHg')  ;
        };
        loc8rData.locationById(vm.locationid)
            .then(function successCallback(data){
                    vm.data = {location: data.data};
                    vm.pageHeader = {
                        title: vm.data.location.name  
                    };
                },
                 function errorCallBack(e){
                    console.log(e);
                }
            );
        vm.popupReviewForm = function(){
            var modalInstance = $uibModal.open({
                templateUrl: '/reviewModal/reviewModal.view.html',
                controller: 'reviewModalCtrl as vm',
                resolve: {
                    locationData: function(){
                        return {
                            locationid: vm.locationid,
                            locationName: vm.data.location.name
                        };
                    }
                }
            });
        
            modalInstance.result.then(function(data){
                vm.data.location.reviews.push(data.data);
            });
        };
    }
})();