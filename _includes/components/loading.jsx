import React, { Component } from 'react';

class Loading extends Component {
	constructor(props) {
		super(props);

		this.state = {
			center_x: 0,
			center_y: 0,
			degrees: 0,
			initial_click_degrees: 0
		}
	}

	componentDidMount = () => {
		console.log('loading')
		const rect = document
			.querySelector(`.loading`)
			.getBoundingClientRect();
		this.setState({
			center_x: rect.left + window.scrollX + 50,
			center_y: rect.top + window.scrollY + 50
		});

		document.addEventListener('mouseup', () => {
			document.removeEventListener("mousemove", this.mouseMove);
		});
	}

	get_degrees = (mouse_x, mouse_y) => Math.round(
		(
			Math.atan2(
				mouse_x - this.state.center_x,
				mouse_y - this.state.center_y
			)
			* (
				180
				/ Math.PI
			)
			* -1
		)
		+ 100
	)

	mouseMove = event => {
		this.setState({
			degrees: this.get_degrees(event.pageX, event.pageY) - this.state.initial_click_degrees
		});
	}

	mouseDown = event => {
		this.setState({
			initial_click_degrees: this.get_degrees(event.pageX, event.pageY)
		});
		document.addEventListener("mousemove", this.mouseMove);
	}

	render = () => (
		<div
			className="loading"
			onMouseDown={this.mouseDown}
			style={{transform: `rotate(${this.state.degrees}deg)`}}
		>
			<img
				src="https://upload.wikimedia.org/wikipedia/commons/3/34/Steering_wheel_ship_1.png"
				draggable={false}
			/>
		</div>
	)
}

export default Loading;
