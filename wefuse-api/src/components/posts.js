import React from 'react';

const Posts = ({ posts }) => {
    
    // console.log(posts)
    
    return (
        <main id="main" class="blog-post" role="main">
            { posts.map((post, indexKey) => (
                //console.log(post)
                <article id="{ post.banner.id }" style={{ backgroundImage: `url(post.banner.image.url)` }} class="post" >
                    <a href="{ post.url }" title="{ post.data.title }" rel="bookmark" class="post-link">
                    <div class="row content-row post-details">
                        <header>
                        <h5>{ post.category }</h5>
                        <h1 class="post-title">{ post.title }</h1>
                        </header>
                        <footer>
                        <div class="post-meta">
                            <i class="fa fa-clock-o"></i>
                            { post.postDate }
                            <i class="fa fa-user"></i>
                            { post.author }
                            <i class="fa fa-comments-o"></i>
                            3 Comments
                        </div>
                        </footer>
                    </div>
                    </a>
                </article>
            ))}
        </main>      
    )
};

export default Posts
