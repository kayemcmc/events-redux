import React, { Component } from 'react'
import { connect } from 'react-redux'
import { favoriteEvents } from '../actions'

class EventItem extends Component {
    constructor() {
        super();
        this.state = {
            favorited: false
        }
    }
    favorite(event) {
        this.props.favoriteEvents(event);
        this.setState({favorited: true});
    }
    render() {
        let { event } = this.props;

        
        return (
            <div className='index-content'>
                
                 <div className="col-md-4">
                    <div className="card">
                      
                            <img src={event.logo.url} alt={event.name.text} />
        
                        
                        <p className='card-date'>{event.start.local}</p>
                        <h4>{event.name.text}</h4>
                        <p className='card-venue'></p>
                       <span>
                        <a href={event.url} className="blue-button">Book Tickets</a></span>
                        {
                            this.props.favoriteButton ?
                            this.state.favorited ?
                            <span className="star-red" role="img" aria-label="img" onClick={() => this.favorite(event)}>❤️</span>
                            :
                            <span className="star" role="img" aria-label="img" onClick={() => this.favorite(event)}>♡</span>
                            :
                            <div></div>
                        }
   
                        
                    </div>
                </div>
            
         </div>    
        )
    }
}

export default connect(null, { favoriteEvents })(EventItem)