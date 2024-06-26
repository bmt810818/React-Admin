import { useState } from "react"
import { useLogin, useNotify } from "react-admin"

const Login = ({ theme }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const login = useLogin()
  const notify = useNotify()

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    login({ email, password }).catch(() => 
      notify('Invalid email or password')
    )
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
          name="email"
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
      />
    </form>
  )
}

export default Login