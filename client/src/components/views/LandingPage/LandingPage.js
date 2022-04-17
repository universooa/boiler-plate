import React,{useEffect} from 'react'
import axios from 'axios';
import { UNSAFE_NavigationContext, useNavigate } from 'react-router-dom';


function LandingPage(props) {
    const navigate=useNavigate();
    useEffect(()=>{
        axios.get('/api/hello')
        .then(response=>console.log(response.data))

    },[])
    const onClickHandler=()=>{
        axios.get('/api/users/logout')
        .then((response=>{
            console.log(response.data)
            if(response.data.success){
                navigate("/logout")
            }else{
                alert("logout 실패")
            }

        }))
    }
  return (
      <div style={{
          display: 'flex', justifyContent: 'center' , alignItems: 'center',
          width: '100%', height: '100vh'
      }}>
      <h2>시작 페이지</h2>
    <div>LandingPage</div>
    <button onClick={onClickHandler}>
        로그아웃
    </button>
    </div>
  )
}

export default LandingPage