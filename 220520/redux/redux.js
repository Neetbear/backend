// redux -> 전역상태로 관리하기 위해서 탄생
// nodejs 환경에서도 가능 -> react 팀이 만든게 아니라서
// require
// const redux = require('redux')
const {createStore} = require('redux')
const rootReducer = require('./reducers')
/*
    console.log(redux)
    {
    __DO_NOT_USE__ActionTypes: {
        INIT: '@@redux/INITc.r.c.3.6.p',
        REPLACE: '@@redux/REPLACE9.t.s.c.1.7',
        PROBE_UNKNOWN_ACTION: [Function: PROBE_UNKNOWN_ACTION]
    },
    applyMiddleware: [Function: applyMiddleware],
    bindActionCreators: [Function: bindActionCreators],
    combineReducers: [Function: combineReducers],
    compose: [Function: compose],
    createStore: [Function: createStore],
    legacy_createStore: [Function: createStore]
    }

    여기서 4개만 알아도 됨
    applyMiddleware
    combineReducers
    compose
    createStore
*/

// createStore
// 상태, 상태를 변경해주는 함수
// const [value, setValue] = useState(초기값) 느낌
// const initialState = {
//     name:'ingoo',
//     board: {
//         list:[
//             {
//                 idx:0,
//                 subject:'asdf'
//             }
//         ]
//     }
// }
// reducer 따로 파일 만들어서 관리
// const reducer = (state = initialState, action) => {
//     //  = initialState 주는 이유 최초 실행시 이전 state 없으니까 
//     // state 이전 상태값 , action 선물받은 느낌 dispatch에게 받은 객체
//     // if (action.type === 'change_name') {
//     //     return {
//     //         ...state, 
//     //         // 불변성 메모리 영역에서 값을 변경할 수 없다
//     //         // react 불변성 rerendering 
//     //         name:action.payload
//     //     }
//     //     // 객체 자체를 새로 할당 ({} 자체가 객체니까)
//     // }
//     switch (action.type) {
//         case "change_name" :
//             return {
//                 ...state, 
//                 name:'ingoo2'
//             }
//         case "change_subject" :
//             const newList = [...state.board.list]
//             newList[0].subject = action.payload
//             return {
//                 ...state,
//                 board:{
//                     ...state.board,
//                     list:[...newList]
//                 }
//             }
//         default :
//             return state 
//             // = state
//             // -> default 없으면 undefined 
//             // -> createStore 실행시 reducer 한번 실행됨
//     }
//     // return state
// }

const store = createStore(rootReducer); 
// console.log(store)
// const [value, setValue] = useState({name:'ingoo'}) 이 느낌임 

/*
    subscribe -> 몰라도 됨
    replaceReducer -> 몰라도 됨
    '@@observable' -> @ 붙는건 에약어 느낌?
===================================== 2개만 중요 
    dispatch -> 상태 변경 함수 -> 상태바꿀때 나 사용해~
    getState -> 상태 저장 -> 주로 객체로 저장 { 다 담아 ~}
*/
// console.log(store.dispatch)
// console.log(store.getState()) // name : ingoo
// // 삼각관계? 
// // const [state, dispatch] = useReducer(reducer, initialState)
// // state dispatch 친구 reducer 여자
// // dispatch발동 -> reducer발동 -> state변경 순
// const action = {type:'change_name', payload:'ingoo2'} 
// // type은 관례
// // 객체 사용 이유 여러가지 담을 라고.... payload 등등
// store.dispatch(action) // reducer에게 객체 전달 reducer는 
// console.log(store.getState()) // name : ingoo2

// store.dispatch({type:'change_subject', payload:'asdfasdf'})
console.log(store.getState())
console.log(store.getState().board.list)