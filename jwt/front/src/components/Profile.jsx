const Profile = ({onClick}) => {

    const handleClick = e => {
        e.preventDefault()
        onClick()
    } // 비구조화 할당문 -> 상태끌어올리기

    return (
        <>
            <h2>회원정보</h2>
            XXX님 환영합니다. <a href="#" onClick={handleClick}>로그아웃</a>
        </>
    ) 
}

export default Profile