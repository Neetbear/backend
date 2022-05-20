// 컴바인 리듀서 combineReducers
// 리듀서 쪼개기 카테고리별 관리

const { combineReducers } = require("redux")
const board = require('./boardReducer')

// state = {user:{}, board:{}, comment:{}...}
const initialState = {
    name:'ingoo',
    board:{
        list:[
            {
                idx:0,
                subject:'asdf'
            }
        ]
    }
}
const rootReducer = combineReducers({
    board,
    name:(state = initialState.name, action) => {
        switch(action.type){
            default:
                return state
        }
    }
});

// const rootReducer = (state = initialState, action) => {
//     switch(action.type) {
//         case "change_name" : {
//         }
//         case "change_subject" : {
//         }
//         default :
//             return state
//     }
// }

module.exports = rootReducer