import React, {useState} from 'react'
// import { useQuery } from 'react-query';
import styled, {css} from 'styled-components'
import data from "../../data.json"
import Log from './Log';
import { Link } from 'react-router-dom';



export default function Books({selectedCategory}: { selectedCategory: string }) {
   
    // const { data, isLoading, isError } = useQuery('jsonData', fetchData);

    // if (isLoading) {
    //   return <div>Loading...</div>;
    // }
  
    // if (isError || !data || !Array.isArray(data.books)) {
    //     return <div>Error fetching data</div>;
    //   }
    
   const [thisBook, setThisBook] = useState();
    const [logVisible, setLogVisible] = useState(false);

    const itemsPerPage = 6;
    const [currentPage, setCurrentPage] = useState(1);
 
    const filteredBooks = selectedCategory==="All" ? data.books.filter((book)=> !book.isBorrowed):
    data.books.filter((book) => {
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
                return ( <Link key={index} to="/log">
                        <Book onClick={() => {
                            setLogVisible(true) 
                            setThisBook(book);
                        }} >
                            <h1>
                                {book.title}
                            </h1>
                            <p>
                                {book.about}
                            </p>
                        </Book>
                    </Link>
                )
            }) }
        </Container>
        <Pagination>
                {Array.from({ length: totalPages }, (_, i) => (
                    <PageButton
                        key={i}
                        onClick={() => handlePageChange(i + 1)}
                        active={(currentPage === i + 1).toString()}
                    >
                        {i + 1}
                    </PageButton>
                ))}
        </Pagination>
        {logVisible && <Log thisBook={thisBook} />}
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
  

`
type TpageButton = {
    active : string
}
const PageButton = styled.button<TpageButton>`
    ${props => css`
    background: ${ eval(props.active)  ? '#ffffff;' : '#5d4e46'};
    color: ${  eval(props.active) ? '#5d4e46' : '#ffffff;'};

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
`}
   
    
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
    background-image: url(/bok.jpeg);
    background-repeat: no-repeat;
    background-position: top;
    background-size:100%;
    padding: 3rem;
    color: white;
    font-size: 2rem;
    font-weight: 600;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    gap: 3rem;
    text-decoration-line: underline;
    border-radius: 2rem;
    &:hover{
        box-shadow: 0 0 20px rgba(255, 255, 255, 0.867); 
    }
    
`