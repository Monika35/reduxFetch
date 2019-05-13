import {FETCH_POSTS,NEW_POST} from './types';


//actionCreators will be the functions that we need to export
// export function fetchPosts(){
//     return function(dispatch){
//         fetch('https://jsonplaceholder.typicode.com/posts')
//             .then(res=>res.json())
//             .then(posts =>dispatch({
//                 type:FETCH_POSTS,
//                 payload: posts
//             }));
//
//     }
// }

//moze i vaka
export const fetchPosts = () =>dispatch =>{
    console.log('fetching');
    {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res=>res.json())
            .then(posts =>dispatch({
                type:FETCH_POSTS,
                payload: posts
            }));

    }
}


