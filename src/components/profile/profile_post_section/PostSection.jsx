import Post from './post/Post';
import m from './PostSection.module.css'

const PostSection = () => {
  return (
    <div className={m.page_posts}>
      <h3>My posts</h3>
      <div className={m.post_form}></div>
      <div className={m.post_list}>
        <Post message='Third post' likes="14"/>
        <Post message='Dorogoy Dnevnik' likes="20"/>
        <Post message='First post. Lets start' likes="3"/>
      </div>
    </div>
  );
}

export default PostSection;
