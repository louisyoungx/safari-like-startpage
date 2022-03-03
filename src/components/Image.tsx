import React, { useState, useEffect } from 'react'
import { Bookmark } from '../config/bookmark'

const Image: React.FC<Bookmark> = (props: Bookmark) => {
    let placeholder: string = '/notFound.svg'
    const [src, useSrc] = useState(placeholder)
    const [errIndex, useErrIndex] = useState(0)

    const InitImage = () => {
        useSrc(props.img)
    }

    const HandleImageError = () => {
        const proxyList: string[] = [
            `https://t1.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=${props.url}&size=64`,
            `http://logo.clearbit.com/${props.url}?size=80&greyscale=true`,
            '/notFound.svg',
        ]
        useSrc(proxyList[errIndex])
        useErrIndex(errIndex + 1)
    }

    useEffect(() => {
        setTimeout(() => {
            InitImage()
        }, 0)
    }, [])

    return (
        <img 
            className='profile-img' 
            src={src} alt={props.name}
            onError={() => HandleImageError()}
        />
    )
}

export default Image