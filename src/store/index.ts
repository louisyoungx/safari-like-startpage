import { combineReducers } from 'redux'
import { wallpaper } from './reducers'

const store = combineReducers({
  wallpaper,
})

export default store