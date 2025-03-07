import { useState } from "react";
import { Modal } from "./Modal.jsx"
import { InputField } from "./InputField.jsx"
import "../css/listsorting.css";

export default function ListSorting() {
    const [users, setUsers] = useState([
        {id: 3, name: "Alice Johnson", email: "alice@gmail.com", password: "abcdefg"},
        {id: 1, name: "John Doe", email: "johndoe@gmail.com", password: "12345678"},
        {id: 5, name: "Charlie White", email: "charlie@gmail.com", password: "qwerty"},
        {id: 2, name: "Emily Johnson", email: "emily.johnson@example.com", password: "87654321"},
        {id: 6, name: "Michael Thompson", email: "michael.thompson@example.com", password: "password123"},
        {id: 8, name: "Aram Petrosyan", email: "aram.petrosyan@example.com", password: "password123"},
        {id: 7, name: "David Miller", email: "david.miller@example.com", password: "password123"},
        {id: 11, name: "Chris Evans", email: "chris.evans@example.com", password: "password123"},
        {id: 9, name: "James Wilson", email: "james.wilson@example.com", password: "password123"},
        {id: 10, name: "Samuel Carter", email: "samuel.carter@example.com", password: "password123"},
        {id: 13, name: "Henry Brooks", email: "henry.brooks@example.com", password: "password123"},
        {id: 15, name: "Daniel Smith", email: "daniel.smith@example.com", password: "password123"},
        {id: 12, name: "Nathan Adams", email: "nathan.adams@example.com", password: "password123"},
        {id: 14, name: "Lucas Martinez", email: "lucas.martinez@example.com", password: "password123"}
    ]);
    
    const [isAscending, setIsAscending] = useState(true);
    const [isOpen, setIsOpen] = useState(false);
    const [newUser, setNewUser] = useState({ firstname: "", lastname: "", email: "", password: "" });
    const [darkMode, setDarkMode] = useState(false);
    const [activeBtn, setActiveBtn] = useState(false);
    
    function toggleDarkMode() {
        setDarkMode(!darkMode);
    }
    
    function handleInputChange(e) {
        const { name, value } = e.target;
        setNewUser((prev) => ({ ...prev, [name]: value }));
    }
    
    function isValidInput() {
        const nameRegex = /^[A-Z][A-z]{3,}$/;
        const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
        const passwordRegex = /^(?=(.*\d){3,})(?=(.*\w){5,}).*$/;
        
        if (!nameRegex.test(newUser.firstname) || !nameRegex.test(newUser.lastname)) {
            return false;
        }
        if (!emailRegex.test(newUser.email)) {
            return false;
        }
        return passwordRegex.test(newUser.password);
        
    }
    
    function addUser() {
        if (!isValidInput()) return;
        
        const newId = users.length ? Math.max(...users.map((u) => u.id)) + 1 : 1;
        const newUserData = {
            id: newId,
            name: `${newUser.firstname} ${newUser.lastname}`,
            email: newUser.email,
            password: newUser.password
        };
        
        setUsers([...users, newUserData]);
        closeModal();
    }
    
    function sortUsers(sortBy) {
        let sortedUsers = [...users];
        
        if (sortBy === 'id') {
            sortedUsers.sort((a, b) => isAscending ? a.id - b.id : b.id - a.id);
        } else if (sortBy === 'name') {
            sortedUsers.sort((a, b) => isAscending ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name));
        } else if (sortBy === 'email') {
            sortedUsers.sort((a, b) => isAscending ? a.email.localeCompare(b.email) : b.email.localeCompare(a.email));
        }
        
        setUsers(sortedUsers);
        setIsAscending(!isAscending);
    }
    
    function deleteUser(id) {
        setUsers(users.filter(user => user.id !== id));
    }
    
    function closeModal() {
        setIsOpen(false);
        setActiveBtn(false);
        setNewUser({ firstname: "", lastname: "", email: "", password: "" });
    }
    
    return (
        <div className={`table-container ${darkMode ? "dark-mode" : ""}`}>
            <div className="flex">
                <button className="btn toggle-theme" onClick={toggleDarkMode}>
                    {darkMode ? "Light Mode" : "Dark Mode"}
                </button>
                {isOpen && (
                    <Modal isOpen={isOpen} onClose={closeModal}>
                        <div>
                            <InputField label="First Name" type="text" name="firstname" value={newUser.firstname} onChange={handleInputChange} placeholder="First Name"   autoComplete="given-name"  />
                            <InputField label="Last Name" type="text" name="lastname" value={newUser.lastname} onChange={handleInputChange} placeholder="Last Name" autoComplete="family-name" />
                            <InputField label="Email" type="email" name="email" value={newUser.email} onChange={handleInputChange} placeholder="example@gmail.com"  autoComplete="email" />
                            <InputField label="Password" type="password" name="password" value={newUser.password} onChange={handleInputChange} placeholder="example123" autoComplete="new-password" />
                            <button className="btn submit" onClick={addUser}>Submit</button>
                        </div>
                    </Modal>
                )}
                <button
                    className={`btn crt ${activeBtn ? 'active' : ''}`}
                    onClick={() => {
                        setIsOpen(true);
                        setActiveBtn(!activeBtn);
                    }}
                >
                    Add user
                </button>
            
            </div>
            <table className="table">
                <thead className="table__head">
                <tr>
                    <th className="table__header table__sort" onClick={() => sortUsers("id")}>ID</th>
                    <th className="table__header table__sort" onClick={() => sortUsers("name")}>Name</th>
                    <th className="table__header table__sort" onClick={() => sortUsers("email")}>Email</th>
                    <th className="table__header">Password</th>
                    <th className="table__header"></th>
                </tr>
                </thead>
                <tbody className="table__body">
                {users.map((user) => (
                    <tr key={user.id} className="table__row">
                        <td className="table__cell">{user.id}</td>
                        <td className="table__cell">{user.name}</td>
                        <td className="table__cell">{user.email}</td>
                        <td className="table__cell">{user.password}</td>
                        <td className="table__cell">
                            <button onClick={() => deleteUser(user.id)} className="btn dlt">Delete</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}