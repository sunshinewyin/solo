(function() {
	var app = angular.module('app', []);

	app.controller('QuestionController', function($scope) {

	  $scope.counter = 0,

	  $scope.increment = function() { $scope.counter++; },

		$scope.questions = {
			question1: 'Is texting my ex a good idea?',
			question2: 'What is 2 + 2?',
			question3: '?'
		},

		$scope.radioResponse = ['Yes', 'No'],

		$scope.answers = {
			no: 'Don\'t do that. Go home.',
			yes: 'The night is young! Party on.'
		}

		// $scope.process

		// $scope.processAnswer = function(radioResponse) {
		// 	if(radioResponse === 'yes') {
		// 		$scope.answer = true;
		// 	} else if (radioResponse === 'no') {
		// 		$scope.answer = false;
		// 	}
		// },






	});

})();


