import Post from './post/Post';
import m from './PostSection.module.css'
import React from 'react';

const PostSection = (props) => {

  let postsListDB = props.postsListDB

  let newPostRef = React.createRef()

  let AddPost = () => {
    props.AddPost(props.tAreaStuff.post)
    props.OnPostTAChange("")
  }

  let OnPostTAChange = () => {
    props.OnPostTAChange(newPostRef.current.value)
  }

  return (
    <div className={m.page_posts}>
      <h3>My posts</h3>
      <div className={m.post_form}>
        <textarea
          ref={newPostRef}
          value={props.tAreaStuff.post}
          onChange={OnPostTAChange} />
        <button onClick={AddPost}>Create post</button>
      </div>
      <div className={m.post_list}>
        {
          postsListDB.map(post => <Post
            id={post.id}
            message={post.message}
            likes={post.likes} />)
        }
      </div>
    </div>
  );
}

export default PostSection;
