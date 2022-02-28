import React, { useEffect, useState } from 'react'
import { Bookmark, mainView } from './config/bookmark'
import Title from './components/Title'
import Bookmarks from './components/Bookmarks'
import Groups from './components/Groups'
import router from './components/router/index'

interface NotionBookmarkProps {
    bookmarks: Bookmark[]
}

const allGroups = (bookmarks: Bookmark[]) => {
    let groups: string[] = []
    let hasGroup = new Set()
    bookmarks.forEach(item => {
        if (!hasGroup.has(item.tags)) {
            groups.push(item.tags as string)
            hasGroup.add(item.tags)
        }
    })
    return groups
}

const handleBookmark = (bookmarks: Bookmark[], activePath: string, groups: string[]) => {
    let displayBookmark: Bookmark[]
    if (activePath === '') {
        displayBookmark = bookmarks.filter(item => item.views === mainView)
    } else {
        displayBookmark = bookmarks.filter(item => item.tags === activePath)
    }
    const displayGroups: Bookmark[] = groups.map(group => ({
        name: group,
        url: '/' + group,
        img: '/folder.svg',
        tags: null,
        views: null,
        discription: '',
    }))
    return [displayBookmark, displayGroups]
}

const LouisBookmark: React.FC<NotionBookmarkProps> = (props: NotionBookmarkProps) => {
    const groupTags: string[] = allGroups(props.bookmarks)
    const activePath: string = router.getPath()
    const [DisplayBookmarks, groups] = handleBookmark(props.bookmarks, activePath, groupTags)
    const [bookmarks, setBookmarks] = useState(DisplayBookmarks)
    const switchGroup = (url: string) => {
        router.changePath(url)
        setBookmarks(handleBookmark(props.bookmarks, url.slice(1), groupTags)[0])
    }
    return (
        <div className='bookmark'>
            <div className='views'>
                <Title title={activePath === '' ? mainView : activePath} />
                <Bookmarks bookmarks={bookmarks} />
            </div>
            <div className='groups'>
                <Title title='Group' />
                <Groups groups={groups} switchGroup={switchGroup} />
            </div>
        </div>
    )
}

export default LouisBookmark
