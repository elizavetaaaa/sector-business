import posts from '../../db/posts.json'
const SEARCH_POST = 'SEARCH_POST'
const SET_DATA = 'SET_DATA'

const initialState = {
    data: posts,
};


export default (state = initialState, action) => {
    switch (action.type) {

        case SEARCH_POST: {
            return {
                ...state,
                data: posts.filter((obj)=>{ return JSON.stringify(obj).includes(action.payload)
                }),
            }
        }
        case SET_DATA: {
            return {
                ...state,
                data: action.payload
            }
        }


        default :
            return state
    }
}

export const searchPostAction = (payload) => ({
    type:SEARCH_POST,payload
})

export const setData = (payload) => ({
    type:SET_DATA,payload
})

