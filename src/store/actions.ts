import { CHANGE, OPEN, CLOSE } from './types'

const switchWallpaper = (url: string) => {
    return {
        type: CHANGE,
        url: url,
    }
}

const settingDisplayChange = (tag: boolean) => {
    return tag ? {
        type: OPEN,
    } : {
        type: CLOSE,
    }
}

export { switchWallpaper, settingDisplayChange }
