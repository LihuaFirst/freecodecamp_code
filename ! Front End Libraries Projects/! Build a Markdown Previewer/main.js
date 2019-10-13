class Markdown extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			text: placeholder
		}
		this.handleChange = this.handleChange.bind(this);
	}
	handleChange(event) {		
		this.setState({
			text: event.target.value
		});
	}
	render() {
		return (
			<div className="row">
				<div className="col-xs-12 col-sm-6 panel-primary">
					<h1>Editor</h1>
					<p>Please enter GitHub flavored markdown:</p>
					<textarea id="editor"></textarea>
				</div>
				<div className="col-xs-12 col-sm-6 panel-secondary">
					<h2>Previewer</h2>
					<p>Rendered as HTML:</p>
					<div id="preview"></div>
				</div>
			</div>
		);
	}
}

const placeholder = '# Welcome to my React Markdown Previewer!';

ReactDOM.render(<Markdown />, document.getElementById('wrapper'));