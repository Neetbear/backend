import axios from 'axios';
import { useState } from 'react';

const Index = () => {
    const [value, setValue] = useState();

    const onClickHandler = async () => {
        // alert('Click')
        // const result = await axios.get('http://localhost:3500')
        // console.log(result)
        // return -> promise object
        // http get 인자 2  주소, 헤더정보
        // http post 인자 3 주소, 바디, 헤더  
        const result = await axios.post('http://localhost:3500/getCookie')
    }

    return (
        <div>
            <button onClick={onClickHandler}>서버에게 요청</button>
        </div>
    )
}

export default Index