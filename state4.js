demo.state4 = function(){};
demo.state4.prototype = {
	preload: function(){},
	create: function(){
		game.stage.backgroundColor = '#26b7ad';
		console.log('state4')

		addChangeStateEventListeners();
		
	},
	update: function(){}
};