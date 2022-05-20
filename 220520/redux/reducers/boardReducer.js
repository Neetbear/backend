// npm install redux-actions // redux-toolkits 하다보면 본다
/*
    redux
    redux-action
    immer
    redux-slice.... 요즘엔 리덕스 잘 안씀
    배보다 배꼽이 더 커져서
*/

// 1번방식
const CHANGE_SUBJECT = 'change_subject'
// const change_name = (payload) => ({type:CHANGE_NAME},payload)
// dispatch(change_name())
// 2번방식
// const {createAction} = require('redux-actions'); 
// const changeName = createAction('change_subject')
// changeName.toString() // type안에 들어간 string 반환

const initialState = {
    list:[
        {
            idx:0,
            subject:'asdf'
        }
    ]
}

const boardReducer = (state = initialState, action) => {
    switch(action.type) {
        case CHANGE_SUBJECT : {
            const newList = [...state.list]
            newList[0].subject = action.payload
            return {
                ...state,
                list:newList
            }
        }
        default :
            return state
    }
}

module.exports = boardReducer

/*
    redux           
            순수 상태
    react-redux     
            컴포넌트 
            provider    (createStore에서 store를 최상단에 넣고 store만 꺼내 쓰겠다)
            useSelector (store.getState() 줄인거 / store 꺼내기 힘들어서 만든거)
            useDispatch (store.dispatch())
*/