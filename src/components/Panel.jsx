var React = require('react');
var Number = require('./Number.jsx');
var Result = require('./Result.jsx');

class Panel extends React.Component{

	constructor(props) {
		super(props);
		this.state = {value: null}
	}

	onAddClick(event) {
		let value = this.refs.number1.state.value * 1 + this.refs.number2.state.value * 1;
		this.setState({value: value});
	}

	onSubtractClick(event) {
		let value = this.refs.number1.state.value * 1 - this.refs.number2.state.value * 1;
		this.setState({value: value});
	}

	onDivideClick(event) {
		if(this.refs.number2.state.value != 0) {
			let value = this.refs.number1.state.value / this.refs.number2.state.value;
			this.setState({value: value});
		} else {
			alert('Division by zero.');
		}
	}

	onMultiplyClick(event) {
		let value = this.refs.number1.state.value * this.refs.number2.state.value;
		this.setState({value: value});
	}

	onClearClick() {
		this.setState({value: null});
		this.refs.number1.setState({value: null});
		this.refs.number2.setState({value: null});
	}

	render() {
		return(
			<div className="container">
				<div className="row">
					<div className="col-md-offset-2 col-md-8 panel panel-default">
						<div className="panel-body">
							<div className="row">
								<div className="col-md-offset-3 col-md-6">
									<h1>Simple Calculator</h1>
								</div>
							</div>
							<div className="row">
								<div className="col-md-6">
									<Number ref="number1" placeholder="First number" />
								</div>
								<div className="col-md-6">
									<Number ref="number2" placeholder="Second number" />
								</div>
							</div>
							<div className="row">&nbsp;</div>
							<div className="row">
								<div className="col-md-3"><button onClick={this.onAddClick.bind(this)} className="btn btn-primary form-control">+ Add</button></div>
								<div className="col-md-3"><button onClick={this.onSubtractClick.bind(this)} className="btn btn-primary form-control">- Subtract</button></div>
								<div className="col-md-3"><button onClick={this.onDivideClick.bind(this)} className="btn btn-primary form-control">/ Divide</button></div>
								<div className="col-md-3"><button onClick={this.onMultiplyClick.bind(this)} className="btn btn-primary form-control">* Multiply</button></div>
							</div>
							<div className="row">&nbsp;</div>
							<div className="row">
								<div className="col-md-9"><Result placeholder="Result" value={this.state.value} /></div>
								<div className="col-md-3"><button className="btn btn-danger form-control" onClick={this.onClearClick.bind(this)}>Clear</button></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}

}

module.exports = Panel;