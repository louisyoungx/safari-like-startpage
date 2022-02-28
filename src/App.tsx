import React from 'react'
import './App.css'
import { bookmarks } from './config/bookmark'
import LouisBookmark from './LouisBookmark'

function App() {
    return (
        <div className='app'>
            <LouisBookmark bookmarks={bookmarks} />
        </div>
    )
}

export default App
