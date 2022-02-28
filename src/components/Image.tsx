import React, { useState } from 'react'
import { Bookmark } from '../config/bookmark'

const Image: React.FC<Bookmark> = (props: Bookmark) => {
    const [src, useSrc] = useState(props.img)

    const HandleImageError = (bookmark: Bookmark) => {
        let img: string = '/notFound.svg'
        useSrc(img)
    }

    return (
        <img 
            className='profile-img' 
            src={src} alt={props.name}
            onError={() => HandleImageError(props)}
        />
    )
}

export default Image