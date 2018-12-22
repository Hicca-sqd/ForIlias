app.controller('HomeCtrl', HomeCtrl);

HomeCtrl.$inject = ['$http', '$scope', '$state', '$rootScope' ];

function HomeCtrl($http, $scope, $state, $rootScope ){
	var sm = this;

		$http.get( '/api/team/' )
		.success( function( response ) {
			sm.employers = response.employers;
		} )
		.error( function( err ) {
			console.log( err );
		} )

		$http.get( '/api/service/' )
		.success( function( response ) {
			sm.videos = response.videos;
			console.log(sm.videos[0]._id)
		} )
		.error( function( err ) {
			console.log( err );
		} )
}