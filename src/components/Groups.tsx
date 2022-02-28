import React from 'react'
import { Bookmark } from '../config/bookmark'
import Profile from './Profile/index'

interface GroupProps {
    groups: Bookmark[]
    switchGroup: Function
}

const Groups: React.FC<GroupProps> = (props: GroupProps) => {
    return (
        <div className='bookmarks'>
            {props.groups.map((group: Bookmark) => {
                return <Profile key={group.name} type='group' handleClick={props.switchGroup} {...group} />
            })}
        </div>
    )
}

export default Groups
