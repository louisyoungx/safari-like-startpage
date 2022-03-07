import React from 'react'

interface TitleProps {
    title: string,
    isGoBack: boolean,
    goBack: () => void,
}

const Title: React.FC<TitleProps> = (props: TitleProps) => {
    return (
        <div className='title'>
            <img
                style={{display: props.isGoBack ? 'block' : 'none'}}
                onClick={() => props.goBack()}
                className='goBack'
                src='/img/icon/goBack.svg'
                alt='goBack'
            ></img>
            <h1>{props.title}</h1>
        </div>
    )
}

export default Title
