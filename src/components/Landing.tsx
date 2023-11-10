import styled from "styled-components";
import { useState } from "react";
import Books from "./Books";
import Categories from "./categories";
import { Link } from "react-router-dom";

export default function Landing() {
  const [showAvailableBooks, setShowAvailableBooks] = useState(false);

  const toggleBooks = () => {
    setShowAvailableBooks(!showAvailableBooks);
  };
  const [selectedCategory, setSelectedCategory] = useState("");

  const [returnVisible, setReturnVisible] = useState(false);
  const toggleReturn = () => {
    setReturnVisible(!returnVisible);
  };
  return (
    <Main>
      <Borrow onClick={toggleBooks}>Borrow a Book</Borrow>
      <Link to="/return" className="link-no-underline">
        <Returnn onClick={toggleReturn}>Return a Book</Returnn>
      </Link>

      {showAvailableBooks && (
        <>
          <Categories
            onSelectCategory={setSelectedCategory}
            selectedCategory={selectedCategory}
          />
          {selectedCategory && <Books selectedCategory={selectedCategory} />}
        </>
      )}
    </Main>
  );
}

const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10rem;
  background-position: center;
  background-size: cover;
  @media (max-width: 375px) {
    margin: 3rem;
  }
`;
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
  box-shadow: 0 0 5px rgba(124, 222, 255, 0.867);

  &:hover {
    color: #ffffff;
    background-color: #5d4e46;
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.867);
  }

  @media (max-width: 375px) {
    font-size: 1rem;
    padding: 0.9rem 5rem;
  }
`;
const Returnn = styled(SharedButton)`
  margin-top: 2rem;
  width: 50rem;
  margin: 3rem auto;
  height: fit-content;
  text-decoration: none;
  @media (max-width: 375px) {
    width: 25rem;
  }
`;
const Borrow = styled(SharedButton)`
  width: 50rem;
  height: fit-content;
  @media (max-width: 375px) {
    width: 25rem;
  }
`;
