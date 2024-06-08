import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserList from './components/UserList';
import UserDetail from './components/UserDetail';
import ProjectDetail from './components/ProjectDetail';
import TaskListDetail from './components/TaskListDetail';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/users/:userId" element={<UserDetail />} />
        <Route path="/users/:userId/projects/:projectId" element={<ProjectDetail />} />
        <Route path="/users/:userId/projects/:projectId/taskLists/:taskListId" element={<TaskListDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
