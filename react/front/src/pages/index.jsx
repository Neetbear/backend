import axios from 'axios';

const Index = () => {
    const onClickHandler = async () => {
        // alert('Click')
        const result = await axios.get('http://localhost:3500')
        console.log(result)
        // return -> promise object
        // http get 인자 2  주소, 헤더정보
        // http post 인자 3 주소, 바디, 헤더  
    }

    return (
        <div>
            <button onClick={onClickHandler}>서버에게 요청</button>
        </div>
    )
}

export default Index