import './App.css'
import { Provider } from 'react-redux'
import BookmarkApp from './BookmarkApp'
import { PersistGate } from 'redux-persist/integration/react'
import { persistor, store } from './store/persist'

const App = () => {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <BookmarkApp />
            </PersistGate>
        </Provider>
    )
}

export default App
