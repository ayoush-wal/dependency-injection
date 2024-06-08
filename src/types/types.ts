export interface TaskList {
    id: number;
    name: string;
    dateCreated: string;
  }
  
  export interface Project {
    id: number;
    name: string;
    dateCreated: string;
    taskLists: TaskList[];
  }
  
  export interface User {
    id: number;
    name: string;
    email: string;
    username: string;
    projects: Project[];
  }
  