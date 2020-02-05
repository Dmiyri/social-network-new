import React from 'react';
import s from './Profile.module.css'

const Profile = () => {
    return (
            <div className={s.content}>
                <div>
                    <img
                        src='https://jssors8.azureedge.net/demos/image-slider/img/px-beach-daylight-fun-1430675-image.jpg'/>
                </div>
                <div>
                    ava+discription
                </div>
                <div>
                    My post
                    <div className={s.post}>
                        New post
                    </div>
                    <div>
                        <div className={s.item}>
                            post1
                        </div>
                        <div className={s.item}>
                            post2
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default Profile;
