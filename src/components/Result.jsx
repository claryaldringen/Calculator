var React = require('react');

class Result extends React.Component{

	render() {
		return(
			<input type="text" value={this.props.value} placeholder={this.props.placeholder} className="form-control" />
		);
	}

}

module.exports = Result;