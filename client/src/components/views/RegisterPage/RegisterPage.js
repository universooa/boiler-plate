
import React,{useState} from 'react'
import {useDispatch} from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { registerUser } from '../../../_actions/user_actions'


function RegisterPage(props) {
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const [Email,setEmail] = useState("")
    const [Name,setName] = useState("")
    const [ConfirmPassword,setConfirmPassword] = useState("")
    const [Password,setPassword] =useState("")

    const onEmailHandler = (event)=>{
        setEmail(event.currentTarget.value)
    }
    const onPasswordHandler= (event)=>{
        setPassword(event.currentTarget.value)
    }
    const onNameHandler= (event)=>{
        setName(event.currentTarget.value)
    }
    const onConfirmPasswordHandler= (event)=>{
        setConfirmPassword(event.currentTarget.value)
    }
    const onSubmitHandler= (event)=>{
        event.preventDefault();
        // console.log('Email',Email)
        // console.log('Password',Password)


        if(Password!==ConfirmPassword){
            return alert('비밀번호 확인 불일치')
        }
        let body = {
            email: Email,
            name: Name,
            password: Password

        }
        
        dispatch(registerUser(body))
        .then(response=>{
            if(response.payload.success){
                console.log("회원가입 성공!");
                navigate('/login');
                // props.history.push('/')
            } else{
                console.log("회원가입 실패!")
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
            <div>RegisterPage</div>
        <lable>
            Email
        </lable>
        <input type="email" value={Email} onChange={onEmailHandler}/>
        <lable>
            Name
        </lable>
        <input type="text" value={Name} onChange={onNameHandler}/>
        <lable>
            Password
        </lable>
        <input type="password" value={Password} onChange={onPasswordHandler}/>
        <lable>
            Confirm Password
        </lable>
        <input type="password" value={ConfirmPassword} onChange={onConfirmPasswordHandler}/>
        <br />
        <button>
            Login
        </button>
 
    </form>

  </div>
  )
}

export default RegisterPage