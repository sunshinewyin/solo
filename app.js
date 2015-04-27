(function() {
	var app = angular.module('app', []);

	app.controller('QuestionController', function($scope) {

		$scope.questions = {
			question1: 'Is texting my ex a good idea?',
			question2: 'What is 2 + 2?',
			question3: 'Is karaoke a good idea?'
		},

		$scope.radioResponse = {
      Yes: 'Yes',
      No: 'No'
    },

		$scope.answers = {
			no1: 'No. Go home.',
			yes1: 'The night is young!'
		},

		$scope.displayAnswer = function() {
			console.log("displayAnswer");
		}

	});

})();


