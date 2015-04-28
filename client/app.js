(function() {
	var app = angular.module('app', []);

	app.controller('QuestionController', function($scope) {

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
	  	$scope.question = $scope.questions[$scope.questionCounter];
	  };

	  $scope.incrementAnswer = function() {
	  	$scope.answerCounter++;
	  };

		$scope.answers = {
			no: 'Don\'t do that. Go home.',
			yes: 'The night is young! Party on.'
		};

	});

})();


