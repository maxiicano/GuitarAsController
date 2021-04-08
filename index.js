const robot = require('robotjs');
const maxAPI = require('max-api');

maxAPI.addHandler('input', (dir) =>{
	if (dir === 'UP') {
		robot.keyTap("up");
		
	} else if (dir === 'DOWN') {
		robot.keyTap("down");

	} else if (dir === 'LEFT') {
		robot.keyTap("left");

	} else if (dir === 'RIGHT'){
		robot.keyTap("right");
		
	} else if (dir === 'SPACE'){
		robot.keyTap("space");

	}
});
 
