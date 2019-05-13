import {FETCH_POSTS,NEW_POST} from '../actions/types';

const initialState= {
    items: [],//post that are coming from actions that will gonna put fetch request
    item:{} //single post that will add
};

export default function(state=initialState,action){
    switch(action.type){

        case FETCH_POSTS:
            return {
                ...state,
                items:action.payload
            }

        default:
            return state;
    }
}