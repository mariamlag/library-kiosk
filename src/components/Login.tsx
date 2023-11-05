import {useState} from 'react'
import styled from 'styled-components'


export default function Login() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [username, setUsername]=useState('');
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [password, setPassword]=useState('');
    const handleLogin = async() => {
        try {
            // Send a request to your server for authentication
            const response = await fetch('/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });

            if (response.ok) {
                // Successful login
                console.log('Login successful');
            } else {
                // Login failed, handle error
                console.error('Login failed');
            }
        } catch (error) {
            console.error('Error during login:', error);
        }

      };
  return (
    <Log>
        <UserName type='text' placeholder='Username' 
        value={username} 
        onChange={(e) => setUsername(e.target.value)}>

        </UserName>
        <Password type='password' placeholder='Password' 
        value={password} 
        onChange={(e) => setPassword(e.target.value)}>

        </Password>
        <Button onClick={handleLogin}>Login</Button>
    </Log>
  )
}
// eslint-disable-next-line react-refresh/only-export-components
const Input = styled.input`
  display: flex;
    align-items: center;
    padding-left: 2rem;
    width: 50rem;
    height: 7rem;
    color: black;
    background-color: white;
    border-style: none;
    font-size: 3rem;
    margin: 0 auto;

`
// eslint-disable-next-line react-refresh/only-export-components
const UserName = styled(Input)`
  
`
// eslint-disable-next-line react-refresh/only-export-components
const Password = styled(Input)`
    
`
const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20rem;
    height: rem;
    color: black;
    background-color: white;
    border-style: none;
    font-size: 3rem;
    cursor: pointer;
    margin: 0 auto;
    border-radius: 1rem;
    margin-top: 1rem;

`
const Log = styled.div`
    align-items: center;
    text-align: center;
    position: absolute;
    backdrop-filter: blur(9px);
    width: 100%;
    height: 100%;
    padding-top: 60rem;

`
