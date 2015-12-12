'use strict';
eventsApp.controller("EditEventController",function($scope){
$scope.saveEvent=function(event){

	alert(event.name);
};
$scope.cancelEdit=function(){
	window.location="/eventDetails.html";
};
});