import React from 'react';

export default class TodoList extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		let things = this.props.things;
		let listItems = [];
		things.forEach((thing, index)=>{
			if(thing) {
				listItems.push(<li className="list-item" key={index}>{thing.title}</li>);
			}
		});
		return (
		  <ul className="todo-list">{listItems} </ul>
		);
	}
}