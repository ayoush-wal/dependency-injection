import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Project } from '../types/types';
import { Container } from 'typescript-ioc';
import { ProjectService } from '../services/ProjectService';
import TaskListDetail from './TaskListDetail';

const ProjectDetail: React.FC = () => {
  const { userId, projectId } = useParams<{ userId: string; projectId: string }>();
  const [project, setProject] = useState<Project | null>(null);
  const projectService = Container.get(ProjectService);

  useEffect(() => {
    if (userId && projectId) {
      projectService.getProjectById(Number(userId), Number(projectId)).then(setProject);
    }
  }, [userId, projectId, projectService]);

  if (!project) return <div>Loading...</div>;

  return (
    <div className="container mx-auto">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold">{project.name}</h1>
        <div>
          <button className="bg-red-500 text-white px-4 py-2 rounded mr-2">Delete</button>
          <button className="bg-green-500 text-white px-4 py-2 rounded">Update</button>
        </div>
      </div>
      <p>Date Created: {project.dateCreated}</p>
      <h2 className="mt-4 text-lg font-bold">Task Lists</h2>
      <ul>
        {project.taskLists.map(taskList => (
          <li key={taskList.id} onClick={() => { /* Navigate to task list details */ }}>
            {taskList.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProjectDetail;
