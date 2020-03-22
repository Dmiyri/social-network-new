import React from 'react';
import s from './Post.module.css'

const Post = (props) => {
    return (

        <div className={s.item}>
            <img
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS3PS7Dr3lmtQmBUP7ik2OduKzJZ1Gz33WfwnpnmotTnKRnvmxH'/>
            {props.message}
            <div>
            <span>{props.like}</span>
            </div>
        </div>

    );
}

export default Post;
