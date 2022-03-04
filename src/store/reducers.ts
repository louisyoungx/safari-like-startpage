import { CHANGE, OPEN, CLOSE } from './types'

const wallpaper = (
    state = '/img/wallpaper/Safari_Background_Pink.jpg',
    action: any
) => {
    switch (action.type) {
        case CHANGE:
            return action.url
        default:
            return state
    }
}

const settingDisplay = (
    state = false,
    action: any
) => {
    switch (action.type) {
        case OPEN:
            return true
        case CLOSE:
            return false
        default:
            return state
    }
}

export { wallpaper, settingDisplay }
