import { Inject, Singleton } from 'typescript-ioc';
import { ApiService } from './ApiService';
import { User } from '../types/types';

@Singleton
export class UserService {
  private apiService: ApiService;
  constructor(@Inject apiService: ApiService) {
      this.apiService = apiService;
  }

  async getUsers(): Promise<User[]> {
    return this.apiService.get<User[]>('/users');
  }

  async getUserById(userId: number): Promise<User> {
    return this.apiService.get<User>(`/users/${userId}`);
  }

  async createUser(user: User): Promise<void> {
    await this.apiService.post<User>('/users', user);
  }

  async updateUser(user: User): Promise<void> {
    await this.apiService.put<User>(`/users/${user.id}`, user);
  }

  async deleteUser(userId: number): Promise<void> {
    await this.apiService.delete(`/users/${userId}`);
  }
}
