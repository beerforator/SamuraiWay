import React from 'react';
import { addPostAC, onPostTAChangeAC } from '../../../buisnessData/profileReducer';
import PostSection from './PostSection'
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
    return (
        {
            postsListDB: state.profile.postsListDB,
            textArea: state.profile.textArea
        }
    )
}

let mapDispatchToProps = (dispatch) => {
    return (
        {
            addPost: (text) => {
                dispatch(addPostAC(text))
            },
            onPostTAChange: (text) => {
                dispatch(onPostTAChangeAC(text))
            }
        }
    )
}

const PostSectionContainer = connect(mapStateToProps, mapDispatchToProps)(PostSection)

export default PostSectionContainer
