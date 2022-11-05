import { useState } from "react"

export default function Login() {
  const [ loginForm, setLoginForm ] = useState({email:"", password:""})
  const [ registerForm, setRegisterForm ] = useState({email:"", password:""})

  const handleLogin = () => {
    axios
      .post('/api/login', loginForm)
      .then(res => {
        console.log(res.data)
      })
  }

  const handleRegister = () => {
    axios
      .post('/api/register', registerForm)
      .then(res => {
        console.log(res.data)
      })
  }

  return (
    <>
      <h2>login</h2>
      <input
        type="email"
        value={loginForm.email}
        onClick={(e) => setLoginForm({...loginForm, email: e.target.value})}
      />
      <input
        type="password"
        value={loginForm.password}
        onClick={(e) => setLoginForm({...loginForm, password: e.target.value})}
      />
      <button
        onClick={handleLogin}
      >LOGIN</button>
      <h2>register</h2>
      <input
        type="email"
        value={registerForm.email}
        onClick={(e) => setRegisterForm({...registerForm, email: e.target.value})}
      />
      <input
        type="password"
        value={registerForm.password}
        onClick={(e) => setRegisterForm({...registerForm, password: e.target.value})}
      />
      <button
        onClick={handleRegister}
      >REGISTER</button>
    </>
  )
}
