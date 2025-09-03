import Post from './post/Post';
import m from './PostSection.module.css'
import React from 'react';

const PostSection = (props) => {
	let a = props.postsListDB.length

	let addPost = (e) => {
		let c = props.postsListDB.length
		props.addPost(e.target.value)
	}

	let b = props.postsListDB.length

	let onPostTAChange = (e) => {
		props.onPostTAChange(e.target.value)
	}

	return (
		<div className={m.page_posts}>
			<h3>My posts</h3>
			<div className={m.post_form}>
				<textarea
					value={props.textArea}
					onChange={onPostTAChange} />
				<button onClick={addPost}>Create post</button>
			</div>
			<div className={m.post_list}>
				{
					props.postsListDB.toReversed().map(post => <Post
						id={post.id}
						message={post.message}
						likes={post.likes} />)
				}
			</div>
		</div>
	);
}

export default PostSection;
