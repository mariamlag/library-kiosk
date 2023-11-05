import React, {useState, useEffect} from 'react'
import {useQuery} from 'react-query';
import styled from 'styled-components'
import data from "../../data.json"
import Categories from './categories';
import Login from './login';

// const fetchData = async () => {
//     const response = await fetch('data.json');
//     if (!response.ok) {
//       throw new Error('Network response was not ok');
//     }
//     return response.json();
//   };

export default function Books({selectedCategory}: { selectedCategory: string }) {
    // const { data, isLoading, isError } = useQuery('jsonData', fetchData);

    // if (isLoading) {
    //   return <div>Loading...</div>;
    // }
  
    // if (isError) {
    //   return <div>Error fetching data</div>;
    // }
    
    
    const [loginVisible, setLoginVisible] = useState(false);

    const itemsPerPage = 6;
    const [currentPage, setCurrentPage] = useState(1);
 
    const filteredBooks = data.books.filter((book) => {
        return !book.isBorrowed && (!selectedCategory || book.category === selectedCategory);
      });
  
    const startIndex = (currentPage-1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentBooks = filteredBooks.slice(startIndex, endIndex);

    const totalPages = Math.ceil(filteredBooks.length / itemsPerPage);

    const handlePageChange = (newPage: React.SetStateAction<number>) => {
        setCurrentPage(newPage);
    }
    


  return (
    <Body>
            
          <Container>
            {currentBooks.map((book, index) => {
                return (
                    <Book key={index} onClick={() => setLoginVisible(true) } >
                        <h1>
                            {book.title}
                        </h1>
                        <p>
                            {book.about}
                        </p>
                    </Book>
                    
                )
            }) }
        </Container>
        <Pagination>
                {Array.from({ length: totalPages }, (_, i) => (
                    <PageButton
                        key={i}
                        onClick={() => handlePageChange(i + 1)}
                        active={currentPage === i + 1}
                    >
                        {i + 1}
                    </PageButton>
                ))}
        </Pagination>
        {loginVisible && <Login />}
    </Body>
  )
}

const Body = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;

`
const Pagination = styled.div`

    display: flex;
    justify-content: center;
    gap: 0.5rem;
    margin-top: 1rem;
    margin: 0 auto;
    width: 50rem;
    height: 5rem;
 
    align-items: center;

    border-radius: 2rem;
    border-style: none;
    background-color: white;;
    color: #ffffff;
  

`;
const PageButton = styled.button<{active: boolean}>`
    background: ${(active) => (active ? '#ffffff;' : '#5d4e46')};
    color: ${(active) => (active ? '#5d4e46' : '#ffffff;')};

    border-radius: 50%;
    width: 4rem;
    height: 4rem;
    font-size: 2rem;
    font-weight: 600;
    cursor: pointer;
    &:hover{
        color: #ffffff;
    background-color: #5d4e46;
    }
    
`;
const Container = styled.div`
    display: flex !important;
    flex-wrap: wrap !important;
    text-align: center;
    justify-content: center;
    padding: 5rem;
    gap: 2rem;
    margin-top: 3rem;
`
const Book = styled.div` 
    width: 30rem;
 
    background-image: url(/public/background.jpeg);
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-position: center;
    padding: 3rem;
    color: white;

    border-radius: 3rem;
    font-size: 2rem;
    font-weight: 600;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    gap: 3rem;
    text-decoration-line: underline;
    
`