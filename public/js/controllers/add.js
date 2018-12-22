app.controller('AddtCtrl', AddtCtrl);

AddtCtrl.$inject = ['$http', '$scope', '$state', '$rootScope' ];

function AddtCtrl($http, $scope, $state, $rootScope ){
	var sm = this;
	sm.AddError = false;
		sm.savePost = function() {
		var data = new FormData();
		data.append( 'name', sm.name );
		data.append( 'prof', sm.prof );
		data.append( 'skill', sm.skill );
		data.append( 'file', sm.file );
		$http.post( '/api/team', data, {
				headers: {
					'Content-Type': undefined
				},
				transformRequest: angular.identity
			} )
			.success( function( response ) {
				alert("Сотрудник: " + response.name + " добавлен")
				
			} )
			.error( function( err ) {
				console.log( err );
			} )
	}


}