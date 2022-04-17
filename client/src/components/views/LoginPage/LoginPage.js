
import React,{useState} from 'react'
import {useDispatch} from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { loginUser } from '../../../_actions/user_actions'


function LoginPage(props) {
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const [Email,setEmail] = useState("")
    const [Password,setPassword] =useState("")
    const onEmailHandler = (event)=>{
        setEmail(event.currentTarget.value)
    }
    const onPasswordHandler= (event)=>{
        setPassword(event.currentTarget.value)
    }
    const onSubmitHandler= (event)=>{
        event.preventDefault();
        // console.log('Email',Email)
        // console.log('Password',Password)


        let body = {
            email: Email,
            password: Password
        }
        
        dispatch(loginUser(body))
        .then(response=>{
            if(response.payload.loginSuccess){
                console.log("로그인 성공!");
                navigate('/');
                // props.history.push('/')
            } else{
                console.log("로그인 실패!")
                alert('Error')
            }
        })
        
    }
  return (
    <div style={{
        display: 'flex', justifyContent: 'center' , alignItems: 'center',
        width: '100%', height: '100vh'
    }}>

    <form style={{ display: 'flex', flexDirection : 'column'}}
        onSubmit={onSubmitHandler}
    
    >
        <lable>
            Email
        </lable>
        <input type="email" value={Email} onChange={onEmailHandler}/>
        <lable>
            Password
        </lable>
        <input type="password" value={Password} onChange={onPasswordHandler}/>
        <br />
        <button>
            Login
        </button>
 
    </form>

  </div>)
}

export default LoginPage