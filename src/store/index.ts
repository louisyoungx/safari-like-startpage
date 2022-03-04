import { combineReducers } from 'redux'
import { wallpaper, settingDisplay } from './reducers'

const store = combineReducers({
    wallpaper,
    settingDisplay,
})

export default store
