'use strict';

eventsApp.controller("EventController",function EventController($scope){
$scope.event={
	name:"Angular Boot Camp",
	date:"1/1/2013",
	time:"10:30 am",
	location:{
		address:"Google Headquarter",
		city:"mountain View",
		province:"CA"
	},
	imageUrl:'img/angularjs-logo.png',
	sessions:[
	{
		name:"Directive Masterclass",
		creatorName:"Bob Smith",
		duration:"1 hr",
		level:"Advanced",
		abstract:"In this session you will learn the ins and outs of directives",
		upVoteCount:0
	},
	{
		name:"Scopes for fun and profit",
		creatorName:"Bob Smith",
		duration:"1 hr",
		level:"Advanced",
		abstract:"In this session you will learn the ins and outs of directives",
		upVoteCount:0
	},
	{
		name:"Well behaved controllers",
		creatorName:"Bob Smith",
		duration:"1 hr",
		level:"Advanced",
		abstract:"In this session you will learn the ins and outs of directives",
		upVoteCount:0
	}
	]
};
$scope.upVoteSession=function(session){
	session.upVoteCount++;

};
$scope.downVoteSession=function(session){
	session.upVoteCount--;
	};
});