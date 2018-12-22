app.controller('ServCtrl', ServCtrl);

ServCtrl.$inject = ['$http', '$scope', '$state', '$rootScope' ];

function ServCtrl($http, $scope, $state, $rootScope ){
	var sm = this;

		$http.get( '/api/service/' + $state.params.id )
		.success( function( response ) {
			sm.video = response;
		} )
		.error( function( err ) {
			console.log( err );
		} )

}