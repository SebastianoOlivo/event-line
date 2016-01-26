(function(){
angular
    .module('eventLine', [])
    .controller('eventCreatorController', eventCreatorController);

function eventCreatorController(EventLineService) {
	this.events = EventLineService;
	console.log(this.events);
}

})()
