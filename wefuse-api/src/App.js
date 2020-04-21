import React, {Component} from 'react';
import Posts from './components/posts';
//import ReactDOM from 'react-dom';
import './App.css';

// console.log('wat', $);
// const PostsComponent = React.createClass({
//   postsDisplay: 'PostsComponent',
// })

class App extends Component{
  state = {
    posts: []
  }

  componentDidMount(){
    fetch('http://test.fuseclients.com/api/blog/list')
    .then(res => res.json())
    .then((json) => {
      this.setState({posts: json.data})
    })
    .catch(console.log)
  }

  render() {
    return(
      <Posts posts = {[this.state.posts]} />
    );
  }

  

  getInitialState() {
    return {posts: []};
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
