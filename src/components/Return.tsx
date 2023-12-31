import { useState } from "react";
import styled, { css } from "styled-components";

export default function Return() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [bookId, setBookId] = useState("");
  const [message, setMessage] = useState("");

  const handleReturn = async () => {
    try {
      const response = await fetch(
        `http://localhost:3032/user?username=${username}&password=${password}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!bookId) {
        setMessage("Book not found");
        return;
      }

      if (response.ok) {
        const userData = await response.json();
        const user = userData[0];
        user.borrowedBooks;

        for (let i = 0; i < user.borrowedBooks.length; i++) {
          if (user.borrowedBooks[i].id === bookId) {
            setMessage("Return successful");
            await fetch(`http://localhost:3032/books/${bookId}`, {
              method: "PUT",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                ...user.borrowedBooks[i],
                isBorrowed: false,
              }),
            });

            const updatedBooks = [...user.borrowedBooks];
            console.log(updatedBooks[i], "returned book");
            updatedBooks.splice(i, 1);
            console.log(updatedBooks);
            await fetch(`http://localhost:3032/user/${user.id}`, {
              method: "PUT",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ ...user, borrowedBooks: updatedBooks }),
            });
            break;
          } else {
            setMessage("Invalid username or password");
          }
        }
      }
    } catch (error) {
      setMessage("An error occurred");
    }
  };

  return (
    <Main>
      <Book
        type="text"
        placeholder="Book-ID"
        value={bookId}
        onChange={(e) => setBookId(e.target.value)}
      ></Book>
      <Name
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      ></Name>
      <Password
        type="text"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      ></Password>
      <ButtonLog onClick={handleReturn}>Return</ButtonLog>
      <Message message={message}>{message}</Message>
    </Main>
  );
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
  background-position: center;
  margin: 0;
  background-size: cover;
`;
const Message = styled.div<Tmessage>`
  ${(props) => css`
    color: ${props.message === "Return successful" ? "#008005" : "#ff0000"};

    font-size: 3rem;
    font-weight: 550;
    width: fit-content;
    height: fit-content;
    border: 1px solid black;
    border-radius: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 1rem;
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.956);
  `}
  @media (max-width: 450px) {
    height: 4rem;
    font-size: 1.5rem;
  }
`;

const Input = styled.input`
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
  @media (max-width: 450px) {
    width: 25rem;
    height: 4rem;
    font-size: 1.5rem;
  }
`;
const Password = styled(Input)``;
const Name = styled(Input)``;
const Book = styled(Input)``;
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
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.956);
  cursor: pointer;
  @media (max-width: 450px) {
    width: 27rem;
    height: 4rem;
    font-size: 1.5rem;
  }
`;
