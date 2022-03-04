import { CHANGE } from './types'

const wallpaper = (state = '/wallpaper/Safari_Background_Pink.jpg', action: any) => {
    switch (action.type) {
        case CHANGE:
            return action.url
        default:
            return state
    }
}

export { wallpaper }