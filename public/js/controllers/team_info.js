app.controller('TeamCtrl', TeamCtrl);

TeamCtrl.$inject = ['$http', '$scope', '$state', '$rootScope' ];

function TeamCtrl($http, $scope, $state, $rootScope ){
	var sm = this;

$http.get( '/api/team/' + $state.params.id )
		.success( function( response ) {
			sm.employer = response;
		} )
		.error( function( err ) {
			console.log( err );
		} )
}