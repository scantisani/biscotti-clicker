Game.Popup("Biscotti Clicker activated!");

function FindBest() {
	//return the ID of the object with the best price/cps ratio
	var min = -1;
	var best = -1;
	
	for (var i in Game.ObjectsById) {
		var me = Game.ObjectsById[i];
		if (me.locked === 0) {
			var ratio = me.price / me.cps();
	
			if (ratio < min || min === -1) {
				min = ratio;
				best = i;
			}
		}
	}
	
	return best;
}

function ResetNames() {
	for (var i in Game.ObjectsById) {
		Game.ObjectsById[i].displayName = Game.ObjectsById[i].name;
	}
}

function Exclaim() {
	ResetNames();
	var i = FindBest();
	var myname = Game.ObjectsById[i].displayName;

	if (myname.charAt(myname.length-1) != '!') {
		Game.ObjectsById[i].displayName = Game.ObjectsById[i].name + "!";
		Game.RefreshStore();
	}
}

AddEvent(document, 'click', Exclaim);
