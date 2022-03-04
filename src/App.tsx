import './App.css'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import store from './store'
import BookmarkApp from './BookmarkApp'

function App() {
    return (
        <Provider store={createStore(store)}>
            <BookmarkApp />
        </Provider>
    )
}

export default App
