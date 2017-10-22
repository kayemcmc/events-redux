import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import EventItem from './EventItem'

class FavoriteEventList extends Component {
    render() {
        return(
            <div className='container'>
                 <h4><Link className='link' to='/'>Home</Link></h4>
                <h2>Favorite Events:</h2>
             {
                this.props.favoriteEvents.map(event => {
                    return(
                        <EventItem 
                            key={event.id}
                            event={event}
                            favoriteButton={false}
                        />
                    )
                })
            }
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        favoriteEvents: state.favoriteEvents
    }
}

export default connect(mapStateToProps, null)(FavoriteEventList)