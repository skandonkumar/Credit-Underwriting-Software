//For any action called related to authentication will be reduced here
import {FETCH_USER} from '../actions/types'

export default function(state = null, action){
    switch(action.type){
        case FETCH_USER:
            return action.payload || false;
        default:
            return state;
    }
}