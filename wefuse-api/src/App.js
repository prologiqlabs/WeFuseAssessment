import React, {Component} from 'react';
//import ReactDOM from 'react-dom';
import logo from './assets/img/logo-neurox2.png';
import './App.css';

// console.log('wat', $);

class App extends Component{
  render(){
    return(
      // JSX to render goes here
      <p>App Component</p>
    );
  }

  state = {
    homepage: [],
    posts: []

  }

  componentDidMount(){
    fetch('http://test.fuseclients.com/api/blog/list')
    .then(res => res.json())
    .then((data) => {
      this.setState({posts: data})
    })
    .catch(console.log)
  }
}

// function App() {
//   return (
//     <main id="main" class="blog-post" role="main">
//       <article id="post-1" class="post" style="background-image:url('assets/img/neslihan-gunaydin-3493.jpg');">
// 			<a href="#" title="title test" rel="bookmark" class="post-link">
// 				<div class="row content-row post-details">
// 					<header>
// 						<h5>Dummy Post Category</h5>
// 						<h1 class="post-title">Where to find ideas and inspiration for a blog post</h1>
// 					</header>
// 					<footer>
// 						<div class="post-meta">
// 							<i class="fa fa-clock-o"></i>
// 								July 12, 2014
// 							<i class="fa fa-user"></i>
// 								admin
// 							<i class="fa fa-comments-o"></i>
// 								3 Comments											
// 						</div>
				
// 					</footer>
// 				</div>
// 			</a>
// 		</article>
//     </main>
    
//   );
// }



export default App;
