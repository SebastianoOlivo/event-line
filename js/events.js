(function(){
angular
    .module('eventLine')
    .factory('EventLineService', EventLineService);



function EventLineService() {

	var events = {
		title: "Poulpi",
		events:[
			{situation: "blue", prevSituation:"green", img:"https://d13yacurqjgara.cloudfront.net/users/2645/screenshots/413803/wings.png", title:"event1", description:"description of event 1"},
			{situation: "green", prevSituation:"green", img:"https://d13yacurqjgara.cloudfront.net/users/13307/screenshots/529221/check-x1a1b.jpg", title:"event2", description:"description of event 2"}
		] 
	}


	return events;
}

})()
	
