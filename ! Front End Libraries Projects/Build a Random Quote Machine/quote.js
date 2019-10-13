/*
import React, {Component} from 'react';
import ReactDOM from 'reaact-dom';
*/

class Quote extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			text: 'Quote placeholder',
			author: 'Author placeholder'
		}
		this.getNext = this.getNext.bind(this);
	}
	getNext() {

		// FIXME: how to set cache to false; currently always get the same quote
		/*fetch("https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1", {cache: "no-store"})
		.then(res => res.json())
		.then(
			(result) => {
				console.log(result);
				const quoteText = result[0].content.replace(/<[^>]+>/g, '');
				this.setState({
					text: quoteText,
					author: result[0].title
				});
			},
			(error) => {
				this.setState({
					text: 'Error',
					author: 'n/a'
				})
			}
		)*/
		
		$.ajax({
			url: 'https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1',
			dataType: 'json',
			cache: false,
		}).then((data) =>{			
				var post = data.shift();
				const quoteText = $(post.content).text();
				this.setState({
					text: quoteText,
					author: post.title
				})				
		});
	}
	componentDidMount() {		
		this.getNext();
	}
	render() {
		return (
			<div id="quote-box">
				<div className="quote">
					<div id="text">
						{this.state.text}
					</div>			
					<div id="author">
						<p>{this.state.author}</p>
					</div>
				</div>
				<a id="tweet-quote" className="btn btn-secondary" href="https://twitter.com/intent/tweet" target="_blank"><i class="fa fa-twitter"></i></a>
				<button id="new-quote" className="btn btn-primary" onClick={this.getNext}>New Quote</button>
			</div>
		);
	}
}

ReactDOM.render(<Quote />, document.getElementById('wrapper'));