import React, { useState } from 'react'
import {
    Bookmark,
    mainView,
    bookmarks as rawBookmarks,
} from './config/bookmark'
import router from './router/index'
import Title from './components/Title'
import Bookmarks from './components/Bookmarks'
import Groups from './components/Groups'
import { settingDisplayChange, switchWallpaper } from './store/actions'
import { connect } from 'react-redux'
import Settings from './components/Settings'

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

const handleBookmark = (
    bookmarks: Bookmark[],
    activePath: string,
    groups: string[]
) => {
    let displayBookmark: Bookmark[]
    if (activePath === '') {
        displayBookmark = bookmarks.filter(item => item.views === mainView)
    } else {
        displayBookmark = bookmarks.filter(item => item.tags === activePath)
    }
    const displayGroups: Bookmark[] = groups.map(group => ({
        name: group,
        url: '/' + group,
        img: '/img/icon/folder.svg',
        tags: null,
        views: null,
        discription: '',
    }))
    return [displayBookmark, displayGroups]
}

let BookmarkApp: React.FC = (props: any) => {
    const groupTags: string[] = allGroups(rawBookmarks)
    const activePath: string = router.getPath()
    const [DisplayBookmarks, groups] = handleBookmark(
        rawBookmarks,
        activePath,
        groupTags
    )
    const [bookmarks, setBookmarks] = useState(DisplayBookmarks)
    const backgroundStyles = {
        backgroundImage: `url("${props.wallpaper}")`,
    }
    const switchGroup = (url: string) => {
        router.changePath(url)
        setBookmarks(handleBookmark(rawBookmarks, url.slice(1), groupTags)[0])
    }
    return (
        <div
            className='app'
            style={backgroundStyles}
            onClick={() => props.settingDisplayChange(false)}
        >
            <div className='bookmark'>
                <div className='views'>
                    <Title
                        title={activePath === '' ? mainView : activePath}
                        isGoBack={activePath !== ''}
                        goBack={() => switchGroup('/')}
                    />
                    <Bookmarks bookmarks={bookmarks} />
                </div>
                <div className='groups' style={{display: activePath === '' ? 'block' : 'none'}}>
                    <Title title='Group' isGoBack={false} goBack={() => switchGroup('/')} />
                    <Groups groups={groups} switchGroup={switchGroup} />
                </div>
            </div>
            <Settings />
        </div>
    )
}

const mapStateToProps = (state: any) => {
    return {
        wallpaper: state.wallpaper,
        settingDisplay: state.settingDisplay,
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        switchWallpaper: (url: string) => {
            dispatch(switchWallpaper(url))
        },
        settingDisplayChange: (tag: boolean) => {
            dispatch(settingDisplayChange(tag))
        },
    }
}

BookmarkApp = connect(mapStateToProps, mapDispatchToProps)(BookmarkApp)

export default BookmarkApp
