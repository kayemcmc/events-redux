import React, { Component } from 'react'
import AppNav from './AppNav'
import EventSearch from './EventSearch'
import EventList from './EventList'



class App extends Component {
    render() {
        return (
            <div>
            <AppNav />
            <EventSearch />
            <EventList />
            </div>
        )
    }
}

export default App