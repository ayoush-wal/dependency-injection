import axios from 'axios';

export class ApiService {
  public async get<T>(url: string): Promise<T> {
    const response = await axios.get<T>(`http://localhost:3500${url}`);
    return response.data;
  }
  
  public async post<T>(url: string, data: T): Promise<void> {
    await axios.post(`http://localhost:3500${url}`, data);
  }

  public async put<T>(url: string, data: T): Promise<void> {
    await axios.put(`http://localhost:3500${url}`, data);
  }

  public async delete(url: string): Promise<void> {
    await axios.delete(`http://localhost:3500${url}`);
  }
}
