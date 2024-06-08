import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { User } from '../types/types';
import { Container } from 'typescript-ioc';
import { UserService } from '../services/UserService';

const UserDetail: React.FC = () => {
  const { userId } = useParams<{ userId: string }>();
  const [user, setUser] = useState<User | null>(null);
  const userService = Container.get(UserService);

  useEffect(() => {
    if (userId) {
      userService.getUserById(Number(userId)).then(setUser);
    }
  }, [userId, userService]);

  if (!user) return <div>Loading...</div>;

  return (
    <div className="container mx-auto">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold">{user.name}</h1>
        <div>
          <button className="bg-red-500 text-white px-4 py-2 rounded mr-2">Delete</button>
          <button className="bg-green-500 text-white px-4 py-2 rounded">Update</button>
        </div>
      </div>
      <p>Email: {user.email}</p>
      <p>Username: {user.username}</p>
      <h2 className="mt-4 text-lg font-bold">Projects</h2>
      <ul>
        {user.projects.map(project => (
          <li key={project.id} onClick={() => { /* Navigate to project details */ }}>
            {project.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserDetail;
