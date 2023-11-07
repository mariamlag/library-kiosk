import  { useEffect, useState } from 'react'
import axios from 'axios';

export default function JsonServer() {
    const [data, setData] = useState([])
    useEffect(()=>{
        axios.get('http://localhost:3032/books')
        .then(res => setData(res.data))
        .catch(err => console.log(err))

    }, [])
  return (
    <div>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>UserName</th>
                    <th>Password</th>
                    <th>BorrowedBooks</th>
                </tr>
            </thead>
           <tbody>
       
            {data.map((user: any, i)=> {
                return <tr key={i}>
                        <td>{user?.id}</td>
                        <td>{user?.username}</td>
                        <td>{user?.password}</td>
                        <td>{user?.borrowedBooks}</td>
                </tr>
            })}
           </tbody>
        </table>
    </div>
  )
}
