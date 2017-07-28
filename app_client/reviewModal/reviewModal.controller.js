(function(){

	angular
	    .module('loc8rApp')
	    .controller('reviewModalCtrl', reviewModalCtrl);

	    reviewModalCtrl.$inject = ['$uibModalInstance', 'loc8rData', 'locationData'];
	    function reviewModalCtrl ($uibModalInstance, loc8rData, locationData) {
	    	var vm = this;
	    	vm.locationData = locationData;
	    	vm.onSubmit = function (){
	    		vm.formError = "";
	    		if(!vm.formData.rating || !vm.formData.reviewText){
	    			vm.formError = "All fields required, please try again";
	    			return false;
	    		} else {
	    			console.log(vm.formData)
	    			vm.doAddReview(vm.locationData.locationid, vm.formData);
	    		}
	    	};
	    	vm.doAddReview = function (locationid, formData){
                
	    		loc8rData
                    .addReviewById(locationid,{
                    rating: formData.rating,
                    reviewText: formData.reviewText
	    		}).then(function successCallback(data){
	    	        vm.modal.close(data);	    	       
                    console.log(4);
	            }, function errorCallback(e){
	        	    vm.formError="Your review has not been saved, try again";
                    console.log(4);
	            });
	    	}
	    	vm.modal = {
	    		close: function (result){
	    			$uibModalInstance.close(result);
	    		},
	    		cancel: function () {
	    			$uibModalInstance.dismiss('cancel');
	    		}
	    	};
	    	
	    };

})();