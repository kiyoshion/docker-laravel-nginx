import React, { useState } from "react"
import { CONSTS } from '../consts'
import axios from '../lib/axios'

export default function Login() {
  const [ loginForm, setLoginForm ] = useState({email:"", password:""})
  const [ registerForm, setRegisterForm ] = useState({email:"", password:""})

  const handleLogin = () => {
    try {
      axios.get(CONSTS.TOKEN_URL, {
        withCredentials: true
      }).then(() => {
        axios
          .post(CONSTS.POST_LOGIN_URL, loginForm)
          .then(res => {
            console.log(res.data)
          })
        })
      } catch (e) {}
  }

  const handleRegister = () => {
    try {
      axios.get(CONSTS.TOKEN_URL, {
        withCredentials: true
      }).then(() => {
        axios
          .post(CONSTS.POST_REGISTER_URL, {
            name: getNewName(),
            email: registerForm.email,
            password: registerForm.password,
            password_confirmation: registerForm.password,
          })
          .then(res => {
            console.log(res.data)
          })
      })
    } catch (e) {}
  }

  const getNewName = (): string => (registerForm.email.slice(0, 2) + ("0000000" + Math.floor(Math.random() * 10000000)).slice(-7))

  return (
    <div>
      <h2>login</h2>
      <input
        type="email"
        value={loginForm.email}
        onChange={(e) => setLoginForm({...loginForm, email: e.target.value})}
      />
      <input
        type="password"
        value={loginForm.password}
        onChange={(e) => setLoginForm({...loginForm, password: e.target.value})}
      />
      <button
        onClick={handleLogin}
      >LOGIN</button>
      <h2>register</h2>
      <input
        type="email"
        value={registerForm.email}
        onChange={(e) => setRegisterForm({...registerForm, email: e.target.value})}
      />
      <input
        type="password"
        value={registerForm.password}
        onChange={(e) => setRegisterForm({...registerForm, password: e.target.value})}
      />
      <button
        onClick={handleRegister}
      >REGISTER</button>
    </div>
  )
}
