import React from 'react'
import { useState } from 'react';
import styled from 'styled-components';
import data from '../../data.json'
import Registration from './Registration';
import { Link } from 'react-router-dom';


export default function Log({thisBook}) {

    const [username, setUsername]=useState('');
    const [user, setUser] =useState<any>(null);
    const [password, setPassword]=useState('');
    // const[borrowedBooks, setBorrowedBooks] =useState('');
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    // const [bookId, setBookId]=useState('');
    const [message, setMessage] = useState('');
    const [registrationSuccess, setRegistrationSuccess] = useState(false);
    console.log(user)
    const handleLog = async () => {
         
        // const book = data.books.find((book) => book.id === borrowedBooks);
        // const Books = data.books.find(id);
        try {
          // Send a GET request to fetch user information
          const response = await fetch(`http://localhost:3032/user?username=${username}&password=${password}`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              // Add any other headers you need
            },
          });
        
          if (response.ok) {
            const userData = await response.json();
            console.log(userData);
            // setUser(userData);
            if (userData.length === 1) {
              // User found, perform your actions here
              setMessage('Take successful');
            // const user = userData[0]; // Assuming there's only one user with a given username and password
            // console.log(data.books, "mar")
            const updatedBorrowedBooks = userData && [...user.borrowedBooks, thisBook];
                console.log(userData.id, 'mariam')
            // Send a PUT request to update the user's borrowedBooks
            const updateResponse = await fetch(`http://localhost:3032/users/${userData.id}`, {
              method: 'PUT', // Use PUT to update the user's data
              headers: {
                'Content-Type': 'application/json',
                // Add any other headers you need
              },
              body: JSON.stringify({ ...user, borrowedBooks: updatedBorrowedBooks }),
            });
            console.log(updateResponse);
           

            } else {
              // No user found with the provided credentials
              setMessage('Invalid username or password');

            }
          } else {
            // Handle the response if it's not OK (e.g., server error)
            setMessage('An error occurred while logging in');
          }
        } catch (error) {
          // Handle any network or other errors
          setMessage('An error occurred');
        }
      };
      

    // const handleLog = () => {
    //     // Find the book in the data by ID
    //     const book = data.books.find((book) => book.id === bookId);
    
    //     // if (!book) {
    //     //   setMessage('Book not found');
    //     //   return;
    //     // }
    //     // console.log(setMessage)
    //     // Check if the book is borrowed
    //     // if (!book.isBorrowed) {
    //       // Check if the username and password match (simulated check for demonstration)
        
    //       if (username === 'yourUsername' && password === 'yourPassword') {
    //         // Simulate the return of the book by updating its status
    //         // book.isBorrowed = false;
    //         setMessage('Take successful');
    //       } else {
    //         setMessage('Invalid username or password');
    //       }
    //     // } else {
    //     //   setMessage('Book is not borrowed');
    //     // };
    // //   };

    //     }
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
        {/* onClick={() => setRegistrationSuccess(true)} */}
      </Link>
{/* 
        {registrationSuccess ? (
            <Message>Registration successful. You can now log in.</Message>
             ) : (
            <ButtonRegist onClick={<Registration/>}>Not yet registered? Register</ButtonRegist>
      )} */}
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

