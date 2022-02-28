import React from 'react'

interface TitleProps {
    title: string
}

const Title: React.FC<TitleProps> = (props: TitleProps) => {
    return (
        <div className='title'>
            <h1>{props.title}</h1>
        </div>
    )
}

export default Title
