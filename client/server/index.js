const express=require('express')
const app = express()
const port= 4000
const {auth} = require('./middleware/auth')
const {User} = require("./models/User");
const bodyParser = require('body-parser');
const mongoose = require('mongoose')
const config = require('./config/key')
const cookieParser= require('cookie-parser');
const { eq } = require('lodash');
//application/x-ww-form-urlencoded 
app.use(bodyParser.urlencoded({extended:true}));

//application/json
app.use(bodyParser.json());
app.use(cookieParser());

mongoose.connect(config.mongoURI
).then(()=> console.log("mongo db connected"))
.catch(err=>console.log(err))

app.get('/',(req,res)=>res.send('hello world 뚜아짱'))

app.post('/api/users/register',(req,res)=>{
    // 회원 가입할 때 필요한 정보들을 client에서 가져오면
    // 그것들을 데이터 베이스에 넣어준다.

    const user= new User(req.body)



    user.save((err,userInfo)=>{
        if(err){
            console.log(err)
             return res.json({success:false,err})
            }
        return res.status(200).json({
            success:true
        })

    })

 

        // 비밀번호가 같다면 토큰 생성
    })
    app.post('/api/users/login',(req,res)=>{
        // 요청된 이메일을 데이터베이스에서 있는지 찾는다
        User.findOne({email:req.body.email},(err,user)=>{
            if(!user){
                return res.json({
                    loginSuccess: false,
                    message : "제공된 이메일에 해당하는 유저가 없습니다."
                })
            }
      
        // 데이터 베이스에서 요청한 이메일이 있다면 비번 일치 확인
            console.log("이메일 있음")
        user.comparePassword(req.body.password,(err,isMatch)=>{
            if(!isMatch){
                return res.json({loginSuccess:false, message:"비밀번호가 틀렸습니다."})


            }
            console.log("비밀번호 맞음")
            user.generateToken((err,user)=>{
                if(err){
                    return res.status(400).send(err);

                }

                // 토큰을 저장한다 . 어디에 ? 쿠키, 로컬스토리지
                res.cookie("x_auth", user.token)
                .status(200)
                .json({loginSuccess:true, userId:user._id})

            })
        })  }   )
})



app.get('/api/users/auth',auth,(res,req)=>{
    //여기까지 미들웨어를 통과해 왔다는 얘기는 Authentication 이 True 라는 말.
    res.status(200).json({
        _id: req.user._id,
        isAdmin: req.user.role === 0 ? false : true,
        isAuth: true,
        email: req.user.email,
        name: req.user.name,
        lastname: req.user.lastname,
        role : role.user.role,
        image: req.user.image 
    })

})

app.get('/api/users/logout',auth,(req,res)=>{
    User.findOneAndUpdate({_id:req.user._id}),
    {token:""},
    (err,user)=>{
        if(err){
            console.log(err)
            return res.json({
                success:false,err
            })

        }
        console.log("logout 성공")
        return res.status(200).send({
            success:true
        })
    }
})

app.listen(port,()=> console.log(`example app listening on port ${port}!`))


