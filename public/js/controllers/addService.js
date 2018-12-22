app.controller('AddSCtrl', AddSCtrl);

AddSCtrl.$inject = ['$http', '$scope', '$state', '$rootScope' ];

function AddSCtrl($http, $scope, $state, $rootScope ){
	var sm = this;
			sm.saveServ = function() {
		var data = new FormData();
		data.append( 'name', sm.name );
		data.append( 'file', sm.file );
		$http.post( '/api/service', data, {
				headers: {
					'Content-Type': undefined
				},
				transformRequest: angular.identity
			} )
			.success( function( response ) {
				alert("Video: " + response.name + " добавлен")
				
			} )
			.error( function( err ) {
				console.log( err );
			} )
	}

}