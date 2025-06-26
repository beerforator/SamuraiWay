import m from './Post.module.css'

const Post = (props) => {
  return (
    <div className={m.item} >
      <div>
        <img src="https://avatars.mds.yandex.net/i?id=9b3771e6b9265a3572ea609cd64978a27aab9849-7092330-images-thumbs&n=13" alt="" />
        <h3>{props.message}</h3>
      </div>
      <div>Likes: {props.likes}</div>
    </div>
  );
}

export default Post;
