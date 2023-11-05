/* eslint-disable @typescript-eslint/no-unused-vars */
import styled from 'styled-components'
import { useState, useEffect } from 'react';
import Books from './Books';
import Categories from './categories';


export default function Landing() {

    const [showAvailableBooks, setShowAvailableBooks] = useState(false);

    const toggleBooks = () => {
      setShowAvailableBooks(!showAvailableBooks);
    };
    const [selectedCategory, setSelectedCategory] = useState('');

    // useEffect(() => {
    //     fetch('https://www.googleapis.com/books/v1/volumes?q=search_query')
    //     .then((response) => response.json())
    //     .then((data) => {
    //       console.log(data.items[0].volumeInfo.title);
    //     })
    //   }, []);
      
  return (
    <Main>
            <Borrow onClick={toggleBooks}>
                Borrow a Book
            </Borrow>
            <Return>
                Return a Book
            </Return>
            {showAvailableBooks && (
                <>
                    <Categories onSelectCategory={setSelectedCategory} selectedCategory={selectedCategory} />
                    {selectedCategory && <Books  selectedCategory={selectedCategory}/>}
             </>
)}
    </Main>
  )
}

const Main = styled.div`
height: 100vh;
display: flex;
flex-direction: column;
padding-top: 10rem;
`
const SharedButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.9rem 10rem;
  font-size: 3rem;
  font-weight: 600;
  border-radius: 2rem;
  border-style: none;
  cursor: pointer;
  background-color: #ffffff;
        color: #5d4e46;
    &:hover{
        color: #ffffff;
    background-color: #5d4e46;
    }
`;
const Return = styled(SharedButton)`
    margin-top: 2rem;
    width: 50rem;
    margin: 3rem auto;
    height: fit-content;
`
const Borrow = styled(SharedButton)`  
  width: 50rem;
  height: fit-content;
  margin: 0 auto;
`
