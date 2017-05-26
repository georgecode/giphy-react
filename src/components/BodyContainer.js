import React, {Component} from 'react';

class BodyContainer extends Component{
	constructor(props,context){
		super(props,context);

		this.state={
			title:'HELLO HELLO HELLO',
			image:'https://tiltify.com/assets/default-avatar-5d89b08b793f205b5fe1d94ae58b00c6449b8b234666f2a29545d5a5cb3d981a.jpg'
		}


		this.displayContent = this.displayContent.bind(this);
	}

	displayContent(response){

		console.log(response.data[0].images)
		this.setState({image: response.data[0].images.downsized_medium.url})
	}


	fetchFunction(){
		// fetch('https://jsonplaceholder.typicode.com/posts/1')
		// fetch('http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=dc6zaTOxFJmzC')
		fetch('http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=dc6zaTOxFJmzC&limit=10')
		.then(function(response) {
			return response.json();
		}).then(

			this.displayContent
		).catch(function(error) {
			console.log("Shits all fucked up in fetchFunction ")
			// shit went wrong
		})

	}


	componentDidMount(){
		
		this.fetchFunction()
	}





	render(){
		return(
			<div>
			
			<h1>REACT BodyContainer </h1>

			<h1>{this.state.title}</h1>
			<img src={this.state.image}/>
			</div>
			)
	}
}//END BodyContainer



export default BodyContainer;