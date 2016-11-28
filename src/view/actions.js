import Store from './store'

var ACTIONS = {

	handleRed: function(){
		//when the red circle is clicked turn red 
		Store._set({whichLight:'red'})
	}, 

	handleYellow: function(){
		Store._set({whichLight: 'yellow'})
	}, 

	handleGreen: function(){
		Store._set({whichLight: 'green'})
	}, 

	handleBlue: function(){
		Store._set({whichLight: 'blue'})
	}
}

export default ACTIONS 