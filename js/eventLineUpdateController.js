(function(){
angular
    .module('eventLine', [])
    .controller('eventLineUpdateController', eventLineUpdateController);

function eventLineUpdateController(EventLineService) {

	var vm = this;
	vm.events = EventLineService.events
	vm.titles = EventLineService.title

	vm.changeTitle = function() {
		vm.titles= vm.newTitle;
	}

	vm.addEvent = function() {
		var newEvent = {situation: vm.newSituationEvent, prevSituation:vm.events[0].situation, img:vm.newImageEvent, title:vm.newTitleEvent, description:vm.newDescriptionEvent};
		console.log(newEvent);
		vm.events.unshift(newEvent);


	}
	console.log(vm.titles);
	console.log(vm.events[0]);


}

})()
