import { useState } from "react";
import styled from "styled-components";

export default function Registration() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [registrationSuccess, setRegistrationSuccess] = useState(false);
  const handleRegister = async () => {
    if (
      password.match(/[a-z]/) &&
      password.match(/\d/) &&
      username.trim() !== ""
    ) {
      setRegistrationSuccess(true);
      const userData = { username, password, borrowedBooks: [] };
      const response = await fetch("http://localhost:3032/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });
      console.log(response.json());
    } else {
      setRegistrationSuccess(false);
      alert(
        "Please ensure your password contains at least one lowercase letter, one number, and a non-empty username."
      );
    }
  };

  return (
    <Log>
      <UserName
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      ></UserName>
      <Password
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      ></Password>

      <Button onClick={handleRegister}>Register</Button>
      {registrationSuccess ? (
        <Succ>Registration successful. You can now log in.</Succ>
      ) : (
        <P></P>
      )}
    </Log>
  );
}
const P = styled.div``;
const Succ = styled.div`
  color: #ffffff;
  font-size: 2.5rem;
  background-color: #4bab51;
  padding: 1rem;
  border-radius: 1rem;
  margin-top: 1rem;
  @media (max-width: 375px) {
    font-size: 1.5rem;
  }
`;

const Log = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-image: url(/natureback.jpeg);
  background-repeat: no-repeat;
  background-position: center;
  margin: 0;
  background-size: cover;
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
  border: 2px solid black;
  margin: 0 auto;
  border-radius: 1rem;
  margin-top: 1rem;
  @media (max-width: 375px) {
    width: 25rem;
    height: 4rem;
    font-size: 1.5rem;
    border: 1px solid black;
  }
`;
const Password = styled(Input)``;
const UserName = styled(Input)``;

const Button = styled.button`
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
  cursor: pointer;
  @media (max-width: 375px) {
    width: 27rem;
    height: 4rem;
    font-size: 1.5rem;
    border: 1px solid black;
  }
`;
