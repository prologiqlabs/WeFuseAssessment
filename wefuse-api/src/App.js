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
    posts: [],
    homepage: []
  }

   componentDidMount(){
  //   fetch('http://test.fuseclients.com/api/blog/list')
  //   .then(res => res.json())
  //   .then((data) => {
  //     this.setState({
  //       isLoaded: true,
  //       posts: data})
  //   })
  //   .catch(console.log)
    
  let homepageCall = fetch('http://test.fuseclients.com/api/homepage');
  let postCall = fetch('http://test.fuseclients.com/api/blog/list');
  //let blogsCall = fetch('');

  Promise.all(homepageCall, postCall)
    .then(values => Promise.all(values.map(value => value.json())))
      .then(finalVals => {
        //console.log(finalVals)
        let homepageApiResponse = finalVals[0];
        let postApiResponse = finalVals[1];
        renderHTML(homepageApiResponse, postApiResponse);
        this.setState({
          posts: homepageApiResponse,
          isLoaded: true
        })
      });
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
function getApiData(){
  let homepageCall = fetch('http://test.fuseclients.com/api/homepage');
  let postCall = fetch('http://test.fuseclients.com/api/blog/list');
  //let blogsCall = fetch('');

  Promise.all(homepageCall, postCall)
    .then(values => Promise.all(values.map(value => value.json())))
      .then(finalVals => {
        //console.log(finalVals)
        let homepageApiResponse = finalVals[0];
        let postApiResponse = finalVals[1];
        renderHTML(homepageApiResponse, postApiResponse);
        this.setState({
          posts: homepageApiResponse,
          isLoaded: true
        })
      });

}

function renderHTML(HomeAPIResponse, PostsAPIResponse) {
  document.querySelector("body").innerHTML = `<h1>${HomeAPIResponse.info}: ${PostsAPIResponse.info}</h1>`
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
