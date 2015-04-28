(function() {
	var app = angular.module('app', []);

	// app.config(function($routeProvider) {
 //    $routeProvider
 //    // route for the home page
 //    // .when('/', {
 //    //     templateUrl : 'index.html',
 //    //     controller  : 'QuestionController'
 //    // })

 //    // .when('/about', {
 //    //     templateUrl : 'pages/about.html',
 //    //     controller  : 'QuestionController'
 //    // })

 //    // // route for the contact page
 //    // .when('/contact', {
 //    //     templateUrl : 'pages/contact.html',
 //    //     controller  : 'QuestionController'
 //    // });
 // });

	app.controller('QuestionController', function($scope, $http, $window) {

	  $scope.questionCounter = 0;
	  $scope.answerCounter = 0;
	  $scope.questions = [
			'Do I want a burrito?',
			'Is this song my jam?',
			'Do I have sweet dance moves?',
			'Is texting my ex a good idea?',
		];

		$scope.question = $scope.questions[$scope.questionCounter];

	  $scope.nextQuestion = function() {
	  	$scope.questionCounter++;
	  	if($scope.questionCounter === $scope.questions.length) {
	  		$scope.displayAnswer();
	  	} else {
	  		$scope.question = $scope.questions[$scope.questionCounter];
	  	}

	  };

	  $scope.incrementAnswer = function() {
	  	$scope.answerCounter++;
	  };

	  $scope.displayAnswer = function() {
			$scope.answers = [
				'Don\'t do that. Go home.',
				'The night is young. Your sweet spot is just around the corner.',
		  ];

	  	if ($scope.answerCounter < $scope.questions.length/2) {
	  		alert($scope.answers[1]);
	  	} else if ($scope.answerCounter >= $scope.questions.length/2) {
	  		alert($scope.answers[0]);
	  	}

		}

		$scope.goToQuestions = function() {
			console.log('go to questions got called');

			$window.location.href = "/questions.html";

		}

	});

})();


