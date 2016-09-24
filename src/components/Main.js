require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import InputItem from './InputItem';
import TodoList from './TodoList';

class AppComponent extends React.Component {
  
  constructor(props) {
  	super(props);

    if(!localStorage.getItem('things')) {
      localStorage.setItem('things', JSON.stringify([]));
    }

  	this.state = {
  		"things": JSON.parse(localStorage.getItem('things'))
  	};

  	this.addThing = this.addThing.bind(this);
  }

  addThing(thing) {
	this.state.things.push(thing);
	localStorage.setItem("things", JSON.stringify(this.state.things));
	this.setState(this.state);
  }

  render() {
    return (
      <div className="container">
        <InputItem things={this.state.things} addThingFunc = {this.addThing}/>
        <TodoList things={this.state.things}/>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
