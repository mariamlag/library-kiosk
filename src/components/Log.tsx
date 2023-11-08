import { useState } from 'react';
import styled from 'styled-components';
import Registration from './Registration';
import { Link, useLocation } from 'react-router-dom';

// interface LogProps {
//     thisBook?: {
//         title: string;
//         id: string;
//         category: string;
//         isBorrowed: boolean;
//       };
//   }
  
export default function Log() {
    const location = useLocation();
    console.log(location.state);
    const [username, setUsername]=useState('');
    const [password, setPassword]=useState('');
    const [message, setMessage] = useState('');
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [registrationSuccess] = useState(false);

    const handleLog = async () => {
         
        try {

          const response = await fetch(`http://localhost:3032/user?username=${username}&password=${password}`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
          });
        
          if (response.ok) {
            const userData = await response.json();

            if (userData.length === 1) {
              setMessage('Take successful');
              const updatedBorrowedBooks = [...userData[0].borrowedBooks, {...location.state.key, isBorrowed: true}];

              const updateResponse = await fetch(`http://localhost:3032/user/${userData[0].id}`, {
                method: 'PUT', 
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({ ...userData[0], borrowedBooks: updatedBorrowedBooks }),
              });
                console.log(updateResponse);

                const updateBooks = await fetch(`http://localhost:3032/books/${location.state.key.id}`, {
                method: 'PUT', 
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({ ...location.state.key, isBorrowed: true }),
              });
              console.log(updateBooks);

              } else {
                setMessage('Invalid username or password');
              }

          } else {
            setMessage('An error occurred while logging in');
          }
        } catch (error) {
          // Handle any network or other errors
          setMessage('An error occurred');
        }
      };
      
  return (
    <Main>
        <Name   type='text' 
            placeholder='Username' 
            value={username} 
            onChange={(e) => setUsername(e.target.value)}>

        </Name>
        <Password  type='text' 
            placeholder='Password' 
            value={password} 
            onChange={(e) => setPassword(e.target.value)}>

        </Password>
        <ButtonLog  onClick={handleLog}>submit</ButtonLog>
        
      <Link to="/registration" className="link-no-underline">
        <ButtonRegist >Not yet registered? Register</ButtonRegist>
      </Link>
        <Message>{message}</Message>
        {registrationSuccess && <Registration/>}
    </Main>
  )
}
const ButtonRegist = styled.button`
  display: flex;
    align-items: center;
    padding-left: 2rem;
    width: 52rem;
    height: 5rem;
    color: #808080;
    background-color: #ffffff;
    border-style: none;
    font-size: 2.5rem;
    margin: 0 auto;
    border-radius: 1rem;
    margin-top: 1rem;
    cursor: pointer;
`
const Main = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-image: url(/background-img.jpeg);
    background-repeat: no-repeat;
    background-position: 100%;
    margin: 0;
    background-size: 100%;
    
`
const Message = styled.div`
    font-size: 3rem;
    color: #ff0000;
    font-weight: 550;
    width: fit-content;
    height: fit-content;
    background-color: #0000009a;
    border: 1px solid red;
    border-radius: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 1rem;
`
const Input= styled.input`
      display: flex;
    align-items: center;
    padding-left: 2rem;
    width: 50rem;
    height: 7rem;
    color: #5494a6;
    background-color: white;
    border-style: none;
    font-size: 3rem;
    border: 2px solid black;
    margin: 0 auto;
    border-radius: 1rem;
    margin-top: 1rem;
    box-shadow: 0 0 20px rgba(177, 253, 249, 0.867); 
`
const Password = styled(Input)`
`
const Name = styled(Input)`
`
const ButtonLog = styled.button`
 display: flex;
    align-items: center;
    padding-left: 2rem;
    width: 52rem;
    height: 7rem;
    color: #ffffff;
    background-color: #5494a6;
    border-style: none;
    font-size: 3rem;
    margin: 0 auto;
    border-radius: 1rem;
    border: 2px solid black;
    margin-top: 1rem;
    box-shadow: 0 0 20px rgba(177, 253, 249, 0.867); 
    cursor: pointer;
`

