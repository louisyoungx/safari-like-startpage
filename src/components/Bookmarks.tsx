import React from 'react'
import { Bookmark } from '../config/bookmark'
import Profile from './Profile/index'

interface BookmarkProps {
    bookmarks: Bookmark[]
}

const Bookmarks: React.FC<BookmarkProps> = (props: BookmarkProps) => {
    return (
        <div className='bookmarks'>
            {props.bookmarks.map((bookmark: Bookmark) => {
                return <Profile key={bookmark.name} handleClick={() => {}} type='bookmark' {...bookmark} />
            })}
        </div>
    )
}

export default Bookmarks
