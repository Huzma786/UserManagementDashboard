import React, { useState, useEffect } from 'react';
import { getUsers, deleteUser } from '../services/api';
import UserForm from './UserForm';
import ErrorAlert from './ErrorAlert';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState('');
  const [editingUser, setEditingUser] = useState(null);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await getUsers();
      setUsers(response.data);
    } catch (err) {
      setError('Failed to fetch users');
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteUser(id);
      setUsers(users.filter((user) => user.id !== id));
    } catch {
      setError('Failed to delete user');
    }
  };

  const handleAddOrEdit = async (user) => {
    if (editingUser) {
      // Update user logic here (mock PUT request)
    } else {
      // Add user logic here (mock POST request)
    }
    setShowForm(false);
    fetchUsers();
  };

  return (
    <div>
      <h1>User Management</h1>
      <ErrorAlert message={error} />
      <button onClick={() => { setEditingUser(null); setShowForm(true); }}>Add User</button>
      {showForm && (
        <UserForm
          user={editingUser}
          onSubmit={handleAddOrEdit}
          onCancel={() => setShowForm(false)}
        />
      )}
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Department</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.email}</td>
              <td>{user.department}</td>
              <td>
                <button onClick={() => { setEditingUser(user); setShowForm(true); }}>Edit</button>
                <button onClick={() => handleDelete(user.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;