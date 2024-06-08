import React, { useEffect, useState } from 'react';
import { User } from '../types/types';
import { Container } from 'typescript-ioc';
import { UserService } from '../services/UserService';

const UserList: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const userService = Container.get(UserService);

  useEffect(() => {
    userService.getUsers().then(setUsers);
  }, [userService]);

  return (
    <div className="container mx-auto">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold">Users</h1>
        <button className="bg-blue-500 text-white px-4 py-2 rounded">Create User</button>
      </div>
      <ul className="mt-4">
        {users.map(user => (
          <li key={user.id} className="p-4 border-b border-gray-300 flex justify-between items-center">
            <span>{user.username}</span>
            <button className="text-gray-500 hover:text-gray-700" onClick={() => { /* Navigate to user details */ }}>
              ...
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
