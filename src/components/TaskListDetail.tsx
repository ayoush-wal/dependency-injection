import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { TaskList } from '../types/types';
import { Container } from 'typescript-ioc';
import { TaskListService } from '../services/TaskListService';

const TaskListDetail: React.FC = () => {
  const { userId, projectId, taskListId } = useParams<{ userId: string; projectId: string; taskListId: string }>();
  const [taskList, setTaskList] = useState<TaskList | null>(null);
  const taskListService = Container.get(TaskListService);

  useEffect(() => {
    if (userId && projectId && taskListId) {
      taskListService.getTaskListById(Number(userId), Number(projectId), Number(taskListId)).then(setTaskList);
    }
  }, [userId, projectId, taskListId, taskListService]);

  if (!taskList) return <div>Loading...</div>;

  return (
    <div className="container mx-auto">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold">{taskList.name}</h1>
        <div>
          <button className="bg-red-500 text-white px-4 py-2 rounded mr-2">Delete</button>
          <button className="bg-green-500 text-white px-4 py-2 rounded">Update</button>
        </div>
      </div>
      <p>Date Created: {taskList.dateCreated}</p>
    </div>
  );
}

export default TaskListDetail;
