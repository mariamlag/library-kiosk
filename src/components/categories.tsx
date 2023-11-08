/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import data from "../../data.json";
import styled from "styled-components";
import Books from "./Books";

type Book = {
  title: string;
  id: string;
  category: string;
  isBorrowed: boolean;
};

type CategoriesProps = {
  onSelectCategory: (category: string) => void;
  selectedCategory: string;
};

function Categories({ onSelectCategory, selectedCategory }: CategoriesProps) {
  const categories: string[] = data.books.reduce((acc, book) => {
    if (book.category && !acc.includes(book.category)) {
      acc.push(book.category);
    }
    return acc;
  }, []);

  const [showAvailableBooks, setShowAvailableBooks] = useState(false);

  const toggleBooks = () => {
    setShowAvailableBooks(!showAvailableBooks);
  };

  return (
    <Container>
      <Ul>
        {categories.map((category) => (
          <Li key={category} onClick={() => onSelectCategory(category)}>
            {category}
          </Li>
        ))}
        <Li onClick={() => onSelectCategory("All")}>All</Li>
      </Ul>
      {showAvailableBooks && <Books showAvailableBooks={showAvailableBooks} />}
    </Container>
  );
}

export default Categories;

const Li = styled.li`
  list-style-type: none;
  cursor: pointer;

  width: 30rem;
  background-image: url(/texture.jpeg);

  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  padding: 3rem;
  color: #5d4e46;

  border-radius: 3rem;
  font-size: 2.5rem;
  font-weight: 600;
  cursor: pointer;
  &:hover {
    color: white;
    background-image: url(/.jpeg);
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.867);
  }
`;
const Ul = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;
  color: #5d4e46;
`;
const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
