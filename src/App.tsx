import React from 'react'
import './App.css'
import { bookmarks } from './config/bookmark'
import NotionBookmark from './NotionBookmark'

function App() {
    return (
        <div className='app'>
            <NotionBookmark bookmarks={bookmarks} />
        </div>
    )
}

export default App
