export const GET_EVENTS = 'GET_EVENTS';
export const FAVORITE_EVENTS = 'FAVORITE_EVENTS'

export function getEvents(items) {
    return {
        type: GET_EVENTS,
        items
    }
}

export function favoriteEvents(event){
    return{
        type: FAVORITE_EVENTS,
        event
    }
}