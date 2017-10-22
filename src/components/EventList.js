import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import EventItem from './EventItem'

class EventList extends Component {
  
    render() {
        console.log('this.props', this.props);
    
    return (
        <div className='container'>
            {
                this.props.favoriteEvents.length > 0 ?
                <h4><Link className='link' to='/favorites'>Favorites</Link></h4>
                :
                <div></div> 
            }
            
            {
                this.props.events.map(event => {
                    return(
                        <EventItem 
                            key={event.id}
                            event={event}
                            favoriteButton={true}
                        />
                    )
                })
            }
        </div>
    )
 }
}

function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps, null)(EventList)