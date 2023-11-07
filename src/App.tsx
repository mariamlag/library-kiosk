import Landing from "./components/Landing"
import Return from "./components/Return";
// import Login from './components/Login';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Log from "./components/Log";
import Registration from "./components/Registration";
// import { useQuery } from 'react-query';



// const fetchData = async () => {
//     const response = await fetch('../../data.json');
//     if (!response.ok) {
//       throw new Error('Network response was not ok');
//     }
//     return response.json();
//   }; 
// export const MyContext = createContext(null);

function App() {

    // const { data, isLoading, isError } = useQuery('jsonData', fetchData);

    // if (isLoading) {
    //   return <div>Loading...</div>;
    // }
  
    // if (isError) {
    //   return <div>Error fetching data</div>;
    // }

  return (
    <Router>
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/return" element={<Return />} />
      <Route path="/log" element={<Log />}/>
      <Route path="/registration" element={<Registration />} />
    </Routes>
  </Router>

)  
  } 
export default App
