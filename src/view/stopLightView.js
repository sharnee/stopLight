import React from 'react'
import ReactDOM from 'react-dom'
import Store from './store'
import ACTIONS from './actions'

window.Store = Store


var StopLightView = React.createClass({
	componentWillMount: function(){
		//the on for this has two prams the what to listen for or ('updateHappenin') and an anan function
		Store.on('updateHappenin', ()=>{
			this.setState(Store._get())
		})
	}, 
	getInitialState: function(){
		return Store._get()
	},

	_handleRed: function(evenObj){
		ACTIONS.handleRed()
	}, 
	_handleYellow: function(evenObj){
		ACTIONS.handleYellow()
	}, 
	_handleGreen: function(evenObj){
		ACTIONS.handleGreen()
	}, 
	_handleBlue: function(evenObj){
		ACTIONS.handleBlue()
	}, 
	render: function() {
		// console.log(this.state, 'this is my state')
		// console.log(this.state.whichLight, 'this is my light')
		// console.log((this.state.whichLight === 'red'), 'is this red?')
		var redLightBackground = this.state.whichLight === 'red' ? 'red' : 'transparent'; 
		var yellowLightBackground = this.state.whichLight === 'yellow'? 'yellow' : 'transparent';
		var greenLightBackground = this.state.whichLight === 'green'? 'green' : 'transparent';
		var blueLightBackground = this.state.whichLight === 'blue'? 'blue' : 'transparent';

		return(
			<div className = 'stopLightView'>
				<h1>Welcome to the Dance Light </h1>
				<div className= 'stopLightContainer'>
					<div onClick = {this._handleRed} className = 'red light' style = {{background: redLightBackground}}></div>
					<div onClick = {this._handleYellow}className = 'yellow light' style = {{background: yellowLightBackground}}></div>
					<div onClick = {this._handleGreen}className = 'green light' style = {{background: greenLightBackground}} ></div>
					<div onClick = {this._handleBlue}className = 'blue light' style = {{background: blueLightBackground}} ></div>
				</div>
			</div>
		)
	}
})

export default StopLightView