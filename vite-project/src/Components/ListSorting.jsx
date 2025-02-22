import {useState} from "react";
import "../css/listsorting.css";

export default function ListSorting() {
    const [users, setUsers] = useState([
        {id: 3, name: "Alice Johnson", email: "alice@gmail.com", password: "abcdefg"},
        {id: 1, name: "John Doe", email: "johndoe@gmail.com", password: "12345678"},
        {id: 5, name: "Charlie White", email: "charlie@gmail.com", password: "qwerty"},
        {id: 2, name: "Jane Smith", email: "jane@gmail.com", password: "87654321"},
        {id: 6, name: "Bob Brown", email: "bob@gmail.com", password: "password123"},
        {id: 8, name: "Bob Brown", email: "bob@gmail.com", password: "password123"},
        {id: 7, name: "Bob Brown", email: "bob@gmail.com", password: "password123"},
        {id: 11, name: "Bob Brown", email: "bob@gmail.com", password: "password123"},
        {id: 9, name: "Bob Brown", email: "bob@gmail.com", password: "password123"},
        {id: 10, name: "Bob Brown", email: "bob@gmail.com", password: "password123"},
        {id: 13, name: "Bob Brown", email: "bob@gmail.com", password: "password123"},
        {id: 15, name: "Bob Brown", email: "bob@gmail.com", password: "password123"},
        {id: 12, name: "Bob Brown", email: "bob@gmail.com", password: "password123"},
        {id: 14, name: "Bob Brown", email: "bob@gmail.com", password: "password123"},
    ]);
    
    const [isAscending, setIsAscending] = useState(true);
    
    function toggleSort() {
        const sortedUsers = [...users].sort((a, b) =>
            isAscending ? a.id - b.id : b.id - a.id
        );
        setUsers(sortedUsers);
        setIsAscending(!isAscending);
    }
    
    function deleteUser(id) {
        setUsers(users.filter(user => user.id !== id));
    }
    
    return (
        <div className="table-container">
            <div className="flex">
                <button className="btn crt">Add user</button>
            </div>
            <table className="table">
                <thead className="table__head">
                <tr>
                    <th className="table__header table__sort" onClick={toggleSort}>ID</th>
                    <th className="table__header">Name</th>
                    <th className="table__header">Email</th>
                    <th className="table__header">Password</th>
                    <th className="table__header"></th>
                </tr>
                </thead>
                <tbody className="table__body">
                {users.map(user => (
                    <tr key={user.id} className="table__row">
                        <td className="table__cell">{user.id}</td>
                        <td className="table__cell">{user.name}</td>
                        <td className="table__cell">{user.email}</td>
                        <td className="table__cell">{user.password}</td>
                        <td className="table__cell">
                            <button onClick={() => {
                                deleteUser(user.id)
                            }} className="btn dlt">delete
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}
