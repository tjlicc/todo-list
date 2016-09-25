require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import InputItem from './InputItem';
import TodoList from './TodoList';

let localforage = require('localforage');
let thingDB = localforage.createInstance({
  name: "thingDB"
});

class AppComponent extends React.Component {

  constructor(props) {
  	super(props);

    if(!localStorage.getItem('things')) {
      localStorage.setItem('things', JSON.stringify([]));
    }

    this.state = {
      'things': []
    }; 

  	this.addThing = this.addThing.bind(this);
  }

  componentWillMount() {
    thingDB.getItem('things').then((value) => {
      if(value instanceof Array) {
        this.state.things = value;
        this.setState(this.state);
      }
    });
  }

  addThing(thing) {
  	this.state.things.push(thing);
  	thingDB.setItem("things", this.state.things);
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
