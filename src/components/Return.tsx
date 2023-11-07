import React from 'react'
import { useState } from 'react';
import styled from 'styled-components';
import data from '../../data.json'


export default function Return() {

    const [username, setUsername]=useState('');

    const [password, setPassword]=useState('');
    const [bookId, setBookId]=useState('');
    const [message, setMessage] = useState('');

    const handleReturn = () => {
        // Find the book in the data by ID
        const book = data.books.find((book) => book.id === bookId);
    
        if (!book) {
          setMessage('Book not found');
          return;
        }
        console.log(setMessage)
        // Check if the book is borrowed
        if (book.isBorrowed) {
          // Check if the username and password match (simulated check for demonstration)
          if (username === 'yourUsername' && password === 'yourPassword') {
            // Simulate the return of the book by updating its status
            book.isBorrowed = false;
            setMessage('Return successful');
          } else {
            setMessage('Invalid username or password');
          }
        } else {
          setMessage('Book is not borrowed');
        }
      };
  return (
    <Main>
        <Book   type='text' 
            placeholder='Book-ID' 
            value={bookId} 
            onChange={(e) => setBookId(e.target.value)}>

        </Book>
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
        <ButtonLog  onClick={handleReturn}>submit</ButtonLog>
        <Message>{message}</Message>
    </Main>
  )
}


const Main = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-image: url(/regist.jpeg);
    background-repeat: no-repeat;
    background-position:center;
    margin: 0;
    background-size: cover;
    
`
const Message = styled.div`
    font-size: 3rem;
    color: #ff0000;
    font-weight: 550;
    width: fit-content;
    height: fit-content;
    /* background-color: #0000009a; */
    border: 1px solid red;
    border-radius: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 1rem;
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.956); 
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
    border: 2px solid transparent;
    margin: 0 auto;
    border-radius: 1rem;
    margin-top: 1rem;
    box-shadow: 0 0 20px rgba(0, 166, 255, 0.956); 
`
const Password = styled(Input)`
`
const Name = styled(Input)`
`
const Book = styled(Input)`
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
    border: 2px solid transparent;
    margin-top: 1rem;
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.956); `

