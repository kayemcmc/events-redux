import { combineReducers } from 'redux'
import { GET_EVENTS, FAVORITE_EVENTS } from '../actions'

function events(state= [], action) {
    switch(action.type) {
        case GET_EVENTS:
            return  action.items;
        default:
            return state;
    }
}

function favoriteEvents(state = [], action) {
    switch(action.type) {
        case FAVORITE_EVENTS:
            state = [...state, action.event]
            return state;
        default:
            return state;
        
    }

}

const rootReducer = combineReducers({ events, favoriteEvents });

export default rootReducer;