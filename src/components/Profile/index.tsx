import React from 'react'
import './index.css'
import Image from '../Image'

interface ProfileProps {
    name: string
    url: string
    img: string
    tags: string | null
    views: string | null
    discription: string
    type: 'bookmark' | 'group'
    handleClick: Function
}

const Profile: React.FC<ProfileProps> = (props: ProfileProps) => {
    if (props.type === 'bookmark') {
        return (
            <a className='profile-bookmark profile-container' href={props.url}>
                <figure className='profile'>
                    <div className='profile-img-wrap'>
                        <Image {...props} />
                    </div>
                    <figcaption className='profile-title-wrap'>
                        <p className='profile-title'>{props.name}</p>
                    </figcaption>
                </figure>
            </a>
        )
    } else {
        return (
            <div className='profile-folder profile-container' onClick={() => props.handleClick(props.url)}>
                <figure className='profile'>
                    <div className='profile-img-wrap'>
                        <Image {...props} />
                    </div>
                    <figcaption className='profile-title-wrap'>
                        <p className='profile-title'>{props.name}</p>
                    </figcaption>
                </figure>
            </div>
        )
    }
}

export default Profile
