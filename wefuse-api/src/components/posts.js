import React from 'react';

const Posts = ({ posts }) => {
    
    console.log(posts)
    
    return (
        <main id="main" class="blog-post" role="main">
            { posts.map((post, indexKey) => (
                console.log(post.data)
                // <article id="{ post.data.banner.id }" style={{ backgroundImage: `url(post.data.banner.image.url)` }} class="post" >
                //     <a href="{ post.data.url }" title="{ post.data.title }" rel="bookmark" class="post-link">
                //     <div class="row content-row post-details">
                //         <header>
                //         <h5>{ post.data.category }</h5>
                //         <h1 class="post-title">{ post.data.title }</h1>
                //         </header>
                //         <footer>
                //         <div class="post-meta">
                //             <i class="fa fa-clock-o"></i>
                //             { post.data.postDate }
                //             <i class="fa fa-user"></i>
                //             { post.data.author }
                //             <i class="fa fa-comments-o"></i>
                //             3 Comments
                //         </div>
                //         </footer>
                //     </div>
                //     </a>
                // </article>
            ))}
        </main>      
    )
};

export default Posts
