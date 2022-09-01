import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Button, Container, Form } from 'react-bootstrap';
import { useAuth } from '../context/AuthContext';

const Login = () => {
  const router = useRouter()
  const { user, login, googleSignIn } = useAuth()
  const [data, setData] = useState({
    email: '',
    password: ''
  })

  useEffect(() => {
    if (user) {
      router.push('/dashboard')
    }
  })

  const handleLogin = async (e: any) => {
    e.preventDefault()

    try {
      console.log(await login(data.email, data.password))

    } catch (error) {
      console.log(error)
    }
  }

  const handleGoogleSignIn = () => {
    googleSignIn()

  }

  return (
    <div
      style={{
        width: '40%',
        margin: 'auto',
      }}
    >
      <h1 className="text-center my-3 ">Login</h1>
      <Form onSubmit={handleLogin}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            onChange={(e: any) =>
              setData({
                ...data,
                email: e.target.value,
              })
            }
            value={data.email}
            required
            type="email"
            placeholder="Enter email"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            onChange={(e: any) =>
              setData({
                ...data,
                password: e.target.value,
              })
            }
            value={data.password}
            required
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Login
        </Button>
        <Button className="ms-2" variant="danger" onClick={handleGoogleSignIn}>
          SignIn with Google
        </Button>
      </Form>
    </div>
  )
}

export default Login