demo.state3 = function(){};
demo.state3.prototype = {
	preload: function(){},
	create: function(){
		game.stage.backgroundColor = '#26b7ad';
		console.log('state3')

		addChangeStateEventListeners();
		
	},
	update: function(){}
};