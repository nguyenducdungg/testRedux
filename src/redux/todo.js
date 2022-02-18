import axios from 'axios';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: []
}
const todos = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo(state, action) {
            state.items.push(action.payload)
        },
        setTodos(state, action) {
            state.items = action.payload
            
        }
    }
})

export const {setTodos, addTodo} = todos.actions
// const ADD_TODO = 'ADD_TODO'
// const SET_TODOS = 'SET_TODOS'
// export const addTodo = (text) => ({
//     type: ADD_TODO,
//     payload: text
// })
// export const setTodos = (items) => ({
//     type: SET_TODOS,
//     payload: items
// })

// const reducer = (state = initState, action) => {
//     switch (action.type) {
//         case 'ADD_TODO':
//             return {
//                 ...state,
//                 items: [...state.items, action.payload]
//             }
//         case 'SET_TODOS':
//             return {
//                 ...state,
//                 items: action.payload
//             }
//         default:
//             return state;
//     }
// }

export const fetchTodos = () => async (dispatch) => {
    const res = await axios.get(`https://jsonplaceholder.typicode.com/todos`);
    dispatch(setTodos(res.data))

}


export default todos.reducer;