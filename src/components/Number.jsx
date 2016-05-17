var React = require('react');

class Number extends React.Component{

	constructor(props) {
		super(props);
		this.state = {value: ''}
	}

	isNumeric(n) {
		return !isNaN(parseFloat(n)) && isFinite(n);
	}

	onChange(event) {
		if(this.isNumeric(event.target.value) || event.target.value == '') {
			this.setState({value: event.target.value});
		} else this.setState({});
	}

	render() {
		return(
			<input type="text" value={this.state.value} placeholder={this.props.placeholder} onChange={this.onChange.bind(this)} className="form-control" />
		);
	}

}

module.exports = Number;