import React from 'react';

export default class InputItem extends React.Component {

	constructor(props) {
		super(props);
		this.keydownHandler = this.keydownHandler.bind(this);
	}

	keydownHandler(e) {
		if(e.key === 'Enter') {
			let input = e.target;
			if(input && input.value) {
				this.props.addThingFunc({
					title: input.value,
					complete: false
				});
				input.value = '';
			}

		}
	}

	render() {
		return (
		    <div className="input-item">
		      <input type="text" placeholder="What you want to do?" onKeyDown={this.keydownHandler}/>
		    </div>
		);
	}
}