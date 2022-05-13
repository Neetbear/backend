import axios from 'axios'

/*
    API 설계가 되어있으면.. 
    프론트 먼저 만들어요?
    id, title, content, date, hit
    백을 먼저 만들어요?
    idx, subject, memo, regist, hit

    POST /user/login {userid, userpw} : cookie 생성
    back 3500
*/

const Login = (props) => {

    const handleSubmit = async e =>{
        e.preventDefault()

        const { userid, userpw } = e.target
        try {
            const result = await axios.post('http://localhost:3500/user/login', {
                userid:userid.value,
                userpw:userpw.value
            },{
                withCredentials:true,
            }) // return promise .then async await
            // console.log(result.data.result)
            // /*
            //     {
            //         response:null,
            //         error:''
            //     }
            // */
            console.log(result.data)
            const {response, error} = result.data
            console.log(response, error)
            if(error !== null) return alert(error)
            
            props.onClick()
        } catch (e) {
            alert('접속불량')
        }        
        // props.onClick() // 백엔드에서 결과가 도착했을때. 응답이 왔을때
    }
    // preventDefault() html 고유기능 모두 멈추기 // <a href="http://naver.com" onClick={handleSubmit}> ㅎㅎㅎㅎ</a> 안됨
    return (
        <>
            <h2>로그인 화면</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="userid" />
                <input type="password" name="userpw" />
                <input type="submit" value="로그인" />                
            </form>
        </>
    )
}

export default Login