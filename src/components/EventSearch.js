import React, { Component } from 'react'
import { Form, FormGroup, FormControl, Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import { getEvents } from '../actions'

class EventSearch extends Component {
    constructor() {
        super();

        this.state ={
            events: ''
            
        }
    }
    search() {
        let { events } = this.state;
        const url = `https://www.eventbriteapi.com/v3/events/search/?q=${events}&token=HQ5EIS4BE24VRX5OMPI6`
        fetch(url, {
            method: 'GET'
        }).then(response => response.json())
        .then(json => {
            this.props.getEvents(json.events)
        })
    }
    render() {
        return(
            <div className='container'>
                <div className='homepage-search-card'>
                    <h1>Find your next experience</h1>
                    <div className='text-center form'>
                     <Form inline>
                        <FormGroup>
                            <FormControl
                                type='text'
                                placeholder='Search Event, City'
                                className='search-input'
                                onChange={event => this.setState({ events: event.target.value })}
                             />
                        </FormGroup>
                        
                        <Button 
                                className='search-button'
                                onClick={() => this.search()}
                         >SEARCH
                         </Button>
                    </Form>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default connect(null, { getEvents })(EventSearch)

