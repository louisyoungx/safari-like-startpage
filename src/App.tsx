import React from 'react'
import './App.css'
import { bookmarks } from './config/bookmark'
import BookmarkApp from './BookmarkApp'

function App() {
    return (
        <div className='app'>
            <BookmarkApp bookmarks={bookmarks} />
        </div>
    )
}

export default App
