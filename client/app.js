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
	  	if($scope.questionCounter === $scope.questions.length) {
	  		$scope.displayAnswer();
	  	} else {
	  		$scope.question = $scope.questions[$scope.questionCounter];
	  	}

	  	var resetButton = function() {

	  	};
	  	resetButton();

	  };

	  $scope.incrementAnswer = function() {
	  	$scope.answerCounter++;
	  };

	  $scope.displayAnswer = function() {

			$scope.answers = [
				'Don\'t do that. Go home.',
				'The night is young! Party on.'
		  ];


			alert($scope.answers[0]);
		}

	});

})();


