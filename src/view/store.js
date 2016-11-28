import Backbone from 'backbone'
import _ from 'underScore'

var Store = _.extend(Backbone.Events,{
	data: {
		whichLight: null
	}, 

	_get: function(){
		console.log('here is my data', this.data)
		return this.data
	}, 

	_getData: function(){
		console.log('here is my value', this._getData)
		return this.data.whichLight
	},

	_emitChange: function(){
		console.log('trigger happenin')
		return this.trigger('updateHappenin') 
	}, 

	_set: function(newData){
		console.log('setting')
			//state is a function that is tied to react
		_.extend(this.data, newData) 
		this._emitChange()
	}, 

})

export default Store