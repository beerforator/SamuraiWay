import Post from './post/Post';
import m from './PostSection.module.css'

const PostSection = (props) => {
  let postsListDB = props.postsListDB
  return (
    <div className={m.page_posts}>
      <h3>My posts</h3>
      <div className={m.post_form}></div>
      <div className={m.post_list}>
        {
          postsListDB.map(post => <Post id={post.id} message={post.message} likes={post.likes} />)
        }
      </div>
    </div>
  );
}

export default PostSection;
