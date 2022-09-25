import React from 'react';
import List from './components/List'
import Secs from './components/Secs'
import './index.css'

const Home = () => {
    return <div className='app'>
        <List />
        <Secs />
    </div>
}

export default Home