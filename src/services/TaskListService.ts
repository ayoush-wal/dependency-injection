import { Inject, Singleton } from 'typescript-ioc';
import { ApiService } from './ApiService';
import { TaskList } from '../types/types';

@Singleton
export class TaskListService {
  private apiService: ApiService;
  constructor(@Inject apiService: ApiService) {
      this.apiService = apiService;
  }

  async getTaskListsForProject(userId: number, projectId: number): Promise<TaskList[]> {
    return this.apiService.get<TaskList[]>(`/users/${userId}/projects/${projectId}/taskLists`);
  }

  async getTaskListById(userId: number, projectId: number, taskListId: number): Promise<TaskList> {
    return this.apiService.get<TaskList>(`/users/${userId}/projects/${projectId}/taskLists/${taskListId}`);
  }

  async createTaskList(userId: number, projectId: number, taskList: TaskList): Promise<void> {
    await this.apiService.post<TaskList>(`/users/${userId}/projects/${projectId}/taskLists`, taskList);
  }

  async updateTaskList(userId: number, projectId: number, taskList: TaskList): Promise<void> {
    await this.apiService.put<TaskList>(`/users/${userId}/projects/${projectId}/taskLists/${taskList.id}`, taskList);
  }

  async deleteTaskList(userId: number, projectId: number, taskListId: number): Promise<void> {
    await this.apiService.delete(`/users/${userId}/projects/${projectId}/taskLists/${taskListId}`);
  }
}
