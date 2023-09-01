import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [data, setData] = useState([])
    const signup = () => {

        window.location.href = '/forms'
    }
    useEffect(() => {
        axios.get('http://localhost:9000/books').then((res) => {
            console.log(res.data);
            setData(res.data)
        })
    }, [])

    const signIn = () => {
       const data1= data.find(item=> item.email === email && item.password === password)
       console.log(data1);

        // data.map((item) => {
        //     console.log(item.email, item.password)
        //     console.log(email, password)
            if (data1 !== undefined) {
                sessionStorage.setItem("userdata", JSON.stringify(data1));
                navigate("/user")
               
            }
            else {
                alert('Email or Password is incorrect')
            }
        // })
    }
    return (
        <div>
            <div className='field'>
                <label>Email</label>
                <input
                    type="email"
                    name="email"
                    onChange={(e) => {
                        console.log(e.target.value)
                        setEmail(e.target.value)
                    }}
                    placeholder="Email"
                    required
                />
            </div>
            <div className='field'>
                <label>Password</label>
                <input
                    type="password"
                    name="password"
                    onChange={(e) => {
                        console.log(e.target.value)
                        setPassword(e.target.value)
                    }}
                    placeholder="Password"
                    required
                />
            </div>
            <button onClick={signup}>SignUP</button>
            <br />
            <button onClick={signIn}>SignIn</button>
        </div>

    )
}

export default Login