var app = angular.module( 'simbios', [ 
	'ui.router'
] );
app.config( routeConfig );
routeConfig.$inject = [ '$stateProvider', '$urlRouterProvider','$locationProvider'];
function routeConfig( $stateProvider, $urlRouterProvider, $locationProvider ) {
	$locationProvider.html5Mode( true );
	$urlRouterProvider.otherwise( '/' );
	$stateProvider
	.state( 'home', { 
		url: '/',
		templateUrl: '/views/home.html',
		controller: 'HomeCtrl',
		controllerAs: 'sm'
	} )
	.state( 'service', {
		url: '/service/:id',
		templateUrl: '/views/service_info.html',
		controller: 'ServCtrl',
		controllerAs: 'sm'
	} )
	.state( 'team', { 
		url: '/team/:id',
		templateUrl: '/views/team_info.html',
		controller: 'TeamCtrl',
		controllerAs: 'sm'
	} )
	.state( 'addTeam', { 
		url: '/addt',
		templateUrl: '/views/addT.html',
		controller: 'AddtCtrl',
		controllerAs: 'sm'
	} )
	.state( 'addServ', { 
		url: '/adds',
		templateUrl: '/views/adds.html',
		controller: 'AddSCtrl',
		controllerAs: 'sm'
	} );
}