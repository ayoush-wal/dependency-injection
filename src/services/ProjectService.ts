import { Inject, Singleton } from 'typescript-ioc';
import { ApiService } from './ApiService';
import { Project } from '../types/types';

@Singleton
export class ProjectService {
  private apiService: ApiService;
  constructor(@Inject apiService: ApiService) {
      this.apiService = apiService;
  }

  async getProjectsForUser(userId: number): Promise<Project[]> {
    return this.apiService.get<Project[]>(`/users/${userId}/projects`);
  }

  async getProjectById(userId: number, projectId: number): Promise<Project> {
    return this.apiService.get<Project>(`/users/${userId}/projects/${projectId}`);
  }

  async createProject(userId: number, project: Project): Promise<void> {
    await this.apiService.post<Project>(`/users/${userId}/projects`, project);
  }

  async updateProject(userId: number, project: Project): Promise<void> {
    await this.apiService.put<Project>(`/users/${userId}/projects/${project.id}`, project);
  }

  async deleteProject(userId: number, projectId: number): Promise<void> {
    await this.apiService.delete(`/users/${userId}/projects/${projectId}`);
  }
}
