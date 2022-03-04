import { CHANGE } from './types'

const switchWallpaper = (url: string) => {
    return {
        type: CHANGE,
        url: url,
    }
}

export { switchWallpaper }
